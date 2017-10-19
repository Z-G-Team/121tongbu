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
	<style>
		.controls_1, .controls_2, .controls_3{float:left; width: 100%;} 
		.controls_1{}
		.controls_2{padding-left:20px;}
		.controls_3{padding-left:50px;}
		.controls_1 label{float:left;margin:5px;}
		.controls_2 label{float:left;margin:5px;}
		.controls_3 label{float:left;margin:5px;}
		.control-group{ border-bottom:1px solid #555555;}
	</style>

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
			角色管理
		</h3>
		<ul class="breadcrumb">
			<li>
				<i class="icon-home"></i>
				<a href="<?php echo U('Index/index');?>">首页</a> 
				<span class="icon-angle-right"></span>
			</li>
			<li>
				<a href="<?php echo U('Role/index');?>">角色列表</a>
				<span class="icon-angle-right"></span>
			</li>
			<li><a href="javascript:;">新增角色</a></li>
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
					<span class="hidden-480">角色表单</span>
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
							<form class="form-horizontal" id="mForm" method="post" action="<?php echo U("Role/auth");?>">

							<?php if($list){foreach($list as $k=>$v){ ?> 
							<div class="control-group">
								<div class="controls_1">
									<label class="checkbox">
									<input type="checkbox" class="fst" name="auth[]" id="auth_<?php echo $v['id'];?>" value="<?php echo $v['id'];?>" <?php echo $v['ck']==1 ? 'checked="true"' : '';?>><?php echo $v['name'];?>
									</label>
								

									<?php if($v['child']){ foreach($v['child'] as $kk=>$vv){ ?>
										<div class="controls_2">
											<label class="checkbox">
											<input type="checkbox" class="snd" name="auth[]" id="auth_<?php echo $vv['id'];?>" value="<?php echo $vv['id'];?>" <?php echo $vv['ck']==1 ? 'checked="true"' : '';?>> <?php echo $vv['name'];?>
											</label>
										
										
											<div class="controls_3">
												<?php if($vv['child']){?>
													<?php foreach($vv['child'] as $kkk=>$vvv){?>
														<label class="checkbox">
														<input type="checkbox" class="thr" name="auth[]" id="auth_<?php echo $vvv['id'];?>" value="<?php echo $vvv['id'];?>" <?php echo $vvv['ck']==1 ? 'checked="true"' : '';?>><?php echo $vvv['name'];?>
														</label>

														<?php if($vvv['child']){ foreach($vvv['child'] as $ak=>$al){?>
															<label class="checkbox">
															<input type="checkbox" class="thr" name="auth[]" id="auth_<?php echo $al['id'];?>" value="<?php echo $al['id'];?>" <?php echo $al['ck']==1 ? 'checked="true"' : '';?>><?php echo $al['name'];?>
															</label>
														<?php } }?>
													<?php }?>
												<?php }?>
											</div>
										</div>
									<?php }}?>
								</div>
							</div>
							<?php }}?>
							

							<input type="hidden" name="id" id="id" value="<?php echo $id;?>">
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

	<!-- 日期控件 -->
	<script src="/Public/Admin/js/bootstrap-datepicker.js" type="text/javascript" ></script>
	<script src="/Public/Admin/js/bootstrap-datetimepicker.min.js" type="text/javascript" ></script>
	<script src="/Public/Admin/js/bootstrap-datetimepicker.zh-CN.js" type="text/javascript" ></script>

	<script src="/Public/Admin/layer/layer.js"></script>
	<script src="/Public/Admin/base.js" type="text/javascript" ></script>

	
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
	<script src="/Public/Admin/js/jquery.uniform.min.js" type="text/javascript" ></script>
	<!-- END CORE PLUGINS -->
	<!-- END PAGE LEVEL PLUGINS -->
	<script src="/Public/Admin/js/app.js" type="text/javascript"></script> 
	<!-- BEGIN PAGE LEVEL SCRIPTS -->   
	<script>
		jQuery(document).ready(function() {   
		   // initiate layout and plugins
		   App.init();

			$('.save').click(function(){
				var id = $('#id').val();
				if(id < 1){
					layer.alert('角色信息提交失败', {icon: 5});
					return false;
				}
				layer.load(1);
				$.ajax({
                    url : '<?php echo U("Role/auth");?>',
                    data : $('#mForm').serialize(),
                    dataType : 'json',
                    type : 'post',
                    success : function(ret){
                    	layer.closeAll('loading');
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


			//一级全选，全部选
			$('.fst').click(function(){
				var _this = $(this);
				var _checked = _this.prop('checked');
				var _parent = _this.parent().parent().parent().parent();
				var _checkbox = _parent.find("input[type=checkbox]");
				var _span = _parent.find("span");


				if(_checked){
					_checkbox.attr('checked', true);
					_span.addClass('checked');
				}

				if(!_checked){
					_checkbox.attr('checked', false);
					_span.removeClass('checked');
				}

			});

			//二级全选，全部选
			$('.snd').click(function(){
				var _this = $(this);
				var _checked = _this.prop('checked');
				var _parent = _this.parent().parent().parent().parent();
				var _checkbox = _parent.find("input[type=checkbox]");
				var _span = _parent.find("span");


				if(_checked){
					_span.each(function(){
						$(this).addClass('checked');
					});

					_checkbox.each(function(){
						$(this).attr('checked', true);
					});
					
					var yiji = _parent.parent().find('.fst');

					yiji.attr('checked', true);
					yiji.parent().addClass('checked');
				}

				if(!_checked){
					_span.each(function(){
						$(this).removeClass('checked');
					});

					_checkbox.each(function(){
						$(this).attr('checked', false);
					});
					
				}
			});

			//选中三级的时候，对应的一级和二级页选中
			$('.thr').click(function(){
				var _this = $(this);
				var _checked = _this.prop('checked');
				var _parent = _this.parent().parent().parent().parent();

				if(_checked){
					var yiji = _parent.parent().parent().find('.fst');
					var erji = _parent.parent().find('.snd');

					//选中一级
					yiji.attr('checked', true);
					yiji.parent().addClass('checked');

					erji.attr('checked', true);
					erji.parent().addClass('checked');
				}

			});
		});
	</script>

	<!-- END JAVASCRIPTS -->
	<script type="text/javascript">  var _gaq = _gaq || [];  _gaq.push(['_setAccount', 'UA-37564768-1']);  _gaq.push(['_setDomainName', 'keenthemes.com']);  _gaq.push(['_setAllowLinker', true]);  _gaq.push(['_trackPageview']);  (function() {    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);  })();</script>
</body>
<!-- END BODY -->
</html>