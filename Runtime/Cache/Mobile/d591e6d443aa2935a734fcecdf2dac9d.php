<?php if (!defined('THINK_PATH')) exit();?>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
    <meta name="format-detection" content="telephone=no, address=no, email=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-title" content="lativ" />
    <meta name="keywords" content="羽绒外套,衣类" />
    <meta name="description" content="lativ" />
    <title>我的收藏</title>
    <link rel="shortcut icon" href="/favicon.ico?0074" type="image/x-icon" />
    <link href="/Public/Mobile/m/css/mobile.css" rel="stylesheet" type="text/css" />
    <link type="text/css" rel="stylesheet" href="/Public/Mobile/m/css/emptyheader.css"/>
</head>
<body>
    <div data-role="page" id="index">
        <div class="empty-header" data-role="header" data-position="fixed" data-tap-toggle="false" data-theme="c">
            <div class="empty-header-line">
                <a href="javascript:history.go(-1);" data-rel="back" class="btn-backarrow-h"></a>
                <div id="header-btn-area"></div>
                <h1 class="empty-header-title">我的收藏</h1>
            </div>
        </div>
        <div id="main-content" class="gapm30">

            <div id="product-keep-list" class="ui-grid-a">
                

                <?php if(is_array($lists)): $i = 0; $__LIST__ = $lists;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><div class="ui-block-b block_product font-xs">
                        <img class="delete del_collect" src="/Public/Mobile/m/images/icons/btn_del.svg" alt="删除" data-cid="<?php echo ($item['id']); ?>">
                        <a href="<?php echo U('Product/info', array('id'=>$item['goods_id']));?>" data-ajax="false">
                            <img class="productimg" alt="<?php echo ($item['name']); ?>" src="<?php echo ($item['pic']); ?>" style="display: inline;"></a>
                        <div class="productname">
                            <span><?php echo ($item['name']); ?></span>
                        </div>
                        <div class="productprice">
                            <span class="activities">￥&nbsp;<?php echo ($item['market_price']); ?></span>
                            &nbsp;&nbsp;
                            <span>优惠价&nbsp;<?php echo ($item['price']); ?></span>
                        </div>
                    </div><?php endforeach; endif; else: echo "" ;endif; ?>
            </div>
            <div id="product-keep-empty"></div>

            <div id="loading-area">
                <span style="display: none;">载入中…</span>
            </div>

        </div>
        <style type="text/css">#customized-popup-map-alert-popup { width: 90%; }</style>
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
    </div>
    <script type="text/javascript" src="/Public/Mobile/m/js/lativ.js?3353"></script>
    <script type="text/javascript">
        $.mobile.hideUrlBar = false; 
        $.mobile.buttonMarkup.hoverDelay = 0;
        $(function ()
        {
            Mobile.common.Initialize({ AppName: '', ajaxTimeout: 6000, ajaxRetryMax: 3, cartMemoryDays: 15 });
            
            $(window).one('navigate.popup', function (e) { e.preventDefault(); });
            var initErrorMsg = '';
            if (initErrorMsg != '')
            {
                Mobile.common.showAlertMessage(initErrorMsg);
                
            }
            var initMsg = '';
            if (initMsg != '')
            {
                Mobile.common.showAlertMessage(initMsg);
                
            }
            var initOverWeightMsg = '';
            if (initOverWeightMsg != '')
            {
                Mobile.common.showAlertMessage(initOverWeightMsg);
                
            }
        });
    </script>
    <script src="/Public/Mobile/m/js/mobile.product.js?3210" type="text/javascript"></script>
    <script type="text/javascript" src="/Public/Mobile/m/js/lazyload.js"></script>
    <script type="text/javascript">
        $(function (){
            Mobile.common.Initialize({ AppName: '' });
            Mobile.product.Initialize({ bedurl: '' });
            setTimeout(function () { Mobile.common.ScrollTopBtn(); }, 100);
            // Mobile.product.ReadKeepList('/Member/KeepList', '/i/StaticPage.css');


            $('.del_collect').click(function(){
                var _cid = $(this).data('cid');
                if(!_cid){
                    Mobile.common.showAlertMessage('信息出错');
                }
                $.ajax({
                    url : '<?php echo U("Member/delCollect");?>',
                    data : {id:_cid},
                    dataType : 'json',
                    type : 'post',
                    success : function(ret){
                        if(ret.status==0){
                            Mobile.common.showAlertMessage(ret.info);
                        }else{
                            window.location.reload();
                        }
                    }
                });
            });
        });
    </script>
    <script type="text/javascript">
        if (navigator.onLine)
        {
            var cssName = 'mobile.css';
            var hasMainCss = false;
            for (var i = 0; i < document.styleSheets.length; i++)
            {
                var name = document.styleSheets[i].href;
                if (name && name != '')
                {
                    if (name.indexOf(cssName) > -1)
                    { hasMainCss = true; }
                }
            }
            if (!hasMainCss)
            { showNetworkMsg(); }
            else if (eval("typeof " + 'jQuery') == 'undefined')
            { showNetworkMsg(); }
            else if (eval("typeof " + 'jQuery.mobile') == 'undefined')
            { showNetworkMsg(); }
        }
        // else
        // { showNetworkMsg(); }
        // function showNetworkMsg()
        // {
        //     if (document.getElementById('noNetwork') == null)
        //     {
        //         var baseCss = 'font-size:13px;padding:8px 0;text-align:center;z-index:999;top:0;position:fixed;width:100%;filter:Alpha(Opacity=95);opacity:0.95;border:1px solid #f7c942;background:#fbef7e;color:#333;text-shadow:0 1px 0 #fff;background-image:linear-gradient(#fceda7,#fbef7e);';
        //         var msgDiv = document.createElement('div'); msgDiv.setAttribute('id', 'noNetwork'); msgDiv.onclick = function () { this.style.display = 'none'; }; msgDiv.style.cssText = baseCss;
        //         msgDiv.innerHTML = '<span style="font-weight:bold;">目前网路讯号不稳定</span><span style="font-size:24px;top:0px;color:#999;right:10px;position:absolute;cursor:pointer;">×</span>'; document.body.appendChild(msgDiv); document.body.style.margin = 0;
        //     }
        //     else
        //     { document.getElementById('noNetwork').style.display = 'block'; }
        // }
    </script>
</body>
</html>