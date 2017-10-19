<?php
namespace Admin\Controller;
use Admin\Controller\Base;
/**
 *	预约管理
 *	@author keg 1067547248@qq.com
 *	
 */
class BookController extends Base {
    //基本统计
    public function index(){
        $map = array();
        $status = I('status', 0);
        $type = I('type', '');
        $status && $map['status'] = $status;
        !$status && $map['status'] = array('lt', 4);
        if($type=='00' ||$type=='10'){
            $map['type'] = $type;
        }
        //查询及分页
        $Book = M('Book');
        $count = $Book->where($map)->count();// 查询满足要求的总记录数
        $Page = new \Think\Page($count,15);// 实例化分页类 传入总记录数和每页显示的记录数(25)
        $show = $Page->show();// 分页显示输出
        // 进行分页数据查询 注意limit方法的参数要使用Page类的属性
        $list = $Book->where($map)->order('id desc')->limit($Page->firstRow.','.$Page->listRows)->select();

        $this->assign('BOOK_SEX', C('BOOK_SEX'));
        $this->assign('BOOK_STATUS', C('BOOK_STATUS'));
        $this->assign('BOOK_TYPE', C('BOOK_TYPE'));
        $this->assign('list', $list);
        $this->assign('page',$show);// 赋值分页输出
        $this->assign('pageId', 'page-header-fixed');
        $this->display();
    }

    public function process(){
        $id = I('id', 0);
        if(M('Book')->where('id='.$id)->save(array('status'=>4))){
            $this->success('删除成功');
        }else{
            $this->error('删除失败');
        }
    }
}