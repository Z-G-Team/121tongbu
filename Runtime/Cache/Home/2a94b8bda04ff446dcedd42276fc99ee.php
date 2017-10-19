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

    
    <script type="text/javascript">
        $(function ($) {
            var $lazyImgs = $("img[data-original]");
            if ($lazyImgs.length > 0) {
                // var greyImg = new Image();
                // greyImg.name = 'greyImg';
                // greyImg.src = $lazyImgs[0].src;
                // $(greyImg).load(function() {
                    $lazyImgs.lazyload({
                        failurelimit: 2000
                    });
                // });
                // $(window).load(function() {
                    $lazyImgs.lazyload({
                        failurelimit: 2000
                    });
                // });
            }
            $('#BannerSlideShow img').show();
        });
    </script>

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

            <!-- 轮播图 START-->
            <div class="index-banner">
                <div class="homebanner" id="BannerSlideShow">
                    <?php $lun_num = 0;?>
                    <?php if($ad_index[1]){ $lun_num++; ?>
                        <a target="_blank" href="<?php echo $ad_index[1]['url'];?>">
                            <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[1]['image'];?>" width="<?php echo $ad_index[1]['width'];?>" height="<?php echo $ad_index[1]['height'];?>" alt="<?php echo $ad_index[1]['name'];?>" />
                        </a>
                    <?php }?>
                    
                    <?php if($ad_index[2]){ $lun_num++; ?>
                        <a target="_blank" href="<?php echo $ad_index[2]['url'];?>">
                            <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[2]['image'];?>" width="<?php echo $ad_index[2]['width'];?>" height="<?php echo $ad_index[2]['height'];?>" alt="<?php echo $ad_index[2]['name'];?>" />
                        </a>
                    <?php }?>

                    <?php if($ad_index[3]){ $lun_num++; ?>
                        <a target="_blank" href="<?php echo $ad_index[3]['url'];?>">
                            <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[3]['image'];?>" width="<?php echo $ad_index[3]['width'];?>" height="<?php echo $ad_index[3]['height'];?>" alt="<?php echo $ad_index[3]['name'];?>" />
                        </a>
                    <?php }?>

                    <?php if($ad_index[4]){ $lun_num++; ?>
                        <a target="_blank" href="<?php echo $ad_index[4]['url'];?>">
                            <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[4]['image'];?>" width="<?php echo $ad_index[4]['width'];?>" height="<?php echo $ad_index[4]['height'];?>" alt="<?php echo $ad_index[4]['name'];?>" />
                        </a>
                    <?php }?>

                    <?php if($ad_index[5]){ $lun_num++; ?>
                        <a target="_blank" href="<?php echo $ad_index[5]['url'];?>">
                            <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[5]['image'];?>" width="<?php echo $ad_index[5]['width'];?>" height="<?php echo $ad_index[5]['height'];?>" alt="<?php echo $ad_index[5]['name'];?>" />
                        </a>
                    <?php }?>

                    <?php if($ad_index[6]){ $lun_num++; ?>
                        <a target="_blank" href="<?php echo $ad_index[6]['url'];?>">
                            <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[6]['image'];?>" width="<?php echo $ad_index[6]['width'];?>" height="<?php echo $ad_index[6]['height'];?>" alt="<?php echo $ad_index[6]['name'];?>" />
                        </a>
                    <?php }?>

                    <?php if($ad_index[7]){ $lun_num++; ?>
                        <a target="_blank" href="<?php echo $ad_index[7]['url'];?>">
                            <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[7]['image'];?>" width="<?php echo $ad_index[7]['width'];?>" height="<?php echo $ad_index[7]['height'];?>" alt="<?php echo $ad_index[7]['name'];?>" />
                        </a>
                    <?php }?>

                    <?php if($ad_index[8]){ $lun_num++; ?>
                        <a target="_blank" href="<?php echo $ad_index[8]['url'];?>">
                            <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[8]['image'];?>" width="<?php echo $ad_index[8]['width'];?>" height="<?php echo $ad_index[8]['height'];?>" alt="<?php echo $ad_index[8]['name'];?>" />
                        </a>
                    <?php }?>

                    <?php if($ad_index[9]){ $lun_num++; ?>
                        <a target="_blank" href="<?php echo $ad_index[9]['url'];?>">
                            <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[9]['image'];?>" width="<?php echo $ad_index[9]['width'];?>" height="<?php echo $ad_index[9]['height'];?>" alt="<?php echo $ad_index[9]['name'];?>" />
                        </a>
                    <?php }?>

                    <?php if($ad_index[10]){ $lun_num++; ?>
                        <a target="_blank" href="<?php echo $ad_index[10]['url'];?>">
                            <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[10]['image'];?>" width="<?php echo $ad_index[10]['width'];?>" height="<?php echo $ad_index[10]['height'];?>" alt="<?php echo $ad_index[10]['name'];?>" />
                        </a>
                    <?php }?>
                </div>
                <div class="slide-pager circule-button" style="display: block;">
                    <?php for($i=0; $i<$lun_num; $i++){?>
                        <a class="<?php if($i==0){ echo 'pager-first active';} ?>" data-slide-index="<?php echo $i;?>" ></a>
                    <?php }?>
                    
                </div>
            </div>
            <!-- 轮播图结束 END -->

            <!-- 48顺丰包邮等 START -->
            <ul class="img-adv cf">

                <?php if($ad_index[11]){?>
                    <li>
                        <a  href="<?php echo $ad_index[11]['url'];?>">
                            <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[11]['image'];?>" width="<?php echo $ad_index[11]['width'];?>" height="<?php echo $ad_index[11]['height'];?>" alt="<?php echo $ad_index[11]['name'];?>" border="0"/>
                        </a>
                    </li>
                <?php }?>
                <li>
                    <img src="/Public/Statics/static/images/grey.gif" data-original="/Public/Statics/static/images/icon20150529_line_CN.gif" alt="" border="0" data-original="/Public/Statics/static/images/icon20150529_line_CN.gif">
                </li>
                
                <?php if($ad_index[12]){?>
                    <li>
                        <a  href="<?php echo $ad_index[12]['url'];?>">
                            <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[12]['image'];?>" width="<?php echo $ad_index[12]['width'];?>" height="<?php echo $ad_index[12]['height'];?>" alt="<?php echo $ad_index[12]['name'];?>" border="0"/>
                        </a>
                    </li>
                <?php }?>
                <li>
                    <img src="/Public/Statics/static/images/grey.gif" data-original="/Public/Statics/static/images/icon20150529_line_CN.gif" alt="" border="0" data-original="/Public/Statics/static/images/icon20150529_line_CN.gif">
                </li>
                
                <?php if($ad_index[13]){?>
                    <li>
                        <a  href="<?php echo $ad_index[13]['url'];?>">
                            <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[13]['image'];?>" width="<?php echo $ad_index[13]['width'];?>" height="<?php echo $ad_index[13]['height'];?>" alt="<?php echo $ad_index[13]['name'];?>" border="0"/>
                        </a>
                    </li>
                <?php }?>

                <li>
                    <img src="/Public/Statics/static/images/grey.gif" data-original="/Public/Statics/static/images/icon20150529_line_CN.gif" alt="" border="0" data-original="/Public/Statics/static/images/icon20150529_line_CN.gif">
                </li>
                
                <?php if($ad_index[14]){?>
                    <li>
                        <a  href="<?php echo $ad_index[14]['url'];?>">
                            <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[14]['image'];?>" width="<?php echo $ad_index[14]['width'];?>" height="<?php echo $ad_index[14]['height'];?>" alt="<?php echo $ad_index[14]['name'];?>" border="0"/>
                        </a>
                    </li>
                <?php }?>
            </ul>
            <!-- 48顺丰包邮等 END-->
            
            <!-- 新品上市 START -->
            <div class="block1 block">
                <div class="tit">新品上市</div>
                <ul class="cont cf">
                    <?php if($ad_index[15]){?>
                        <li class="item  mr20 one">
                            <a  href="<?php echo $ad_index[15]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[15]['image'];?>" alt="<?php echo $ad_index[15]['name'];?>" width="<?php echo $ad_index[15]['width'];?>" height="<?php echo $ad_index[15]['height'];?>"/>
                            </a>
                        </li>
                    <?php }?>

                    <?php if($ad_index[16]){?>
                        <li class="item mr20 one">
                            <a href="<?php echo $ad_index[16]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[16]['image'];?>" alt="<?php echo $ad_index[16]['name'];?>" width="<?php echo $ad_index[16]['width'];?>" height="<?php echo $ad_index[16]['height'];?>"/>
                            </a>
                        </li>
                    <?php }?>

                    <?php if($ad_index[17]){?>
                        <li class="item three">
                            <a class="mb20" href="<?php echo $ad_index[17]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[17]['image'];?>" alt="<?php echo $ad_index[17]['name'];?>" width="<?php echo $ad_index[17]['width'];?>" height="<?php echo $ad_index[17]['height'];?>" />
                            </a>
                        </li>
                    <?php }?>
                    
                </ul>
            </div>
            <!-- 新品上市 END -->
            
            <!-- 热销商品START -->
            <div class="block1 block">
                <div class="tit">热销商品</div>
                <ul class="cont cf">
                    <li class="item mr20 one">
                        <?php if($ad_index[18]){?>
                            <a href="<?php echo $ad_index[18]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[18]['image'];?>" alt="<?php echo $ad_index[18]['name'];?>" width="<?php echo $ad_index[18]['width'];?>" height="<?php echo $ad_index[18]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                    <li class="item mr20 two">

                        <?php if($ad_index[19]){?>
                            <a  class="mb20" href="<?php echo $ad_index[19]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[19]['image'];?>" alt="<?php echo $ad_index[19]['name'];?>" width="<?php echo $ad_index[19]['width'];?>" height="<?php echo $ad_index[19]['height'];?>" />
                            </a>
                        <?php }?>

                        <?php if($ad_index[20]){?>
                            <a href="<?php echo $ad_index[20]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[20]['image'];?>" alt="<?php echo $ad_index[20]['name'];?>" width="<?php echo $ad_index[20]['width'];?>" height="<?php echo $ad_index[20]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                    <li class="item three">
                        <?php if($ad_index[21]){?>
                            <a href="<?php echo $ad_index[21]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[21]['image'];?>" alt="<?php echo $ad_index[21]['name'];?>" width="<?php echo $ad_index[21]['width'];?>" height="<?php echo $ad_index[21]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                </ul>
            </div>
            <!-- 热销商品END -->
            

            <!-- 推荐单品START-->
            <div class="block1 block">
                <div class="tit">推荐单品</div>
                <ul class="cont cf">
                    <li class="item mr20 three">
                        <?php if($ad_index[22]){?>
                            <a href="<?php echo $ad_index[22]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[22]['image'];?>" alt="<?php echo $ad_index[22]['name'];?>" width="<?php echo $ad_index[22]['width'];?>" height="<?php echo $ad_index[22]['height'];?>" />
                            </a>
                        <?php }?>

                    </li>
                    <li class="item mr20 two">
                        <?php if($ad_index[23]){?>
                            <a  class="mb20" href="<?php echo $ad_index[23]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[23]['image'];?>" alt="<?php echo $ad_index[23]['name'];?>" width="<?php echo $ad_index[23]['width'];?>" height="<?php echo $ad_index[23]['height'];?>" />
                            </a>
                        <?php }?>

                        <?php if($ad_index[24]){?>
                            <a href="<?php echo $ad_index[24]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[24]['image'];?>" alt="<?php echo $ad_index[24]['name'];?>" width="<?php echo $ad_index[24]['width'];?>" height="<?php echo $ad_index[24]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                    <li class="item one">
                        <?php if($ad_index[25]){?>
                            <a href="<?php echo $ad_index[25]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[25]['image'];?>" alt="<?php echo $ad_index[25]['name'];?>" width="<?php echo $ad_index[25]['width'];?>" height="<?php echo $ad_index[25]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                </ul>
            </div>
            <!-- 推荐单品END-->

            <!-- STYLING MIX START -->
            <div class="block2 block">
                <div class="tit">STYLING MIX</div>
                <ul class="cont cf">
                    <li class="item">
                        <?php if($ad_index[26]){?>
                            <a href="<?php echo $ad_index[26]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[26]['image'];?>" alt="<?php echo $ad_index[26]['name'];?>" width="<?php echo $ad_index[26]['width'];?>" height="<?php echo $ad_index[26]['height'];?>" />
                            </a>
                        <?php }?>

                    </li>
                    <li class="item">
                        <?php if($ad_index[27]){?>
                            <a href="<?php echo $ad_index[27]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[27]['image'];?>" alt="<?php echo $ad_index[27]['name'];?>" width="<?php echo $ad_index[27]['width'];?>" height="<?php echo $ad_index[27]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                    <li class="item">
                        <?php if($ad_index[28]){?>
                            <a href="<?php echo $ad_index[28]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[28]['image'];?>" alt="<?php echo $ad_index[28]['name'];?>" width="<?php echo $ad_index[28]['width'];?>" height="<?php echo $ad_index[28]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                    <li class="item">
                        <?php if($ad_index[29]){?>
                            <a href="<?php echo $ad_index[29]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[29]['image'];?>" alt="<?php echo $ad_index[29]['name'];?>" width="<?php echo $ad_index[29]['width'];?>" height="<?php echo $ad_index[29]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                    <li class="item">
                        <?php if($ad_index[30]){?>
                            <a href="<?php echo $ad_index[30]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[30]['image'];?>" alt="<?php echo $ad_index[30]['name'];?>" width="<?php echo $ad_index[30]['width'];?>" height="<?php echo $ad_index[30]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                </ul>
            </div>
            <!-- STYLING MIX END -->

            <!-- Sport 系列 START -->
            <div class="block3 block">
                <div class="tit">Sport 系列</div>
                <ul class="cont cf">
                    <li class="item fl">
                        <?php if($ad_index[31]){?>
                            <a href="<?php echo $ad_index[31]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[31]['image'];?>" alt="<?php echo $ad_index[31]['name'];?>" width="<?php echo $ad_index[31]['width'];?>" height="<?php echo $ad_index[31]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                    <li class="item fr">
                        <?php if($ad_index[32]){?>
                            <a href="<?php echo $ad_index[32]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[32]['image'];?>" alt="<?php echo $ad_index[32]['name'];?>" width="<?php echo $ad_index[32]['width'];?>" height="<?php echo $ad_index[32]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                </ul>
            </div>
            <!-- Sport 系列 END -->

            <!-- 品牌T恤 START -->
            <div class="block4 block">
                <div class="tit">品牌T恤</div>
                <ul class="cont" style="height:240px;">
                    <li class="item">
                        <?php if($ad_index[33]){?>
                            <a href="<?php echo $ad_index[33]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[33]['image'];?>" alt="<?php echo $ad_index[33]['name'];?>" width="<?php echo $ad_index[33]['width'];?>" height="<?php echo $ad_index[33]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                    <li class="item">
                        <?php if($ad_index[34]){?>
                            <a href="<?php echo $ad_index[34]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[34]['image'];?>" alt="<?php echo $ad_index[34]['name'];?>" width="<?php echo $ad_index[34]['width'];?>" height="<?php echo $ad_index[34]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                    <li class="item">
                        <?php if($ad_index[35]){?>
                            <a href="<?php echo $ad_index[35]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[35]['image'];?>" alt="<?php echo $ad_index[35]['name'];?>" width="<?php echo $ad_index[35]['width'];?>" height="<?php echo $ad_index[35]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                    <li class="item">
                        <?php if($ad_index[36]){?>
                            <a href="<?php echo $ad_index[36]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[36]['image'];?>" alt="<?php echo $ad_index[36]['name'];?>" width="<?php echo $ad_index[36]['width'];?>" height="<?php echo $ad_index[36]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                    <li class="item">
                        <?php if($ad_index[37]){?>
                            <a href="<?php echo $ad_index[37]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[37]['image'];?>" alt="<?php echo $ad_index[37]['name'];?>" width="<?php echo $ad_index[37]['width'];?>" height="<?php echo $ad_index[37]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                </ul>
            </div>
            <!-- 品牌T恤 END -->
            
            <!-- 内衣居家 & 其他 START -->
            <div class="block1 block">
                <div class="tit">内衣居家 & 其他</div>
                <ul class="cont cf">
                    <li class="item mr20 one">
                        <?php if($ad_index[38]){?>
                            <a href="<?php echo $ad_index[38]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[38]['image'];?>" alt="<?php echo $ad_index[38]['name'];?>" width="<?php echo $ad_index[38]['width'];?>" height="<?php echo $ad_index[38]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                    <li class="item mr20 two">
                        <?php if($ad_index[39]){?>
                            <a  class="mb20" href="<?php echo $ad_index[39]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[39]['image'];?>" alt="<?php echo $ad_index[39]['name'];?>" width="<?php echo $ad_index[39]['width'];?>" height="<?php echo $ad_index[39]['height'];?>" />
                            </a>
                        <?php }?>

                        <?php if($ad_index[40]){?>
                            <a href="<?php echo $ad_index[40]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[40]['image'];?>" alt="<?php echo $ad_index[40]['name'];?>" width="<?php echo $ad_index[40]['width'];?>" height="<?php echo $ad_index[40]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                    <li class="item three">
                        <?php if($ad_index[41]){?>
                            <a href="<?php echo $ad_index[41]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[41]['image'];?>" alt="<?php echo $ad_index[41]['name'];?>" width="<?php echo $ad_index[41]['width'];?>" height="<?php echo $ad_index[41]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                </ul>
            </div>
            <!-- 内衣居家 & 其他 END -->
            
            <!-- KID & BABY START -->
            <div class="block1 block">
                <div class="tit">KID & BABY</div>
                <ul class="cont cf">
                    <li class="item mr20 three">
                        <?php if($ad_index[42]){?>
                            <a href="<?php echo $ad_index[42]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[42]['image'];?>" alt="<?php echo $ad_index[42]['name'];?>" width="<?php echo $ad_index[42]['width'];?>" height="<?php echo $ad_index[42]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                    <li class="item mr20 two">
                        <?php if($ad_index[43]){?>
                            <a  class="mb20" href="<?php echo $ad_index[43]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[43]['image'];?>" alt="<?php echo $ad_index[43]['name'];?>" width="<?php echo $ad_index[43]['width'];?>" height="<?php echo $ad_index[43]['height'];?>" />
                            </a>
                        <?php }?>

                        <?php if($ad_index[44]){?>
                            <a href="<?php echo $ad_index[44]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[44]['image'];?>" alt="<?php echo $ad_index[44]['name'];?>" width="<?php echo $ad_index[44]['width'];?>" height="<?php echo $ad_index[44]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                    <li class="item one">
                        <?php if($ad_index[45]){?>
                            <a href="<?php echo $ad_index[45]['url'];?>">
                                <img src="/Public/Statics/static/images/grey.gif" data-original="<?php echo $ad_index[45]['image'];?>" alt="<?php echo $ad_index[45]['name'];?>" width="<?php echo $ad_index[45]['width'];?>" height="<?php echo $ad_index[45]['height'];?>" />
                            </a>
                        <?php }?>
                    </li>
                </ul>
            </div>
            <!-- KID & BABY END -->

        </div>
    </div>
    <div class="footer-container">
        <div class="inner">
            <div class="footer-top cf" id="wrap">
                <dl>
                    <dt>关于 lativ</dt>
                    <?php if(is_array($about_us)): $i = 0; $__LIST__ = $about_us;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><dd>
                            <a target="_blank" href="<?php echo $item['url']?$item['url']:U('Article/info', array('id'=>$item['id']));?>"><?php echo ($item['name']); ?></a>
                        </dd><?php endforeach; endif; else: echo "" ;endif; ?>
                </dl>
                <dl>
                    <dt>服务支持</dt>
                    <?php if(is_array($service_ct)): $i = 0; $__LIST__ = $service_ct;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><dd>
                            <a target="_blank" href="<?php echo $item['url']?$item['url']:U('Article/info', array('id'=>$item['id']));?>"><?php echo ($item['name']); ?></a>
                        </dd><?php endforeach; endif; else: echo "" ;endif; ?>
                </dl>
                <dl>
                    <dt>帮助中心</dt>
                    <?php if(is_array($help_ct)): $i = 0; $__LIST__ = $help_ct;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><dd>
                            <a target="_blank" href="<?php echo $item['url']?$item['url']:U('Article/info', array('id'=>$item['id']));?>"><?php echo ($item['name']); ?></a>
                        </dd><?php endforeach; endif; else: echo "" ;endif; ?>
                </dl>
                <dl>
                    <dt>微信公众号</dt>
                    <dd>
                        <img src="/Public/Statics/static/images/grey.gif" data-original="/Public/Statics/front/footer-weixin.gif" alt=""></dd>
                </dl>
                <dl>
                    <dt>021-3891-9868</dt>
                    <dd>09:00-12:20<br />13:30-18:00</dd>
                </dl>
            </div>
        </div>
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
    



</html>