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
            
            <div class="orderdetail">
                <p class="prefix_6">您查询的订单号：<?php echo ($info['trade_sn']); ?></p>
                <div class="grid_48 round_box order prefix_6">
                    <div class="roundbox_up_3"></div>
                    <div class="roundbox_center_3">
                        <h2 class="order_detail">订购商品清单</h2>
                        <table class="shop_list order_table alignR">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>商品名称</th>
                                    <th class="alignC wd2">优惠活动</th>
                                    <th class="alignC wd75">数量</th>
                                    <th class="alignC wd1">单价</th>
                                    <th class="alignR wd1">优惠价</th>
                                    <th class="alignR wd1">小计</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php if(is_array($lists)): $i = 0; $__LIST__ = $lists;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><tr>
                                        <td class="wd50 alignR">
                                            <a href="<?php echo U('Product/info', array('id'=>$item['goods_id']));?>" calss="soldout" target="_blank">
                                                <img src="<?php echo ($item['goods_img']); ?>" alt="商品缩图" width="60px" height="60px"/>
                                            </a>
                                        </td>
                                        <td class="wd3 alignL">
                                            <p>
                                                <a href="" calss="soldout" target="_blank">
                                                    <span>
                                                        <strong>
                                                        <?php echo ($item['goods_name']); ?>
                                                        </strong>
                                                    </span>
                                                </a>
                                                <br/><?php echo ($item['goods_spec_name']); ?>
                                            </p>
                                        </td>
                                        <td class="alignC"></td>
                                        <td class="alignC"><?php echo ($item['goods_num']); ?>
                                        </td>
                                        <td class="alignC">
                                            <em><?php echo ($item['goods_price']); ?></em>
                                        </td>
                                        <td class="alignR">
                                            <em><?php echo ($item['payment_price']); ?></em>
                                        </td>
                                        <td class="alignR">
                                            <?php echo $item['payment_price'] * $item['goods_num']; ?>
                                        </td>
                                    </tr><?php endforeach; endif; else: echo "" ;endif; ?>
                                
                            </tbody>
                            <tfoot class="alignR">
                            <tr class="tr_top">
                                <td colspan="6">商品金额小计</td>
                                <td>
                                    <span id="total">¥&nbsp;<?php echo ($info['payment_amount']); ?></span>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="6">运费</td>
                                <td>¥&nbsp;0
                                </td>
                            </tr>
                            <tr class="tr_last_pay">
                                <td colspan="5"></td>
                                <td class="td_last">总计</td>
                                <td class="td_last">¥&nbsp;<?php echo ($info['payment_amount']); ?>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div class="roundbox_down_3"></div>
                </div>
                <div class="clear"></div>
                <div class="grid_48 round_box order prefix_6">
                    <div class="roundbox_up_3"></div>
                    <div class="roundbox_center_3">
                        <h2 class="payway">订单详情</h2>
                        <ul class="underline">
                            <li>
                                <h3>支付方式</h3>
                                <?php echo ($PAY_MODE[$info['pay_mode']]); ?>
                                
                            </li>
                            <li>
                                <h3>订购姓名</h3>
                                <?php echo ($address['receiver_name']); ?>
                                
                            </li>
                            <li>
                                <h3>收货地址</h3>
                                <?php echo ($dq); ?>
                                <?php echo ($address['receiver_address']); ?>
                                
                            </li>
                            <li>
                                <h3>手机号码</h3>
                                <?php echo ($address['receiver_phone']); ?>
                                
                            </li>
                        </ul>
                    </div>
                    <div class="roundbox_down_3"></div>
                </div>
                <div class="clear"></div>
                <div class="grid_48 round_box order prefix_6">
                    <div class="roundbox_up_3"></div>
                    <div class="roundbox_center_3">
                        <h2 class="attention">温馨提示</h2>
                        <ul>
                            <li>1. 订单状态已进入发货流程，恕无法取消或修改订单内容。</li>
                            <li>
                                2. 您可随时登录网站，进入「<a href="/Member/order" target="_blank">我的订单</a>
                                」查询订单发货进度。
                            </li>
                            <li>3. 如订购的商品无法发货或缺货，我们会主动联系您并取消订购商品。</li>
                            <li>
                                4. 如有订单相关的问题，请至「<a href="/Member/order" target="_blank">我的订单</a>
                                」点击「客服咨询」联系客服。
                            </li>
                        </ul>
                    </div>
                    <div class="roundbox_down_3"></div>
                </div>
                <div class="clear"></div>
                <div class="btn-back">
                    <a href="/Member/order">返回上一页</a>
                </div>
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
        $('#send').click(function(){
            var type = $('#type').val();
            var content = $('#mcontent').val();

            if(!type){
                alert('请选择问题类型'); return false;
            }
            if(!content){
                alert('请填写提问内容'); return false;
            }

            $.ajax({
                url : '<?php echo U("Member/ask");?>',
                data : $('#faqform').serialize(),
                dataType : 'json',
                type : 'post',
                success : function(ret){
                    alert(ret.info);
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