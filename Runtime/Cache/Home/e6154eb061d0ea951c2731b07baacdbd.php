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
        <div id="content" class="container_48">
            <div>
                <ol id="step" class="prefix_16 alpha grid_36 omega">
                    <li class="step1"><span class="current">查看购物车</span></li>
                    <li class="step2"><span>确认订单信息</span></li>
                    <li class="step3"><span>成功提交订单</span></li>
                </ol>
                <div class="clear"></div>
            </div>
            
            <div id="shoppingcart" class="grid_48 alpha omega round_box prefix_6">
                <div class="roundbox_up_3"></div>
                <div class="roundbox_center_3">
                    <table id="shop_list" class="shop_list">
                        <thead>
                            <tr>
                                <th></th>
                                <th>商品名称</th>
                                <th class="alignC wd75">单价</th>
                                <th class="wd75"></th>
                                <th class="alignC wd75">数量</th>
                                <th class="alignR wd1">小计</th>
                                <th class="alignR wd85 last-child">删除</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php if(is_array($lists)): $i = 0; $__LIST__ = $lists;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><tr>
                                    <td class="wd50 alignR">
                                        <a href="<?php echo U('Product/info', array('id'=>$item['goods_id']));?>" class="soldout" target="_blank"><img src="<?php echo ($item['goods_image']); ?>" alt="商品缩图" width="60px" height="60px"></a>
                                    </td>
                                    <td class="alignL goodsinfo">
                                        <p>
                                            <a href="<?php echo U('Product/info', array('id'=>$item['goods_id']));?>" class="soldout" target="_blank"><span>
                                                <strong><?php echo ($item['goods_name']); ?></strong></span></a>
                                            
                                            <br>
                                            <?php echo ($item['spec_name']); ?>
                                            
                                        </p>
                                    </td>
                                    <td class="alignC">
                                        
                                        <em class="itemtotal " data-price="<?php echo ($item['price']); ?>" data-original="<?php echo ($item['price']); ?>">￥&nbsp;<?php echo ($item['price']); ?></em>
                                        
                                    </td>
                                    <td></td>
                                    <td class="alignC amount">
                                        
                                        <a class="minus" href="javascript:void(0)"></a>

                                        <input class="buycount" type="text" value="<?php echo ($item['quantity']); ?>" data-stock="<?php echo ($item['stock']); ?>" data-amount="<?php echo ($item['quantity']); ?>" disabled="disabled">

                                        <a class="plus" href="javascript:void(0)"></a>
                                        
                                    </td>
                                    <td class="alignR subtotal" data-price="<?php echo ($item['price']); ?>" data-amount="<?php echo ($item['quantity']); ?>">￥&nbsp;<?php echo $item['price']*$item['quantity'];?></td>
                                    <td class="alignR last-child">
                                        <a href="javacript:;" class="cartDelete" data-id="<?php echo ($item['id']); ?>"><img src="/Public/Statics/static/images/btn_delete.gif" alt="delete"></a>
                                    </td>
                                </tr>


                                <input id="hasFreeActivity" name="hasFreeActivity" type="hidden" value="False">
                                <input id="hasBuyOverActivity" name="hasBuyOverActivity" type="hidden" value="False"><?php endforeach; endif; else: echo "" ;endif; ?>
                            
                            
                            
                        </tbody>
                        <tfoot class="alignR">
                        <tr class="tr_top">
                            <td colspan="4"></td>
                            <td colspan="2" id="totalcount">共&nbsp;<em><?php echo ($total); ?></em>&nbsp;件商品&nbsp;商品金额</td>
                            <td id="total" data-total="638.00">￥&nbsp;<?php echo ($total_price); ?></td>
                        </tr>
                        <tr>
                            
                            <td colspan="4"></td>
                            <td colspan="2">运费</td>
                            <td id="pdcost" data-cost="0">￥&nbsp;0</td>
                        </tr>
                        <tr>
                            <td id="shippingfee-remind-txt" colspan="4"></td>
                            <td colspan="2" id="totalprice">总金额<span id="shippingfee-remind" style="display: none;">&nbsp;(<label>再买<em></em>元免运费</label>)</span></td>
                            <td id="orderprice" data-amount="<?php echo ($total_price); ?>">￥&nbsp;<?php echo ($total_price); ?></td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
                <!-- end of roundbox-center -->
                <div class="roundbox_down_3"></div>
            </div>
            <!-- end of roundbox -->
            <div class="clear"></div>
                <form action="" id="orderform" method="post" novalidate="novalidate">
                    <div class="grid_48 alpha omega round_box order prefix_6">
                        
                        <div class="roundbox_up_3"></div>
                        <div class="roundbox_center_3" style="position: relative;">
                            <h2>收货人信息</h2>
                            
                            <ul>
                                <li>
                                    <h3><label>姓　　名</label></h3>
                                    <input id="real_name" name="real_name" type="text" value="<?php echo ($info['real_name']); ?>">
                                </li>
                                <li class="receiving-group">
                                    <h3><label>区　　域</label></h3>
                                    <span>
                                        <select class="first-child" name="shengfen" style="color: rgb(168, 168, 168);"  id="shengfen">
                                            <option value="">省份</option>
                                            <?php if(is_array($region)): $i = 0; $__LIST__ = $region;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><option value="<?php echo ($item['id']); ?>"><?php echo ($item['name']); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
                                        </select>
                                    </span>

                                    <span id="cities">
                                        <select name="city" id="city" style="color: rgb(168, 168, 168);">
                                            <option value="">城市</option>
                                        </select>
                                    </span>

                                    <span id="regions">
                                        <select name="area" id="area" style="color: rgb(168, 168, 168);">
                                        <option value="">区/县</option></select>
                                    </span>
                                    
                                </li>
                                <li>
                                    <h3><label>详细地址</label></h3>
                                    <input class="address" id="address" name="address" receiving="true" type="text" value="<?php echo ($info['address']); ?>" watermark="填写路名、门牌号" style="color: rgb(168, 168, 168);">
                                </li>
                                
                                <li class="">
                                    <h3>
                                    <label>联系电话</label></h3>
                                    <input autocomplete="off" class="tel" id="phone" maxlength="11" name="phone" receiving="true" type="text" value="<?php echo ($info['phone']); ?>" watermark="手机" style="color: rgb(168, 168, 168);">
                                    
                                    <label class="explain">提交订单后无法修改地址、电话，请正确填写。</label>
                                </li>
                            </ul>
                        </div>
                        <div class="roundbox_down_3"></div>
                       
                    </div>
                    <div class="clear"></div>
                </form>
            </div>
            
            <div class="clear"></div>
            <div class="grid_48 omega prefix_6 next-step">
                <a class="prev-btn" href="<?php echo U('Index/index');?>"><span>继续购物</span></a>
                <a class="next-btn" href="javascript:void(0)" id="buyNow"><span>立即结算</span></a></div>
                <div class="clear"></div>
                
                <div class="clear"></div>
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
    $('#buyNow').click(function(){
        var address = $('#address').val();
        var phone = $('#phone').val();

        if(!address){
            $.alerts.alert('请填写收货地址', "温馨提示", null);
             return false;

        }

        if(!phone){
            $.alerts.alert('请填写联系电话', "温馨提示", null);
            return false;
        }

        $.ajax({
            url : '<?php echo U("Order/createOrder");?>',
            data : $('#orderform').serialize(),
            dataType : 'json',
            type : 'post',
            success : function(ret){
                if(ret.status==1){
                    window.location.href = ret.url;
                }else{
                    
                    $.alerts.alert(ret.info, "温馨提示", null);
                }
            }
        });
    });


    $('#shengfen').change(function(){
            var sf = $(this).val();
            $('#area').html('<option value="" data-id="">区/县</option>');
            $('#city').html('<option value="" data-id="">城市</option>');
            if(sf){
                $.ajax({
                    url : '<?php echo U("Cart/getSubRegion");?>',
                    data : {pid:sf},
                    dataType : 'json',
                    type : 'post',
                    success : function(ret){
                        if(ret.status==1){
                            var info = ret.info;
                            var strs = '<option value="" data-id="">城市</option>';
                            for(k in info){
                                strs += '<option value="'+info[k]['id']+'" data-id="'+info[k]['id']+'">'+info[k]['name']+'</option>';
                            }
                            $('#city').html(strs);
                        }else{
                            
                            // alert(ret.info);
                        }
                    }
                });
            }else{

            }
        });

        $('#city').change(function(){
            var sf = $(this).val();
            $('#area').html('<option value="" data-id="">区/县</option>');
            if(sf){
                $.ajax({
                    url : '<?php echo U("Cart/getSubRegion");?>',
                    data : {pid:sf},
                    dataType : 'json',
                    type : 'post',
                    success : function(ret){
                        if(ret.status==1){
                            var info = ret.info;
                            var strs = '<option value="" data-id="">区/县</option>';
                            for(k in info){
                                strs += '<option value="'+info[k]['id']+'" data-id="'+info[k]['id']+'">'+info[k]['name']+'</option>';
                            }
                            $('#area').html(strs);
                        }else{
                            
                            // alert(ret.info);
                        }
                    }
                });
            }else{

            }
        });
    </script>


</html>