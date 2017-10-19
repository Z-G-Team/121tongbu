<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html class="ui-mobile">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
    <meta name="format-detection" content="telephone=no, address=no, email=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-title" content="lativ" />
    <meta name="keywords" content="羽绒外套,衣类" />
    <meta name="description" content="" />
    <title>订单支付</title>
    <link rel="shortcut icon" href="/favicon.ico?0074" type="image/x-icon" />
    <link href="/Public/Mobile/m/css/mobile.css" rel="stylesheet" type="text/css" />
    <link type="text/css" rel="stylesheet" href="/Public/Mobile/m/css/emptyheader.css"/>
</head>
<body>
    <div data-role="page" id="index">
        <div class="empty-header" data-role="header" data-position="fixed" data-tap-toggle="false" data-theme="c">
            <div class="empty-header-line">
                <a href="javascript:history.go(-1);" data-ajax="false" class="btn-backarrow-h"></a>
                <div id="header-btn-area"></div>
                <h1 class="empty-header-title">选择支付方式</h1>
            </div>
        </div>
        <div id="main-content" class="gapm30">

            <div id="select-payment-method">
                <ul>

                    <li class="alipay-btn" data-val="2">
                        <div>
                            <span></span>
                        </div>
                    </li>


                    <li class="weixin-btn" data-val="1">
                        <div>
                            <span></span>
                        </div>
                    </li>

                </ul>
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

    <script type="text/javascript" src="/Public/Mobile/m/js/jquery.water.min.js"></script>

    <script src="/Public/Mobile/m/js/mobile.shopping.validate.js" type="text/javascript"></script>

    <script type="text/javascript">
        var canSubmit = true;
        var submitted = false;

        function formsubmit()
        {
            canSubmit = false;
            $("form").submit();
        }
    </script>
    <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script type="text/javascript">
        // sendMessage(_trade_sn);
            var _pays = '';
            function wxpay(strs){
                // console.log(strs);
                _pays = strs;
                // console.log(_pays);          
                if (typeof WeixinJSBridge == "undefined"){
                    if( document.addEventListener ){
                        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                    }else if (document.attachEvent){
                        document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
                        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                   }
                }else{
                    onBridgeReady();
                }
            }

            function onBridgeReady(){
                WeixinJSBridge.invoke(
                   'getBrandWCPayRequest',_pays,
                   function(res){     
                        if(res.err_msg=="get_brand_wcpay_request:ok"){
                            window.location.href = '<?php echo U("Member/order");?>';
                        }

                        if(res.err_msg=="get_brand_wcpay_request:cancel"){
                            window.location.href = '<?php echo U("Member/order");?>';
                        }

                        if(res.err_msg=="get_brand_wcpay_request:fail"){
                            window.location.href = '<?php echo U("Member/order");?>';
                        }
                   }
                ); 
            }

        $(function (){
            $('.weixin-btn, .alipay-btn').on('click', function (){
                var paymode = $(this).attr('data-val');
                var data = {paymode : paymode, id:<?php echo $info['id'];?> };
                if(paymode==1){
                    //微信支付了

                    $.ajax({
                        url : '<?php echo U("Order/wexintopay");?>',
                        data : data,
                        dataType : 'json',
                        type : 'post',
                        success : function(ret){
                            if(ret.info){
                                // layer.msg(ret.info);
                                alert(ret.info);
                            }
                            setTimeout(function(){
                                //微信支付
                                if(ret.status==3){
                                    wxpay(ret.params);
                                }

                                if(ret.status==1){
                                    window.location.href = '<?php echo U("Member/order");?>';
                                }

                                if(ret.status==0){
                                    window.location.href = '<?php echo U("Member/order");?>';
                                }
                            }, 1000);
                        },
                        error : function(res){

                        }
                    });

                }else{
                    //支付宝支付了
                    alert('支付宝支付');
                }


            });

            var countDownSec = parseInt('1735', 10);
            var endTime = Math.round(((new Date()).getTime() / 1000)) + countDownSec;
            var seconds = countDownSec % 60;
            var minutes = Math.floor(countDownSec / 60);

            $('#header-btn-area').html('<span class="btn-clock-h">' + padLeft(minutes, 2) + ':' + padLeft(seconds, 2) + '</span>');

            var updateScreen = function ()
            {
                var currentTime = Math.round(((new Date()).getTime() / 1000));
                var remainTime = endTime - currentTime;

                if (remainTime <= 0)
                {
                    $('#header-btn-area span').html('00:00');
                    $('.weixin-btn, .alipay-btn').off('click');
                    Mobile.common.showAlertMessage('未在时间内支付成功。请重新下单。', function () { location.href = '/Member'; });

                    return;
                }

                seconds = remainTime % 60;
                minutes = Math.floor(remainTime / 60);

                $('#header-btn-area span').html(padLeft(minutes, 2) + ':' + padLeft(seconds, 2));

                setTimeout(updateScreen, 1000);
            }

            updateScreen();
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
    </script>
</body>
</html>