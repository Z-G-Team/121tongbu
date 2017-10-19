<?php
namespace Admin\Controller;
use Admin\Controller\Base;

/**
 *	资讯管理
 *	@author keg 1067547248@qq.com
 */
class ArticleController extends Base {

	/**
	 *  菜单列表默认方法（列表显示）
	 */
    public function index(){
        //获取分类列表
        $clist = D('ArticleCategory')->order('id asc')->select();
        $mclist = array();
        if($clist){
          foreach ($clist as $key => $value) {
            $mclist[$value['id']] = $value;
          }
        }

        $pid = I('pid', 0);
        $name = I('name', 0);
        
        $map = array();
        if($pid){
          $map['pid'] = $pid;
        }
        if($name){
          $map['name'] = array('like', '%'.$name.'%');
        }
        //查询及分页
        $Article = D('Article');
        $count = $Article->where($map)->count();// 查询满足要求的总记录数
        $Page = new \Think\Page($count,15);// 实例化分页类 传入总记录数和每页显示的记录数(25)
        $show = $Page->show();// 分页显示输出
        // 进行分页数据查询 注意limit方法的参数要使用Page类的属性
        $list = $Article->where($map)->order('id desc')->limit($Page->firstRow.','.$Page->listRows)->select();


        $this->assign('list', $list);
        $this->assign('page',$show);// 赋值分页输出
        $this->assign('clist', $mclist);
        $this->assign('pageId', 'page-header-fixed');
        $this->display();
    }

    /**
     *	添加权限菜单
     */
   	public function add(){

   		//新增表单处理
   		if(IS_POST){
   			$Article = D('Article');
        $data = $Article->create();
   			$data['add_time'] = date('Y-m-d H:i:s');

   			//参数验证
   			if(!$data['name']){
   				$this->error('标题不能为空');
   			}
   			//新增操作
   			
   			if($Article->add($data)){
   				$this->success('新增成功', U('Article/index', array('pid'=>$data['pid'])));
   			}else{
   				// echo $Menu->getLastSql();
   				$this->error('新增失败');
   			}
   		}else{
        //获取分类列表
        $list = D('ArticleCategory')->order('id asc')->select();
   			$this->assign('list', $list);
        $this->assign('pageId', "page-header-fixed");
        $this->display();
   		}
   	}

   	/**
   	 *	修改菜单信息
   	 */
   	public function edit(){
      $id = I('id', 0);
      $Article = D('Article');
   		//表单处理
   		if(IS_POST){
   			
        $data = $Article->create();
        $data['update_time'] = date('Y-m-d H:i:s');

        //参数验证
        if(!$data['name']){
          $this->error('标题不能为空');
        }
        //新增操作
        
        if($Article->save($data)){
          $this->success('编辑成功', U('Article/index', array('pid'=>$data['pid'])));
        }else{
          // echo $Menu->getLastSql();
          $this->error('编辑失败');
        }
   		}else{
   			//获取ID
   			$list = D('ArticleCategory')->order('id asc')->select();
        $this->assign('list', $list);
   			$info = $Article->find($id);
   			$this->assign('info', $info);
   			$this->display();
   		}
   	}

   	/**
   	 *	AJAX删除菜单
   	 */
   	public function delete(){
   		$id = I('id', 0, 'int');
   		if($id<1){
   			$this->ajaxReturn(array('status'=>0, 'info'=>'信息提交失败'));
   		}

   		//查询要删除的信息
   		$Article = D('Article');

      //查询分类信息
      $info = $Article->find($id);
      if(!$info){
        $this->ajaxReturn(array('status'=>0, 'info'=>'要删除的记录不存在'));
      }

   		//删除操作
   		if($Article->delete($id)){
   			$this->ajaxReturn(array('status'=>1, 'info'=>'删除成功'));
   		}else{
   			$this->ajaxReturn(array('status'=>0, 'info'=>'删除失败'));
   		}

   	}
 
}