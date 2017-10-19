<?php
namespace Admin\Controller;
use Admin\Controller\Base;
use Think\Upload;
use Think\Image;

/**
 *	图片上传控制器
 *	@author keg 1067547248@qq.com
 */
class ImagesController extends Base {

	/**
	 *	默认方法
	 */
	public function index(){}

	/**
	 *	商品图片上传，生成所个缩略图
	 *
	 */
	public function product(){
		if(IS_POST){
			$upload = new Upload();// 实例化上传类
			$fileName = $_REQUEST['file'];
			$saveName = time().mt_rand(10000, 99999);
			$upload->maxSize   =     C('UPLOAD_MAX_SIEX') ;// 设置附件上传大小
		    $upload->exts      =     C('UPLOAD_EXTS');// 设置附件上传类型
		    $upload->rootPath  =     C('UPLOAD_PRODUCT_PATH'); // 设置附件上传根目录
		    $upload->subName   = 	 C('UPLOAD_SUB_NAME');	 //上传文件目录
		    $upload->saveName  = 	 $saveName; 	//上传文件名称

		    // 上传单个文件 
		    $info   =   $upload->uploadOne($_FILES[$fileName]);
		    if(!$info) {// 上传错误提示错误信息
		        // $this->error($upload->getError());
		        // $this->ajaxReturn(array('flag'=>-1, 'msg'=>'图片上传失败'));
		        $this->assign('flag', 0);
		        $this->assign('msg', '上传失败');
		    }else{// 上传成功 获取上传文件信息

		    	//生成缩略图
		        $file = $upload->rootPath.$info['savepath'].$info['savename'];
		        $thumb_s = $upload->rootPath.$info['savepath'].'s_'.$info['savename'];
		        $thumb_m = $upload->rootPath.$info['savepath'].'m_'.$info['savename'];
		        $thumb_b = $upload->rootPath.$info['savepath'].'b_'.$info['savename'];

		        $image = new Image();
				$image->open($file);
				$image->thumb(200, 200)->save($thumb_s);

				$image->open($file);
				$image->thumb(300, 300)->save($thumb_m);

				$image->open($file);
				$image->thumb(500, 500)->save($thumb_b);

				$this->assign('flag', 1);
		        $this->assign('info', $info);
		    }
	    }
	    $this->assign('upload_path', C('UPLOAD_PRODUCT_SHOW'));
	    $this->display();
	}


	/**
	 *	图片上传，不生成缩略图
	 *
	 */
	public function uploadImg(){
		if(IS_POST){
			$upload = new Upload();// 实例化上传类
			$fileName = $_REQUEST['file'];
			$saveName = time().mt_rand(10000, 99999);
			$upload->maxSize   =     C('UPLOAD_MAX_SIEX') ;// 设置附件上传大小
		    $upload->exts      =     C('UPLOAD_EXTS');// 设置附件上传类型
		    $upload->rootPath  =     C('UPLOAD_ROOT_PATH'); // 设置附件上传根目录
		    $upload->subName   = 	 C('UPLOAD_SUB_NAME');	 //上传文件目录
		    $upload->saveName  = 	 $saveName; 	//上传文件名称

		    // 上传单个文件 
		    $info   =   $upload->uploadOne($_FILES[$fileName]);
		    if(!$info) {// 上传错误提示错误信息
		    	// print_r($upload->getError());
		        // $this->error($upload->getError());
		        // $this->ajaxReturn(array('flag'=>-1, 'msg'=>'图片上传失败'));
		        $this->assign('flag', 0);
		        $this->assign('msg', '上传失败');
		    }else{// 上传成功 获取上传文件信息
				$this->assign('flag', 1);
		        $this->assign('info', $info);
		    }
	    }
	    $this->assign('upload_path', C('UPLOAD_SHOW_PATH'));
	    $this->display();
	}

	/**
	 *	上传图片
	 */
	public function upload(){
		if(IS_POST){
			$upload = new Upload();// 实例化上传类
			$fileName = $_REQUEST['file'];
			$saveName = time().mt_rand(10000, 99999);
			$upload->maxSize   =     C('UPLOAD_MAX_SIEX') ;// 设置附件上传大小
		    $upload->exts      =     C('UPLOAD_EXTS');// 设置附件上传类型
		    $upload->rootPath  =     C('UPLOAD_ROOT_PATH'); // 设置附件上传根目录
		    $upload->subName   = 	 C('UPLOAD_SUB_NAME');	 //上传文件目录
		    $upload->saveName  = 	 $saveName; 	//上传文件名称

		    // 上传单个文件 
		    $info   =   $upload->uploadOne($_FILES[$fileName]);

		    if(!$info) {// 上传错误提示错误信息
		    	// print_r($upload->getError());
		        // $this->error($upload->getError());
		        // $this->ajaxReturn(array('flag'=>-1, 'msg'=>'图片上传失败'));
		        $this->assign('flag', 0);
		        $this->assign('msg', '上传失败');
		    }else{// 上传成功 获取上传文件信息
				$this->assign('flag', 1);
		        $this->assign('info', $info);
		    }
	    }
	    $this->assign('upload_path', C('UPLOAD_SHOW_PATH'));
	    $type = I('type', '');
	    $this->assign('type', $type);
	    $this->display();
	}

}