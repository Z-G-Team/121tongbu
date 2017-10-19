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
    <!-- <script type="text/javascript" src="/Public/Statics/static/lib/jquery.js"></script>    -->

    <script src="/Public/Statics/static/js/LativJS.js" type="text/javascript"></script>    
    <!-- <script type="text/javascript" src="/Public/Statics/static/lib/lazyload.js"></script> -->
    
<script type="text/javascript">(function (a, b) { $window = a(b), a.fn.lazyload = function (c) { function f() { var b = 0; d.each(function () { var c = a(this); if (e.skip_invisible && !c.is(":visible")) return; if (!a.abovethetop(this, e) && !a.leftofbegin(this, e)) if (!a.belowthefold(this, e) && !a.rightoffold(this, e)) c.trigger("appear"); else if (++b > e.failure_limit) return !1 }) } var d = this, e = { threshold: 0, failure_limit: 0, event: "scroll", effect: "show", container: b, data_attribute: "original", skip_invisible: !0, appear: null, load: null }; return c && (undefined !== c.failurelimit && (c.failure_limit = c.failurelimit, delete c.failurelimit), undefined !== c.effectspeed && (c.effect_speed = c.effectspeed, delete c.effectspeed), a.extend(e, c)), $container = e.container === undefined || e.container === b ? $window : a(e.container), 0 === e.event.indexOf("scroll") && $container.unbind(e.event).bind(e.event, function (a) { return f() }), this.each(function () { var b = this, c = a(b); b.loaded = !1, c.one("appear", function () { if (!this.loaded) { if (e.appear) { var f = d.length; e.appear.call(b, f, e) } a("<img />").bind("load", function () { c.hide().attr("src", c.data(e.data_attribute))[e.effect](e.effect_speed), b.loaded = !0; var f = a.grep(d, function (a) { return !a.loaded }); d = a(f); if (e.load) { var g = d.length; e.load.call(b, g, e) } }).attr("src", c.data(e.data_attribute)) } }), 0 !== e.event.indexOf("scroll") && c.bind(e.event, function (a) { b.loaded || c.trigger("appear") }) }), $window.bind("resize", function (a) { f() }), f(), this }, a.belowthefold = function (c, d) { var e; return d.container === undefined || d.container === b ? e = $window.height() + $window.scrollTop() : e = $container.offset().top + $container.height(), e <= a(c).offset().top - d.threshold }, a.rightoffold = function (c, d) { var e; return d.container === undefined || d.container === b ? e = $window.width() + $window.scrollLeft() : e = $container.offset().left + $container.width(), e <= a(c).offset().left - d.threshold }, a.abovethetop = function (c, d) { var e; return d.container === undefined || d.container === b ? e = $window.scrollTop() : e = $container.offset().top, e >= a(c).offset().top + d.threshold + a(c).height() }, a.leftofbegin = function (c, d) { var e; return d.container === undefined || d.container === b ? e = $window.scrollLeft() : e = $container.offset().left, e >= a(c).offset().left + d.threshold + a(c).width() }, a.inviewport = function (b, c) { return !a.rightofscreen(b, c) && !a.leftofscreen(b, c) && !a.belowthefold(b, c) && !a.abovethetop(b, c) }, a.extend(a.expr[":"], { "below-the-fold": function (c) { return a.belowthefold(c, { threshold: 0, container: b }) }, "above-the-top": function (c) { return !a.belowthefold(c, { threshold: 0, container: b }) }, "right-of-screen": function (c) { return a.rightoffold(c, { threshold: 0, container: b }) }, "left-of-screen": function (c) { return !a.rightoffold(c, { threshold: 0, container: b }) }, "in-viewport": function (c) { return !a.inviewport(c, { threshold: 0, container: b }) }, "above-the-fold": function (c) { return !a.belowthefold(c, { threshold: 0, container: b }) }, "right-of-fold": function (c) { return a.rightoffold(c, { threshold: 0, container: b }) }, "left-of-fold": function (c) { return !a.rightoffold(c, { threshold: 0, container: b }) } }) })(jQuery, window)</script>

    <!--引用框架脚本-->
    <!-- // <script src="/Public/Statics/static/js/mui.min.js"></script> -->
    <!-- <script src="/Public/Statics/layer/layer.js"></script> -->

    
    <style>
        a.active { background:#C00;color:#FFF;}
    </style>

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
                            &nbsp;&nbsp;&nbsp;&nbsp;
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
                <div id="exhibit" class="container_48">
                    <div id="sidenav" class="grid_9 alpha">
                        <ul class="sale">
                            <?php if($category_tree){ foreach($category_tree as $k=>$v){?>
                                <li class="category category_sub">
                                    <h2><?php echo $v['name'];?></h2>
                                    <ul class="sale_category">
                                        <?php if($v['child']){ foreach($v['child'] as $kk=>$vv){?>
                                            <li>
                                                <a alt="<?php echo $vv['name'];?>" href="<?php echo U('Product/lists', array('id'=>$vv['id']));?>" title="<?php echo $vv['name'];?>"><?php echo $vv['name'];?></a>
                                            </li>
                                        <?php } } ?>
                                    </ul>
                                </li>
                            <?php } }?>
                        </ul>
                    </div>
                    <div class="grid_38 alpha omega">
                        <div class="clear"></div>
                        <div class="product_info grid_39 fix_shortcut_menu">
                            <input id="product-num" name="product-num" type="hidden" value="1" />
                            <div class="product_image">
                                <span id="reading_glass_area">
                                    <?php if(is_array($img)): $i = 0; $__LIST__ = $img;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$imgs): $mod = ($i % 2 );++$i; if($key==0){?>
                                                <a id="glass_<?php echo $key;?>" class="fancyReadingGlass" href="<?php echo $imgs;?>" rel="otherImgGroup">
                                                    <img src="/Public/Statics/static/images/btn_zoom20.gif" alt="">
                                                </a>
                                            <?php }else{?>
                                            <a id="glass_<?php echo $key;?>" class="fancyReadingGlass hidden" href="<?php echo $imgs;?>" rel="otherImgGroup"></a>
                                            <?php } endforeach; endif; else: echo "" ;endif; ?>
                                </span>
                                <!-- <img id="productImg" class="product-img"  src="<?php echo ($pr['pic']); ?>" alt="<?php echo ($pr['name']); ?>" title="<?php echo ($pr['name']); ?>" /> -->

                                <img id="productImg" src="<?php echo ($pr['pic']); ?>" alt="<?php echo ($pr['name']); ?>" title="<?php echo ($pr['name']); ?>" style="cursor: pointer;" onclick="SetReadingGlass(this)" data-img="0">


                                

                            </div>
                            <div class="clearfloat">
                                <div class="product_title">
                                    <div id="product_name_area">
                                        <span class="title1">
                                            <?php echo ($pr['name']); ?>&nbsp;&nbsp;
                                            <span id="icolor"></span>
                                            <span id="isize"></span>
                                        </span>
                                        <br />
                                        <span class="title2">
                                            商品编号：
                                            <span id="isn"><?php echo ($pr['num']); ?></span>
                                        </span>
                                    </div>
                                    <div id="product_price_area" class="">
                                        <span id="store_price" class="store_price activities"><?php echo ($pr['market_price']); ?></span>
                                        <span class="currencyIdentifier">￥</span>
                                        <span id="new_price" class="price"><?php echo ($pr['price']); ?></span>
                                        <div id="activitylink" style="display: none;"></div>
                                    </div>
                                </div>
                                <!-- <div class="color">
                                    <div class="clear"></div>
                                    <a href="">hhhhh</a>
                                    <a href="">lllll</a>
                                </div> -->
                                <div class="info-attr mb20 cf">
                                    <?php if($issku==1){ foreach($skus['val'] as $key=>$val){?>
                                        <div class="size">
                                            <h2 style="color:#333"><?php echo $skus['name'][$key];?>：</h2>
                                            <span class="picksize">
                                                <?php foreach ($val as $k => $v) { ?>
                                                    <a href="javascript:;" data-val="<?php echo $key.':'.$k;?>"><?php echo $v;?></a>
                                                <?php }?>
                                            </span>
                                        </div>
                                    <?php } } ?>

                                    <div class="size">
                                        <!-- <span class="picksize"></span> -->
                                        <div class="size2">
                                            <?php if($shouchang){?>
                                                
                                                <span class="product-keep">已收藏</span>
                                            <?php }else{?>
                                                <span class="product-keep" data-value="{$pr['id']}">收藏商品</span>
                                            <?php }?>
                                            <a class="product-size" href="#">查看尺码表</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="addcart">
                                    <span>
                                        <label class="v_middle">数量</label>
                                        &nbsp;&nbsp;
                                        <span style="font-size:0">
                                        <a class="minus" href="javascript:void(0)"></a>
                                        <input id="buyCount" type="text" maxlength="2" value="1" />
                                        <a class="plus" href="javascript:void(0)"></a>
                                        </span>
                                    </span>
                                    <input type="hidden" id="id" name="id" value="<?php echo ($pr['id']); ?>">
                                    <input type="hidden" id="pid" name="pid" value="<?php echo ($pr['id']); ?>">
                                    <input type="hidden" id="max_stock" name="max_stock" value="<?php echo ($pr['stock']); ?>">
                                    <a id="addShopcar" class="btn_addcart hidden" href="javascript:;">加入购物车</a>
                                </div>
                                <div class="clear"></div>
                                <div>
                                    <table id="product-prompt">
                                        <tr>
                                            <td class="first-child">
                                                <a id="free-fisrt" href="http://www.lativ.com/Page/instructions#content01" target="_blank">满99包邮</a>
                                            </td>
                                            <td>
                                                <a id="free-second" href="http://www.lativ.com/Page/freereturns" target="_blank">7天无理由退货</a>
                                            </td>
                                            <td>
                                                <a id="free-sf" href="http://www.lativ.com/Page/instructions#content02" target="_blank">顺丰配送</a>
                                            </td>
                                            <td class="last-child">
                                                <a id="pay-type" href="http://www.lativ.com/Page/instructions#content03" target="_blank">微信支付．支付宝</a>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="activity_area">
                                    <span id="activity"></span>
                                    <span id="shoppingRemind" class="mred hidden"></span>
                                </div>
                            </div>
                            <!-- end of clearfloat--> </div>
                        <!-- end of product_info -->
                        <div class="clear"></div>
                        <div class="label" style="width: 1006px;">
                            <div class="left_col">
                                <div class="gray_header">产品说明及注意事项</div>
                                <div class="col_border">
                                    <ul class="material hidden">
                                        <li>驼色</li>
                                        <li>面料：聚酯纤维54%、羊毛39%、锦纶4%、腈纶2%、粘纤1%</li>
                                        <li>大身里料：聚酯纤维100%</li>
                                        <li>红色</li>
                                        <li>面料：聚酯纤维53%、羊毛39%、锦纶4%、腈纶4%</li>
                                        <li>大身里料：聚酯纤维100%</li>
                                        <li>深灰</li>
                                        <li>面料：聚酯纤维51%、羊毛39%、锦纶5%、腈纶4%、粘纤1%</li>
                                        <li>大身里料：聚酯纤维100%</li>
                                        <li>藏青</li>
                                        <li>面料：聚酯纤维53%、羊毛40%、锦纶5%、腈纶2%</li>
                                        <li>大身里料：聚酯纤维100%</li>
                                    </ul>
                                    <ul class="note">
                                        <li>1.请用干洗溶剂清洗。</li>
                                        <li>2.不可烘干，不可漂白。</li>
                                        <li>3.如需熨烫，请以低温垫布熨烫。</li>
                                        <li>4.穿着时，请留意避免与配件包包等他物接触摩擦。</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="right_col">
                                <div class="gray_header">拍摄场景光线会影响模特儿衣服颜色，选购时请以商品图片为主。</div>
                                <div class="product_s_img">
                                    <a class="fancyProductImg show" href="javascript:;" description="">
                                        <img src="http://s4.lativ.com/i/28566/28566_S_04.jpg" alt="毛呢牛角扣大衣-女" />
                                        <table border="0" class="tag" style="display: none;">
                                            <tr class="tag_bg dic_title">
                                                <td colspan="2" style="padding: 1px 0;">搭配商品快速连结</td>
                                            </tr>
                                            <tr>
                                                <td class="tag_padding"></td>
                                                <td></td>
                                            </tr>
                                            <tr class='tag_bg bkg'>
                                                <td class="tag_height">
                                                    <a class="tag_name" href='javascript:;' target='_blank'>高弹力牛仔紧身裤-女(水洗产品)</a>
                                                </td>
                                                <td>
                                                    <a class="tag_price" href='javascript:;' target='_blank'>￥ 119</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tag_padding"></td>
                                                <td></td>
                                            </tr>
                                        </table>
                                    </a>
                                    <a class="fancyProductImg show" href="http://s1.lativ.com/i/28566/28566_L_07.jpg" description="">
                                        <img src="http://s2.lativ.com/i/28566/28566_S_07.jpg" alt="毛呢牛角扣大衣-女" />
                                        <table border="0" class="tag" style="display: none;">
                                            <tr class="tag_bg dic_title">
                                                <td colspan="2" style="padding: 1px 0;">搭配商品快速连结</td>
                                            </tr>
                                            <tr>
                                                <td class="tag_padding"></td>
                                                <td></td>
                                            </tr>
                                            <tr class='tag_bg bkg'>
                                                <td class="tag_height">
                                                    <a class="tag_name" href='/Detail/28470012' target='_blank'>羊毛混纺纽花针织衫-女</a>
                                                </td>
                                                <td>
                                                    <a class="tag_price" href='/Detail/28470012' target='_blank'>￥ 139</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tag_padding"></td>
                                                <td></td>
                                            </tr>
                                            <tr class='tag_bg '>
                                                <td class="tag_height">
                                                    <a class="tag_name" >羊绒素色围巾-中性款</a>
                                                </td>
                                                <td>
                                                    <a class="tag_price" >无库存</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tag_padding"></td>
                                                <td></td>
                                            </tr>
                                            <tr class='tag_bg bkg'>
                                                <td class="tag_height">
                                                    <a class="tag_name" href='/Detail/28349011' target='_blank'>高弹力牛仔紧身裤-女(水洗产品)</a>
                                                </td>
                                                <td>
                                                    <a class="tag_price" href='/Detail/28349011' target='_blank'>￥ 119</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tag_padding"></td>
                                                <td></td>
                                            </tr>
                                        </table>
                                    </a>
                                    <a class="fancyProductImg show" href="http://s3.lativ.com/i/28566/28566_L_11.jpg" description="">
                                        <img src="http://s4.lativ.com/i/28566/28566_S_11.jpg" alt="毛呢牛角扣大衣-女" />
                                        <table border="0" class="tag" style="display: none;">
                                            <tr class="tag_bg dic_title">
                                                <td colspan="2" style="padding: 1px 0;">搭配商品快速连结</td>
                                            </tr>
                                            <tr>
                                                <td class="tag_padding"></td>
                                                <td></td>
                                            </tr>
                                            <tr class='tag_bg bkg'>
                                                <td class="tag_height">
                                                    <a class="tag_name" href='/Detail/28470012' target='_blank'>羊毛混纺纽花针织衫-女</a>
                                                </td>
                                                <td>
                                                    <a class="tag_price" href='/Detail/28470012' target='_blank'>￥ 139</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tag_padding"></td>
                                                <td></td>
                                            </tr>
                                            <tr class='tag_bg '>
                                                <td class="tag_height">
                                                    <a class="tag_name" >羊绒素色围巾-中性款</a>
                                                </td>
                                                <td>
                                                    <a class="tag_price" >无库存</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tag_padding"></td>
                                                <td></td>
                                            </tr>
                                            <tr class='tag_bg bkg'>
                                                <td class="tag_height">
                                                    <a class="tag_name" href='/Detail/28349011' target='_blank'>高弹力牛仔紧身裤-女(水洗产品)</a>
                                                </td>
                                                <td>
                                                    <a class="tag_price" href='/Detail/28349011' target='_blank'>￥ 119</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tag_padding"></td>
                                                <td></td>
                                            </tr>
                                        </table>
                                    </a>
                                    <a class="fancyProductImg show" href="http://s1.lativ.com/i/28566/28566_L_08.jpg" description="">
                                        <img src="http://s2.lativ.com/i/28566/28566_S_08.jpg" alt="毛呢牛角扣大衣-女" />
                                        <table border="0" class="tag" style="display: none;">
                                            <tr class="tag_bg dic_title">
                                                <td colspan="2" style="padding: 1px 0;">搭配商品快速连结</td>
                                            </tr>
                                            <tr>
                                                <td class="tag_padding"></td>
                                                <td></td>
                                            </tr>
                                            <tr class='tag_bg bkg'>
                                                <td class="tag_height">
                                                    <a class="tag_name" href='/Detail/28470012' target='_blank'>羊毛混纺纽花针织衫-女</a>
                                                </td>
                                                <td>
                                                    <a class="tag_price" href='/Detail/28470012' target='_blank'>￥ 139</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tag_padding"></td>
                                                <td></td>
                                            </tr>
                                            <tr class='tag_bg '>
                                                <td class="tag_height">
                                                    <a class="tag_name" >羊绒素色围巾-中性款</a>
                                                </td>
                                                <td>
                                                    <a class="tag_price" >无库存</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tag_padding"></td>
                                                <td></td>
                                            </tr>
                                            <tr class='tag_bg bkg'>
                                                <td class="tag_height">
                                                    <a class="tag_name" href='/Detail/28349011' target='_blank'>高弹力牛仔紧身裤-女(水洗产品)</a>
                                                </td>
                                                <td>
                                                    <a class="tag_price" href='/Detail/28349011' target='_blank'>￥ 119</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tag_padding"></td>
                                                <td></td>
                                            </tr>
                                        </table>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="oldPic show">
                            <?php echo (htmlspecialchars_decode($pr_con["content"])); ?>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <!-- end of exhibit -->
                <div id="floatCart" class="cart_check">
                    <span>
                        <em class="cart_total"></em>
                    </span>
                    <a class="cart_check fancyLogin" href="https://www.lativ.com/Shopping/ShoppingAdapter"></a>
                </div>
                <div id="top">
                    <img width="25" height="60" src="http://s3.lativ.com/images/btn_top.gif" alt="" />
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

    function GetReadingGlass(arry) {
            var temp = "";            
            $.each(arry, function(i, v) {
                temp += '<a id="glass_284760' + (i+1) + '" class="fancyReadingGlass hidden" href="'+ v +'">';
                temp += "<\/a>";
            }
            );
            $("#reading_glass_area").html(temp);
        }
        function SetReadingGlass(){
            var i = $("#productImg").attr('data-img');
            var src = $("#productImg").attr('src');
            // $("a#glass_" + i).html('<img id="glassImg" alt="" src="'+ src +'"/>').removeClass("hidden");
            // 这里的img我放在static/images里面路径你修改下
            $("#productImg").click(function() {
                    $("a#glass_" + i).click();
                })
        }

       $(function(){     
            // var imgArry = <?php echo json_encode($img);?>;
            // var imgArry = ['http://s2.lativ.com/i/28476/28476011/2847601_900.jpg', 'http://s2.lativ.com/i/28476/28476021/2847602_900.jpg','http://s2.lativ.com/i/28476/28476031/2847603_900.jpg'];
            // GetReadingGlass(imgArry);
            SetReadingGlass();
            $("a.fancyReadingGlass").attr("rel", "otherImgGroup").fancybox({
                    titleShow: !1,
                    titlePosition: "inside",
                    transitionIn: "elastic",
                    transitionOut: "fade",
                    autoScale: !1,
                    autoDimensions: !1,
                    cyclic: !0
                });
        })



        var detailSkuInfos = <?php echo json_encode($items);?>;
        //如果存在sku，初始化选项
        <?php if($issku){?>
            
            //初始化sku
            initSku();
            //切换规格操作
            $('.choose-param-type li').on('click',function(){
                if($(this).hasClass('disabled')) return;
                $(this).siblings('li').removeClass('active');
                $(this).addClass('active');
                $('.buy_num').val(1);
                getInfo();
            }) 
        <?php }else{ ?>
            //没有SKU，则将id赋值给标签
            $('#id').val(detailSkuInfos[0]['id']);
            for(k in detailSkuInfos){
                var tmpInfo = detailSkuInfos[k];
                  // console.log(tmpInfo);
                  //产品价格改变
                  $('.store_price').html('￥'+tmpInfo['price']);
                  $('.price').val(tmpInfo['price']);
                  // $('.del').html('￥'+tmpInfo['market_price']);
                  // var zhekou = (10/(tmpInfo['market_price']/tmpInfo['price'])).toFixed(1);
                  // $('.disc').html(zhekou+'折');
                  $('#stock').html('库存'+tmpInfo['stock']+'件');
                  $('.stock').html(tmpInfo['stock']);
                  //可获得积分
                  // $('#getJifen').html(parseInt(tmpInfo['price'] * 0.1));
                  //id标签赋值
                  $('#id').val(tmpInfo['id']);
            }
        <?php }?>
        function initSku(){
            //默认选中第一个规格信息
            $(".picksize").each(function(){
                $(this).find('a:first').attr("class", "active");
            });
            //默认选中的规格信息的产品信息
            getInfo();
            
        }
        //切换规格操作
        $('.picksize a').on('click',function(){
            if($(this).hasClass('active')) return;
            $(this).siblings('a').removeClass('active');
            $(this).addClass('active');
            $('.buy_num').val(1);
            getInfo();
        })
        //切换id尺码规格时执行函数
        function getInfo(){
            var comsku = '';
            var showtag = '';
            $(".picksize a.active").each(function(){
                comsku += $(this).data('val')+';';
                showtag += $(this).html() + ' ';
            });
            $('#yixuanze').html(showtag);
            comsku = comsku.substring(0,comsku.length-1);
            for(k in detailSkuInfos){
                var tmpInfo = detailSkuInfos[k];
                if(tmpInfo['specs'] == comsku){
                    //产品价格改变
                    $('.store_price').html(tmpInfo['market_price']);
                    $('#new_price').html(tmpInfo['price']);
                    // $('#totalPrice').html('￥'+tmpInfo['price']);
                    // $('.del').html('￥'+tmpInfo['market_price']);
                    // var zhekou = (10/(tmpInfo['market_price']/tmpInfo['price'])).toFixed(1);
                    // $('.disc').html(zhekou+'折');
                    $('#max_stock').val(tmpInfo['stock']);
                    //可获得积分
                    // $('#getJifen').html(parseInt(tmpInfo['price'] * 0.1));
                    //id标签赋值
                    $('#id').val(tmpInfo['id']);
                }
            }
        }
        $('.plus').on('click',function(){
            var number = parseFloat($('#max_stock').val());
            var num = parseInt($('#buyCount').val());
            
            if (num >= number) {
                return false;
            }
            $('#buyCount').val(num+1);
        });
        $('.minus').on('click',function(){
            var number = parseFloat($('#max_stock').val());
            var num = parseInt($('#buyCount').val());
            if (num <=1) {
                return false;
            }
            $('#buyCount').val(num-1);
        })
        $('#addShopcar').click(function(){
            var count = parseInt($('#buyCount').val());
          
            if (count > parseInt($("#max_stock").val())) {
                alert('抱歉，您的购买量超过了库存了');
                return false;
            }
            if (count <= 0) {
                alert('抱歉，购买数量至少为1');
                return false;
            }
            var id = $('#id').val();
            var pid = $('#pid').val();
            //参数
            var data = {pid:pid, id:id, count:count};
            //ajax 添加购物车  
            $.ajax({
                url: '<?php echo U("Cart/addcart");?>',
                dataType : 'json',
                type : 'post',
                data : data,
                success: function(ret) {
                    
                    $.alerts.alert(ret.info, "温馨提示", null);
                }
            });
        })
        $(".product-keep").click(function(){
            $.ajax({
                  type:"POST",
                  dataType:"json",
                  url:"<?php echo U('Shoucang/shoucang');?>",
                  data:{"id":<?php echo $pr['id'];?>},
                  success: function(ret){
                      if(ret.status==1){
                          $('.product-keep').html('已收藏');
                      }else if(ret.status==2){
                            $.alerts.alert(ret.info, "温馨提示", null);
                      }else{
                            $.alerts.alert(ret.info, "温馨提示", null);
                      }
                  }
              });
        });
    </script>


</html>