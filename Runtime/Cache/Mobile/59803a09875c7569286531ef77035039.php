<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html class="ui-mobile">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
    <meta name="format-detection" content="telephone=no, address=no, email=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-title" content="lativ" />
    <meta name="keywords" content="lativ,羽绒外套,衣类" />
    <meta name="description" content="lativ" />
    <title>首页</title>
    <link rel="shortcut icon" href="/favicon.ico?0074" type="image/x-icon" />
    <link href="/Public/Mobile/m/css/mobile.css" rel="stylesheet" type="text/css" />
    <link href="/Public/Mobile/m/css/index.css" rel="stylesheet" type="text/css" />
    
</head>
<body>
    
	<div data-role="page" id="index" class="ui-page ui-page-theme-a ui-page-active" style="position: relative;">
        <div id="main-header">
    <div>
        <a id="logo" href="<?php echo U('Index/index');?>" data-ajax="false"></a>
        <div id="searchbox">
            <a class="search-icon" href="javascript:void(0)"></a>
        </div>
    </div>
</div>
<div id="main-menu">
    <ul>
        <?php if(is_array($cate_f)): $i = 0; $__LIST__ = $cate_f;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><li data-category="<?php echo ($item['ename']); ?>" class="wd16 <?php if($cinfo && $cinfo['id']==$item['id']){ echo 'active';} ?>">
                <span id="<?php echo ($item['ename']); ?>" class="ui-btn"><?php echo ($item['name']); ?></span>
            </li><?php endforeach; endif; else: echo "" ;endif; ?>
        
        <!-- <li data-category="MEN" class="wd16">
            <span id="MEN" class="ui-btn" onclick="StatisticClick(64602)">男装</span>
        </li>
        <li data-category="KIDS" class="wd16">
            <span id="KIDS" class="ui-btn" onclick="StatisticClick(64603)">童装</span>
        </li>
        <li data-category="BABY" class="wd20">
            <span id="BABY" class="ui-btn" onclick="StatisticClick(64604)">婴幼儿</span>
        </li>
        <li data-category="SPORTS" class="wd16">
            <span id="SPORTS" class="ui-btn" onclick="StatisticClick(64605)">运动</span>
        </li> -->
        <li data-category="SALE" class="wd16">
            <span id="SALE" class="ui-btn ui-btn-sale">优惠</span>
        </li>
    </ul>
</div>
<div id="search-container">
    <div class="search-input">
        <input type="text" id="keyword" />
    </div>
    <div class="search-btn">
        <a id="sendkeyword" class="search-icon" href="javascript:void(0)"></a>
    </div>
</div>
<div style="clear: both;"></div>
<div id="menu"></div>
        <div id="main-content">
            <div id="MobileContent">
                <div align="center" style="width:100%; max-width:100%; background-color: #ffffff">
                    <div align="center" id="BannerSlideShow">
                        <?php if($ad_mobile['46']){?>
                            <a href="<?php echo $ad_mobile['46']['url'];?>" data-ajax="false">
                                <img src="<?php echo $ad_mobile['46']['image'];?>" width="100%" height="auto"alt="" />
                            </a>
                        <?php }?>
                        <?php if($ad_mobile['47']){?>
                            <a href="<?php echo $ad_mobile['47']['url'];?>" data-ajax="false">
                                <img src="<?php echo $ad_mobile['47']['image'];?>" width="100%" height="auto"alt="" />
                            </a>
                        <?php }?>
                        <?php if($ad_mobile['48']){?>
                            <a href="<?php echo $ad_mobile['48']['url'];?>" data-ajax="false">
                                <img src="<?php echo $ad_mobile['48']['image'];?>" width="100%" height="auto"alt="" />
                            </a>
                        <?php }?>
                        <?php if($ad_mobile['49']){?>
                            <a href="<?php echo $ad_mobile['49']['url'];?>" data-ajax="false">
                                <img src="<?php echo $ad_mobile['49']['image'];?>" width="100%" height="auto"alt="" />
                            </a>
                        <?php }?>
                        <?php if($ad_mobile['50']){?>
                            <a href="<?php echo $ad_mobile['50']['url'];?>" data-ajax="false">
                                <img src="<?php echo $ad_mobile['50']['image'];?>" width="100%" height="auto"alt="" />
                            </a>
                        <?php }?>
                        <?php if($ad_mobile['51']){?>
                            <a href="<?php echo $ad_mobile['51']['url'];?>" data-ajax="false">
                                <img src="<?php echo $ad_mobile['51']['image'];?>" width="100%" height="auto"alt="" />
                            </a>
                        <?php }?>
                        <?php if($ad_mobile['52']){?>
                            <a href="<?php echo $ad_mobile['52']['url'];?>" data-ajax="false">
                                <img src="<?php echo $ad_mobile['52']['image'];?>" width="100%" height="auto"alt="" />
                            </a>
                        <?php }?>
                        <?php if($ad_mobile['53']){?>
                            <a href="<?php echo $ad_mobile['53']['url'];?>" data-ajax="false">
                                <img src="<?php echo $ad_mobile['53']['image'];?>" width="100%" height="auto"alt="" />
                            </a>
                        <?php }?>

                    </div>
                    <div align="center" style="margin-bottom:2%;" class="pic-box">
                        <?php if($ad_mobile['54']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['54']['url'];?>">
                                <img src="<?php echo $ad_mobile['54']['image'];?>" alt="<?php echo $ad_mobile['54']['name'];?>" border="0"  style="width: 25%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>

                        <?php if($ad_mobile['55']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['55']['url'];?>">
                                <img src="<?php echo $ad_mobile['55']['image'];?>" alt="<?php echo $ad_mobile['55']['name'];?>" border="0"  style="width: 25%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>

                        <?php if($ad_mobile['56']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['56']['url'];?>">
                                <img src="<?php echo $ad_mobile['56']['image'];?>" alt="<?php echo $ad_mobile['56']['name'];?>" border="0"  style="width: 25%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>

                        <?php if($ad_mobile['57']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['57']['url'];?>">
                                <img src="<?php echo $ad_mobile['57']['image'];?>" alt="<?php echo $ad_mobile['57']['name'];?>" border="0"  style="width: 24%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>


                    </div>
                    <div style="clear: both"></div>
                    <div align="center">
                        <?php if($ad_mobile['58']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['58']['url'];?>">
                                <img src="<?php echo $ad_mobile['58']['image'];?>" alt="<?php echo $ad_mobile['58']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>

                        <?php }?>
                    </div>
                    <div align="center">
                        <?php if($ad_mobile['59']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['59']['url'];?>">
                                <img src="<?php echo $ad_mobile['59']['image'];?>" alt="<?php echo $ad_mobile['59']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>

                        <?php }?>
                    </div>
                    <div align="center" style="width:50%; max-width:50%; float:left;">
                        <?php if($ad_mobile['60']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['60']['url'];?>">
                                <img src="<?php echo $ad_mobile['60']['image'];?>" alt="<?php echo $ad_mobile['60']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>

                    </div>
                    <div align="center" style="width:50%; max-width:50%; float:right;">
                        <?php if($ad_mobile['61']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['61']['url'];?>">
                                <img src="<?php echo $ad_mobile['61']['image'];?>" alt="<?php echo $ad_mobile['61']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                        <?php if($ad_mobile['62']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['62']['url'];?>">
                                <img src="<?php echo $ad_mobile['62']['image'];?>" alt="<?php echo $ad_mobile['62']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>

                    </div>
                    <div style="clear: both"></div>
                    <div align="center">
                        <?php if($ad_mobile['63']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['63']['url'];?>">
                                <img src="<?php echo $ad_mobile['63']['image'];?>" alt="<?php echo $ad_mobile['63']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                    </div>
                    <div align="center">
                        <?php if($ad_mobile['64']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['64']['url'];?>">
                                <img src="<?php echo $ad_mobile['64']['image'];?>" alt="<?php echo $ad_mobile['64']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                    </div>
                    <div align="center" style="width:50%; max-width:50%; float:left;">
                        <?php if($ad_mobile['65']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['65']['url'];?>">
                                <img src="<?php echo $ad_mobile['65']['image'];?>" alt="<?php echo $ad_mobile['65']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                        <?php if($ad_mobile['66']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['66']['url'];?>">
                                <img src="<?php echo $ad_mobile['66']['image'];?>" alt="<?php echo $ad_mobile['66']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                    </div>
                    <div align="center" style="width:50%; max-width:50%; float:right;">
                        <?php if($ad_mobile['67']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['67']['url'];?>">
                                <img src="<?php echo $ad_mobile['67']['image'];?>" alt="<?php echo $ad_mobile['67']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                    </div>
                    <div style="clear: both"></div>
                    <div align="center" class="pic-box">
                        <?php if($ad_mobile['68']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['68']['url'];?>">
                                <img src="<?php echo $ad_mobile['68']['image'];?>" alt="<?php echo $ad_mobile['68']['name'];?>" border="0" style="width: 33%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>

                        <?php if($ad_mobile['69']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['69']['url'];?>">
                                <img src="<?php echo $ad_mobile['69']['image'];?>" alt="<?php echo $ad_mobile['69']['name'];?>" border="0" style="width: 33%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>

                        <?php if($ad_mobile['70']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['70']['url'];?>">
                                <img src="<?php echo $ad_mobile['70']['image'];?>" alt="<?php echo $ad_mobile['70']['name'];?>" border="0" style="width: 33%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                    </div>
                    <div align="center">
                         <?php if($ad_mobile['71']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['71']['url'];?>">
                                <img src="<?php echo $ad_mobile['71']['image'];?>" alt="<?php echo $ad_mobile['71']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                    </div>
                    <div align="center">
                         <?php if($ad_mobile['72']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['72']['url'];?>">
                                <img src="<?php echo $ad_mobile['72']['image'];?>" alt="<?php echo $ad_mobile['72']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                    </div>
                    <div align="center" style="width:50%; max-width:50%; float:left;">
                        <?php if($ad_mobile['73']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['73']['url'];?>">
                                <img src="<?php echo $ad_mobile['73']['image'];?>" alt="<?php echo $ad_mobile['73']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                    </div>
                    <div align="center" style="width:50%; max-width:50%; float:right;">
                         <?php if($ad_mobile['74']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['74']['url'];?>">
                                <img src="<?php echo $ad_mobile['74']['image'];?>" alt="<?php echo $ad_mobile['74']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                    </div>
                    <div style="clear: both"></div>
                    <div align="center" style="width:50%; max-width:50%; float:left;">
                         <?php if($ad_mobile['75']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['75']['url'];?>">
                                <img src="<?php echo $ad_mobile['75']['image'];?>" alt="<?php echo $ad_mobile['75']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                    </div>
                    <div align="center" style="width:50%; max-width:50%; float:right;">
                        <?php if($ad_mobile['76']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['76']['url'];?>">
                                <img src="<?php echo $ad_mobile['76']['image'];?>" alt="<?php echo $ad_mobile['76']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                    </div>
                    <div style="clear: both"></div>
                    <div align="center" style="width:50%; max-width:50%; float:left;">
                        <?php if($ad_mobile['77']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['77']['url'];?>">
                                <img src="<?php echo $ad_mobile['77']['image'];?>" alt="<?php echo $ad_mobile['77']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                    </div>
                    <div align="center" style="width:50%; max-width:50%; float:right;">
                        <?php if($ad_mobile['78']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['78']['url'];?>">
                                <img src="<?php echo $ad_mobile['78']['image'];?>" alt="<?php echo $ad_mobile['78']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                        <?php if($ad_mobile['79']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['79']['url'];?>">
                                <img src="<?php echo $ad_mobile['79']['image'];?>" alt="<?php echo $ad_mobile['79']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                    </div>
                    <div style="clear: both"></div>
                    <div align="center">
                        <?php if($ad_mobile['80']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['80']['url'];?>">
                                <img src="<?php echo $ad_mobile['80']['image'];?>" alt="<?php echo $ad_mobile['80']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                    </div>
                    <div align="center">
                        <?php if($ad_mobile['81']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['81']['url'];?>">
                                <img src="<?php echo $ad_mobile['81']['image'];?>" alt="<?php echo $ad_mobile['81']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                    </div>
                    <div align="center" style="width:50%; max-width:50%; float:left;">
                        <?php if($ad_mobile['82']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['82']['url'];?>">
                                <img src="<?php echo $ad_mobile['82']['image'];?>" alt="<?php echo $ad_mobile['82']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                        <?php if($ad_mobile['83']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['83']['url'];?>">
                                <img src="<?php echo $ad_mobile['83']['image'];?>" alt="<?php echo $ad_mobile['83']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                    </div>
                    <div align="center" style="width:50%; max-width:50%; float:right;">
                        <?php if($ad_mobile['84']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['84']['url'];?>">
                                <img src="<?php echo $ad_mobile['84']['image'];?>" alt="<?php echo $ad_mobile['84']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                    </div>
                    <div style="clear: both"></div>
                    <div align="center">
                        <?php if($ad_mobile['85']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['85']['url'];?>">
                                <img src="<?php echo $ad_mobile['85']['image'];?>" alt="<?php echo $ad_mobile['85']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                    </div>
                    <div align="center">
                        <?php if($ad_mobile['86']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['86']['url'];?>">
                                <img src="<?php echo $ad_mobile['86']['image'];?>" alt="<?php echo $ad_mobile['86']['name'];?>" border="0" style="width: 100%; height: auto; vertical-align:bottom;" />
                            </a>
                        <?php }?>
                    </div>
                    <div align="center" class="pic-box">
                        <?php if($ad_mobile['87']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['87']['url'];?>">
                                <img src="<?php echo $ad_mobile['87']['image'];?>" alt="<?php echo $ad_mobile['87']['name'];?>" border="0" style="width: 69%; height: auto;" />
                            </a>
                        <?php }?>
                        <?php if($ad_mobile['88']){?>
                            <a data-ajax="false" href="<?php echo $ad_mobile['88']['url'];?>">
                                <img src="<?php echo $ad_mobile['88']['image'];?>" alt="<?php echo $ad_mobile['88']['name'];?>" border="0" style="width: 30%; height: auto; " />
                            </a>
                        <?php }?>
                    </div>
                </div>

            </div>

        </div>

        <style type="text/css">
    #customized-popup-map-alert-popup { width: 90%; }
    #main-footer td a {
        font-size: 12px;
        display: inline-block;
        width: 100%;
        margin-top: 5px;
        margin-bottom: 2px;
        padding-top: 22px;
        color: #fff;
        font-weight: 400;
    }
</style>
<div data-role="popup" id="customized-popup-map-alert" class="customized-popup-map" data-overlay-theme="a" data-corners="false" data-history="false" data-tolerance="15,15">
    <a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right popup-map-close"></a>
    <div class="popup-map-box">
        <div class="popup-map-header">温馨提示</div>
        <div class="popup-map-content"></div>
        <div class="popup-map-footer custom-btn-rwd-pop">
            <a href="#" class="btn-gold" data-rel="back">确定</a>
        </div>
    </div>
</div>

<div id="main-footer">
    <table>
        <tr>
            <td id="lativ-home" style="width: 25%;">
                <span url="<?php echo U('Index/index');?>">首页</span>
            </td>
            <td id="lativ-mykeep" style="width: 25%;">
                <span url="<?php echo U('Member/collect');?>">
                    收藏( <em id="fav-amt">0</em>
                    )
                </span>
            </td>
            <td id="lativ-user" style="width: 25%;">
                <span url="<?php echo U('Member/order');?>">我的订单</span>
            </td>
            <td id="lativ-cart" style="width: 25%;">
                <a href="<?php echo U('Cart/index');?>" buycount="0" id="m_Cart">结算(0)</a>
            </td>
        </tr>
    </table>
</div>
    </div>

		<div id="declare" data-role="footer">
    <div class="webbtn">
        <table id="footer-state">
            <tr>
                <td>
                    <div id="login-state" class="login-img"></div>
                    <?php if(defined('M_USER_NAME')){?>
                        <span data-url="<?php echo U('Member/index');?>" data-login="true"><?php echo M_USER_NAME;?></span>
                    <?php }else{?>
                        <span data-url="<?php echo U('Login/login');?>" data-login="true">登入</span>
                    <?php }?>

                </td>
                <td>
                    <div class="mobile-img"></div>
                    <span>触屏版</span>
                </td>
                <td>
                    <div class="pc-img"></div>
                    <span data-url="<?php echo U('Home/Index/index');?>">电脑版</span>
                </td>
            </tr>
        </table>
    </div>
    <div class="webtxt">
        ©2016 lativ&nbsp;.&nbsp;
        <a href="http://www.miibeian.gov.cn/" target="_blank">沪ICP备15013396号</a>
        &nbsp;.&nbsp;
        <a href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&entyId=20150330152028883" target="_blank">上海工商</a>
    </div>
</div>


    
</body>
<script type="text/javascript" src="/Public/Mobile/m/js/lativ.js"></script>
<script type="text/javascript" src="/Public/Mobile/m/js/owl.carousel.js"></script>
<script type="text/javascript" src="/Public/Mobile/m/js/lazyload.js"></script>

    <script type="text/javascript">
        $.mobile.hideUrlBar = false;
        $.mobile.buttonMarkup.hoverDelay = 0;
        $(function ()
        {
            Mobile.common.Initialize({ AppName: '', ajaxTimeout: 6000, ajaxRetryMax: 3, cartMemoryDays: 15 });
            Mobile.common.siteInit('');
            $.retryAjax({
                type: 'POST',
                url: 'http://m.lativ.com/Shopping/MiniCartList',
                dataType: 'text',
                success: function (data)
                {
                    $('.minicart').html(data);
                    $('#lativ-cart').click(function ()
                    {
                        var $count = $(this).find('span');

                        if (parseInt($count.attr('buycount')) <= 0 || isNaN(parseInt($count.attr('buycount'))))
                        { Mobile.common.showAlertMessage('您的购物车内没有商品！'); }
                        else
                        { location.href = $count.attr('url'); }
                    });

                    if (Mobile.common.isWeixinApp() == false)
                    {
                        $('#declare .webbtn').show();
                        $.retryAjax({
                            type: 'GET',
                            url: 'http://m.lativ.com/Home/LogoutState',
                            data: { r: self.name },
                            dataType: 'text',
                            success: function (data)
                            {
                                $('#login-state').next('span').remove();
                                $('#login-state').after(data);
                                if ($('#login-state + span').attr('data-login') === "false")
                                { $('#login-state').removeClass('login-img').addClass('logout-img'); }
                            }
                        });
                    }
                }
            });


            Mobile.common.GetMenu($.parseJSON($.trim('<?php echo json_encode($trees);?>')));
            Mobile.common.processAdCookies('PID', '.lativ.com');
        });
    </script>

    <script type="text/javascript">
        $(function ()
        {
            $("img[data-original]").lazyload({ failurelimit: 200 });
            $('#BannerSlideShow img').show();
            $('#BannerSlideShow').on('initialized.owl.carousel', function ()
            {
                var $slider = $(this);
                var previousCss = $slider.attr('style');

                $slider.css({ position: 'absolute' });

                var height = $slider.find('.active img:first').height();

                if (height > 1)
                {
                    $('.owl-stage-outer').css('height', height);
                    $slider.attr('style', previousCss ? previousCss : '').css('visibility', 'visible');
                }
                else
                {
                    $slider.find('.active img:first').one('load', function ()
                    {
                        if (this.complete)
                        {
                            $('.owl-stage-outer').css('height', $(this).height());
                            $slider.attr('style', previousCss ? previousCss : '').css('visibility', 'visible');
                        }
                    });
                }
            }).owlCarousel(
            {
                loop: true,
                autoHeight: true,
                autoplay: true,
                autoplayTimeout: 6000,
                responsiveRefreshRate: 0,
                responsive: { 0: { items: 1 } }
            });

            Mobile.common.indexClickEventBinding();
            Mobile.common.indexAutoScrollTop();
        });
    </script>

    <script type="text/javascript">
        if (navigator.onLine) {
            var cssName = 'mobile.css';
            var hasMainCss = false;
            for (var i = 0; i < document.styleSheets.length; i++) {
                var name = document.styleSheets[i].href;
                if (name && name != '') {
                    if (name.indexOf(cssName) > -1) {
                        hasMainCss = true;
                    }
                }
            }
            if (!hasMainCss) {
                showNetworkMsg();
            } else if (eval("typeof " + 'jQuery') == 'undefined') {
                showNetworkMsg();
            } else if (eval("typeof " + 'jQuery.mobile') == 'undefined') {
                showNetworkMsg();
            }
        } else {
            showNetworkMsg();
        }
        function showNetworkMsg() {
            if (document.getElementById('noNetwork') == null) {
                var baseCss = 'font-size:13px;padding:8px 0;text-align:center;z-index:999;top:0;position:fixed;width:100%;filter:Alpha(Opacity=95);opacity:0.95;border:1px solid #f7c942;background:#fbef7e;color:#333;text-shadow:0 1px 0 #fff;background-image:linear-gradient(#fceda7,#fbef7e);';
                var msgDiv = document.createElement('div');
                msgDiv.setAttribute('id', 'noNetwork');
                msgDiv.onclick = function() {
                    this.style.display = 'none';
                };
                msgDiv.style.cssText = baseCss;
                msgDiv.innerHTML = '<span style="font-weight:bold;">目前网路讯号不稳定</span><span style="font-size:24px;top:0px;color:#999;right:10px;position:absolute;cursor:pointer;">×</span>';
                document.body.appendChild(msgDiv);
                document.body.style.margin = 0;
            } else {
                document.getElementById('noNetwork').style.display = 'block';
            }
        }
    </script>

</html>