<?php
namespace Admin\Controller;
use Admin\Controller\Base;
/**
 *	预约管理
 *	@author keg 1067547248@qq.com
 *	
 */
class MessageController extends Base {
    //基本统计
    public function index(){
        $map = array();
        $map['status'] = 1;
        //查询及分页
        $Message = M('Message');
        $count = $Message->where($map)->count();// 查询满足要求的总记录数
        $Page = new \Think\Page($count,15);// 实例化分页类 传入总记录数和每页显示的记录数(25)
        $show = $Page->show();// 分页显示输出
        // 进行分页数据查询 注意limit方法的参数要使用Page类的属性
        $list = $Message->where($map)->order('id desc')->limit($Page->firstRow.','.$Page->listRows)->select();

        $this->assign('list', $list);
        $this->assign('page',$show);// 赋值分页输出
        $this->assign('pageId', 'page-header-fixed');
        $this->display();
    }


    //删除
    public function delete(){
        $id = I('id', 0);
        if(M('message')->where('id='.$id)->save(array('status'=>0))){
            $this->success('删除成功');
        }else{
            $this->error('删除失败');
        }

    }
}