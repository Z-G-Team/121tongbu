<?php
return array(
	'TMPL_PARSE_STRING'  =>array(
     	'__PUBLIC__' => '/Public', // 更改默认的/Public 替换规则
     	'__UPLOAD__' => '/Data/uploads', // 增加新的上传路径替换规则
     	'__PLUG__' => '/Plug',
     	'__DATA__' => '/Data'
	),

	'AD_TYPE' => array(
		// 'weixin' => '微信广告', //APP广告配置
		'index' =>'PC端首页广告',
		'mobile'=>'手机端广告'
	),

	'BOOK_TYPE' => array(
		'00'=>'默认',
		'10'=>'官网'
	)
);