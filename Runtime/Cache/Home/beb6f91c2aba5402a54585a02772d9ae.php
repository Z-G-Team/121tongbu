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
            
            
            <div class="grid_48  marginl">
                <div class="inquire">
                    
                    <div id="listcontrol">
                        <table>
                            <thead>
                                <tr>
                                    <th>下单时间</th>
                                    <th>订单号</th>
                                    <th>支付方式</th>
                                    <th>订单历程</th>
                                    <th>预计出货日</th>
                                    <th>订单总额</th>
                                    <th>操作</th>
                                    <th>联系客服</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php if(is_array($lists)): $i = 0; $__LIST__ = $lists;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><tr>
                                        <td>
                                            <?php echo ($item['add_time']); ?>
                                        </td>
                                        <td>
                                            <a href="<?php echo U('Member/orderInfo', array('id'=>$item['id']));?>"><?php echo ($item['trade_sn']); ?></a>
                                        </td>
                                        <td>
                                            <?php echo ($PAY_MODE[$item['pay_mode']]); ?>
                                        </td>
                                        <td>
                                            <?php  if($item['status']==10){ echo '待付款'; } if($item['status']==30){ echo '待收货'; } if($item['status']==60){ echo '交易成功'; } if($item['status']==80 || $item['status']==90){ echo '交易关闭'; } if($item['status']==20){ if($item['is_refunded']=='0'){ echo '待发货'; } if($item['is_refunded']=='10'){ echo '部分退款中'; } if($item['is_refunded']=='19'){ echo '部分退款完成'; } if($item['is_refunded']=='30'){ echo '全部退款中'; } if($item['is_refunded']=='39'){ echo '全部退款完成'; } } ?>
                                        </td>
                                        <td>
                                            <?php if($item['status']==20 && $item['is_refunded']=='0'){ echo date('Y-m-d ', strtotime('pay_time')+24*60*60); }?>
                                        </td>
                                        <td>
                                            ￥ <?php echo ($item['payment_amount']); ?>
                                        </td>
                                        <td>
                                            <?php if($item['status']==20 && $item['is_refunded']=='0'){ echo '<a href="javascript:;">申请售后</a>'; }?>

                                            <?php if($item['status']==30){ echo '<a href="javascript:;">申请售后</a>'; echo '<a class="shouhhuo" data-id="'.$item['id'].'" href="javascript:;">确认收货</a>'; }?>

                                            <?php if($item['status']==60){ echo '<a href="">评价</a>'; }?>

                                        </td>
                                        <td>
                                            <a class="btn_inq" href="<?php echo U('Member/kefu');?>">客服咨询</a>&nbsp;
                                            
                                        </td>
                                    </tr><?php endforeach; endif; else: echo "" ;endif; ?>
                                
                                
                            </tbody>
                            <tfoot>
                            <tr>
                                <th class="alignR" colspan="8">
                                    <div class="pager">
                                        
                                        <em>共<?php echo count($lists);?>笔订单 </em>
                                    </div>
                                </th>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
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
       $('.shouhhuo').click(function(){
            var id = I('id', '');
            if(!id){
                return false;
            }
            $.ajax({
                url : '<?php echo U("Member/shouhuo");?>',
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