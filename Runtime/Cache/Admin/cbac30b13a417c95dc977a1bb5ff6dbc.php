<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
	<meta charset="utf-8" />
	<title>后台管理</title>
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
	<!-- BEGIN GLOBAL MANDATORY STYLES -->
	<link href="/Public/Admin/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
	<link href="/Public/Admin/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css"/>
	<link href="/Public/Admin/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
	<link href="/Public/Admin/css/style-metro.css" rel="stylesheet" type="text/css"/>
	<link href="/Public/Admin/css/style.css" rel="stylesheet" type="text/css"/>
	<link href="/Public/Admin/css/style-responsive.css" rel="stylesheet" type="text/css"/>
	<link href="/Public/Admin/css/default.css" rel="stylesheet" type="text/css" id="style_color"/>
	<link href="/Public/Admin/css/uniform.default.css" rel="stylesheet" type="text/css"/>
	
	<!-- END GLOBAL MANDATORY STYLES -->
	<!-- BEGIN PAGE LEVEL STYLES -->
	<!-- END PAGE LEVEL STYLES -->
	<link rel="shortcut icon" href="/Public/Admin/image/favicon.ico" />
	
    <link rel="stylesheet" type="text/css" href="/Public/Admin/css/select2_metro.css" />
    <link rel="stylesheet" href="/Public/Admin/css/DT_bootstrap.css" />

</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class="<?php echo ($pageId); ?>">
	<!-- BEGIN LOGO -->
	
	<!-- BEGIN HEADER -->
	<div class="header navbar navbar-inverse navbar-fixed-top">
		<!-- BEGIN TOP NAVIGATION BAR -->
		<div class="navbar-inner">
			<div class="container-fluid">
				<!-- BEGIN LOGO -->
				<a class="brand" style="color:#FFF;padding-left:20px;" href="<?php echo U('Index/index');?>">武器大师</a>
				<!-- END LOGO -->  	             
				<!-- BEGIN TOP NAVIGATION MENU -->              
				<ul class="nav pull-right">
					<!-- BEGIN USER LOGIN DROPDOWN -->
					<li class="dropdown user">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
						<span class="username"><?php echo USERNAME;?></span>
						<i class="icon-angle-down"></i>
						</a>
						<ul class="dropdown-menu">
							<li><a href="#"><i class="icon-user"></i> <?php echo USERNAME;?></a></li>
							<li><a href="<?php echo U('User/updatepass');?>"><i class="icon-lock"></i> 修改密码</a></li>
							<li><a href="<?php echo U('Login/logout');?>"><i class="icon-key"></i> 退出</a></li>
						</ul>
					</li>
					<!-- END USER LOGIN DROPDOWN -->
				</ul>
				<!-- END TOP NAVIGATION MENU --> 
			</div>
		</div>
		<!-- END TOP NAVIGATION BAR -->
	</div>
	<!-- END HEADER -->
	
	
	<!-- BEGIN CONTAINER -->
	<div class="page-container row-fluid">
		<!-- BEGIN SIDEBAR -->
<div class="page-sidebar nav-collapse collapse">
	<!-- BEGIN SIDEBAR MENU -->        
	<ul class="page-sidebar-menu">
		<li>
			<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
			<div class="sidebar-toggler hidden-phone"></div>
			<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
		</li>

        <?php if(is_array($auth['menu'])): $i = 0; $__LIST__ = $auth['menu'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><li <?php if($item['cur']==1){ echo 'class="active"'; }?>>
                <a href="javascript:;">
                    <i class="icon-sitemap"></i>
                    <span class="title"><?php echo ($item['name']); ?></span>
                    <span class="fa arrow"></span>
                </a>
                <ul class="sub-menu">
                    <?php if(is_array($item['child'])): $i = 0; $__LIST__ = $item['child'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$minfo): $mod = ($i % 2 );++$i; if($minfo['show']==1){?>
                        <li <?php if($minfo['cur']==1){ echo 'class="active"'; }?>>
                            <a href="<?php echo U($minfo['controller'].'/'.$minfo['action']); ?>"><?php echo $minfo['name']; ?></a>
                        </li>
                        <?php } endforeach; endif; else: echo "" ;endif; ?>
                </ul>
            </li><?php endforeach; endif; else: echo "" ;endif; ?>
	</ul>
	<!-- END SIDEBAR MENU -->
</div>
<!-- END SIDEBAR -->
		<!-- BEGIN PAGE -->
		<div class="page-content">
			<!-- BEGIN PAGE CONTAINER-->        
			<div class="container-fluid">
				

<!-- BEGIN PAGE HEADER-->   
<div class="row-fluid">
    <div class="span12">
        <h3 class="page-title">
            会员管理
        </h3>
        <ul class="breadcrumb">
            <li>
                <i class="icon-home"></i>
                <a href="<?php echo U('Index/index');?>">首页</a> 
                <span class="icon-angle-right"></span>
            </li>
            <li>
                <a href="<?php echo U('Member/index');?>">会员列表</a>
                <span class="icon-angle-right"></span>
            </li>
            <li><a href="javascript:;">添加会员</a></li>
        </ul>
    </div>
</div>
<!-- END PAGE HEADER-->

<!-- BEGIN PAGE CONTENT-->

<div class="row-fluid">
    <div class="span12">
        <!-- BEGIN SAMPLE FORM PORTLET-->   
        <div class="portlet box blue tabbable">
            <div class="portlet-title">
                <div class="caption">
                    <i class="icon-reorder"></i>
                    <span class="hidden-480">广告表单</span>
                </div>
            </div>
            <div class="portlet-body form">
                <div class="tabbable portlet-tabs">
                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#portlet_tab1" data-toggle="tab">Default</a></li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active" id="portlet_tab1">

                            <!-- BEGIN FORM-->
                            <form class="form-horizontal" id="mForm" method="post" action="<?php echo U("Member/add");?>">
                                <div class="control-group">
                                    <label class="control-label">用户名</label>
                                    <div class="controls">
                                        <input type="text" name="user_name" id="user_name" class="m-wrap medium" placeholder="用户名" value="<?php echo ($info['user_name']); ?>">
                                        <span class="help-inline" style="color:red;">*</span>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label">手机号（登陆名）</label>
                                    <div class="controls">
                                        <input type="text" name="phone" id="phone" class="m-wrap large" placeholder="手机号" value="<?php echo ($info['phone']); ?>">
                                        <span class="help-inline" style="color:red;">*</span>
                                    </div>
                                </div>
                                

                                <div class="control-group">
                                    <label class="control-label">密码</label>
                                    <div class="controls">
                                        <input type="text" name="password" id="password" class="m-wrap large" placeholder="密码" value="<?php echo ($info['password']); ?>">
                                        <span class="help-inline" style="color:red;">*(为空则默认为 888888)</span>
                                    </div>
                                </div>


                                
                                <div class="control-group">
                                    <label class="control-label">E-mail</label>
                                    <div class="controls">
                                        <input type="text" name="email" id="email" class="m-wrap large" placeholder="邮箱" value="<?php echo ($info['email']); ?>">
                                        <span class="help-inline" style="color:red;">*</span>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label">头像</label>
                                    <div class="controls">
                                        <input type="text" name="head_img" id="head_img" value="<?php echo ($advert['head_img']); ?>"  class="m-wrap large">
                                        <iframe src="<?php echo U('Images/upload',array('type'=>'head_img'));?>" scrolling="no" topmargin="no" width="330" height="30" marginwidth="0" marginheight="0" frameborder="0" align="center" class="imageIfram"></iframe>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label">头像预览</label>
                                    <div class="controls">
                                        <img src="/Public/Admin/images/nophoto.jpg" width="120" height="120" class="showimg">
                                    </div>
                                </div>
                                

                                <div class="control-group">
                                    <label class="control-label">性别</label>
                                    <div class="controls">
                                        <label class="radio">
                                        <input type="radio" name="sex" value="1" />
                                        男
                                        </label>
                                        <label class="radio">
                                        <input type="radio" name="sex" value="2"/>
                                        女
                                        </label>
                                    </div>
                                </div>



                                <div class="control-group">
                                    <label class="control-label">省</label>
                                    <div class="controls">
                                        <select id="province" class="medium m-wrap" name="province">
                                            <option value="0">选择省份</option>
                                            <?php if(is_array($region)): $i = 0; $__LIST__ = $region;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><option value="<?php echo ($item['id']); ?>">
                                                    <?php echo ($item['name']); ?>
                                                </option><?php endforeach; endif; else: echo "" ;endif; ?>
                                        </select>
                                    </div>
                                </div>


                                <div class="control-group">
                                    <label class="control-label">市</label>
                                    <div class="controls">
                                        <select id="city" class="medium m-wrap" name="city">
                                            <option value="0">选择城市</option>
                                        </select>
                                    </div>
                                </div>


                                <div class="control-group">
                                    <label class="control-label">区/县</label>
                                    <div class="controls">
                                        <select id="area" class="medium m-wrap" name="area">
                                            <option value="0">选择区/县</option>
                                        </select>
                                    </div>
                                </div>




                                <div class="control-group">
                                    <label class="control-label">详细地址</label>
                                    <div class="controls">
                                        <input type="text" name="address" id="address" class="m-wrap large" placeholder="详细地址" value="<?php echo ($info['address']); ?>">
                                        <span class="help-inline" style="color:red;">*</span>
                                    </div>
                                </div>


                                <div class="control-group">
                                    <label class="control-label">状态</label>
                                    <div class="controls">
                                        <label class="radio">
                                        <input type="radio" name="status" value="0" />
                                        禁用
                                        </label>
                                        <label class="radio">
                                        <input type="radio" name="status" value="1" checked="" />
                                        开启
                                        </label>
                                    </div>
                                </div>


                                <div class="form-actions">
                                    <button type="submit" class="btn blue save"><i class="icon-ok"></i> 保存</button>
                                    <button type="button" class="btn" onclick="javascript:history.go(-1)">返回</button>
                                </div>
                            </form>

                            <!-- END FORM-->  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END SAMPLE FORM PORTLET-->
    </div>
</div>
<!-- END PAGE CONTENT-->         

			</div>
			<!-- END PAGE CONTAINER-->
		</div>
		<!-- END PAGE -->
	</div>
	<!-- END CONTAINER -->

	
    <!-- BEGIN FOOTER -->
<div class="footer">
	<div class="footer-inner">
		2016 &copy; copyright by 武器大师.
	</div>
	<div class="footer-tools">
		<span class="go-top">
		<i class="icon-angle-up"></i>
		</span>
	</div>
</div>
<!-- END FOOTER -->

	<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
	<!-- BEGIN CORE PLUGINS -->
	<script src="/Public/Admin/js/jquery-1.10.1.min.js" type="text/javascript"></script>
	<script src="/Public/Admin/js/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>
	<!-- IMPORTANT! Load jquery-ui-1.10.1.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
	<script src="/Public/Admin/js/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>
	<script src="/Public/Admin/js/bootstrap.min.js" type="text/javascript"></script>
	<!--[if lt IE 9]>
	<script src="/Public/Admin/js/excanvas.min.js"></script>
	<script src="/Public/Admin/js/respond.min.js"></script>  
	<![endif]-->   
	<script src="/Public/Admin/js/jquery.slimscroll.min.js" type="text/javascript"></script>
	<script src="/Public/Admin/js/jquery.blockui.min.js" type="text/javascript"></script>  
	<script src="/Public/Admin/js/jquery.cookie.min.js" type="text/javascript"></script>
	<script src="/Public/Admin/js/jquery.uniform.min.js" type="text/javascript"></script>
	<!-- END CORE PLUGINS -->

	<script src="/Public/Admin/layer/layer.js"></script>
	<script src="/Public/Admin/base.js" type="text/javascript" ></script>

	
    <!-- END FOOTER -->

    <!-- END PAGE LEVEL PLUGINS -->
    <script src="/Public/Admin/js/app.js" type="text/javascript"></script> 
    <!-- BEGIN PAGE LEVEL SCRIPTS -->   
    <script>
        jQuery(document).ready(function() {   
           // initiate layout and plugins
           App.init();

           $(".save").click(function(){
                    $.ajax({
                        url : '<?php echo U("Member/add");?>',
                        data : $('#mForm').serialize(),
                        dataType : 'json',
                        type : 'post',
                        success : function(ret){
                            if(ret.status==1){
                                layer.alert(ret.info, {icon: 6});
                                window.location.href=ret.url;
                            }else{
                                layer.alert(ret.info, {icon: 5});
                            }
                        }

                    });

                    return  false;
            });
        });



        $('#province').change(function(){
            var sf = $(this).val();
            $('#city').html('<option value="0">选择城市</option>');
            $('#area').html('<option value="0">选择区/县</option>');
            if(sf){
                $.ajax({
                    url : '<?php echo U("Region/getSubList");?>',
                    data : {id:sf},
                    dataType : 'json',
                    type : 'post',
                    success : function(ret){
                        
                        if(ret.status==1){
                            var info = ret.info;
                            var strs = '<option value="" data-id="">选择城市</option>';
                            for(k in info){
                                strs += '<option value="'+info[k]['id']+'" data-id="'+info[k]['id']+'">'+info[k]['name']+'</option>';
                            }
                            $('#city').html(strs);
                        }

                    }
                });
            }else{

            }
        });


        $('#city').change(function(){
            var sf = $(this).val();
            $('#area').html('<option value="0">选择区/县</option>');
            if(sf){
                $.ajax({
                    url : '<?php echo U("Region/getSubList");?>',
                    data : {id:sf},
                    dataType : 'json',
                    type : 'post',
                    success : function(ret){
                        
                        if(ret.status==1){
                            var info = ret.info;
                            var strs = '<option value="" data-id="">选择区/县</option>';
                            for(k in info){
                                strs += '<option value="'+info[k]['id']+'" data-id="'+info[k]['id']+'">'+info[k]['name']+'</option>';
                            }
                            $('#area').html(strs);
                        }

                    }
                });
            }else{

            }
        });

    </script>

	<!-- END JAVASCRIPTS -->
	<script type="text/javascript">  var _gaq = _gaq || [];  _gaq.push(['_setAccount', 'UA-37564768-1']);  _gaq.push(['_setDomainName', 'keenthemes.com']);  _gaq.push(['_setAllowLinker', true]);  _gaq.push(['_trackPageview']);  (function() {    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);  })();</script>
</body>
<!-- END BODY -->
</html>