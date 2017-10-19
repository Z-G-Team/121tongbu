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
    <title>我的订单</title>
    <link rel="shortcut icon" href="/favicon.ico?0074" type="image/x-icon" />
    <link href="/Public/Mobile/m/css/mobile.css" rel="stylesheet" type="text/css" />
    <link type="text/css" rel="stylesheet" href="/Public/Mobile/m/css/emptyheader.css"/>
</head>
<body>
    <div data-role="page" id="index">
        <div class="empty-header" data-role="header" data-position="fixed" data-tap-toggle="false" data-theme="c">
            <div class="empty-header-line">
                <a href="javascript:history.go(-1)" data-ajax="false" class="btn-backarrow-h"></a>
                <div id="header-btn-area"></div>
                <h1 class="empty-header-title">我的订单</h1>
            </div>
        </div>
        <div id="main-content" class="gapm30">

            <div class="inner_box font-mgray">
                <div id="uesr-info" class="box-gray-noradius">
                    <a href="<?php echo U('Member/index');?>" id="nickname" class="font-s profile-edit" data-ajax="false">
                        <span class="font-lgray">会员信息&nbsp;</span>
                    </a>

                </div>

                <div id="ListControl">
                    <div id="order-state-nav" class="ui-grid-c font-s alignc">
                        <div class="ui-block-a order-state" data-status="0">
                            <div class="<?php if(!I('get.status')){echo 'on';}else{echo 'off';} ?>" data-order-state="0">
                                <span class="order-count"><?php echo ($all_counts); ?></span>
                                <span>全部订单</span>
                            </div>
                        </div>
                        <div class="ui-block-b order-state" data-status="20">
                            <div class="<?php if(I('get.status')==20){echo 'on';}else{echo 'off';} ?>" data-order-state="20">
                                <span class="order-count"><?php echo ($df_counts); ?></span>
                                <span>待发货</span>
                            </div>
                        </div>
                        <div class="ui-block-c order-state" data-status="30">
                            <div class="<?php if(I('get.status')==30){echo 'on';}else{echo 'off';} ?>" data-order-state="30">
                                <span class="order-count"><?php echo ($yf_counts); ?></span>
                                <span>已发货</span>
                            </div>
                        </div>
                        <div class="ui-block-d order-state" data-status="60">
                            <div class="<?php if(I('get.status')==60){echo 'on';}else{echo 'off';} ?>" data-order-state="60">
                                <span class="order-count"><?php echo ($wc_counts); ?></span>
                                <span>已完成</span>
                            </div>
                        </div>
                    </div>
                    <table class="order-list lineh15 font-s">
                        <tbody>
                            <?php if(empty($lists)): ?><tr class="order-list-empty">
                                    <td>您目前还没有订单。</td>
                                </tr>
                            <?php else: ?>
                                <?php if(is_array($lists)): $i = 0; $__LIST__ = $lists;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><tr data-order-state="100">
                                        <td>
                                            <div class="order-list-content">
                                                <ul class="alignl">
                                                    <li>
                                                        日 期：
                                                        <span><?php echo ($item['add_time']); ?></span>
                                                    </li>
                                                    <li class="gap5">
                                                        订单号：
                                                        <span><?php echo ($item['trade_sn']); ?></span>
                                                    </li>

                                                    <li class="gap5">
                                                        状 态：
                                                        <?php  if($item['status']==10){ echo '待付款'; } if($item['status']==30){ echo '待收货'; } if($item['status']==60){ echo '交易成功'; } if($item['status']==80 || $item['status']==90){ echo '交易关闭'; } if($item['status']==20){ if($item['is_refunded']=='0'){ echo '待发货'; } if($item['is_refunded']=='10'){ echo '部分退款中'; } if($item['is_refunded']=='19'){ echo '部分退款完成'; } if($item['is_refunded']=='30'){ echo '全部退款中'; } if($item['is_refunded']=='39'){ echo '全部退款完成'; } } ?>
                                                    </li>

                                                </ul>
                                                <table id="order-list-option" class="gap">
                                                    <tr>
                                                        <?php if($item['status']==10){?>
                                                            <td>
                                                                <a class="custom-white-btn" href="<?php echo U('Order/pay', array('id'=>$item['id']));?>" data-ajax="false">付款</a>
                                                            </td>

                                                            <td>
                                                                <a class="order-cancel custom-white-btn" href="#popupCancel" data-rel="popup" data-id="<?php echo $item['id'];?>">取消</a>
                                                            </td>
                                                        <?php }?>

                                                        <?php if($item['status']==30){?>
                                                            <td>
                                                                <a class="order-get custom-white-btn" href="#popupGet" data-rel="popup" data-id="<?php echo $item['id'];?>">确认收货</a>
                                                            </td>
                                                        <?php }?>


                                                        <?php if($item['status']==60){?>
                                                            <td>
                                                                <a class="custom-white-btn" href="#">交易成功</a>
                                                            </td>
                                                        <?php }?>


                                                        <?php if($item['status']==80 || $item['status']==90){?>
                                                            <td>
                                                                <a class="custom-white-btn" href="#">交易关闭</a>
                                                            </td>
                                                        <?php }?>


                                                        <?php if($item['status']==20){?>
                                                            <td>
                                                                <a class="custom-white-btn" href="#">
                                                                    <?php  if($item['is_refunded']=='0'){ echo '待发货'; } if($item['is_refunded']=='10'){ echo '部分退款中'; } if($item['is_refunded']=='19'){ echo '部分退款完成'; } if($item['is_refunded']=='30'){ echo '全部退款中'; } if($item['is_refunded']=='39'){ echo '全部退款完成'; } ?>
                                                                </a>
                                                            </td>
                                                        <?php }?>

                                                        

                                                        <td>
                                                            <a class="custom-white-btn" href="<?php echo U('Member/kefu');?>" data-ajax="false">客服咨询</a>
                                                        </td>

                                                        <?php if($item['status']==30 || ($item['status']==20 && $item['is_refunded']=='0')){?>

                                                        <td>
                                                            <a class="order-reject custom-dashed-btn" href="#popupWriteBackReturn" data-rel="popup" data-id="<?php echo $item['id'];?>">退货</a>
                                                        </td>
                                                        <?php }?>

                                                    </tr>
                                                </table>
                                                <a class="order-list-arrow" href="<?php echo U('Member/orderInfo', array('id'=>$item['id']));?>" data-ajax="false"></a>
                                            </div>
                                        </td>
                                    </tr><?php endforeach; endif; else: echo "" ;endif; endif; ?>
                            
                        </tbody>
                    </table>
                    
                    <!-- 退货 -->
                    <div data-role="popup" id="popupWriteBackReturn" class="customized-popup-map" data-overlay-theme="a" data-position-to="window" data-corners="false" data-history="false" data-shadow="false">
                        <a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right popup-map-close">Close</a>
                        <div class="popup-map-box" id="PopupContent">
                            <div class="popup-map-content">
                                <div>
                                    物流公司&nbsp;
                                    <span class="red">*</span>
                                </div>
                                <div class="return-type">
                                    <div id="co-select-box" class="ui-nodisc-icon ui-alt-icon">
                                        <select id="d-co-select" name="d-co-select">
                                            <option value="">请选择物流公司</option>
                                            <option value="申通快递">申通快递</option>
                                            <option value="顺丰速运">顺丰速运</option>
                                            <option value="圆通速递">圆通速递</option>
                                            <option value="中通快递">中通快递</option>
                                            <option value="韵达快递">韵达快递</option>
                                            <option value="百世汇通">百世汇通</option>
                                            <option value="天天快递">天天快递</option>
                                            <option value="邮政特快">邮政特快</option>
                                            <option value="其他">其他</option>
                                        </select>
                                    </div>
                                    <div id="co-input-box">
                                        <input type="text" id="return-co" placeholder="请填入物流公司" maxlength="10" />
                                    </div>
                                </div>
                                <div>
                                    运单编号&nbsp;
                                    <span class="red">*</span>
                                </div>
                                <div class="input-box">
                                    <input type="tel" id="return-no" placeholder="请填入运单编号" maxlength="20" />

                                    <input type="hidden" id="return-id" />
                                    <!-- <input type="hidden" id="ref_id" name="ref_id" value="0"> -->
                                </div>
                                <div id="enable-return-po" style="display:none">
                                    <div>
                                        邮　　资&nbsp;
                                        <span class="red">*</span>
                                    </div>
                                    <div class="input-box">
                                        <input type="tel" id="return-po" placeholder="请填入实际寄回运费" maxlength="20" />
                                        ※如检测为质量问题，将补贴快递费※
                                    </div>
                                </div>
                            </div>
                            <div class="popup-map-footer custom-btn-rwd-pop">
                                <input type="submit" data-role="none" class="btn-gold sent" value="提交"></div>
                        </div>
                    </div>
                    
                    <!-- 取消订单 -->
                    <div data-role="popup" id="popupCancel" class="customized-popup-map" data-overlay-theme="a" data-position-to="window" data-corners="false" data-history="false">
                        <a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right popup-map-close">Close</a>
                        <div class="popup-map-box" id="PopupContent">
                            <div>
                                <div class="popup-map-header">取消订单</div>
                            </div>
                            <div class="popup-map-content">
                                <form action="<?php echo U('Member/cancelOrder');?>" method="post" data-ajax="false" id="cancel-order-form">
                                    <input type="hidden" id="trade_id" name="trade_id" value="0">
                                    <div>订单取消后商品库存及原活动优惠无法保留，如需再次购买，建议您立即重新下单。</div>
                                </form>
                            </div>
                            <div class="popup-map-footer custom-btn-rwd-pop">
                                <a href="#" class="btn-gold" onclick="$('#popupCancel').popup('close');">放弃取消</a>
                                <a href="#" class="btn-gold gridr cancenoder">确定取消</a>
                            </div>
                        </div>
                    </div>

                    <!-- 确认收货 -->
                    <div data-role="popup" id="popupGet" class="customized-popup-map" data-overlay-theme="a" data-position-to="window" data-corners="false" data-history="false">
                        <a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right popup-map-close">Close</a>
                        <div class="popup-map-box" id="PopupContent">
                            <div>
                                <div class="popup-map-header">确认收货</div>
                            </div>
                            <div class="popup-map-content">
                                <form action="<?php echo U('Member/cancelOrder');?>" method="post" data-ajax="false" id="get-order-form">
                                    <input type="hidden" id="get_id" name="get_id" value="0">
                                    <div>请确定订单商品是否已经收到。</div>
                                </form>
                            </div>
                            <div class="popup-map-footer custom-btn-rwd-pop">
                                <a href="#" class="btn-gold" onclick="$('#popupGet').popup('close');">放弃收货</a>&nbsp;&nbsp;
                                <a href="#" class="btn-gold gridr orderget">确定收货</a>
                            </div>
                        </div>
                    </div>

                    <div data-role="popup" id="popupReject" class="customized-popup-map" data-overlay-theme="a" data-position-to="window" data-corners="false" data-history="false">
                        <div class="popup-map-box" id="PopupContent">
                            <div>
                                <div class="popup-map-header">温馨提示</div>
                            </div>
                            <div class="popup-map-content"></div>
                        </div>
                    </div>

                </div>
                <script type="text/javascript">
    window.onload = function (){
        
        $('.order-state').click(function(){
            var _status = $(this).data('status');
            // alert(_status);
            window.location.href = '<?php echo U("Member/order");?>?status='+_status;
        });
        

        $("#popupWriteBackReturn .sent").on("click", function ()
        {
            var returnCo = $.trim($("#d-co-select").val());

            if (returnCo === "其他")
            { returnCo = $.trim($("#return-co").val()); }

            var returnNo = $.trim($("#return-no").val());

            var returnPo = $.trim($("#return-po").val())

            if (returnCo === "")
            {
                Mobile.common.showAlertMessage('请选择物流公司！', null, $('#popupWriteBackReturn'));
                return false;
            }
            else if (returnCo.length > 10 || !/^[\u4e00-\u9fa5]+$/.test(returnCo))
            {
                Mobile.common.showAlertMessage('请填写正确物流公司！', null, $('#popupWriteBackReturn'));
                return false;
            }
            else if (returnNo === "")
            {
                Mobile.common.showAlertMessage('请填写单号！', null, $('#popupWriteBackReturn'));
                return false;
            }
            else if (!/^[\d]+$/.test(returnNo))
            {
                Mobile.common.showAlertMessage('单号格式错误！', null, $('#popupWriteBackReturn'));
                return false;
            }
            else if (!/^[0-9]*$/.test(returnPo))
            {
                Mobile.common.showAlertMessage('邮资格式错误！', null, $('#popupWriteBackReturn'));
                return false;
            }

            if (parseInt(returnPo) > 10) {
                Mobile.common.showAlertMessage('上限补贴10元！', null, $('#popupWriteBackReturn'));
                $("#return-po").val(10);
                return false;
            }

            $.ajax({
                url : '<?php echo U("Member/refund");?>',
                data : { id: $("#return-id").val(), returnCo: returnCo, returnNo: returnNo, returnPo: returnPo },
                dataType : 'json',
                type : 'post',
                success : function(ret){
                    // Mobile.common.showAlertMessage(ret.info);
                    Mobile.common.showAlertMessage(ret.info, null, $('#popupWriteBackReturn'));
                    if(ret.status==0){
                        window.location.reload();
                    }else{
                        window.location.reload();
                    }
                }
            });
            
        });

        

        $("#d-co-select").change(function ()
        {
            var $content = $("#PopupContent");
            var oHeight = $content.outerHeight(true);

            if ($(this).val() === "其他")
            {
                $("#co-input-box").show();
                $("#return-co").focus();
            }
            else
            {
                $("#co-input-box").hide();
                $("#return-co").val("");

                if ($(this).val() !== "")
                { $("#return-no").focus(); }
            }

            var cHeight = $content.outerHeight(true);

            if (Math.abs(oHeight - cHeight) > 0)
            { $("#popupWriteBackReturn").animate({ height: cHeight + "px" }, 0); }
        });

        $("#cancel-order-form").submit(function () { $(":submit").attr('disabled', 'disabled'); });
    }

    
</script>

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

    <script type="text/javascript" src="/Public/Mobile/m/js/lativ.js"></script>

    <script type="text/javascript">
        $.mobile.hideUrlBar = false; 
        $.mobile.buttonMarkup.hoverDelay = 0;
        $(function ()
        {
            Mobile.common.Initialize({ AppName: '', ajaxTimeout: 6000, ajaxRetryMax: 3, cartMemoryDays: 15 });
            Mobile.common.processAdCookies('PID','{"15043002":1,"15050503":1,"15050504":1,"15050509":1,"15051181":1,"15051889":1,"15051990":1,"15052691":1,"15060101":1,"15060902":1,"15061003":1,"15061104":1,"15061205":1,"15061706":1,"15062307":1,"15063008":1,"15070701":1,"15070902":1,"15071403":1,"15071804":1,"15072005":1,"15072708":1,"15080301":1,"15080904":1,"15081105":1,"15081106":1,"15081107":1,"15081108":1,"15081109":1,"15081110":1,"15081111":1,"15081112":1,"15081113":1,"15081114":1,"15081115":1,"15081216":1,"15081718":1,"15082419":1,"15083121":1,"15090701":1,"15091002":1,"15091003":1,"15091004":1,"15091005":1,"15091006":1,"15091007":1,"15091008":1,"15091009":1,"15091410":1,"15091411":1,"15091812":1,"15091813":1,"15092114":1,"15092215":1,"15092416":1,"15092917":1,"15100601":1,"15101302":1,"15102003":1,"15102604":1,"15103005":1,"15110901":1,"15111602":1,"15112003":1,"15112304":1,"15112705":1,"15120701":1,"15120702":1,"15120703":1,"15120704":1,"15120705":1,"15120706":1,"15120707":1,"15120708":1,"15120709":1,"15120910":1,"15121011":1,"15121012":1,"15121113":1,"15121114":1,"15121315":1,"15121516":1,"15121517":1,"15121518":1,"15121519":1,"15121520":1,"15121521":1,"15121522":1,"15121723":1,"15121724":1,"15122125":1,"15122226":1,"15122227":1,"15122228":1,"15122329":1,"15122330":1,"15122332":1,"15122333":1,"15122334":1,"15122335":1,"15122336":1,"15122337":1,"15122339":1,"15122840":1,"15122841":1,"15122842":1,"15122843":1,"15122945":1,"15123046":1,"15123047":1,"15123048":1,"15123049":1,"15123050":1,"15123051":1,"15123052":1,"15123053":1,"15123054":1,"15123055":1,"15123056":1,"15123057":30,"15123058":1,"15123059":1,"15123060":1,"15123061":1,"15123062":1,"15123163":1,"15123164":1,"15123165":1,"15123166":1,"16010101":1,"16010402":1,"16010403":1,"16010504":1,"16010505":1,"16010506":1,"16010507":1,"16010508":1,"16010509":1,"16010510":1,"16010511":1,"16010512":1,"16010513":1,"16010714":1,"16010715":1,"16010716":1,"16010717":1,"16010718":1,"16010719":1,"16010720":1,"16010721":1,"16010723":1,"16010724":1,"16010925":1,"16010926":1,"16011127":1,"16011228":1,"16011229":1,"16011230":1,"16011231":1,"16011232":1,"16011233":1,"16011234":1,"16011435":1,"16011736":1,"16011837":1,"16011838":1,"16012739":1,"16012740":1,"16012741":1,"16012742":1,"16012843":1,"16012844":1,"16012845":1,"16013046":1,"16020101":1,"16021502":1,"16021503":1,"16022304":1,"16022505":1,"16022906":1,"16030301":1,"16030802":1,"16030803":1,"16031504":1,"16031605":1,"16032206":1,"16032307":1,"16032508":1,"16033009":1,"16040501":1,"16040602":1,"16041203":1,"16041204":1,"16041805":1,"16042006":1,"16042107":1,"16042508":1,"16042509":1,"16050301":1,"16050503":1,"16050904":1,"16051005":1,"16051606":1,"16051707":1,"16051908":1,"16051909":1,"16052310":1,"16052411":1,"16052612":1,"16053113":1,"16053114":1,"16053115":1,"16053116":1,"16053117":1,"16053118":1,"16053119":1,"16053120":1,"16053121":1,"16053122":1,"16053123":1,"16053124":1,"16053125":1,"16053126":1,"16053127":1,"16053128":1,"16053129":1,"16053130":1,"16053131":1,"16053132":1,"16060601":1,"16060602":1,"16061306":1,"16061407":1,"16062008":1,"16062109":1,"16062310":1,"16062811":1,"16070401":1,"16070502":1,"16070703":1,"16071104":1,"16071105":1,"16071206":1,"16071807":1,"16071908":1,"16072509":1,"16072710":1,"16080101":1,"16080302":1,"16080303":1,"16080404":1,"16080405":1,"16080406":1,"16080509":1,"16080811":1,"16080813":1,"16081014":1,"16081015":1,"16081016":1,"16081017":1,"16081018":1,"16081119":1,"16081220":1,"16081522":1,"16081623":1,"16081724":1,"16081725":1,"16081726":1,"16081727":1,"16081728":1,"16081729":1,"16081730":1,"16081731":1,"16081732":1,"16081736":1,"16081737":1,"16081738":1,"16081739":1,"16081941":1,"16081942":1,"16081943":1,"16081944":1,"16081945":1,"16082246":1,"16082447":1,"16082448":1,"16082449":1,"16082650":1,"16082651":1,"16082652":1,"16083153":1,"16083154":1,"16083155":1,"16083156":1,"16090101":1,"16090102":1,"16090103":1,"16090104":1,"16090605":1,"16090706":1,"16090907":1,"16090908":1,"16090909":1,"16090910":1,"16091311":1,"16091412":1,"16091413":1,"16091414":1,"16091415":1,"16091416":1,"16092017":1,"16092218":1,"16092319":1,"16092320":1,"16092321":1,"16092622":1,"16092623":1,"16092924":1,"16092925":1,"16100401":1,"16100402":1,"16100503":1,"16100504":1,"16100505":1,"16100506":1,"16100707":1,"16100708":1,"16101109":1,"16101110":1,"16101211":1,"16101412":1,"16101413":1,"16101714":1,"16101715":1,"16101716":1,"16101717":1,"16101718":1,"16101719":1,"16101720":1,"16101821":1,"16101822":1,"16102023":1,"16102024":1,"16102025":1,"16102026":1,"16102127":1,"16102128":1,"16102129":1,"16102430":1,"16102431":1,"16102832":1,"16102833":1,"16102834":1,"16102835":1,"16102836":1,"16102837":1,"16110101":1,"16110102":1,"16110103":1,"16110204":1,"16110205":1,"16110306":1,"16110307":1,"16110408":1,"16110409":1,"16110410":1,"16110411":1,"16110412":1,"16110713":1,"16110715":1,"16110716":1,"16110717":1,"16110718":1,"16110819":1,"16110820":1,"16111021":1,"16111022":1,"16111123":1,"16111124":1,"16111125":1,"16111126":1,"16111127":1,"16111128":1,"16111429":1,"16111530":1,"16111531":1,"16111632":1,"16111733":1,"16111734":1,"16111835":1,"16111836":1,"16111837":1,"16111838":1,"16111839":1,"16112140":1,"16112241":1,"16112242":1,"16112343":1,"16112444":1,"16112445":1,"16112547":1,"16112548":1,"16112549":1,"16112550":1,"16112551":1,"16112552":1,"16112853":1,"16112854":1,"16112855":1,"16112856":1,"16112857":1,"16112958":1,"16113059":1,"16113060":1,"16113061":1,"16113062":1,"16113063":1,"16120201":1,"16120202":1,"16120203":1,"16120204":1,"16120205":1,"16120206":1}','.lativ.com'); 

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

    <script src="/Public/Mobile/m/js/mobile.member.js?3215" type="text/javascript"></script>

    <script type="text/javascript">
        $(function (){
            Mobile.member.ListInit(
            {
                orderState_All: '0',
                orderState_Pending: '10',
                orderState_Processing: '20',
                orderState_Complete: '30',
                returnState_PackageGet: '10',
                GetWriteBackReturnNo: '/Member/GetWriteBackReturnNo'
            });

             var action = $('#popupCancel form').attr('action');

            $('.order-cancel').click(function ()
            {
                var _id = $(this).attr('data-id');
                $('#trade_id').val(_id);
            });

            

            //取消订单
            $('.cancenoder').click(function(){
                $.ajax({
                    url : '<?php echo U("Member/cancelOrder");?>',
                    data : $('#cancel-order-form').serialize(),
                    dataType : 'json',
                    type : 'post',
                    success : function(ret){
                        Mobile.common.showAlertMessage(ret.info);
                        if(ret.status==0){
                            
                        }else{
                            window.location.reload();
                        }
                    }
                });
            });


            //确认收货
            $('.order-get').click(function (){
                var _id = $(this).attr('data-id');
                $('#get_id').val(_id);
            });
            $('.orderget').click(function(){
                $.ajax({
                    url : '<?php echo U("Member/shouhuo");?>',
                    data : $('#get-order-form').serialize(),
                    dataType : 'json',
                    type : 'post',
                    success : function(ret){
                        Mobile.common.showAlertMessage(ret.info);
                        if(ret.status==0){
                            
                        }else{
                            window.location.reload();
                        }
                    }
                });
            });

            //确认退货
            $('.order-reject').click(function (){
                var _id = $(this).attr('data-id');
                $('#return-id').val(_id);
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