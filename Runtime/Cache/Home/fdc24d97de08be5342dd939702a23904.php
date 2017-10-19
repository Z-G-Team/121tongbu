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
        <!-- 头部文件加载 START -->
        <div id="wrapper" class="wrapper">
    <div id="navWrapper">
    
        <a class="logoImg" href="<?php echo U('Index/index');?>" id="logoUrl"></a>
        <div id="navUtilities">
            <table>
                <tbody>
                    <tr>
                        <td class="last-child">
                            <form action="<?php echo U('Search/index');?>" method="get" id="search-form" autocomplete="off">
                                <input id="keyWord" maxlength="50" name="keyWord" type="text" value="" placeholder="请输入关键词">
                                <input type="submit" class="search-btn" value=""></form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- 导航条 start -->
        <ul id="nav">
        	<?php if(is_array($nav_list)): $i = 0; $__LIST__ = $nav_list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><li>
                    <a rel="<?php echo ($item['name']); ?>" href="<?php echo ($item['url']); ?>"><?php echo ($item['name']); ?></a> <em></em>
                </li><?php endforeach; endif; else: echo "" ;endif; ?>

            <?php if(is_array($top_category)): $i = 0; $__LIST__ = $top_category;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><li>
                    <a rel="<?php echo ($item['name']); ?>" href="<?php echo U('Product/lists', array('id'=>$item['id']));?>"><?php echo ($item['name']); ?></a> <em></em>
                </li><?php endforeach; endif; else: echo "" ;endif; ?>
            <li class="menu_style">
                <a rel="Style" href="http://www.lativ.com/Style" onclick="">穿搭</a>
            </li>
        </ul>
        <!-- 导航条 end -->

        <div id="head">
            <ul class="topnav omega">
                <!-- <li class="epaper">
                    <a class="fancyEpaper" href="https://www.lativ.com/Home/EPaper">订阅邮件</a>
                </li> -->
                <li class="member">
                    <span id="stateByLogin" class="login">
                        <?php if(defined('UID')){?>
                            欢迎您&nbsp;<a href="<?php echo U('Member/index');?>"><?php echo USER_NAME; ?></a>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="javascript:;" id="logout">退出</a>
                            <script>
                            $('#logout').click(function(){
                                $.ajax({
                                    url : '<?php echo U("Login/logOut");?>',
                                    data : '',
                                    dataType : 'json',
                                    type : 'post',
                                    success : function(ret){
                                        $.alerts.alert(ret.info, "温馨提示", null);
                                        if(ret.status==1){
                                            window.location.reload();
                                        }
                                    }
                                });
                            });
                            </script>
                        <?php }else{ ?>
                            <a class="fancyLogin" href="<?php echo U('Login/login');?>">会员登录</a>

                            <a  href="<?php echo U('Login/register');?>">注册</a>
                        <?php }?>
                        

                    </span>
                </li>
                <li>
                    <a class="fancyLogin" href="<?php echo U('Cart/index');?>">
                        <span id="tradeCount">0</span>
                        个商品
                    </a>
                </li>
            </ul>
        </div>
        <div class="clear"></div>
    </div>
</div>
        <!-- 头部文件加载 END -->
        <!-- header end -->
        <div id="content" class="container_48">
            <div id="login_nav">
                <ul class="grid_48">
                    <li id="keep-list">
                        <a href="<?php echo U('Member/collect');?>">
                            <span>我的收藏</span>
                        </a>
                    </li>
                    <li id="ordermenu">
                        <a href="<?php echo U('Member/order');?>">
                            <span>申请退货 / 我的订单 / 联系客服</span>
                        </a>
                    </li>
                    <li id="profile" class="lastli current">
                        <a href="<?php echo U('Member/index');?>">
                            <span>个人信息 / 修改密码</span>
                        </a>
                    </li>
                </ul>
                <div class="clear">
                </div>
            </div>
            
            <div class=""  method="post" novalidate="novalidate">
                <form action="" id="forms" method="post">
                    <input name="id" id="id" type="hidden" value="<?php echo ($info['id']); ?>">
                    <div class="grid_48  order  marginl">
                        <div class="roundbox_up_3">
                        </div>
                        <div class="roundbox_center_3">
                            <h2 class="modify">修改我的资料</h2>
                            <ul>
                                <li class="firstli">
                                    <span class="mred">注：部分资料以星号代替或隐藏，保护您的个人信息</span>
                                </li>
                                <li>
                                    <h3>
                                    <label>用&nbsp;&nbsp;户&nbsp;&nbsp;名</label>
                                    </h3>
                                    <input name="user_name" id="user_name" original="用户名" type="text" value="<?php echo ($info['user_name']); ?>">
                                    <span class="remind">
                                        <strong></strong>
                                    </span>
                                    
                                </li>

                                <li>
                                    <h3>
                                    <label>中文姓名</label>
                                    </h3>
                                    <input name="real_name" id="real_name" original="姓名" type="text" value="<?php echo ($info['real_name']); ?>">
                                    <span class="remind">
                                        <strong>您必须输入中文全名。</strong>
                                    </span>
                                    
                                </li>

                                <li>
                                    <h3>
                                    <label>手机号码</label>
                                    </h3>
                                    <input name="phone" id="phone" original="姓名" type="text" value="<?php echo ($info['phone']); ?>">
                                    <span class="remind">
                                        <strong>手机号码</strong>
                                    </span>
                                    
                                </li>

                                <li>
                                    <h3>
                                    <label>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</label>
                                    </h3>
                                    <input id="password" maxlength="60" name="password" ori="" type="password" value="">
                                    <span class="remind">
                                        <strong>为空则不修改</strong>
                                    </span>
                                    
                                </li>

                                <li>
                                    <h3>
                                    <label>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱</label>
                                    </h3>
                                    <input id="email" maxlength="60" name="email" ori="" type="text" value="<?php echo ($info['email']); ?>">
                                    
                                </li>
                                
                            </ul>
                        </div>
                        <!-- end of roundbox-center -->
                        <div class="roundbox_down_3">
                        </div>
                    </div>
                    <!-- end of roundbox -->
                    <div class="clear">
                    </div>
                </form>
            </div>
            <!-- end of login_main -->
            <p class="alignC marginb">
                <input id="isWinxinType" name="isWinxinType" type="hidden" value="True">
                <input id="sent" class="sent_new" type="submit" value="保存" style="background-position: left top;">
            </p>
            
            <div class="clear">
            </div>
        </div>

    </div>
    <div class="footer-container">
        <!-- 加载底部 START -->
        <div id="wrap">
    <div class="footer-bottom cf">
        <div class="fl">
            <?php if(is_array($but_nav)): $i = 0; $__LIST__ = $but_nav;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><a class="link" href="<?php echo ($item['url']); ?>"><?php echo ($item['name']); ?></a><?php endforeach; endif; else: echo "" ;endif; ?>
        </div>
        <div class="fr">
            <a class="link" href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&amp;entyId=20150330152028883" target="_blank">上海工商</a>
            <a class="link" href="http://www.miibeian.gov.cn/" target="_blank">沪ICP备15013396号</a>
            <span class="link">© 2016 lativ</span>
        </div>
    </div>
</div>
        <!-- 加载底部 END -->
    </div>



</body>

    <script type="text/javascript" src="/Public/Statics/static/js/common.js"></script>
    <script type="text/javascript" src="/Public/Statics/static/lib/bxslider.js"></script>
    <script type="text/javascript" src="/Public/Statics/static/js/index.js"></script>
<!-- END BODY -->

    <!-- BEGIN SCRIPT -->
    
    <script>
        $('#sent').click(function(){
            var user_name = $('#user_name').val();
            var real_name = $('#real_name').val();
            var phone = $('#phone').val();
            var email = $('#email').val();

            if(!user_name){
                alert('请填写用户名'); return false;
            }

            if(!real_name){
                alert('请填写姓名'); return false;
            }

            if(!phone){
                alert('请填写手机号码'); return false;
            }

            if(!email){
                alert('请填写邮箱'); return false;
            }

            $.ajax({
                url : '<?php echo U("Member/save");?>',
                data : $('#forms').serialize(),
                dataType : 'json',
                type : 'post',
                success : function(ret){
                    alert(ret.info);
                    if(ret.status==1){
                        window.location.reload();
                    }else{
                        
                        
                    }
                }
            });
        });
    </script>


</html>