<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        header('location:/index.html');
    }



    //提交预约
    public function addBook(){
    	
    	$data = array();
    	$data['name'] = I('username1', '');
    	$data['sex'] = I('sex1', 1);
    	$data['phone'] = I('phone1', '');
    	$data['email'] = I('email1', '');
    	$data['position'] = I('occupation1', '');
    	$data['quota'] = I('quota1', '');
    	$data['region'] = I('province1', '').' '.I('city1','').' '.I('district1','');
    	$data['add_time'] = date('Y-m-d H:i:s');
        $data['type'] = 10;

    	!$data['name'] && $this->error('请填写姓名');
    	!$data['phone'] && $this->error('请填写手机号码');
    	!$data['email'] && $this->error('请填写常用邮箱');
    	!$data['position'] && $this->error('请填写目前职位');

    	if(IS_AJAX){
    		$id = M('book')->add($data);
    		if($id){
    			$this->success('提交成功');
    		}else{
    			$this->error('提交失败');
    		}
    	}else{
    		$this->error('提交的方式好像不对哦！！');
    	}

    }


    //提交留言
    public function addMessage(){
    	$data = array();
    	$data['name'] = I('messageUserName', '');
    	$data['phone'] = I('messagePhone', '');
    	$data['brief'] = I('messageContent', '');
    	$data['region'] = I('messageArea', '');
    	$data['add_time'] = date('Y-m-d H:i:s');

    	!$data['brief'] && $this->error('请留言');
    	!$data['name'] && $this->error('请填写姓名');
    	!$data['phone'] && $this->error('请填写电话');
    	!$data['region'] && $this->error('请填写合作区域');

    	if(IS_AJAX){
    		$id = M('message')->add($data);
    		if($id){
    			$this->success('提交成功');
    		}else{
    			$this->error('提交失败');
    		}
    	}else{
    		$this->error('提交的方式好像不对哦！！');
    	}
    }


    //加入我们
    public function join(){
        $join = M('join');
        $data = $join->create();
        

        !$data['name'] && $this->error('请填写姓名');
        !$data['phone'] && $this->error('请填写手机号码');
        !$data['region'] && $this->error('请填写所在地区');
        !$data['classes'] && $this->error('请填写年级');
        !$data['subjects'] && $this->error('请填写科目');

        $data['add_time'] = date('Y-m-d H:i:s');

        if(IS_AJAX){
            $id = $join->add($data);
            if($id){
                $this->success('提交成功');
            }else{
                $this->error('提交失败');
            }
        }else{
            $this->error('提交的方式好像不对哦！！');
        }

    }
}