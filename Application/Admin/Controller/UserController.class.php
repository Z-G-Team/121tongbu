<?php
namespace Admin\Controller;
use Admin\Controller\Base;
/**
 *	用户管理
 *	@author keg 1067547248@qq.com
 *	
 */
class UserController extends Base {

    public function index(){
    	$User = M('User');
        $map = array();
        $map['dels'] = 0;
        $role = I('role', 0);
        $role && $map['role'] = $role;

    	$count      = $User->where($map)->count();// 查询满足要求的总记录数
		$Page       = new \Think\Page($count,20);// 实例化分页类 传入总记录数和每页显示的记录数(25)
		$show       = $Page->show();// 分页显示输出
		// 进行分页数据查询 注意limit方法的参数要使用Page类的属性
		$list = $User->where($map)->order('id asc')->limit($Page->firstRow.','.$Page->listRows)->select();
        
        $juese = D('Role')->lists(array());
		$this->assign('list',$list);// 赋值数据集
		$this->assign('page',$show);// 赋值分页输出
        $this->assign('juese', $juese);
        $this->display();
    }

    //添加公司
    public function add(){
    	if(IS_POST){
    		$User = M('User');
    		$data = $User->create();
    		$data['add_time'] = date('Y-m-d H:i:s');
    		$data['dels'] = 0;
            !$data['username'] && $this->error('用户名不能为空');
            !$data['password'] && $data['password'] = 123456;
            $data['password'] = think_encrypt($data['password']);
            //查找用户名称是否已经被占用了
            $info = $User->where(array('username'=>$data['username']))->find();
            if($info){
                $this->error('用户名已经被占用');
            }
    		if($User->add($data)){
    			$this->success('添加成功', U('User/index'));
    		}else{
    			$this->error('添加失败');
    		}
    	}else{

            $juese = M('Role')->where('1=1')->select();
            $this->assign('juese', $juese);
    		$this->display();
    	}
    }


    //编辑公司
    public function edit(){
    	$id = I('id', 0);
    	!$id && $this->error('获取用户信息失败');
    	$User = M('User');
    	if(IS_POST){
    		$data = $User->create();
    		$data['update_time'] = date('Y-m-d H:i:s');
            //密码设置
            if(!$data['password']){
                unset($data['password']);
            }else{
               $data['password'] = think_encrypt($data['password']); 
            } 
            
    		if($User->save($data)){
    			$this->success('修改成功', U('User/index'));
    		}else{
    			$this->error('修改失败');
    		}

    	}else{
    		$info = $User->find($id);
            $juese = M('Role')->where('1=1')->select();
            $this->assign('juese', $juese);
    		$this->assign('info', $info);
    		$this->display();
    	}
    }

    //删除
    public function delete(){
    	$id = I('id', 0);
        !$id && $this->ajaxReturn(array('status'=>'0', 'info'=>'信息出错'));

        //删除操作
        $User = M('User');
        //系统用户不能删除
        $info = $User->find($id);
        if($info['sysuser']==1){
            $this->ajaxReturn(array('status'=>'0', 'info'=>'系统用户不能禁用'));
        }
        if($info['status']==1){
            $flag = '禁用';
            $status=0;
        }else{
            $status=1;
            $flag = '启用';
        }

        if($User->where(array('id'=>$id))->save(array('status'=>$status))){
            $this->ajaxReturn(array('status'=>'1', 'info'=>$flag.'成功'));
        }else{
            $this->ajaxReturn(array('status'=>'0', 'info'=>$flag.'失败'));
        }
    }


    //修改密码
    public function updatepass(){
        if(IS_POST){
            $password = I('password', '');
            $relpass = I('relpass', '');
            //密码基本验证
            !$password && $this->ajaxReturn(array('status'=>0, 'info'=>'密码必须填写'));
            !$relpass && $this->ajaxReturn(array('status'=>0, 'info'=>'确认密码必须填写'));
            if($password != $relpass){
                $this->ajaxReturn(array('status'=>0, 'info'=>'两次输入密码不一致'));
            }

            //修改密码
            $User = D('user');
            $data['password'] = think_encrypt($password);
            if($User->where('id='.M_ID)->save($data)){
                $this->ajaxReturn(array('status'=>1, 'info'=>'修改成功'));
            }else{
                $this->ajaxReturn(array('status'=>0, 'info'=>'修改失败'));
            }

        }else{
            $this->display();
        }
    }


}