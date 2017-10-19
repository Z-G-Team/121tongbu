<?php
return array(
	'LOAD_EXT_CONFIG' => 'dbconf',
	'MODULE_ALLOW_LIST'    =>    array('Home','Admin'),
	'DEFAULT_MODULE' => 'Home', //默认模块	
	'URL_MODEL' => '2',

	//自动载入自定类库
	'AUTOLOAD_NAMESPACE'=>array('Lib'=>APP_PATH.'Lib'),

	//加密解密key
	'DATA_AUTH_KEY' => 'ajkd*&*^Dfsdjfjeljad(&*(',

	'TMPL_PARSE_STRING'  =>array(
     	'__PUBLIC__' => '/Public/Statics', // 更改默认的/Public 替换规则
     	'__UPLOAD__' => '/Data/uploads', // 增加新的上传路径替换规则
     	'__PLUG__' => '/Plug',
     	'__DATA__' => '/Data'
	),

	//显示设置
	'PAGE' => 10,




	//上传图片信息配置
	//上传大小配置
	'UPLOAD_MAX_SIEX' => 3145728,
	// 设置附件上传类型
	'UPLOAD_EXTS' => array('jpg', 'gif', 'png', 'jpeg', 'pem'), 
	// 设置附件上传根目录
	'UPLOAD_ROOT_PATH' => ROOT_PATH . '/Data/uploads/',
	//上传显示路径
	'UPLOAD_SHOW_PATH' => '/Data/uploads/',
	//图片保存子目录
	'UPLOAD_SUB_NAME' => array('date','Ymd'),

	//发布商品的图片上传路径和显示路径
	'UPLOAD_PRODUCT_PATH' => ROOT_PATH . '/Data/uploads/',
	'UPLOAD_PRODUCT_SHOW' => '/Data/uploads/',

	'BOOK_SEX' => array(
			0 => '男',
			1 => '女'
		),
	'BOOK_STATUS' => array(
			// 4 => '删除',
			// 1 => '待处理',
			// 2 => '通过',
			// 3 => '拒绝',
			1 => '新预约'
	),
	


	

);