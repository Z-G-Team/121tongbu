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
    <title>新品上架</title>
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

			<!-- <div class="sitemap">
				<a href="#" onclick="javascript:setMenu('SALE');" data-ajax="false" class="btn-back ui-icon-carat-l ui-alt-icon ui-link"></a>
				<span class="maptext">
					<a href="#" onclick="javascript:setMenu('SALE');" data-ajax="false" class="ui-link"><?php echo ($favourable_info['name']); ?></a>
				</span>
			</div> -->

			<div id="productList" class="ui-grid-a">
                <!-- 商品列表 -->
			</div>

			<div id="loading-area">
				<span style="display: none;">载入中…</span>
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
        var page = 1;
        var scollTo = true;
        $.mobile.hideUrlBar = false;
        $.mobile.buttonMarkup.hoverDelay = 0;
        $(function ()
        {
            Mobile.common.Initialize({ AppName: '', ajaxTimeout: 6000, ajaxRetryMax: 3, cartMemoryDays: 15 });
            Mobile.common.siteInit('');
            // $.retryAjax({
            //     type: 'POST',
            //     url: 'http://m.lativ.com/Shopping/MiniCartList',
            //     dataType: 'text',
            //     success: function (data)
            //     {
            //         $('.minicart').html(data);
            //         $('#lativ-cart').click(function ()
            //         {
            //             var $count = $(this).find('span');

            //             if (parseInt($count.attr('buycount')) <= 0 || isNaN(parseInt($count.attr('buycount'))))
            //             { Mobile.common.showAlertMessage('您的购物车内没有商品！'); }
            //             else
            //             { location.href = $count.attr('url'); }
            //         });

            //         if (Mobile.common.isWeixinApp() == false)
            //         {
            //             $('#declare .webbtn').show();
            //             $.retryAjax({
            //                 type: 'GET',
            //                 url: 'http://m.lativ.com/Home/LogoutState',
            //                 data: { r: self.name },
            //                 dataType: 'text',
            //                 success: function (data)
            //                 {
            //                     $('#login-state').next('span').remove();
            //                     $('#login-state').after(data);
            //                     if ($('#login-state + span').attr('data-login') === "false")
            //                     { $('#login-state').removeClass('login-img').addClass('logout-img'); }
            //                 }
            //             });
            //         }
            //     }
            // });
            getLists(0);

            Mobile.common.GetMenu($.parseJSON($.trim('<?php echo json_encode($trees);?>')));
        });


        //ajax获取商品列表
        function getLists(flag=0){
            if(!scollTo){
                return false;
            }
            $('#loading-area').html('载入中…');
            $('#loading-area').show();
            $.retryAjax({
                type: 'POST',
                url: '<?php echo U("Sale/lists");?>',
                dataType: 'json',
                data : {page:page, id:<?php echo $id;?>},
                success: function (ret){
                    if(ret.status==1){
                        if(flag==0){
                            page = 2;
                        }else{
                            page += 1;
                        }
                        $('#loading-area').hide();
                        showLists(ret.info);
                    }else{
                        if(page==1){
                            $('#loading-area').html('暂无数据');
                        }else{
                            $('#loading-area').html('加载完成');
                        }
                        
                        scollTo = false;
                    }
                }
            });
        }

        //js展示商品列表
        function showLists(lists, flag=0){
            // console.log(lists);
            var html_strs = '';
            for(k in lists){
                var info = lists[k];
                html_strs += '<div class="ui-block-b block_product font-xs">';
                html_strs += '<a href="/Mobile/Product/info/id/'+info['id']+'" data-ajax="false">';
                html_strs += '<img class="productimg 1" alt="'+info['name']+'" src="'+info['pic']+'"></a>';
                html_strs += '<div>';
                html_strs += '<div class="picksize">';
                if(info['specs']['name']){
                    for(i in info['specs']['name']){
                        var tmpInfo = info['specs']['name'][i];
                        if(tmpInfo=='尺码' || tmpInfo=='尺寸'){
                            for(j in info['specs']['val'][i]){
                                var tmp2Info = info['specs']['val'][i][j];
                               
                                html_strs += '<a href="/Mobile/Product/info/id/'+info['id']+'" onclick="Mobile.product.Redirect()" data-ajax="false" class="ui-link">';
                                html_strs += tmp2Info;
                                html_strs += '</a>';
                                if(j==3){
                                    html_strs += '<br>';  
                                }
                            }
                        }
                    }
                }
        
                html_strs += '</div>';
                html_strs += '</div>';
                html_strs += '<div class="productname">';
                html_strs += '<span>'+info['name']+'</span>';
                html_strs += '</div>';
                html_strs += '<div class="productprice">';
                html_strs += '<span class="activities">￥&nbsp;'+info['market_price']+'</span>&nbsp;&nbsp;';
                if(info['type']==1){
                    html_strs += '<span>优惠价&nbsp;'+info['price']+'</span>';
                }else{
                    html_strs += '<span>优惠价&nbsp;'+info['market_price']*info['discount']/10+'</span>';
                }
                
                html_strs += '</div>';
                html_strs += '</div>';
            }


            if(flag==0){
                $('#productList').html(html_strs);
            }else{
                $('#productList').append(html_strs);
            }
        }

        $(function (){
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


        $(document).scroll(function(){  
            // 当滚动到最底部以上50像素时， 加载新内容  
 
            if ( $(window).height() + $(this).scrollTop() - $(this).height() < 50 ) {
                getLists(1);  
            }
        });
   
    </script>

</html>