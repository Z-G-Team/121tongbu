<?php if (!defined('THINK_PATH')) exit();?><html>
<head id="Head1">
    <title></title>
    <meta charset="UTF-8">
    <link type="text/css" rel="stylesheet" href="/Public/Statics/static/css/bundle_empty.css">
    <script src="/Public/Statics/static/js/LativJS.js" type="text/javascript"></script>
    <!--[if lte IE 9]>
    <link type="text/css" rel="stylesheet" href="/content/ie9.css?2733" />
    <![endif]-->
    <!--[if lte IE 8]>
    <link type="text/css" rel="stylesheet" href="/content/ie8.css?3419" />
    <![endif]-->
</head>
<body>
    <div>
        <form action="" id="registerform" class="registerform">
            <div class="title fancy-title gapm30 tc">会员注册</div>
            <ul>
                <li class="gapm30">
                    <label for="user_name" style="display: inline;">用户名</label>
                    <input id="user_name" class="input" name="user_name" type="text" value=""></li>
                <li class="gapm30">
                    <label for="email" style="display: inline;">邮箱</label>
                    <input id="email" class="input" name="email" type="text" value=""></li>
                <li class="gapm30">
                    <label for="pw" style="display: inline;">密码</label>
                    <input autocomplete="off" id="pw" class="input" class="input" name="pw" type="password" value=""></li>
                <li class="gapm30">
                    <label for="repw" style="display: inline;">确认密码</label>
                    <input autocomplete="off" id="repw" class="input" name="repw" type="password" value=""></li>
            </ul>
            <div class="tc">
                <input type="button" id="sent" value="注册" style="background-position: 0% 0%;"></div>
        </form>
    </div>
    <script type="text/javascript" src="/Public/Statics/static/js/setfocus.js"></script>
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

            $('input[name="user_name"]').change(function ()
            {
                if ($(this).val())
                { $('label[for="user_name"]').hide(); }
                else
                { $('label[for="user_name"]').show(); }
            });

            $('input[name="repw"]').change(function ()
            {
                if ($(this).val())
                { $('label[for="repw"]').hide(); }
                else
                { $('label[for="repw"]').show(); }
            });

            registerLabelInput($('.registerform'));

            $('#email, #pw, #txtCaptcha','#user_name').keypress(function (e)
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
                // if ($('#txtCaptcha').val() == '')
                // { $.alerts.alert("请输入验证码！", "温馨提示", function () { $('#txtCaptcha').setfocus(); }); return false; }
                
                if ($('#user_name').val() == '')
                { $.alerts.alert("请输入用户名！", "温馨提示",      function() { $('#user_name').setfocus(); }); return false; }

                if ($('#email').val() == '')
                { $.alerts.alert("请输入登录邮箱！", "温馨提示", function () { $('#email').setfocus(); }); return false; }

                if ($('#pw').val() == '')
                { $.alerts.alert("请输入密码！", "温馨提示", function () { $('#pw').setfocus(); }); return false; }

                if ($('#pw').val() != $('#repw').val())
                { $.alerts.alert("两次密码不相同，请确认", "温馨提示", function () { $('#pw').setfocus(); }); return false; }
                

                $.ajax({
                    url : '<?php echo U("Login/save");?>',
                    data : $('#registerform').serialize(),
                    dataType : 'json',
                    type : 'POST',
                    success : function(ret){
                        $.alerts.alert(ret.info, "温馨提示", null);
                        if(ret.status==1){
                            //登陆成功
                            // layer.alert(ret.info, {icon: 6});
                            // window.location.href = '<?php echo U("Index/index");?>';
                            // console.log(window.parent.location.refresh()); 
                            window.location.href = '<?php echo U("Index/index");?>';

                            window.location.reload();
                            
                        }

                        if(ret.status==0){
                            // layer.alert(ret.info, {icon: 5});
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
</body>
</html>