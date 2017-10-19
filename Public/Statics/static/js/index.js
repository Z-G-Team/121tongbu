$(function() {
    var $lazyImgs = $("img[data-original]");
    if ($lazyImgs.length > 0) {
        var greyImg = new Image();
        greyImg.name = 'greyImg';
        greyImg.src = $lazyImgs[0].src;
        $(greyImg).load(function() {
            $lazyImgs.lazyload({
                failurelimit: 200
            });
        });
        $(window).load(function() {
            $lazyImgs.lazyload({
                failurelimit: 200
            });
        });
    }
    $('#BannerSlideShow img').show();
    var silderWidth = '1180';
    $('#BannerSlideShow').bxSlider({
        speed: 150,
        auto: true,
        slideWidth: silderWidth,
        pagerCustom: '.slide-pager',
        nextText: '',
        prevText: '',
        pause: 6000,
        onSliderLoad: function() {
            var pagerLinks = $(".slide-pager a");
            var count = pagerLinks.size();
            var avg = parseInt(silderWidth / count);
            var maxWidth = silderWidth;
            pagerLinks.each(function(i) {
                if (i < count - 1) {
                    $(this).width(avg);
                } else {
                    $(this).width(maxWidth - (count + 1));
                }
                maxWidth = maxWidth - avg;
            });
            $(".slide-pager").fadeIn(600);
            var buttonSwitch = 'True';
            if (buttonSwitch == 'True') {
                $('.slide-pager').addClass('circule-button');
            }
        }
    });
    $.cookie("navCurrent", null);
    $("a.mobileQRcode").fancybox({
        href: "Home/MobileQRcode",
        width: 560,
        height: 550,
        type: 'iframe',
        autoScale: false,
        hideOnOverlayClick: false,
        border: '5px solid rgba(40, 40, 40, 0.7)',
        transitionIn: 'none',
        transitionOut: 'none'
    });
    $("a.wechatQRcode").fancybox({
        href: "Home/WechatQRcode",
        width: 560,
        height: 550,
        type: 'iframe',
        autoScale: false,
        hideOnOverlayClick: false,
        border: '5px solid rgba(40, 40, 40, 0.7)',
        transitionIn: 'none',
        transitionOut: 'none'
    });

});
var idleTime = 0;

if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $("#footer td.last-child").removeClass("alignr");
    $('#footer span.web-mobile,#footer span.web-pc').show();
}

$(function() {
    registerEpaperFancy();
    registerMiniCart();
    var mCart = $.cookie("mCart");

    if (mCart == null || mCart == undefined || mCart == '') {
        var ticks = new Date().getTime();
        var cookieTimeOut = '60';
        var date = new Date();
        date.setTime(date.getTime() + (cookieTimeOut * 60 * 1000));
        $.cookie("mCart", ticks, {
            expires: date,
            path: "/"
        });
        mCart = ticks;
    }

    // $.get('/Shopping/ShowMiniCart/?r=' + mCart,
    //     function(data) {
    //         $('#MiniCartList').html(data);
    //         $('#stateByLogin').load('/Home/LoginState/?r=' + self.name);
    //     });

    // $.common.processAdCookies('PID', '.lativ.com');

    $("#search-form").submit(function() {
        if ($('#keyWord').val() == $('#defaultTip').val()) {
            $('#keyWord').val($('#defaultKeyword').val());
        }
    });

    $("#keyWord").inputLabel('请输入关键词', {
        color: ""
    });

    var currentCategory = ($("#categoryMap").attr("maincategory") == undefined ? $('.sitemap a:first').text() : $("#categoryMap").attr("maincategory"));

    if (currentCategory != undefined) {
        var target = $("#nav li a[rel=" + currentCategory + "]");

        if (target.css("background-position") == undefined) {
            target.css("background-position-y", "").css("background-position-y", "-56px");
        } else {
            target.css("background-position", "").css("background-position", GetPositionX(target) + " -56px");
        }
    }

    var redirectToFancy = $.cookie("RedirectToFancy");

    if (redirectToFancy != null) {
        $.cookie("RedirectToFancy", null);
        var $linkObj = $("." + redirectToFancy + " a");

        if ($linkObj.size() > 0) {
            var redirectUrl = $.cookie("RedirectUrl");
            $.cookie("RedirectUrl", null);
            var fancyHeight = redirectToFancy == 'epaper' ? 330 : 420;
            var href = redirectUrl != null && redirectUrl != '' ? redirectUrl : $linkObj.attr("href");

            $.fancybox({
                href: href
            }, {
                width: 780,
                height: fancyHeight,
                type: 'iframe',
                autoScale: false,
                autoDimensions: false,
                hideOnOverlayClick: false,
                border: '5px solid rgba(40, 40, 40, 0.7)'
            });
        }
    }

    if ($.browser.mobile) {
        $('#logoUrl').attr('href', 'http://www.lativ.com?l=1');
    }

    var idleInterval = setInterval(timerIncrement, 60000);

    $("body").click(function() {
        idleTime = 0;
    });
    $(window).scroll(function() {
        idleTime = 0;
    });
    $(window).resize(function() {
        idleTime = 0;
    });
    $(document).keypress(function(e) {
        idleTime = 0;
    });
});

function timerIncrement() {
    idleTime = idleTime + 1;
    var timeLimit = parseInt('20');

    if (idleTime > timeLimit) {
        if ($("#tradeCount").size() > 0) {
            if (parseInt($("#tradeCount").text()) > 0 && $(document).find("iframe[id='fancybox-frame']").size() <= 0) {
                $.fancybox({
                    href: '/Home/CartRemind'
                }, {
                    width: 660,
                    height: 250,
                    type: 'iframe',
                    autoScale: false,
                    autoDimensions: false,
                    hideOnOverlayClick: false,
                    border: '5px solid rgba(40, 40, 40, 0.7)'
                });
            }
        }
    }
}