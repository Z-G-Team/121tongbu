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
                    <li id="ordermenu" class="current">
                        <a href="<?php echo U('Member/order');?>">
                            <span>申请退货 / 我的订单 / 联系客服</span>
                        </a>
                    </li>
                    <li id="profile" class="lastli ">
                        <a href="<?php echo U('Member/index');?>">
                            <span>个人信息 / 修改密码</span>
                        </a>
                    </li>
                </ul>
                <div class="clear">
                </div>
            </div>
            
            
            <div class="grid_48 alpha omega first marginl">
                <div class="roundbox-up">
                </div>
                <div class="roundbox-center">
                    <div id="faqcategory">
                        <ul>
                            <li class="title first-child">
                                <span>常见问题指南</span>
                            </li>
                            
                            <li>
                                <label class="submenu">
                                订单问题</label>
                            </li>
                            <li>
                                <label class="submenu">
                                退货问题</label>
                            </li>
                            
                            <li class="title current last-child">
                                <label>联系表单</label>
                            </li>
                        </ul>
                    </div>
                    <div id="faqlist">
                        <div id="订单问题" class="off">
                            <ul class="details">
                                <li>
                                    <label>
                                    可以取消或修改订单？</label>
                                    <div class="content">
                                        <p>
                                        &nbsp;下单后就无法修改或合并，请您在订单状态为「新订单」时，进行「取消订单」，订单取消后，再重新购买您需要的商品。</p>
                                        <p>
                                            订单状态为「待发货」时，请您点击「<a href="<?php echo U('Member/order');?>">
                                                <u>我的订单</u>
                                            </a>」里的「询问」联系客服人员，
                                        </p>
                                        <p>
                                            我们将尽快为您处理，但不能确保是否可以拦件成功， 如无法取消订单，当商品配送上门时还请您拒收，谢谢您。
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <label>
                                    如何加急出货的时间？</label>
                                    <div class="content">
                                        <p>
                                            请您至「<a href="<?php echo U('Member/order');?>"> <u>我的订单</u> </a>」点击「询问」告知客服人员，或拨打客服热线021-3891-9868，我们会尽快协助您。
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <label>
                                    如何查询配送的进度？</label>
                                    <div class="content">
                                        <p>
                                            您可至「<a href="<?php echo U('Member/order');?>">
                                                <u>我的订单</u>
                                            </a>」点击该笔订单的「配送进度」查询派送情况。 &nbsp;
                                        </p>
                                    </div>
                                </li>
                                
                                <li>
                                    <label>
                                    收到货后，发现货物破损、少件，怎么办？</label>
                                    <div class="content">
                                        
                                        <p>
                                            &nbsp;收到订购的商品后，请您对照发货单核对商品，如果发现商品缺少、配送错误、包装破损…等问题时，
                                        </p>
                                        <p>
                                            请您至「<a href="<?php echo U('Member/order');?>">
                                                <u>我的订单</u>
                                            </a>」以「询问」功能告知客服人员，或拨打客服热线021-3891-9868，我们会尽快协助您。
                                        </p>
                                    </div>
                                </li>
                                
                                <li>
                                    <label>
                                    为什么支付了半天都没有反应？</label>
                                    <div class="content">
                                        
                                        <p>
                                            出现此情况，请您刷新网页或关闭浏览器后，重新进行操作。
                                        </p>
                                    </div>
                                </li>
                                
                                <li>
                                    <label>
                                    支付失败去哪里重新支付？</label>
                                    <div class="content">
                                        <p>
                                            请您到「<a href="<?php echo U('Member/order');?>">
                                                <u>我的订单</u>
                                            </a>」在该笔订单的右侧点击「前往付款」进行付款即可。
                                        </p>
                                    </div>
                                </li>
                                
                                <li>
                                    <label>
                                    支付成功却显示未支付？</label>
                                    <div class="content">
                                        <p>
                                        可能因数据传输或其他原因，支付平台的数据可能会延迟同步到 lativ 订单系统，</p>
                                        <p>
                                            请耐心等待并留意您的订单状况。
                                        </p>
                                    </div>
                                </li>
                                
                                <li>
                                    <label>
                                    为什么已经取消订单，但仍被扣款？</label>
                                    <div class="content">
                                        
                                        <p>
                                            取消订单后大概 3-5 天会自动返还已支付款项，再请您留意信用卡、银行卡或支付宝账户，
                                        </p>
                                        <p>
                                            如有疑虑，您可以至「<a href="<?php echo U('Member/order');?>">
                                                <u>我的订单</u>
                                            </a>」以「询问」留言给客服人员，<br>
                                            或拨打客服热线 &nbsp;021-3891-9868，我们会尽快协助您解决。
                                        </p>
                                    </div>
                                </li>
                                
                                <li>
                                    <label>
                                    为什么看不到客服回复的内容？</label>
                                    <div class="content">
                                        
                                        <p>
                                            &nbsp;请您由「<a href="<?php echo U('Member/order');?>">
                                                <u>我的订单</u>
                                            </a>」登入，并点击该笔订单右侧的「记录」，即可查看客服人员的回复内容。
                                        </p>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                        
                        <div id="退货问题" class="off">
                            <ul class="details">
                                
                                <li>
                                    <label>
                                    收到商品后，发现只有部分不适合，需要整张订单退货吗？</label>
                                    <div class="content">
                                        <p>
                                            办理退货不需整张订单全退，可以仅退回不需要的商品。
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <label>
                                    可以直接到门市或公司退货吗？</label>
                                    <div class="content">
                                        <p>
                                            目前 lativ 不开放亲临公司办理退换货服务，请您在线申请退货，
                                        </p>
                                        <p>
                                            并将退货商品交由快递人员收回或自助寄回，谢谢您。
                                        </p>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                        
                        <div id="联系表单" class="on">
                            <form action="" id="faqform" method="post">
                                <div class="faqnote">
                                    <h2>提交问题</h2>
                                    
                                    <p class="first-child">您提交的问题我们将会尽快处理。
                                    </p>
                                    
                                    <br>
                                    <br>
                                    <ul class="faqcontent">
                                        <li class="first-child">
                                            <label>问题类型</label>
                                            <select id="type" name="type">
                                                <option value="">请选择问题类型</option>
                                                <?php if(is_array($ASK_TYPE)): $i = 0; $__LIST__ = $ASK_TYPE;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><option value="<?php echo ($key); ?>"><?php echo ($item); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
                                            </select>
                                            <span id="msg-question-type" class="field-validation-error" style="display: none;">
                                                <strong>您尚未选择问题类型</strong>
                                            </span>
                                        </li>
                                        <li class="broke">
                                            <label>问题内容</label>
                                            <textarea cols="20" id="mcontent" maxlength="1000" name="mcontent" placeholder="您可先参考左侧选单之【常见问题指南】，可能可以优先为您解答！" rows="2" style="padding: 6px 8px;"></textarea>
                                            <span id="msg-question-content" class="field-validation-error" style="display: none;">
                                                <strong>您尚未填写内容</strong>
                                            </span>
                                        </li>
                                    </ul>
                                    <div class="alignC">
                                        <input id="send" type="submit" class="sbtn" value="提交">
                                    </div>
                                </div>
                            </form>
                            <div class="clear">
                            </div>
                        </div>
                    </div>
                    <div class="clear">
                    </div>
                </div>
                <div class="roundbox-bottom">
                </div>
            </div>
            <div class="clear">
            </div>
        </div>
        <script type="text/javascript">
                $(function ()
                {
                    $('#ordermenu').addClass('current');
                    $('[id^=question]').change(function () { ValidateInput($(this).attr('id')); });

                    $('#faqcategory label').click(function ()
                    {
                        var $label = $(this);
                        var $li = $label.parent();
                        if ($li.prop('class').indexOf('current') == -1)
                        {
                            
                            $('#faqcategory li.current').removeClass('current');
                            $li.addClass('current');
                            if ($li.prop('class').indexOf('last-child') == -1 && $li.prop('class').indexOf('annitem') == -1)
                            {
                                $('#faqcategory li.first-child').addClass('current');
                            }

                            $('#faqlist div.on').prop('class', 'off');

                            var $div = $('div[id="' + $.trim($label.text()) + '"]');
                            var hasClass = false;

                            $div.find('li').each(function ()
                            {
                                if ($(this).prop('class').indexOf('on') > -1)
                                {
                                    hasClass = true;
                                    return false;
                                }
                            });

                            $div.prop('class', 'on');

                            if (!hasClass)
                            { $div.find('li:first div.content').slideDown(200).parent().prop('class', 'on'); }

                            $('#msg-question-content, #msg-question-type').hide();
                        }
                    });

                    $('#faqlist label').click(function ()
                    {
                        autoCollapse($(this));
                    });
                    function autoCollapse (s){
                        var $s = s;
                        $('#faqlist').find('.content').slideUp().removeClass('on');
                        $s.siblings('.content').slideDown().addClass('on');
                    }

                    setTimeout(function () { $('#faqlist div.on li:first div.content').slideDown(200).parent().addClass('on'); }, 100);
                });

                function ValidateInput(id)
                {
                    var val = $.trim($('#' + id).val());

                    if (!val)
                    {
                        $('#msg-' + id).show();
                        return false;
                    }
                    else
                    {
                        $('#msg-' + id).hide();
                        return true;
                    }
                }
            </script>
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
        $('#send').click(function(){
            var type = $('#type').val();
            var content = $('#mcontent').val();

            if(!type){
                $.alerts.alert('请选择问题类型', "温馨提示", null);
                 return false;
            }
            if(!content){
                $.alerts.alert('请填写提问内容', "温馨提示", null);
                return false;
            }

            $.ajax({
                url : '<?php echo U("Member/ask");?>',
                data : $('#faqform').serialize(),
                dataType : 'json',
                type : 'post',
                success : function(ret){
                    // alert(ret.info);
                    $.alerts.alert(ret.info, "温馨提示", null);
                    if(ret.status==1){
                        window.location.href='<?php echo U("Member/order");?>';
                    }else{
                        
                        
                    }
                }
            });


            return false;
        });
    </script>


</html>