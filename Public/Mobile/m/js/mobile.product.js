(function(n) {
    var p = n.product = {},
    t = {
        bedurl: "",
        issecureconn: "False",
        sno: "",
        ino: "",
        size: "",
        defaultSize: "",
        amount: 50,
        pname: "",
        bystyle: !0,
        mainCategory: "",
        activity: "",
        sizeAllMargin: 0,
        sizeTabWidth: 0,
        cacheID: 0
    },
    f = !1,
    e = !1,
    h,
    a,
    l = !0,
    v = null,
    c = !1,
    o = [],
    s = "",
    u = -1,
    r = 0,
    y = function(n) {
        return ! n || (n = n.replace(".", "_")),
        n
    };
    jQuery.extend(n.product, {
        Initialize: function(n) {
            t = $.extend({},
            t, n || {});
            o = t.bedurl ? t.bedurl.split(",") : [];
            u = o.length - 1;
            s = u > -1 ? o[0] : ""
        },
        Init: function(n) {
            var r, f, e, h, i;
            t = $.extend({},
            t, n || {});
            o = t.bedurl ? t.bedurl.split(",") : [];
            u = o.length - 1;
            s = u > -1 ? o[0] : "";
            $(".owl-stage-outer").on("click",
            function() {
                if (l && $.support.touch) {
                    l = !1;
                    var n = $(this),
                    t = n.find(".active img"),
                    i = t.width(),
                    r = t.height();
                    n.closest("#d-product-img").hide();
                    $("#zoom-img").css("height", n.height()).html(t.clone().css({
                        width: "200%",
                        height: "auto"
                    })).show().scrollLeft(i / 2).scrollTop(r / 2);
                    $("#tap-to-zoom").show()
                }
            });
            $("#tap-to-zoom, #zoom-img").on("click",
            function() {
                Mobile.product.ZoomOut()
            });
            Mobile.product.modelImgResize();
            $(window).on("resize",
            function() {
                Mobile.product.modelImgResize()
            });
            setTimeout(function() {
                $(".product-report  img").lazyload({
                    failurelimit: 2
                })
            },
            100);
            $(".product-report-nav div").on("vclick",
            function() {
                var n = $(this).attr("data-child");
                $(".product-report .open").removeClass("open");
                $(".product-report").find("." + n).addClass("open");
                $(this).addClass("open")
            });
            r = $("#size-report-area");
            $.trim(r.html()) != "" && (i = r.find("thead tr:first th").length, r.find("thead:first").prepend('<tr><th class="t-title" colspan="' + i + '">商品尺码表<\/th><\/tr>'));
            $(window).resize(function() {
                Mobile.product.bindReportSwipe(r)
            });
            f = $("#try-report-area");
            $.trim(f.html()) != "" && (i = f.find("thead tr:first th").length, f.find("thead:first").prepend('<tr><th class="t-title" colspan="' + i + '">试穿纪录<\/th><\/tr>'));
            $(window).resize(function() {
                Mobile.product.bindReportSwipe(f)
            });
            e = $("#feather-content-area");
            $.trim(e.html()) != "" && (i = e.find("thead tr:first th").length, e.find("thead:first").prepend('<tr><th class="t-title" colspan="' + i + '">商品充绒量<\/th><\/tr>'));
            $(window).resize(function() {
                Mobile.product.bindReportSwipe(e)
            });
            h = $("#model-info-area");
            $.trim(h.html()) != "" && (i = h.find("tbody tr:first td").attr("colspan"), h.find("tbody:first").prepend('<tr><td class="t-title" colspan="' + i + '">模特儿信息<\/td><\/tr>'));
            $(window).resize(function() {
                Mobile.product.bindReportSwipe(h)
            });
            $(".decrease").on("vclick",
            function() {
                var n = $(".order-amount"),
                t = parseInt(n.val(), 10);
                t - 1 > 0 && n.val(t - 1)
            });
            $(".increase").on("vclick",
            function() {
                var n = $(".order-amount"),
                t = parseInt(n.val(), 10);
                t + 1 <= 99 && n.val(t + 1)
            });
            $(".order-amount").keyup(function() {
                if (!/^[1-9]{1}[0-9]{0,1}$/.test($(this).val())) {
                    var n = /^[1-9]{1}[0-9]{0,1}/.exec($(this).val());
                    n != null ? $(this).val(n) : $(this).val("")
                }
            })
        },
        Generate: function(n, i) {
            v == null && (v = $(".imgsrc").size());
            $.retryAjax({
                type: "GET",
                url: Mobile.common.AppName + "/Product/ProductInfo/",
                data: {
                    styleNo: n
                },
                dataType: "json",
                success: function(n) {
                    if (h = $.parseJSON(n.info), a = $.parseJSON(n.activity), h.length == 0) {
                        Mobile.common.showAlertMessage("很抱歉，此商品已暂时下架，请再重新挑选",
                        function() {
                            location.href = "/"
                        });
                        return
                    }
                    var r = 0;
                    i = i.substring(5, 7);
                    $.each(h,
                    function(n, u) {
                        var f = i == u.ItemList[0].sn.substring(5, 7);
                        $(".color").append('<a class="product-color" data-sn="' + u.ItemList[0].sn + '" data-sort="' + n + '">' + Mobile.product.GetImageUrl(f, u.colorImg, u.color, u.ItemList[0].sn, n) + "<\/a>");
                        $.each(u.ItemList,
                        function(i, u) {
                            t.ino == u.sn && (r = n)
                        })
                    });
                    $(".product-color").bind("vclick",
                    function() {
                        Mobile.product.GetItemList($(this).attr("data-sn"), 1, $(this).attr("data-sort"));
                        Mobile.product.GetBorder($(this).find(".product-color-img"))
                    });
                    $("#buyCount").selectmenu("disable").selectmenu("refresh");
                    $("#sizelist a").length == 1 ? $("#sizelist a").click() : Mobile.product.GetItemList(t.ino, "", r);
                    $("#sizelist a").removeClass("current");
                    t.size != "" && ($("#" + t.ino).addClass("current"), t.defaultSize = t.size);
                    $("#sizelist a.current").size() > 0 && !$("#sizelist a.current").hasClass("lack") && $("#sizelist a.current").append('<img src="' + (!s ? Mobile.common.AppName: s) + '/images/icons/size_select.png" alt="" width="15px" height="15px">');
                    Mobile.product.GetActivity(a);
                    Mobile.product.GenerateKeepItem()
                }
            })
        },
        GetImageUrl: function(n, i, r) {
            return t.issecureconn == "True" ? n ? '<img class="product-color-img current" src="' + i + '" alt="' + r + '" title="' + r + '" />': '<img class="product-color-img" src="' + i + '" alt="' + r + '" title="' + r + '" />': n ? '<img class="product-color-img current" src="' + s + i + '" alt="' + r + '" title="' + r + '" />': '<img class="product-color-img" src="' + s + i + '" alt="' + r + '" title="' + r + '" />'
        },
        GetBorder: function(n) {
            $(".color .current").removeClass("current");
            n.addClass("current")
        },
        GetProductImg: function(n) {
            var i, u, r;
            Mobile.product.ZoomOut();
            $(".owl-product-img").attr("src", s + h[n].ItemList[0].img280);
            $(".owl-dot:eq(" + $(".owl-item:not(.cloned)").index($(".owl-item:not(.cloned) .owl-product-img").closest(".owl-item")) + ")").trigger("click");
            i = "";
            u = Math.ceil(100 / h[n].ItemList.length);
            $.each(h[n].ItemList,
            function(n, r) {
                var u = t.amount,
                f, e;
                parseInt(r.invt) < u && (u = parseInt(r.invt));
                i += '<a id="' + r.sn + '" data-sn="' + r.sn + '" data-invt="' + u + '" data-size="' + r.size + '" data-notify="' + r.isNotify + '" ';
                f = 'class="product-size';
                i += parseInt(r.invt) < 1 ? f + ' lack"': f + '"';
                e = r.體型尺寸 == r.size || !$.trim(r.體型尺寸);
                i += ">" + (e ? r.size: r.體型尺寸 + "/" + r.size) + "<\/a>"
            });
            $("#sizelist").html(i);
            r = 0;
            $("#sizelist a").each(function() {
                var n = $(this).innerWidth();
                n > r && (r = n)
            });
            $("#sizelist a").css("width", r);
            Mobile.product.GetCurrentSize()
        },
        GetCurrentSize: function() {
            var n = $('#sizelist a[data-size="' + t.defaultSize + '"]');
            n.length > 0 && (n.addClass("current"), Mobile.product.ChangeSize(n.attr("data-sn"), n.attr("data-invt"), n.attr("data-size"), n.attr("data-notify")))
        },
        GetItemList: function(n, i, r) {
            //gan test
            var json = {
                    "info": "[{\"color\":\"桃红\",\"colorImg\":\"/i/22331/22331011/2233101_24.jpg\",\"ItemList\":[{\"size\":\"S\",\"體型尺寸\":\"155/80A\",\"invt\":19,\"sn\":\"22331011\",\"img140\":\"/i/22331/22331011/2233101_220.jpg\",\"img280\":\"/i/22331/22331011/2233101_500.jpg\",\"img900\":\"/i/22331/22331011/2233101_900.jpg\",\"isNotify\":false},{\"size\":\"M\",\"體型尺寸\":\"160/84A\",\"invt\":42,\"sn\":\"22331012\",\"img140\":\"/i/22331/22331011/2233101_220.jpg\",\"img280\":\"/i/22331/22331011/2233101_500.jpg\",\"img900\":\"/i/22331/22331011/2233101_900.jpg\",\"isNotify\":false},{\"size\":\"L\",\"體型尺寸\":\"160/88A\",\"invt\":45,\"sn\":\"22331013\",\"img140\":\"/i/22331/22331011/2233101_220.jpg\",\"img280\":\"/i/22331/22331011/2233101_500.jpg\",\"img900\":\"/i/22331/22331011/2233101_900.jpg\",\"isNotify\":false},{\"size\":\"XL\",\"體型尺寸\":\"165/92A\",\"invt\":15,\"sn\":\"22331014\",\"img140\":\"/i/22331/22331011/2233101_220.jpg\",\"img280\":\"/i/22331/22331011/2233101_500.jpg\",\"img900\":\"/i/22331/22331011/2233101_900.jpg\",\"isNotify\":false}]},{\"color\":\"灰蓝\",\"colorImg\":\"/i/22331/22331021/2233102_24.jpg\",\"ItemList\":[{\"size\":\"S\",\"體型尺寸\":\"155/80A\",\"invt\":19,\"sn\":\"22331021\",\"img140\":\"/i/22331/22331021/2233102_220.jpg\",\"img280\":\"/i/22331/22331021/2233102_500.jpg\",\"img900\":\"/i/22331/22331021/2233102_900.jpg\",\"isNotify\":false},{\"size\":\"M\",\"體型尺寸\":\"160/84A\",\"invt\":40,\"sn\":\"22331022\",\"img140\":\"/i/22331/22331021/2233102_220.jpg\",\"img280\":\"/i/22331/22331021/2233102_500.jpg\",\"img900\":\"/i/22331/22331021/2233102_900.jpg\",\"isNotify\":false},{\"size\":\"L\",\"體型尺寸\":\"160/88A\",\"invt\":44,\"sn\":\"22331023\",\"img140\":\"/i/22331/22331021/2233102_220.jpg\",\"img280\":\"/i/22331/22331021/2233102_500.jpg\",\"img900\":\"/i/22331/22331021/2233102_900.jpg\",\"isNotify\":false},{\"size\":\"XL\",\"體型尺寸\":\"165/92A\",\"invt\":21,\"sn\":\"22331024\",\"img140\":\"/i/22331/22331021/2233102_220.jpg\",\"img280\":\"/i/22331/22331021/2233102_500.jpg\",\"img900\":\"/i/22331/22331021/2233102_900.jpg\",\"isNotify\":false}]},{\"color\":\"红色\",\"colorImg\":\"/i/22331/22331031/2233103_24.jpg\",\"ItemList\":[{\"size\":\"S\",\"體型尺寸\":\"155/80A\",\"invt\":20,\"sn\":\"22331031\",\"img140\":\"/i/22331/22331031/2233103_220.jpg\",\"img280\":\"/i/22331/22331031/2233103_500.jpg\",\"img900\":\"/i/22331/22331031/2233103_900.jpg\",\"isNotify\":false},{\"size\":\"M\",\"體型尺寸\":\"160/84A\",\"invt\":50,\"sn\":\"22331032\",\"img140\":\"/i/22331/22331031/2233103_220.jpg\",\"img280\":\"/i/22331/22331031/2233103_500.jpg\",\"img900\":\"/i/22331/22331031/2233103_900.jpg\",\"isNotify\":false},{\"size\":\"L\",\"體型尺寸\":\"160/88A\",\"invt\":34,\"sn\":\"22331033\",\"img140\":\"/i/22331/22331031/2233103_220.jpg\",\"img280\":\"/i/22331/22331031/2233103_500.jpg\",\"img900\":\"/i/22331/22331031/2233103_900.jpg\",\"isNotify\":false},{\"size\":\"XL\",\"體型尺寸\":\"165/92A\",\"invt\":4,\"sn\":\"22331034\",\"img140\":\"/i/22331/22331031/2233103_220.jpg\",\"img280\":\"/i/22331/22331031/2233103_500.jpg\",\"img900\":\"/i/22331/22331031/2233103_900.jpg\",\"isNotify\":false}]},{\"color\":\"蓝黑\",\"colorImg\":\"/i/22331/22331041/2233104_24.jpg\",\"ItemList\":[{\"size\":\"S\",\"體型尺寸\":\"155/80A\",\"invt\":21,\"sn\":\"22331041\",\"img140\":\"/i/22331/22331041/2233104_220.jpg\",\"img280\":\"/i/22331/22331041/2233104_500.jpg\",\"img900\":\"/i/22331/22331041/2233104_900.jpg\",\"isNotify\":false},{\"size\":\"M\",\"體型尺寸\":\"160/84A\",\"invt\":50,\"sn\":\"22331042\",\"img140\":\"/i/22331/22331041/2233104_220.jpg\",\"img280\":\"/i/22331/22331041/2233104_500.jpg\",\"img900\":\"/i/22331/22331041/2233104_900.jpg\",\"isNotify\":false},{\"size\":\"L\",\"體型尺寸\":\"160/88A\",\"invt\":50,\"sn\":\"22331043\",\"img140\":\"/i/22331/22331041/2233104_220.jpg\",\"img280\":\"/i/22331/22331041/2233104_500.jpg\",\"img900\":\"/i/22331/22331041/2233104_900.jpg\",\"isNotify\":false},{\"size\":\"XL\",\"體型尺寸\":\"165/92A\",\"invt\":16,\"sn\":\"22331044\",\"img140\":\"/i/22331/22331041/2233104_220.jpg\",\"img280\":\"/i/22331/22331041/2233104_500.jpg\",\"img900\":\"/i/22331/22331041/2233104_900.jpg\",\"isNotify\":false}]},{\"color\":\"米白\",\"colorImg\":\"/i/22331/22331051/2233105_24.jpg\",\"ItemList\":[{\"size\":\"XL\",\"體型尺寸\":\"165/92A\",\"invt\":7,\"sn\":\"22331054\",\"img140\":\"/i/22331/22331051/2233105_220.jpg\",\"img280\":\"/i/22331/22331051/2233105_500.jpg\",\"img900\":\"/i/22331/22331051/2233105_900.jpg\",\"isNotify\":false}]},{\"color\":\"黑色\",\"colorImg\":\"/i/22331/22331061/2233106_24.jpg\",\"ItemList\":[{\"size\":\"S\",\"體型尺寸\":\"155/80A\",\"invt\":5,\"sn\":\"22331061\",\"img140\":\"/i/22331/22331061/2233106_220.jpg\",\"img280\":\"/i/22331/22331061/2233106_500.jpg\",\"img900\":\"/i/22331/22331061/2233106_900.jpg\",\"isNotify\":false},{\"size\":\"M\",\"體型尺寸\":\"160/84A\",\"invt\":22,\"sn\":\"22331062\",\"img140\":\"/i/22331/22331061/2233106_220.jpg\",\"img280\":\"/i/22331/22331061/2233106_500.jpg\",\"img900\":\"/i/22331/22331061/2233106_900.jpg\",\"isNotify\":false},{\"size\":\"L\",\"體型尺寸\":\"160/88A\",\"invt\":11,\"sn\":\"22331063\",\"img140\":\"/i/22331/22331061/2233106_220.jpg\",\"img280\":\"/i/22331/22331061/2233106_500.jpg\",\"img900\":\"/i/22331/22331061/2233106_900.jpg\",\"isNotify\":false},{\"size\":\"XL\",\"體型尺寸\":\"165/92A\",\"invt\":9,\"sn\":\"22331064\",\"img140\":\"/i/22331/22331061/2233106_220.jpg\",\"img280\":\"/i/22331/22331061/2233106_500.jpg\",\"img900\":\"/i/22331/22331061/2233106_900.jpg\",\"isNotify\":false}]}]",
                    "activity": "{\"ActivityName\":\"温暖推荐．2件 85折\",\"ActivityCode\":\"2P85D\",\"Price\":null,\"ActivityType\":1,\"Discount\":\"0.85\",\"IsHide\":false}"
                };
                if(!h){
                    h=$.parseJSON(json.info);
                }else{
                    h=h;
                }
            //gan test
            $(".order-amount").val("").attr("disabled", !0);
            
            $.each(h[r].ItemList,
            function(u, f) {
                $("#icolor").html(h[r].color).attr("color", f.sn.substring(5, 7));
                i != "1" ? t.size != "" ? f.sn == n && (Mobile.product.ChangeSize(f.sn, f.invt, f.size, f.isNotify), falg = !0) : Mobile.product.removeShoppcartOnClick() : ($("#buyCount option").remove(), $("#buyCount").append("<option>数量<\/option>").selectmenu("disable").selectmenu("refresh"), Mobile.product.removeShoppcartOnClick());
                var e = t.amount;
                parseInt(f.invt) < e && (e = parseInt(f.invt))
            });
            Mobile.product.GetProductImg(r);
            $(".product-size").on("vclick",
            function() {
                var n = $(this);
                Mobile.product.ChangeSize(n.attr("data-sn"), n.attr("data-invt"), n.attr("data-size"), n.attr("data-notify"))
            })
        },
        GetActivity: function(n) {
            if (n) {
                var r = $.parseJSON(t.activity),
                i = [];
                n.IsHide === !0 ? i.push("") : n.ActivityType === r.任選折扣 || n.ActivityType === r.任選特價 || n.ActivityType === r.任選變價 ? (i.push($.format('<a data-ajax="false" href="' + Mobile.common.AppName + '/OnSale/{0}/{1}">【{2}】<\/a>', n.ActivityCode, t.mainCategory, n.ActivityName)), $("#activity-link").html(i.join(""))) : n.ActivityType === r.滿額加價 && (i.push("【另享满额优惠】"), $("#activity").html(i.join("")))
            }
        },
        ChangeSize: function(n, i, r, u) {
            var o = !0,
            f = $(".order-amount"),
            e;
            if ($("#sizelist a").removeClass("current").find("img").remove(), e = $("#" + n), e.addClass("current"), t.defaultSize = r, f.val("").attr("disabled", !0), e.hasClass("lack") || e.append('<img src="' + (!s ? Mobile.common.AppName: s) + '/images/icons/size_select.png" alt="" width="15px" height="15px">'), $(".itemName").text(""), $("#itemNo").val(""), i < t.amount ? i < 1 ? (u === "true" || u == !0 ? (Mobile.product.removeShoppcartOnClick(), $("#addShopcar").hide(), $("#notifyMe").show().attr("href", "#popupMap"), $(".itemName").text($(".name-area").text().trim()), $("#itemNo").val(n)) : ($("#addShopcar").text("售完已绝版").show(), $("#notifyMe").hide().attr("href", "#"), Mobile.product.removeShoppcartOnClick()), o = !1) : ($("#addShopcar").text("加入购物车").show(), $("#notifyMe").hide().attr("href", "#"), Mobile.product.removeShoppcartOnClick()) : (Mobile.product.removeShoppcartOnClick(), $("#addShopcar").text("加入购物车").show(), $("#notifyMe").hide().attr("href", "#")), o) {
                i = i < t.amount ? parseInt(i, 10) : t.amount;
                f.val(1).attr("disabled", !1);
                Mobile.product.removeShoppcartOnClick();
                $("#addShopcar").on("click",
                function() {
                    var r = f.val();
                    if (/^[1-9]{1}[0-9]{0,1}$/.test(r)) r = parseInt(r, 10);
                    else return Mobile.common.showAlertMessage("商品数量异常！"),
                    f.val(1),
                    !1;
                    r > t.amount ? (Mobile.common.showAlertMessage("已经超过单品购买上限！"), f.val(1)) : r > i ? (Mobile.common.showAlertMessage("库存不足无法购买！"), f.val(i - r > 0 ? i - r: "")) : $.ajax({
                        type: "POST",
                        url: Mobile.common.AppName + "/Shopping/MiniCart",
                        data: {
                            itemNo: n,
                            buyAmount: r
                        },
                        dataType: "json",
                        async: !1,
                        success: function(n) {
                            if (n[0].errorMsg) Mobile.common.showAlertMessage(n[0].errorMsg);
                            else {
                                f.val("").attr("disabled", !0);
                                $("#sizelist a").removeClass("current").find("img").remove();
                                Mobile.product.removeShoppcartOnClick();
                                var u = $("#lativ-cart span"),
                                t = parseInt(u.attr("buycount"), 10) + parseInt(r, 10),
                                i = $(".name-area").html();
                                n[0].alertMsg ? Mobile.common.showAlertMessage(n[0].alertMsg,
                                function() {
                                    Mobile.product.AddCartMsg(t, i)
                                }) : Mobile.product.AddCartMsg(t, i)
                            }
                        }
                    })
                })
            }
        },
        AddCartMsg: function(n, t) {
            if ($("#lativ-cart").length > 0) {
                var i = $("#lativ-cart span");
                i.attr("buycount", n);
                i.html("结算(" + n + ")");
                Mobile.common.showAddCart(t + "<br>已加入购物车！")
            }
        },
        NotBuy: function() {
            $("#sizelist a.current").size() < 1 && Mobile.common.showAlertMessage("您尚未选择尺码")
        },
        ZoomOut: function() {
            $("#tap-to-zoom").hide();
            $("#zoom-img").hide().html("");
            $("#d-product-img").show();
            l = !0
        },
        removeShoppcartOnClick: function() {
            $("#addShopcar").off("click")
        },
        GenerateBuyCountSelect: function(n) {
            for (var t = 1; t <= n; t++) $("#buyCount").append("<option>" + t + "<\/option>");
            $("#buyCount").selectmenu("enable").selectmenu("refresh")
        },
        Redirect: function() {
            var t = parseInt($("#actionUrl").attr("pageindex")),
            n,
            i;
            sessionStorage.setItem("scrollTop", $(document).scrollTop());
            t == undefined || isNaN(t) || (n = location.href, n.indexOf("#") > -1 && (i = n.split("#"), n = i[0]), n = n + "#" + t, location.replace(n), history.replaceState && history.replaceState({},
            "", n))
        },
        GetCategoryList: function(n, t) {
            var f = 0,
            i = "",
            e = ["ui-block-a", "ui-block-b"];
            n.products != null && ($.each(n.products[0].Items,
            function() {
                if (i += '<div class="' + e[f] + ' block_product font-xs"><a href="' + Mobile.common.AppName + "/Detail/" + this.Sn + '" onclick="Mobile.product.Redirect()" data-ajax="false"><img class="productimg" alt="' + this.ProductName + '" src="' + (u > -1 && this.image_140 ? o[r] : "") + this.image_140 + '" /><\/a>', !t) {
                    var n = 0,
                    s = this.Col.length > 4;
                    i += '<div><div class="picksize">';
                    $.each(this.Col,
                    function() {
                        n++;
                        i += '&nbsp;<a href="' + Mobile.common.AppName + "/Detail/" + this.Sn + "/" + y(this.Size) + '" class="ui-link' + (this.invt < 1 ? " lack": "") + '" onclick="Mobile.product.Redirect()" data-ajax="false">' + this.Size + "<\/a>";
                        s && n % 4 == 0 && (i += "<br />")
                    });
                    i += "<\/div><\/div>"
                }
                i += '<div class="productname"><span>' + this.ProductName + '<\/span><\/div><div class="productprice">';
                this.IsActivities ? (this.Price != this.ActivityPrice && (i += '<span class="activities">￥&nbsp;' + toMoneyDisplay(this.Price) + "<\/span>&nbsp;&nbsp;"), i += "<span>优惠价&nbsp;" + toMoneyDisplay(this.ActivityPrice) + "<\/span>") : i += this.IsAddPurchase ? '<span class="activities">￥&nbsp;' + toMoneyDisplay(this.Price) + "<\/span>&nbsp;&nbsp;<span>另享满额优惠<\/span>": "<span>￥&nbsp;" + toMoneyDisplay(this.Price) + "<\/span>";
                i += "<\/div><\/div>";
                f = f == 1 ? 0 : ++f;
                r = u > -1 && r == u ? 0 : ++r
            }), $("#productList").append(i))
        },
        GetSearchList: function(n) {
            if (n != null) {
                var i = 0,
                t = "",
                f = ["ui-block-a", "ui-block-b"];
                $.each(n,
                function() {
                    var n = 0,
                    e = this.Col.length > 4;
                    t += '<div class="' + f[i] + ' block_product font-xs"><a href="' + Mobile.common.AppName + "/Detail/" + this.Col[0].Sn + '" onclick="Mobile.product.Redirect()" data-ajax="false"><img class="productimg" alt="' + this.ProductName + '" src="' + (u > -1 && this.image_140 ? o[r] : "") + this.image_140 + '" /><\/a><div><div class="picksize">';
                    $.each(this.Col,
                    function() {
                        n++;
                        t += '&nbsp;<a href="' + Mobile.common.AppName + "/Detail/" + this.Sn + "/" + y(this.Size) + '" class="ui-link' + (this.invt < 1 ? " lack": "") + '" onclick="Mobile.product.Redirect()" data-ajax="false">' + this.Size + "<\/a>";
                        e && n % 4 == 0 && (t += "<br />")
                    });
                    t += '<\/div><\/div><div class="productname"><span>' + this.ProductName + '<\/span><\/div><div class="productprice">';
                    this.IsActivities ? (this.Price != this.ActivityPrice && (t += '<span class="activities">￥&nbsp;' + toMoneyDisplay(this.Price) + "<\/span>&nbsp;&nbsp;"), t += "<span>优惠价&nbsp;" + toMoneyDisplay(this.ActivityPrice) + "<\/span>") : t += this.IsAddPurchase ? '<span class="activities">￥&nbsp;' + toMoneyDisplay(this.Price) + "<\/span>&nbsp;&nbsp;<span>另享满额优惠<\/span>": "<span>￥&nbsp;" + toMoneyDisplay(this.Price) + "<\/span>";
                    t += "<\/div><\/div>";
                    i = i == 1 ? 0 : ++i;
                    r = u > -1 && r == u ? 0 : ++r
                });
                $("#productList").append(t)
            }
        },
        GetOnSaleList: function(n) {
            var i = 0,
            t = "",
            f = ["ui-block-a", "ui-block-b"];
            $.each(n,
            function() {
                var n = this.行銷活動編號;
                t += '<div class="' + f[i] + ' block-onsale product-area"><div class="border-box"><a href="' + Mobile.common.AppName + "/OnSale/" + n + "/" + this.col[0].sn + '" onclick="Mobile.product.Redirect()" data-ajax="false"><img class="productimg" alt="' + this.商品名稱 + '" src="' + (u > -1 && this.圖片 ? o[r] : "") + this.圖片 + '" /><\/a><h3 class="product-name">' + this.商品名稱 + '<\/h3><div class="product-price"><h3 class="any-display-price">';
                this.IsActivities ? (this.單價 != this.ActivityPrice && (t += '<span class="activities">￥' + toMoneyDisplay(this.單價) + "<\/span>&nbsp;&nbsp;"), t += '<span>优惠价&nbsp;<em class="font14">' + toMoneyDisplay(this.ActivityPrice) + "<\/em><\/span>") : t += "<span>￥&nbsp;" + toMoneyDisplay(this.單價) + "<\/span>";
                t += '<\/h3><\/div><div class="picksize"><select class="size-opt" data-mini="true" onchange="Mobile.shopping.appendSizeOptions($(this), 50)"><option value="">尺寸<\/option>';
                $.each(this.col,
                function() {
                    this.庫存 > 0 && (t += '<option value="' + this.sn + '" data-rel="' + this.庫存 + '">' + this.size + "<\/option>")
                });
                t += '<\/select><select class="stock-opt" data-mini="true" disabled><option value="">数量<\/option><\/select><\/div><div class="checkbuy"><a href="javascript:void(0)" onclick="Mobile.product.addShopCar($(this));return false;" class="check-btn btn-gold">选购<\/a><\/div><\/div><\/div>';
                i = i == 1 ? 0 : ++i;
                r = u > -1 && r == u ? 0 : ++r
            });
            $("#onsale-list").append(t);
            // $("#onsale-list select").selectmenu();
            Mobile.shopping.addColor(50)
        },
        GetSpecialIssueList: function(n) {
            var i = 0,
            t = "",
            e = ["ui-block-a", "ui-block-b"],
            f;
            $.each(n,
            function() {
                t += '<div class="' + e[i] + ' block-onsale product-area"><div class="border-box"><a href="' + Mobile.common.AppName + "/Detail/" + this.Sn + '" onclick="Mobile.product.Redirect()" data-ajax="false"><img class="productimg" alt="' + this.ProductName + '" src="' + (u > -1 && this.Image ? o[r] : "") + this.Image + '" /><\/a><h3 class="product-name">' + this.ProductName + '<\/h3><div class="product-price">';
                this.IsActivities && !this.IsAddPurchase ? (t += '<h3 class="any-display-price specialprice">', this.Price != this.ActivityPrice && (t += '<span class="activities">￥' + toMoneyDisplay(this.Price) + "<\/span>&nbsp;&nbsp;"), t += '<span>优惠价&nbsp;<em class="font14">' + toMoneyDisplay(this.ActivityPrice) + "<\/em><\/span>") : t += '<h3 class="any-display-price originalprice"><span>￥&nbsp;' + toMoneyDisplay(this.Price) + "<\/span>";
                t += '<\/h3><\/div><div class="picksize"><select class="size-opt" data-mini="true" onchange="Mobile.shopping.appendSizeOptions($(this), 50)"><option value="">尺寸<\/option>';
                $.each(this.col,
                function() {
                    this.庫存 > 0 && (t += '<option value="' + this.Sn + '" data-rel="' + this.庫存 + '">' + this.Size + "<\/option>")
                });
                t += '<\/select><select class="stock-opt" data-mini="true" disabled><option value="">数量<\/option><\/select><\/div><div class="checkbuy"><a href="javascript:void(0)" onclick="Mobile.product.addShopCar($(this));return false;" class="check-btn btn-gold">选购<\/a><\/div><\/div><\/div>';
                i = i == 1 ? 0 : ++i;
                r = u > -1 && r == u ? 0 : ++r
            });
            $("#onsale-list").append(t);
            // $("#onsale-list select").selectmenu();
            f = $(".specialprice:first").height();
            $(".originalprice").each(function() {
                $(this).removeClass("originalprice").css("padding-top", f - $(this).height())
            });
            Mobile.shopping.addColor(50)
        },
        addShopCar: function(n) {
            var f = n.parents(".block-onsale").find("select.size-opt"),
            t = n.parents(".block-onsale").find("select.stock-opt"),
            u = f.val(),
            r = t.val(),
            i = [];
            if (u || i.push("请选择尺寸"), r || i.push("请选择数量"), parseInt(r) > 50 && i.push("已经超过单品购买上限！"), i.length) return Mobile.common.showAlertMessage(i.join("<br/>")),
            !1;
            $.ajax({
                type: "POST",
                url: Mobile.common.AppName + "/Shopping/SelectOnSaleProduct",
                data: {
                    itemNo: u,
                    buyAmount: r
                },
                dataType: "json",
                async: !1,
                success: function(i) {
                    var r = $.parseJSON(i),
                    u;
                    r.errorMsg ? r.isOverWeight === "true" ? (Mobile.common.showAlertMessage(r.errorMsg), t.val(t.attr("data-amount")).selectmenu("refresh")) : Mobile.common.showAlertMessage(r.errorMsg) : ($(n).parents(".border-box").addClass("any-checked-display"), t.attr("data-amount", t.val()), myCart = $.parseJSON(r.MyCart), u = $($(n).parents(".border-box").find(".product-name")).html(), r.alertMsg ? Mobile.common.showAlertMessage(r.alertMsg,
                    function() {
                        Mobile.product.AddCartMsg(r.CartCount, u)
                    }) : Mobile.product.AddCartMsg(r.CartCount, u))
                }
            })
        },
        GetNewArrivalList: function(n) {
            if (n.length != 0) {
                var i = 0,
                t = "",
                f = ["ui-block-a", "ui-block-b"];
                $.each(n,
                function() {
                    t += '<div class="' + f[i] + ' block_product font-xs"><a href="' + Mobile.common.AppName + "/Detail/" + this.Col[0].Sn + '" onclick="Mobile.product.Redirect()" data-ajax="false"><img class="productimg" alt="' + this.ProductName + '" src="' + (u > -1 && this.image_140 ? o[r] : "") + this.image_140 + '" /><\/a>';
                    t += '<div class="productname"><span>' + this.ProductName + '<\/span><\/div><div class="productprice">';
                    this.IsActivities ? (this.Price != this.ActivityPrice && (t += '<span class="activities">￥&nbsp;' + toMoneyDisplay(this.Price) + "<\/span>&nbsp;&nbsp;"), t += "<span>优惠价&nbsp;" + toMoneyDisplay(this.ActivityPrice) + "<\/span>") : t += this.IsAddPurchase ? '<span class="activities">￥&nbsp;' + toMoneyDisplay(this.Price) + "<\/span>&nbsp;&nbsp;<span>另享满额优惠<\/span>": "<span>￥&nbsp;" + toMoneyDisplay(this.Price) + "<\/span>";
                    t += "<\/div><\/div>";
                    i = i == 1 ? 0 : ++i;
                    r = u > -1 && r == u ? 0 : ++r
                });
                $("#productList").append(t)
            }
        },
        ReadNewArrivalList: function(n, r, u) {
            var o = $("#actionUrl"),
            s,
            h;
            o.length && (s = r ? 0 : parseInt(o.attr("pageindex")) + 1, h = o.val() + "&PageIndex=" + s + "&cacheID=" + t.cacheID, $.retryAjax({
                type: "GET",
                url: h,
                async: n,
                dataType: "json",
                beforeSend: function() {
                    e = !0;
                    Mobile.common.LoaderShow()
                },
                success: function(n) {
                    n.length > 0 ? (f = !1, Mobile.product.GetNewArrivalList(n), o.attr("pageindex", s)) : f = !0
                },
                complete: function() {
                    var t, o, n, s;
                    if (e = !1, Mobile.common.LoaderHide(), u && $(document).scrollTop(u), r) {
                        if (f = !1, t = location.href, t.indexOf("#") > -1 && (o = t.split("#"), o.length == 2 && (n = parseInt(o[1]), n != undefined && n > 0))) for (i = 1; i <= n; i++) f || Mobile.product.ReadNewArrivalList(!1, !1, i == n ? sessionStorage.getItem("scrollTop") : null);
                        s = $(".block_product:first");
                        $(document).scroll(function() {
                            var n = $(document);
                            n.height() - (window.innerHeight + n.scrollTop()) <= s.height() * 4 && !f && !e && Mobile.product.ReadNewArrivalList(!0, !1)
                        });
                        $(window).height() >= $(document).height() && Mobile.product.ReadNewArrivalList(!0, !1)
                    }
                }
            }))
        },
        GetProductListIndex: function(n, t) {
            t && (r = 0);
            $.retryAjax({
                type: "GET",
                url: n,
                async: !1,
                dataType: "html",
                success: function(n) {
                    var u, o, r, s;
                    if ($("#productList").html(n), Mobile.common.LoaderHide(), f = !1, e = !1, !t && (u = location.href, u.indexOf("#") > -1 && (o = u.split("#"), o.length == 2 && (r = parseInt(o[1]), r != undefined)))) for (i = 0; i <= r; i++) f || Mobile.product.ReadProductList(!1, i == r ? sessionStorage.getItem("scrollTop") : null);
                    s = $(".block_product:first");
                    $(document).scroll(function() {
                        var n = $(document);
                        n.height() - (window.innerHeight + n.scrollTop()) <= s.height() * 4 && !f && !e && Mobile.product.ReadProductList(!0)
                    });
                    $(window).height() >= $(document).height() && Mobile.product.ReadProductList(!0)
                }
            })
        },
        ReadProductList: function(n, i) {
            var r = $("#actionUrl");
            if (r.length) {
                var u = parseInt(r.attr("pageindex")) + 1,
                o = r.attr("displaymode") == "True" ? !0 : !1,
                s = r.val() + "&PageIndex=" + u + "&byStyle=" + o + "&cacheID=" + t.cacheID;
                $.retryAjax({
                    type: "GET",
                    url: s,
                    async: n,
                    dataType: "json",
                    beforeSend: function() {
                        e = !0;
                        Mobile.common.LoaderShow()
                    },
                    success: function(n) {
                        n.products != null ? (f = !1, Mobile.product.GetCategoryList(n, o), r.attr("pageindex", u)) : f = !0
                    },
                    complete: function() {
                        e = !1;
                        Mobile.common.LoaderHide();
                        i && $(document).scrollTop(i)
                    }
                })
            }
        },
        modelImgResize: function() {
            var n = $(".product-report .product-img img");
            n.css("width", $(".product-report").width())
        },
        bindReportSwipe: function(n) {
            var i = n.find("table").width(),
            t,
            r;
            if (i > n.width()) {
                if (t = navigator.userAgent.match(/Android\s+([\d\.]+)/), t && (n.parent().css("position", "relative"), parseFloat(t[1]) < 3)) {
                    r = i - n.width();
                    n.css("margin-left", "0");
                    n.on("swipe",
                    function(t) {
                        var e = 0,
                        f = parseInt($(n).css("margin-left")),
                        u = (t.swipestop.coords[0] - t.swipestart.coords[0]) * 5;
                        u > 0 ? e = f + u > 0 ? 0 : f + u: u < 0 && (e = f + u < -r ? -r: f + u);
                        f != e && (i > n.width() ? n.css("-webkit-transition-property", "margin-left").css("-webkit-transition-duration", "0.5s").css("-moz-transition-duration", "0.5s").css("margin-left", e + "px") : n.css("margin-left", "0"))
                    })
                } (!t || t && parseFloat(t[1]) >= 3) && n.css("width", "100%").css("overflow-x", "scroll").css("-webkit-overflow-scrolling", "touch")
            }
        },
        ReadOnSaleList: function(n, u, o) {
            var s = $("#actionUrl");
            if (s.length) {
                u && (r = 0);
                var h = parseInt(s.attr("pageindex")),
                c = s.attr("category"),
                l = s.val() + "&mainCategory=" + c + "&PageIndex=" + h + "&cacheID=" + t.cacheID;
                $.retryAjax({
                    type: "GET",
                    url: l,
                    async: n,
                    dataType: "json",
                    beforeSend: function() {
                        e = !0;
                        Mobile.common.LoaderShow()
                    },
                    success: function(n) {
                        n.length > 0 ? (f = !1, Mobile.product.GetOnSaleList(n), s.attr("pageindex", h + 1)) : f = !0
                    },
                    complete: function() {
                        var t, r, n, s;
                        if (e = !1, Mobile.common.LoaderHide(), o && $(document).scrollTop(o), u) {
                            if (f = !1, t = location.href, t.indexOf("#") > -1 && (r = t.split("#"), r.length == 2 && (n = parseInt(r[1]), n != undefined))) for (i = 1; i <= n; i++) f || Mobile.product.ReadOnSaleList(!1, !1, i == n ? sessionStorage.getItem("scrollTop") : null);
                            s = $(".block-onsale:first");
                            $(document).scroll(function() {
                                var n = $(document);
                                n.height() - (window.innerHeight + n.scrollTop()) <= s.height() * 4 && !f && !e && Mobile.product.ReadOnSaleList(!0, !1)
                            });
                            $(window).height() >= $(document).height() && Mobile.product.ReadOnSaleList(!0, !1)
                        }
                    }
                })
            }
        },
        ReadSpecialIssueList: function(n, u, o) {
            var s = $("#actionUrl");
            if (s.length) {
                u && (r = 0);
                var h = parseInt(s.attr("pageindex")),
                c = s.attr("category"),
                l = s.val() + "&category=" + c + "&pageIndex=" + h + "&cacheID=" + t.cacheID;
                $.retryAjax({
                    type: "GET",
                    url: l,
                    async: n,
                    dataType: "json",
                    beforeSend: function() {
                        e = !0;
                        Mobile.common.LoaderShow()
                    },
                    success: function(n) {
                        n != null && n.length > 0 ? (f = !1, Mobile.product.GetSpecialIssueList(n), s.attr("pageindex", h + 1)) : f = !0
                    },
                    complete: function() {
                        var t, r, n, s;
                        if (e = !1, Mobile.common.LoaderHide(), o && $(document).scrollTop(o), u) {
                            if (f = !1, t = location.href, t.indexOf("#") > -1 && (r = t.split("#"), r.length == 2 && (n = parseInt(r[1]), n != undefined))) for (i = 1; i <= n; i++) f || Mobile.product.ReadSpecialIssueList(!1, !1, i == n ? sessionStorage.getItem("scrollTop") : null);
                            s = $(".block-onsale:first");
                            $(document).scroll(function() {
                                var n = $(document);
                                n.height() - (window.innerHeight + n.scrollTop()) <= s.height() * 4 && !f && !e && Mobile.product.ReadSpecialIssueList(!0, !1)
                            });
                            $(window).height() >= $(document).height() && Mobile.product.ReadSpecialIssueList(!0, !1)
                        }
                    }
                })
            }
        },
        ReadKeepList: function(n, t) {
            $.retryAjax({
                type: "GET",
                url: n,
                async: !1,
                dataType: "json",
                beforeSend: function() {
                    Mobile.common.LoaderShow()
                },
                success: function(n) {
                    var e = $.parseJSON(n.info),
                    c,
                    a;
                    if (e != null && e.length > 0) {
                        var i = "",
                        f = 0,
                        v = ["ui-block-a", "ui-block-b"],
                        h = {},
                        l = [];
                        $.each(e,
                        function() {
                            l.push(this.ProductID);
                            var n = !1;
                            this.Colors[0] || (n = !0);
                            i += '<div class="' + v[f] + ' block_product font-xs"><img class="delete" src="' + Mobile.common.AppName + '/images/icons/btn_del.svg" alt="删除" data-product="' + this.ProductID + '" />';
                            i += n ? '<a href="javascript:void(0)" data-ajax="false"><img class="productimg" alt="' + this.Name + '" data-original="' + s + '/images/outofstock.gif" src="' + s + '/images/grey.gif" /><\/a>': '<a href="' + Mobile.common.AppName + "/Detail/" + this.Colors[0].Details[0].Sn + '" onclick="Mobile.product.Redirect()" data-ajax="false"><img class="productimg" alt="' + this.Name + '" data-original="' + (u > -1 && this.Colors[0].Image ? o[r] : "") + this.Colors[0].Image + '" src="' + s + '/images/grey.gif" /><\/a>';
                            i += '<div class="productname"><span>' + this.Name + '<\/span><\/div><div class="productprice">';
                            this.IsActivities ? (this.Price != this.ActivityPrice && (i += '<span class="activities">￥&nbsp;' + toMoneyDisplay(this.Price) + "<\/span>&nbsp;&nbsp;"), i += "<span>优惠价&nbsp;" + toMoneyDisplay(this.ActivityPrice) + "<\/span>") : i += this.IsAddPurchase ? '<span class="activities">￥&nbsp;' + toMoneyDisplay(this.Price) + "<\/span>&nbsp;&nbsp;<span>另享满额优惠<\/span>": "<span>￥&nbsp;" + toMoneyDisplay(this.Price) + "<\/span>";
                            i += "<\/div><\/div>";
                            f = f == 1 ? 0 : ++f;
                            r = u > -1 && r == u ? 0 : ++r
                        });
                        c = $.cookie("fav_item");
                        a = c ? $.parseJSON(c) : "";
                        a || (h.login = !0, h.item = l.join(), $.cookie("fav_item", JSON.stringify(h), {
                            path: "/"
                        }));
                        $("#product-keep-list").append(i);
                        $("img[data-original]").lazyload({
                            failurelimit: 50
                        });
                        $("#product-keep-list img.delete").click(function() {
                            var n = parseInt($(this).attr("data-product"), 10),
                            i = $(this).parent();
                            $.ajax({
                                type: "POST",
                                url: Mobile.common.AppName + "/Member/DeleteKeepItem",
                                data: {
                                    productID: n
                                },
                                dataType: "json",
                                async: !1,
                                success: function(r) {
                                    var o, u, s, f;
                                    if (r.Success) {
                                        o = parseInt(r.Data.count, 10);
                                        o ? (u = 0, s = ["ui-block-a", "ui-block-b"], i.remove(), $.each($("#product-keep-list .block_product"),
                                        function() {
                                            $(this).removeClass("ui-block-a").removeClass("ui-block-b").addClass(s[u]);
                                            u = u == 1 ? 0 : ++u
                                        })) : ($("head").append($('<link rel="stylesheet" type="text/css" />').attr("href", t)), $("#product-keep-empty").html(r.Data.emptyHtml), $("#product-keep-list").hide());
                                        var h = $.cookie("fav_item"),
                                        e = h ? $.parseJSON(h) : "",
                                        c = [];
                                        e != null && e.item != undefined && $.each(e.item.split(","),
                                        function(t, i) {
                                            isNaN(i) || parseInt(i, 10) == n || c.push(i)
                                        });
                                        f = {};
                                        f.login = !0;
                                        f.item = c.join();
                                        $.cookie("fav_item", JSON.stringify(f), {
                                            path: "/"
                                        })
                                    } else Mobile.common.showAlertMessage(r.Message)
                                }
                            })
                        })
                    } else n.emptyHtml && ($("head").append($('<link rel="stylesheet" type="text/css" />').attr("href", t)), $("#product-keep-empty").html(n.emptyHtml))
                },
                complete: function() {
                    Mobile.common.LoaderHide();
                    var n = sessionStorage.getItem("scrollTop");
                    n && ($(document).scrollTop(n), sessionStorage.removeItem("scrollTop"))
                }
            })
        },
        GenerateKeepItem: function() {
            var t = parseInt($(".product-keep").attr("data-value"), 10),
            i = $.cookie("fav_item"),
            n = i ? $.parseJSON(i) : "";
            n != null && n.item != undefined ? $.each(n.item.split(","),
            function(n, i) {
                if (!isNaN(i) && parseInt(i, 10) == t) {
                    $(".product-keep").addClass("on");
                    return
                }
            }) : $.ajax({
                type: "POST",
                url: Mobile.common.AppName + "/Product/GetKeepItem",
                dataType: "json",
                async: !0,
                success: function(n) {
                    var i = {},
                    r;
                    n.Success && (i.login = n.Data.isLogin, r = "", n.Data.products.length > 0 && ($.inArray(t, n.Data.products) > -1 && $(".product-keep").addClass("on"), r = n.Data.products.join()), i.item = r);
                    $.cookie("fav_item", JSON.stringify(i), {
                        path: "/"
                    })
                }
            });
            $(".product-keep").on("vclick",
            function() {
                var i, n, t;
                c || (i = $(this), n = parseInt(i.attr("data-value"), 10), c = !0, t = $.parseJSON($.cookie("fav_item")), i.attr("class").indexOf("on") == -1 ? t != null && t.item != undefined && t.login ? $.ajax({
                    type: "POST",
                    url: Mobile.common.AppName + "/Product/ProductKeep",
                    data: {
                        productID: n
                    },
                    dataType: "json",
                    async: !0,
                    success: function(t) {
                        t && (t.Success ? Mobile.product.KeepProduct(n, t.Data === !1 ? !1 : !0) : Mobile.common.showAlertMessage(t.Message))
                    },
                    complete: function() {
                        c = !1
                    }
                }) : (Mobile.product.KeepProduct(n, !1), c = !1) : t != null && t.item != undefined && t.login ? $.ajax({
                    type: "POST",
                    url: Mobile.common.AppName + "/Product/ProductKeepDel",
                    data: {
                        productID: n
                    },
                    dataType: "json",
                    async: !0,
                    success: function(t) {
                        t && (t.Success ? Mobile.product.DelKeepProduct(n, t.Data === !1 ? !1 : !0) : Mobile.common.showAlertMessage(t.Message))
                    },
                    complete: function() {
                        c = !1
                    }
                }) : (Mobile.product.DelKeepProduct(n, !1), c = !1))
            })
        },
        KeepProduct: function(n, t) {
            var i, r, u;
            $(".product-keep").removeClass("on").addClass("on");
            i = $.parseJSON($.cookie("fav_item"));
            r = {};
            r.login = t;
            r.item = i != null && i.item ? i.item + "," + n: n.toString();
            $.cookie("fav_item", JSON.stringify(r), {
                path: "/"
            });
            u = parseInt($("#fav-amt").text(), 10);
            isNaN(u) && (u = 0);
            $("#fav-amt").text(u + 1)
        },
        DelKeepProduct: function(n, t) {
            var i, r, f, u;
            $(".product-keep").removeClass("on");
            i = $.parseJSON($.cookie("fav_item"));
            r = {};
            r.login = t;
            f = [];
            i != null && i.item && $.each(i.item.split(","),
            function(t, i) {
                isNaN(i) || parseInt(i, 10) != n && f.push(i)
            });
            r.item = f.join();
            $.cookie("fav_item", JSON.stringify(r), {
                path: "/"
            });
            u = parseInt($("#fav-amt").text(), 10);
            isNaN(u) && (u = 1);
            $("#fav-amt").text(u - 1)
        }
    })
})(Mobile)