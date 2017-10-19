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
    <title>会员注册</title>
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
                <h1 class="empty-header-title">首次购物</h1>
            </div>
        </div>
        <div id="main-content" class="gapm30">

            <form action="<?php echo U('Login/save');?>" method="post" id="mForm">
                <div class="order-box ui-nodisc-icon ui-alt-icon">
                    <div class="order-caption">首次购物会员信息填写</div>
                    <div class="order-col">
                        <div class="order-col-title">姓&nbsp;&nbsp;名：</div>
                        <div class="order-col-content">
                            <input id="member-name" name="user_name" placeholder="请输入会员姓名" type="text" value="" />
                        </div>
                    </div>
                    <div class="order-col">
                        <div class="order-col-title">邮&nbsp;&nbsp;箱：</div>
                        <div class="order-col-content-full">
                            <input id="email" maxlength="60" name="email" placeholder="邮箱即为您的lativ会员帐号" type="email" value="" />
                        </div>
                    </div>
                    <div class="order-col">
                        <div class="order-col-title">密&nbsp;&nbsp;码：</div>
                        <div class="order-col-content-full">
                            <input autocomplete="off" id="pwd" name="password" placeholder="6个字以上，须含英文及数字" type="password" />
                        </div>
                    </div>
                    <div class="order-col">
                        <div class="order-col-title">密码确认：</div>
                        <div class="order-col-content-full">
                            <input autocomplete="off" id="confirmpassword" name="confirmpassword" type="password" value="" />
                        </div>
                    </div>
                    <div class="order-col">
                        <div class="check-gray alignc">
                            <label for="statement-confirm">
                                「已阅读
                                <a class="gold-link" href="javascript:;">购物条款</a>
                                」
                            </label>
                            <input id="statement-confirm" name="會員主檔.同意聲明" type="checkbox" value="true" />
                            <input name="會員主檔.同意聲明" type="hidden" value="false" />
                        </div>
                    </div>
                    <div class="order-caption">收货人信息</div>
                    <div class="order-col-line">
                        <div class="order-col-title">姓&nbsp;&nbsp;名：</div>
                        <div class="order-col-content">
                            <input id="recipient-name" name="real_name" placeholder="请输入收货人姓名" type="text" value="" />
                        </div>
                    </div>
                    <div class="provinces-group">

                        <div class="order-col-line">
                            <div class="order-col-title">省&nbsp;&nbsp;份：</div>
                            <div class="order-col-content">
                                <span id="provinces">
                                    <select name="province" id="province">
                                        <option value="">请选择省份</option>
                                        <?php if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><option value="<?php echo ($item['id']); ?>"><?php echo ($item['name']); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div class="order-col-line">
                            <div class="order-col-title">城&nbsp;&nbsp;市：</div>
                            <div class="order-col-content">
                                <span id="cities">
                                    <select name="city" id="city">
                                        <option value="">请选择城市</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div class="order-col-line">
                            <div class="order-col-title">区&nbsp;&nbsp;县：</div>
                            <div class="order-col-content">
                                <span id="regions">
                                    <select name="area" id="area">
                                        <option value="">请选择区县</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="order-col-line">
                        <div class="order-col-title">详细地址：</div>
                        <br />
                        <div class="order-col-content-full">
                            <input id="addrform___" name="address" placeholder="请输入详细地址" type="text" value="" />
                        </div>
                    </div>
                </div>
                <div class="alignc gap">
                    <a id="complete-btn" href="#" class="btn-gold">完成</a>
                </div>
            </form>

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



        $('#province').change(function(){
            var sf = $(this).val();
            $('#area').html('<option value="" data-id="">请选择区县</option>');
            $('#city').html('<option value="" data-id="">请选择城市</option>');
            if(sf){
                $.ajax({
                    url : '<?php echo U("Region/getSubRegion");?>',
                    data : {pid:sf},
                    dataType : 'json',
                    type : 'post',
                    success : function(ret){
                        if(ret.status==1){
                            var info = ret.info;
                            var strs = '<option value="" data-id="">请选择城市</option>';
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
            $('#area').html('<option value="" data-id="">请选择区县</option>');
            if(sf){
                $.ajax({
                    url : '<?php echo U("Region/getSubRegion");?>',
                    data : {pid:sf},
                    dataType : 'json',
                    type : 'post',
                    success : function(ret){
                        if(ret.status==1){
                            var info = ret.info;
                            var strs = '<option value="" data-id="">请选择区县</option>';
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

    <script type="text/javascript">
        $(function ()
        {
            // initAddressSelectEvent('/Shopping/ChangeAddress');
            var submitted = false, errormsg = '';
            Mobile.common.bindCopyVal($('#member-name'), $('#recipient-name'));
            $('#confirmpassword').bind('paste', function (e) { return false; });
            $('a.gold-link').on('touchstart', function ()
            {  
              Mobile.common.CreatePanel($(this), "policy");
            });
            $('#complete-btn').click(function ()
            {
                var validResult = $('form').valid();
                if (validResult)
                {
                    if (Mobile.common.checkPassword())
                    { validResult = true; }
                    else
                    { validResult = false; }
                }
                if (validResult)
                { $('form').submit(); }
                else
                { Mobile.common.showCustomVaildateMsg(errormsg); }
            });
            // $('#email').blur(function ()
            // {
            //     if (Mobile.common.availableEmail('/Validate/CheckAvailableEMail'))
            //     { Mobile.common.checkEmailMx('/Validate/CheckEmailDomain'); }
            // });
            $('form').validate({
                rules: {
                    "user_name": { required: true, specialsymbols: true },
                    "email": { required: true, email: true, dbc2sbc: true },
                    "password": { required: true, lativPW: true },
                    "confirmpassword": { required: true },
                    "會員主檔.同意聲明": { required: true },
                    "real_name": { required: true, specialsymbols: true, recipient: true },
                    "province": { required: true },
                    "city": { required: true },
                    "area": { required: true },
                    "address": { required: true, minlength: 5 }
                },
                messages: {
                    "user_name": { required: '请填写会员姓名', specialsymbols: '会员姓名请勿输入特殊符号' },
                    "email": { required: '请填写邮箱', email: '邮箱格式不正确', dbc2sbc: '邮箱请勿输入全型文字' },
                    "password": { required: '请设定密码', lativPW: '密码格式不正确，须6个字符以上，包含英文及数字' },
                    "confirmpassword": { required: '请填写密码确认' },
                    "會員主檔.同意聲明": { required: '请阅读并勾选接受 lativ 条款' },
                    "real_name": { required: '请填写收货人姓名', specialsymbols: '收货人姓名请勿输入特殊符号', recipient: '请填写正确姓名' },
                    "province": { required: '请选择收货地区' },
                    "city": { required: '请选择收货城市' },
                    "area": { required: '请选择收货区县' },
                    "address": { required: '请填写收货详细路名、门牌号', minlength: '您填写的收货详细地址不合理' }
                },
                submitHandler: function (form)
                {
                    if (!submitted)
                    {
                        $('#complete-btn').text('处理中...').off();
                        submitted = true;
                        $.ajax({
                            url : '<?php echo U("Login/save");?>',
                            data : $('#mForm').serialize(),
                            dataType : 'json',
                            type : 'post',
                            success : function(ret){
                                if(ret.status==0){
                                    Mobile.common.showAlertMessage(ret.info);
                                }else{
                                    window.location.href = '<?php echo U("Index/index");?>';
                                }
                            }
                        });
                    }
                },
                showErrors: function ()
                {
                    errormsg = '';
                    for (var i = 0; this.errorList[i]; i++)
                    {
                        var error = this.errorList[i];
                        errormsg += error.message + '<br/>';
                        if (this.settings.highlight)
                        { this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass); }
                    }
                    if (this.settings.unhighlight)
                    {
                        for (i = 0, elements = this.validElements(); elements[i]; i++)
                        { this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass); }
                    }
                },
                highlight: function (element, errorClass, validClass)
                {
                    var $elem = $(element).parent();
                    if (element.type === "radio") { $elem = $(element).parent().parent(); }
                    else if (element.type === "checkbox") { $elem = $(element).prev('label'); }
                    $elem.addClass(errorClass).removeClass(validClass);
                },
                unhighlight: function (element, errorClass, validClass)
                {
                    var $elem = $(element).parent();
                    if (element.type === "radio") { $elem = $(element).parent().parent(); }
                    else if (element.type === "checkbox") { $elem = $(element).prev('label'); }
                    $elem.removeClass(errorClass).addClass(validClass);
                },
                ignore: ""
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