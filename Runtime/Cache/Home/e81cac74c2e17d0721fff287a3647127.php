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
            <div class="main container_48">
                <div class="line_right container_48">
                    <div id="exhibit" class="container_48">
                        <div id="sidenav" class="grid_9 alpha">
                            <ul class="sale">
                                <li>
                                    <a href="">
                                        <h2>童装上新</h2>
                                    </a>
                                </li>
                                <li class="menu_onsale">
                                    <ul class="sub sale_news">
                                        <li>
                                            <a href="" target="_blank">爆款推荐．2件¥ 98</a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank">精选新品．2件 88折</a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank">限定特惠．¥１９ 起</a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank">推荐组合．2件¥ 78</a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank">推荐单品．1件¥ 59</a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank">推荐单品．1件¥ 79</a>
                                        </li>

                                    </ul>
                                </li>
                                
                                <?php if($category_tree){ foreach($category_tree as $k=>$v){?>
                                    <li class="category category_sub category_open <?php if($k==0){ echo 'category_first';}?>">
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
                            <script type="text/javascript">
                                $(function ()
                                {
                                    var catUrl = $.format("/{0}/{1}/{2}", $('#categoryMap').attr("maincategory"), $('#categoryMap').attr("subcategory"), $('#categoryMap').attr("itemcategory"));

                                    if ($("a:#categoryMap").size() == 0)
                                    {
                                        catUrl = "";

                                        var currentCategory = $("#categoryMap").attr("itemcategory");

                                        if (currentCategory != undefined && currentCategory != "")
                                        {
                                            $("ul.sale_category li a").each(function ()
                                            {
                                                if ($(this).attr("href").endsWith(currentCategory)) { $(this).addClass("current"); return; }
                                            })
                                        }
                                    }

                                    $('li.category_sub').addClass('category_open').removeClass('category_close');

                                    var $li = $('li.menu_onsale');

                                    if ($li.length > 0)
                                    { $li.next().addClass('category_first'); }
                                    else
                                    { $('li.category_special_last').next().addClass('category_first'); }

                                    if (catUrl != undefined && catUrl != "")
                                    {
                                        var currentNav = $('#sidenav a[href$="' + catUrl + '"]');

                                        if (currentNav.size() > 0)
                                        {
                                            currentNav.addClass('current').parents("li[class*=category_sub]").attr("current", true).addClass("category_current");
                                        }
                                    }
                                });
                            </script>
                        </div>
                        
                        <div class="grid_38 alpha omega mb20">
                            <div class="lev-catelog-tit">
                                <span>款式简易分类</span>
                                <!-- <div class="tit-r">
                                    <select id="displayType">
                                        <option value="byColor">全部颜色展开</option>
                                        <option value="byStyle">依款式排列</option>
                                    </select>
                                </div> -->
                            </div>
                            <ul class="archorList cf">
                                <?php if(is_array($e_list)): $i = 0; $__LIST__ = $e_list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><li>
                                        <div>
                                            <a href="<?php echo U('Product/lists', array('id'=>$item['id']));?>">
                                                <img alt="<?php echo ($item['name']); ?>" border="0" src="<?php echo ($item['logourl']); ?>"></a>
                                        </div>
                                    </li><?php endforeach; endif; else: echo "" ;endif; ?>
                            </ul>
                        </div>
                        

                        <div class="grid_38 alpha omega">
                            <!--<?php if($the_degree==1 || $the_degree==2){?>
                                <div class="catlog-lg-banner">
                                    <a id="category0" name="category0" href="" target="_blank">
                                        <img src="http://s1.lativ.com/i/NewArrivalBanner/0929-7_CN_1.jpg" alt="上新" class="grid_38 alpha omega">
                                    </a>
                                </div>
                            <?php }?>-->
                            <ul class="list_display cf">
                                <?php if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><li name="styNo_1571">
                                        <a class="imgd" href="<?php echo U('Product/info', array('id'=>$item['id']));?>" target="_blank">
                                            <img alt="<?php echo ($item['name']); ?>" src="<?php echo ($item['pic']); ?>" data-original="<?php echo ($item['pic']); ?>" style="display: inline;"></a>
                                        <!-- <div class="picksize picksize_list ">
                                            <a href="/Detail/25204013/L" target="_blank">L</a>
                                            <a href="/Detail/25204014/XL" target="_blank">XL</a>
                                        </div> -->
                                        <span class="productname"><?php echo ($item['name']); ?></span>
                                        <br>
                                        <span class="hidden" style="display: inline;">
                                            <span class="activities">
                                                <span class="currencyIdentifier">￥</span>
                                                <span><?php echo ($item['market_price']); ?></span>
                                            </span>
                                            &nbsp;&nbsp;
                                            <span>优惠价</span>
                                            <span class="currencyIdentifier">￥</span>
                                            <span><?php echo ($item['price']); ?></span>
                                        </span>
                                    </li><?php endforeach; endif; else: echo "" ;endif; ?>
                            </ul>
                        </div>
                    </div>
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
    



</html>