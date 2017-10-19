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
    <meta name="description" content="lativ" />
    <title>确认订单</title>
    <link rel="shortcut icon" href="/favicon.ico?0074" type="image/x-icon" />
    <link href="/Public/Mobile/m/css/mobile.css" rel="stylesheet" type="text/css" />    
    <link href="/Public/Mobile/m/css/emptyheader.css?<?php echo time();?>" rel="stylesheet" type="text/css" />
</head>
<body>
    <div data-role="page" id="index">
        <div class="empty-header" data-role="header" data-position="fixed" data-tap-toggle="false" data-theme="c">
            <div class="empty-header-line">
                <a href="javascript:history.go(-1);" data-ajax="false" class="btn-backarrow-h"></a>
                <div id="header-btn-area"></div>
                <h1 class="empty-header-title">确认订单</h1>
            </div>
        </div>
        <div id="main-content" class="gapm30">

            <div class="gap20 gapm20">
                <form action="<?php echo U('Order/createOrder');?>" id="orderform" method="post">
                    <a data-ajax="false" href="javascript:;" class="ui-link">
                        <div class="box-gray addr-record">
                            <div class="addr-record-bg">
                                <span class="pick-up-name">收货人：<?php echo ($info['user_name']); ?></span>
                                <span class="pick-up-addr">收货地址：<?php echo ($info['address']); ?></span>
                            </div>
                        </div>
                    </a>
                    <br />

                    <style type="text/css">
                        .autofill-tel-div { position: relative; white-space: nowrap; background: initial; }
                        @media screen and (min-width: 340px) {
                            .autofill-tel-div { background: url('../images/icons/phone.svg') no-repeat 98%; background-size: 25px; }
                        }
                        .ui-input-text .autofill-tel-input { display: inline-block; width: 45%; padding-left: .6em; vertical-align: middle; }
                        #autofill-tel-label { display: inline-block; margin: 0; padding: .6em 3em .6em .9em; line-height: 1.4em; vertical-align: middle; border-radius: inherit; border-top-right-radius: initial; border-bottom-right-radius: initial; border-right: 1px solid #ddd; background-color: #eee; }
                        #autofill-tel-label em { position: absolute; margin-left: .9em; }
                        #autofill-tel-label a { padding-right: 2em; background: url('../images/icons/cancel.svg') no-repeat left; background-size: 19px; }
                        #pick-up-tel-val { visibility: hidden; }
                    </style>
                    <!-- <input id="pay-type" name="order.金流類型" type="hidden" value="" /> -->
                </form>
                <div class="shopping-cart ui-nodisc-icon ui-alt-icon box-gray">
                    <table id="shop-list">
                        <tbody>
                            <?php if(is_array($lists)): $i = 0; $__LIST__ = $lists;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><tr>
                                    <td class="p-img alignc wid15">
                                        <a href="<?php echo U('Product/info', array('id'=>$item['goods_id']));?>"><img src="<?php echo ($item['goods_image']); ?>" alt="商品缩图" width="60px" height="60px" /></a>
                                    </td>
                                    <td colspan="3" class="goodsinfo subtotal amount alignl wid75">
                                        <p class="first-child"><?php echo ($item['goods_name']); ?>&nbsp;<?php echo ($item['spec_name']); ?></p>
                                        <p> <em class="special-price 2P85D" data-price="<?php echo ($item['price']*$item['quantity']); ?>" data-original="<?php echo ($item['market_price']*$item['quantity']); ?>">￥<?php echo ($item['price']*$item['quantity']); ?></em>
                                        </p>
                                        <!-- <p>
                                            <a class="match-activity match2P85D" data-ajax="false" href="/OnSale/2P85D/WOMEN" style="display: none;">符合"温暖推荐．2件 85折"活动</a>
                                            <a class="notmatch-activity notmatch2P85D" data-ajax="false" href="/OnSale/2P85D/WOMEN" style="">未达优惠条件，点此加购</a>
                                        </p> -->

                                        <p>
                                            <a data-role="none" class="decrease lock" href="javascript:void(0)"></a>
                                            <input data-role="none" class="order-amount" type="text" value="<?php echo ($item['quantity']); ?>" data-stock="<?php echo ($item['stock']); ?>" disabled="disabled" />
                                            <a data-role="none" class="increase " href="javascript:void(0)"></a>
                                        </p>
                                    </td>
                                    <td class="alignc wid10" style="position: relative;">
                                        <a data-role="none" class="btn-trashcan" href="#" onclick="onDel('<?php echo U("cart/delete");?>', '<?php echo ($item['id']); ?>'); return false;"></a>
                                    </td>
                                </tr>
                                <input id="has-free-activity" name="has-free-activity" type="hidden" value="False" />
                                <input id="has-buyover-activity" name="has-buyover-activity" type="hidden" value="False" /><?php endforeach; endif; else: echo "" ;endif; ?>
                        </tbody>



                        <tfoot>
                            <tr>
                                <td></td>
                                <td colspan="3">
                                    <span>
                                        共&nbsp; <em id="total-amount"><?php echo ($total); ?></em>
                                        &nbsp;件商品
                                    </span>
                                    <span class="f-right">金额</span>
                                </td>
                                <td id="total" class="alignr"><?php echo ($total_price); ?></td>
                            </tr>
                            <tr>

                                <td></td>
                                <td colspan="3">
                                    <span class="f-right">运费</span>
                                </td>
                                <td id="pd-cost" class="alignr" data-cost="0">￥0</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colspan="3" class="td-last" style="white-space: nowrap;">
                                    总金额 <?php echo ($total_price); ?>
                                    <!-- <span id="shippingfee-remind">
                                        (
                                        <span>
                                            再买
                                            <em></em>
                                            元免运费
                                        </span>
                                        )
                                    </span> -->
                                </td>
                                <td id="order-price" class="td-last alignr"></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <!-- <div id="add-purchase-price-btn" class="add-purchase-price-gray-btn">
                    <div class="add-purchase-price-content">
                        <span>达39元加购</span>
                    </div>
                </div> -->
                <div data-role="popup" id="customized-popup-map" class="customized-popup-map" data-overlay-theme="a" data-corners="false" data-history="false" data-position-to="window">
                    <a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right popup-map-close">Close</a>
                    <div class="popup-map-box">
                        <div>
                            <div class="popup-map-header">提醒您</div>
                            <div class="popup-map-content">您的订单金额未达加购门槛，建议您再多买几件！</div>
                            <div class="popup-map-footer">
                                <a class="btn-gold" href="#" onclick="$('#customized-popup-map').popup('close');">关闭</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="select-payment-method">
                    <ul>

                        <li class="to_checkout" data-val="2">
                            <div style="text-align: center;font-size: 20px;color: #555;">
                                <span>去结算</span>
                            </div>
                        </li>

                        <li class="go-shopping-btn">
                            <div>
                                <span></span>
                            </div>
                        </li>

                    </ul>
                </div>

                <div class="clear"></div>
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
       $('.go-shopping-btn').click(function(){
            window.location.href = '<?php echo U("Index/index");?>';
       });

       $('.to_checkout').click(function(){
            //生成订单，去支付吧
            
            $.ajax({
                url : '<?php echo U("Order/createOrder");?>',
                data : '',
                dataType : 'json',
                type : 'post',
                success : function(ret){
                    if(ret.status==1){
                        window.location.href = ret.url;
                    }else{
                        Mobile.common.showAlertMessage(ret.info);
                    }
                }
            });
       });

       function onDel(url, id){
            $.ajax({
                url : url,
                data : {id:id},
                dataType : 'json',
                type : 'post',
                success : function(ret){
                    if(ret.status==1){
                        window.location.reload();
                    }else{
                        Mobile.common.showAlertMessage(ret.info);
                    }
                }
            });
       }
    </script>

</body>
</html>