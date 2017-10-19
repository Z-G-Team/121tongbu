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
	
	
	<link href="/Public/Admin/css/login.css" rel="stylesheet" type="text/css"/>

</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class="<?php echo ($pageId); ?>">
	<!-- BEGIN LOGO -->
	
	<div class="logo">

	</div>
	<!-- END LOGO -->
	<!-- BEGIN LOGIN -->
	<div class="content">
		<!-- BEGIN LOGIN FORM -->
		<form class="form-vertical login-form ajax" action="<?php echo U("Login/login");?>" method="post">
			<h3 class="form-title">账号登陆</h3>
			<div class="alert alert-error hide">
				<button class="close" data-dismiss="alert"></button>
				<span>请输入用户名和密码</span>
			</div>
			<div class="control-group">
				<!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
				<label class="control-label visible-ie8 visible-ie9">用户名</label>
				<div class="controls">
					<div class="input-icon left">
						<i class="icon-user"></i>
						<input class="m-wrap placeholder-no-fix" type="text" placeholder="用户名" name="username" id="username" />
					</div>
				</div>
			</div>
			<div class="control-group">
				<label class="control-label visible-ie8 visible-ie9">密码</label>
				<div class="controls">
					<div class="input-icon left">
						<i class="icon-lock"></i>
						<input class="m-wrap placeholder-no-fix" type="password" placeholder="密码" name="password" id="password" />
					</div>
				</div>
			</div>

			<div class="form-actions">
				<!-- <label class="checkbox">
				<input type="checkbox" name="remember" value="1"/> 记住我
				</label> -->
				<button type="submit" id="gologin" class="btn green pull-right">
				登陆 <i class="m-icon-swapright m-icon-white"></i>
				</button>            
			</div>
		</form>

		<!-- END LOGIN FORM -->
	</div>
	<!-- END LOGIN -->
	<!-- BEGIN COPYRIGHT -->
	<div class="copyright">
		2016 &copy; copyright by 武器大师.
	</div>
	<!-- END COPYRIGHT -->

	
	
	
	

	
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
	<script src="/Public/Admin/layer/layer.js"></script>
	<script src="/Public/Admin/base.js" type="text/javascript" ></script>

	<!-- END CORE PLUGINS -->

	
	<script>
		// jQuery(document).ready(function() {     
		//   App.init();
		//   Login.init();
		// });

	$(function(){
        //登录
        $('#gologin').click(function(){
            var username = $('#username').val();
            var password = $('#password').val();
            //用户名简单验证
            if(!username){
                layer.alert('请输入用户名', {icon: 5});
                return false;
            }
            //用户密码简单验证
            if(!password){
                layer.alert('请输入登录密码', {icon: 5});
                return false;
            }

            $.ajax({
                url : '<?php echo U("Login/login");?>',
                data : {username : username, password : password},
                dataType : 'json',
                type : 'post',
                success : function(ret){
                    if(ret.status==0){
                        layer.alert(ret.info, {icon: 5});
                    }
                    //登录成功直接跳转
                    if(ret.status==1){
                        //登录成功，跳转到后台首页
                        window.location.href = "<?php echo U('Index/index');?>";
                    }
                }
            })

            return false;
        });
    })
	</script>

	<!-- END JAVASCRIPTS -->
	<script type="text/javascript">  var _gaq = _gaq || [];  _gaq.push(['_setAccount', 'UA-37564768-1']);  _gaq.push(['_setDomainName', 'keenthemes.com']);  _gaq.push(['_setAllowLinker', true]);  _gaq.push(['_trackPageview']);  (function() {    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);  })();</script>
</body>
<!-- END BODY -->
</html>