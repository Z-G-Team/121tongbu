<?php
namespace Admin\Controller;
use Admin\Controller\Base;

/**
 *	资讯分类管理
 *	@author keg 1067547248@qq.com
 */
class ArticleCategoryController extends Base {

	/**
	 *  菜单列表默认方法（列表显示）
	 */
    public function index(){
        //获取分类列表
        $list = D('ArticleCategory')->order('id asc')->select();
        // print_r($bars);
        $this->assign('bars', $bars);
        $this->assign('list', $list);
        $this->assign('pageId', 'page-header-fixed');
        $this->display();
    }

    /**
     *	添加权限菜单
     */
   	public function add(){

   		//新增表单处理
   		if(IS_POST){
   			$ArticleCategory = D('ArticleCategory');
        $data = $ArticleCategory->create();
   			$data['add_time'] = date('Y-m-d H:i:s');

   			//参数验证
   			if(!$data['name']){
   				$this->error('分类名不能为空');
   			}
   			//新增操作
   			
   			if($ArticleCategory->add($data)){
   				$this->success('新增成功', U('ArticleCategory/index'));
   			}else{
   				// echo $Menu->getLastSql();
   				$this->error('菜单失败');
   			}
   		}else{
   			
        $this->assign('pageId', "page-header-fixed");
        $this->display();
   		}
   	}

   	/**
   	 *	修改菜单信息
   	 */
   	public function edit(){
   		//表单处理
   		if(IS_POST){
   			$ArticleCategory = D('ArticleCategory');
        $data = $ArticleCategory->create();
   			// $data['add_time'] = NOW_TIME;
        $data['update_time'] = date('Y-m-d H:i:s');

   			//参数验证
   			if($data['id']<1){
   				$this->error('信息获取失败');
   			}

   			if(!$data['name']){
   				$this->error('分类名不能为空');
   			}

	        //修改菜单
   			if($ArticleCategory->save($data)){
   				$this->success('修改成功', U('ArticleCategory/index'));
   			}else{
   				// echo $Menu->getLastSql();
   				$this->error('修改失败');
   			}
   		}else{
   			//获取ID
   			$id = I('id',0);
   			$ArticleCategory = D('ArticleCategory');
   			$info = $ArticleCategory->find($id);
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
   		$ArticleCategory = D('ArticleCategory');

      //查询分类信息
      $info = $ArticleCategory->find($id);
      if(!$info){
        $this->ajaxReturn(array('status'=>0, 'info'=>'要删除的记录不存在'));
      }

   		//删除操作
   		if($ArticleCategory->delete($id)){
   			$this->ajaxReturn(array('status'=>1, 'info'=>'删除成功'));
   		}else{
   			$this->ajaxReturn(array('status'=>0, 'info'=>'删除失败'));
   		}

   	}
 
}