<?php
namespace Admin\Controller;
use Think\Controller;
/**
 *	后台登录验证公共类
 *	@author keg 1067547248@qq.com
 *	
 */
class Base extends Controller {
    //可管理的token值列表
    public $storeid_list;
    /**
	 *	初始方法，主要用于登录检测，如果没有登录，则跳转到登录页面
	 */
    public function _initialize(){
        if(!session('?A_ID')){
        	//跳转到登录页面
        	redirect(U('Login/index'));
        }

        if(session('?A_ID')){
        	//登录信息常量
        	define('A_ID', session('A_ID'));    //登陆用户id
            define('SYS', session('SYS'));      //公司超级管理员标志1
            define('USERNAME', session('USERNAME'));
        }

        //获取用户信息
        $User = M('User');
        $UserInfo = $User->find(A_ID);
        $this->assign('UserInfo', $UserInfo);

        //权限
        $auth = $this->authList();
        // print_r($auth);exit;
        $this->assign('auth', $auth);
        $this->assign('pageId', 'page-header-fixed');
    }

    /**
     *  获取用户权限信息
     */
    public function authList(){
        //获取登录账户信息
        $User = D('User');
        $Menu = D('Menu');
        $Role = D('Role');
        $info = $User->find(A_ID);
        //不存在用户信息
        !$info && $this->error('用户信息出错');
        
        //判断是否为公司超级管理员
        if($info['sysuser']!=SYS){
            $this->error('用户权限被修改，请重新登录', U('Login/index'));
        }

        //获取权限信息
        $roleinfo = $Role->find($info['role']);

        $map = array();
        $map['id'] = array('in', $roleinfo['auth']);
        $map['state'] = 1;
        $map['type'] = 1;
        $realMenuList = $Menu->where($map)->order('sort desc')->select();

        !$realMenuList && $this->error('您还没有任何权限，请联系管理员！');
        // print_r($realMenuList); exit;
        $curId = '';    //当前访问菜单id
        $access = false;   //访问权限
        if($realMenuList){
            foreach ($realMenuList as $k => $v) {
                if(strtolower($v['module']) == strtolower(MODULE_NAME) && strtolower($v['controller']) == strtolower(CONTROLLER_NAME) && strtolower($v['action']) == strtolower(ACTION_NAME)){
                    $access = true;
                    $curId[] = $v['id'];
                    // break;
                }
            }
        }

        if(!$access){
            $this->error('无访问权限');
        }
        // echo $curId;
        // print_r($realMenuList); exit;
        //祖先设置cur=1,用于标识为当前访问路径
        $realMenuList = $Menu->setCurr($realMenuList, $curId);

        //排序下，按照sort desc, id asc排序
        
        $realMenuList = array_sort($realMenuList,'sort',SORT_DESC,SORT_NUMERIC);
        $realMenuList = array_sort($realMenuList,'id',SORT_ASC,SORT_NUMERIC);
        //生成权限树
        $realMenuList = $Menu->getMenuTree($realMenuList);
        //返回权限信息
        $auth['access'] = $access;
        $auth['menu'] = $realMenuList;

        return $auth; 
    }
}