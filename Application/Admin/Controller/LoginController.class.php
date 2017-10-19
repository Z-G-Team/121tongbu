<?php
namespace Admin\Controller;
use Think\Controller;
/**
 *	后台登录模块
 *	@author keg 1067547248@qq.com
 *	
 */
class LoginController extends Controller {
	//后台登录
    public function index(){
        $this->assign('pageId', 'login');
        $this->display();
    }

    //登录操作
    public function login(){
    	if(IS_POST){
    		$username = I('username', '');
    		$password = I('password', '');
    		//用户名密码啊登录
    		if(!$username || !$password){
    			$this->ajaxReturn(array('status'=>0, 'info'=>'登录密码和用户名输入有误'));
    		}

    		//查询用户信息
    		$User = D('user');
    		$info = $User->where('username="' . $username . '"')->find();

    		//用户不存在
    		if(!$info){
    			$this->ajaxReturn(array('status'=>0, 'info'=>'用户不存在'));
    		}

            //用户是否被禁用
            if($info['status']==0){
                $this->ajaxReturn(array('status'=>0, 'info'=>'用户被禁用，请联系管理员'));
            }

    		//用户密码错误
    		if(think_decrypt($info['password']) != $password){
    			$this->ajaxReturn(array('status'=>0, 'info'=>'登录密码不匹配'));
    		}

    		//登录成功，操作session
    		$this->setSession($info);

    		//更新登录信息
    		$this->updateInfo($info);

    		$this->ajaxReturn(array('status'=>1, 'info'=>'登录成功'));
    	}
    }

    //设置session
    public function setSession($info){
    	if(!$info){
    		return false;
    	}
    	session('A_ID', $info['id']);
        session('SYS', $info['sysuser']); //如果是公司超级管理员，取货权限的时候获取公司所有权限
        session('USERNAME', $info['username']); //登陆用户名
    }

    //更新登录信息
    public function updateInfo($info){
    	if(!$info){
    		return false;
    	}
    	//更新信息
    	$User = D('user');
    	$data['last_login_time'] = $info['now_login_time'];
		$data['last_login_ip'] = $info['now_login_ip'];
    	$data['now_login_time'] = date('Y-m-d H:i:s');
		$data['now_login_ip'] = get_client_ip();
		$data['login_times'] = $info['login_times'] + 1;
		$data['id'] = $info['id'];
		$User->save($data);
    }

    //退出登录
    public function logout(){
    	//清空session
    	session('A_ID', NULL);
        session('SYS', NULL); //如果是公司超级管理员，取货权限的时候获取公司所有权限
        session('USERNAME', NULL); 
    	//跳转到登录页面
    	redirect(U('Login/index'));
    }

}