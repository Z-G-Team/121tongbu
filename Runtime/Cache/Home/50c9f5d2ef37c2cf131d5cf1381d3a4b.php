<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>lativ</title>
    <meta name="keywords" content="lativ,好质量,文胸,牛仔裤,衣服,诚衣,皮肤衣">
    <meta name="description" content="lativ 诚衣服饰品牌，提供平价且高质量的衣服，在线可直接购买女装    、男装、童装等，7天无条件退货。">
    <link rel="icon" href="http://www.lativ.com/favicon.ico?0074" type="image/x-icon">
    <link type="text/css" rel="stylesheet" href="/Public/Statics/static/css/bundle.css">
    <link type="text/css" rel="stylesheet" href="/Public/Statics/static/css/staticpage.css">
    <link type="text/css" rel="stylesheet" href="/Public/Statics/static/css/slider-page.css">
    <!-- <link rel="stylesheet" href="/Public/Statics/static/css/mui.min.css"> -->
    <script type="text/javascript" src="/Public/Statics/static/lib/jquery.js"></script>
    <script type="text/javascript" src="/Public/Statics/static/lib/lazyload.js"></script>

    <script src="/Public/Statics/static/js/LativJS.js" type="text/javascript"></script>
    <!--引用框架脚本-->
    <!-- // <script src="/Public/Statics/static/js/mui.min.js"></script> -->
    <script src="/Public/Statics/layer/layer.js"></script>

    
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body>
    <!-- BEGIN MAIN -->
    
    <div class="container_48" id="wrap">
        
        <!-- 1111 -->
        <div>
            <table id="login-2015" class="fancy-center">
                <tr>
                    <td>
                        <form action="/Home/Login" id="loginform" method="post">
                            <div>
                                <input name="" type="hidden" value="">
                                <div class="login-left" style="display: block;">
                                    <ul>
                                        <li class="title fancy-title gapm30">会员登录</li>
                                        <li class="gapm30">
                                            <label for="email" style="display: inline;">邮箱</label>
                                            <input id="email" name="email" type="text" value=""></li>
                                        <li id="pwd" class="gapm30">
                                            <label for="pw" style="display: inline;">密码</label>
                                            <input id="pw" name="pw" type="password" value="">
                                            <a class="font_gray9 forgetpw" href="/Home/ForgetPW" target="_blank">忘记密码？</a>
                                        </li>

                                    </ul>
                                    <input type="button" id="sent" value="登录" style="background-position: 0% 0%;"></div>

                            </div>
                        </form>

                    </td>
                    <td class="v_top">
                        
                        <div class="login-right">
                            <ul>
                                <li class="title fancy-title gapm15">微信扫码登录</li>
                                <li class="login-note gapm5">使用微信扫一扫，不用输入帐号密码。</li>
                                <li>
                                    <div id="weixin-login-qrcode">
                                        <iframe src="https://open.weixin.qq.com/connect/qrconnect?appid=wxbe8e98b000992936&amp;scope=snsapi_login&amp;redirect_uri=https%3a%2f%2fwww.lativ.com%2fHome%2fWeixinLogin&amp;state=c613886276f64975a7a444c246ff5db5&amp;login_type=jssdk&amp;style=black&amp;href=https://www.lativ.com/Content/weixin.css" frameborder="0" scrolling="no" width="170px" height="170px"></iframe>
                                    </div>
                                </li>
                            </ul>
                            <a class="weixin-login-use-tip" href="javascript:void(0)">怎么使用？</a>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <!-- 1111 -->
    </div>
    <div class="footer-container">
        
    </div>



</body>

    <script type="text/javascript" src="/Public/Statics/static/js/common.js"></script>
    <script type="text/javascript" src="/Public/Statics/static/lib/bxslider.js"></script>
    <script type="text/javascript" src="/Public/Statics/static/js/index.js"></script>
<!-- END BODY -->

    <!-- BEGIN SCRIPT -->
    
    <script type="text/javascript">
     $(function ()
        {
            $("#captcha,#captchaChange").click(function ()
            {
                var btn = $('#captcha');
                var src = new String(btn.attr('src')).split('?')[0];
                btn.attr('src', src + '?reload=' + new Date().getTime());
            });

            $('input[name="pw"]').change(function ()
            {
                if ($(this).val())
                { $('label[for="pw"]').hide(); }
                else
                { $('label[for="pw"]').show(); }
            });

            registerLabelInput($('#loginform'));

            $('#email, #pw, #txtCaptcha').keypress(function (e)
            {
                if (e.which == 13) { $("#sent").click(); }
            });

            $('#txtCaptcha').blur(function ()
            {
                var result = true;

                if ($(this).val() == '' || !checkCaptcha('/Validate/CheckCaptcha', $(this)))
                { result = false; }
                return result;
            });

            $('#sent').click(function ()
            {
                if ($('#txtCaptcha').val() == '')
                { $.alerts.alert("请输入验证码！", "温馨提示", function () { $('#txtCaptcha').setfocus(); }); return false; }
                if ($('#email').val() == '')
                { $.alerts.alert("请输入登录邮箱！", "温馨提示", function () { $('#email').setfocus(); }); return false; }
                if ($('#pw').val() == '')
                { $.alerts.alert("请输入密码！", "温馨提示", function () { $('#pw').setfocus(); }); return false; }
                $.ajax({
                        url : '<?php echo U("Login/login");?>',
                        data : $('#loginform').serialize(),
                        dataType : 'json',
                        type : 'POST',
                        success : function(ret){
                            if(ret.status==1){
                                //登陆成功
                                // layer.alert(ret.info, {icon: 6});
                                // window.location.href = '<?php echo U("Index/index");?>';
                                // console.log(window.parent.location.refresh()); 
                                window.parent.location.reload();
                                
                            }

                            if(ret.status==0){
                                $.alerts.alert(ret.info, "温馨提示", null);
                            }
                        }
                    });
            });

            var initErrorMsg = '';
            if (initErrorMsg != '')
            {
                $('#txtCaptcha').val('');
                $.alerts.alert(Err(initErrorMsg), "温馨提示", null);
                
            }
        });

    </script>


</html>