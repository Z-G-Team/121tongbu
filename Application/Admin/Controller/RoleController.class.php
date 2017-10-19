<?php
namespace Admin\Controller;
use Admin\Controller\Base;

/**
 *  角色管理
 *  @author keg 1067547248@qq.com
 */
class RoleController extends Base {

    /**
     *  角色列表默认方法（列表显示）
     */
    public function index(){

        //获取角色列表
        $Role = D('Role');
        // print_r($this->auth);
        // echo A_USER;
        

        //获取角色分组
        $list = $Role->order('sort desc')->select();

        //传递变量
        $this->assign('list', $list);
        $this->assign('pageId', 'page-header-fixed');
        $this->display();
    }

    /**
     *  添加角色
     */
    public function add(){

      //新增表单处理
      if(IS_POST){
        $data['name'] = I('name', '');
        $data['state'] = I('state', 0, 'int');
        $data['sort'] = I('sort', 50, 'int');


        //参数验证
        if(!$data['name']){
          $this->error('角色名不能为空');
        }


        //新增操作
        $Role = D('Role');
        if($Role->add($data)){
          $this->success('新增成功', U('Role/index'));
        }else{
          $this->error('新增失败');
        }
      }else{
          $this->assign('pageId', "page-header-fixed");
          $this->display();
      }
    }

    /**
     *  修改角色信息
     */
    public function edit(){
      //表单处理
      if(IS_POST){
        $data['id'] = I('id', 0);
        $data['name'] = I('name', '');
        $data['state'] = I('state', 0);
        $data['sort'] = I('sort', 50);
        // $data['add_time'] = NOW_TIME;

        //参数验证
        if($data['id']<1){
          $this->error('角色信息获取失败');
        }

        if(!$data['name']){
          $this->error('角色名不能为空');
        }

        //新增操作
        $Role = D('Role');

          //修改角色
        if($Role->save($data)){
          $this->success('修改成功', U('Role/index'));
        }else{
          $this->error('修改失败');
        }
      }else{
        //获取ID
        $id = I('id',0,'int');
        if($id<1){
          $this->error('角色信息获取失败');
        }

        //获取角色信息
        $Role = D('Role');
        $info = $Role->find($id);

        //信息获取失败
        if(!$info){
          $this->error('角色信息获取失败');
        }

        $this->assign('pageId', "page-header-fixed");
        $this->assign('info', $info);
        $this->display();
      }
    }

    /**
     *  AJAX删除橘色
     */
    public function delete(){
      $id = I('id', 0, 'int');
      if($id<1){
        $this->ajaxReturn(array('status'=>-1, 'info'=>'信息提交失败'));
      }

      //查询要删除的信息
      $Role = D('Role');
 
      //删除操作
      if($Role->delete($id)){
        $this->ajaxReturn(array('status'=>1, 'info'=>'删除成功'));
      }else{
        $this->ajaxReturn(array('status'=>-2, 'info'=>'删除失败'));
      }

    }


    /**
     *   角色授权管理
     *
     */
    public function auth(){
        //角色id
        $id = I('id', 0, 'int');

        if($id<1){
            $this->error('角色信息出错');
        }

        if(IS_POST){
            //权限处理
            $auth = I('auth');
            $auth_str = implode(',', $auth);

            //数据处理
            $data['id'] = $id;
            $data['auth'] = $auth_str;
            
            //修改权限
            $Role = D('Role');
            if($Role->save($data)){
                $this->success('授权成功', U('Role/index'));
            }else{
                $this->error('授权失败');
            }       
        }else{
            //权限列表
            $Menu = D('Menu');
            //必须要开启的权限才能显示
            $list = $Menu->where(array('state'=>1, 'type'=>1))->select();

            if(!$list){
                $this->error('权限获取失败');
            }    

            //角色信息
            $Role = D('Role');
            $info = $Role->find($id);

            if(!$info){
                $this->error('角色信息获取失败');
            }

            //权限和角色组合
            $auth = explode(',', $info['auth']);
            if($auth){
                foreach ($list as $k => $v) {
                    if(in_array($v['id'], $auth)){
                        $list[$k]['ck'] = 1;
                    }
                }
            }

            //生成权限树
            $list = $Menu->getMenuTree($list);
            $this->assign('pageId', "page-header-fixed");
            $this->assign('id', $id);
            $this->assign('list', $list);
            $this->display();
        }        
    }
 
}