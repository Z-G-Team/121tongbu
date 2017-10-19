function ProductDetailHandle() {
	$("#shoppingRemind").show();
	$(".material").show()
}(function(n) {
	var t = {
			bedurl: "",
			issecureconn: "False",
			sno: "",
			ino: "",
			size: "",
			defaultSize: "",
			amount: 50,
			pname: "",
			notifyUrl: "/Notify/Notify",
			bystyle: !0,
			activity: "",
			cacheID: 0
		},
		f, a, s = !1,
		c = !1,
		h = !1,
		l = !1,
		o = [],
		e = "",
		u = -1,
		r = 0,
		v = function(n) {
			return !n || (n = n.replace(".", "_")), n
		};
	n.product = {
		Init: function(i) {
			t = n.extend({}, t, i || {});
			o = t.bedurl ? t.bedurl.split(",") : [];
			u = o.length - 1;
			e = u > -1 ? o[0] : ""
		},
		Generate: function(i, r, u) {
			n.getJSON("/Product/ProductInfo/", {
				styleNo: i
			}, function(i) {
				if (f = n.parseJSON(i.info), a = n.parseJSON(i.activity), f.length == 0) n.alerts.alert("很抱歉，此商品已暂时下架，请再重新挑选", "温馨提示", function() {
					if (u != undefined && u == !0) {
						parent.$.fancybox.close();
						return
					}
					window.close();
					window.location.href = "/";
					return
				});
				else {
					var e = 0;
					r = r.substring(5, 7);
					n.each(f, function(i, u) {
						var f = r == u.ItemList[0].sn.substring(5, 7);
						n(".color").append("<a onclick=\"$.product.GetItemList('" + u.ItemList[0].sn + "','1', " + i + ');return false;" href="/Detail/' + u.ItemList[0].sn + '">' + n.product.GetImageUrl(f, u.colorImg, u.color, u.ItemList[0].sn, i) + "<\/a>");
						n.each(u.ItemList, function(n, r) {
							t.ino == r.sn && (e = i)
						})
					});
					n("#sizelist a").length == 1 ? n("#sizelist a").click() : n.product.GetItemList(t.ino, "", e);
					n("#sizelist a").removeClass("current");
					n("#" + t.ino + t.size.replace(".", "_")).addClass("current");
					t.defaultSize = t.size;
					n.product.BindProductImg();
					n.product.GetReadingGlass(f);
					n.product.SetReadingGlass(t.ino);
					n.product.GetActivity(a);
					n("#productImg").load(function() {
						n.product.ChangeImgPadding()
					});
					n(".minus").click(function() {
						var t = n("#buyCount"),
							i = parseInt(t.val(), 10);
						i - 1 > 0 && t.val(i - 1)
					});
					n(".plus").click(function() {
						var t = n("#buyCount"),
							i = parseInt(t.val(), 10);
						i + 1 <= 99 && t.val(i + 1)
					});
					n("#buyCount").keyup(function() {
						if (!/^[1-9]{1}[0-9]{0,1}$/.test(n(this).val())) {
							var t = /^[1-9]{1}[0-9]{0,1}/.exec(n(this).val());
							t != null ? n(this).val(t) : n(this).val("")
						}
					});
					n.product.GenerateKeepItem()
				}
			})
		},
		GetImageUrl: function(n, i, r, u, f) {
			return t.issecureconn == "True" ? n ? '<img src="' + i + '" alt="' + r + '" title="' + r + '" onmouseover="$.product.GetProductImg(\'' + f + "', '" + u.substring(5, 7) + '\')" onmouseout="$(\'div.color img[select=true]\').trigger(\'mouseover\');$.product.GetCurrentSize();" onclick="$.product.GetBorder($(this))" style="border:1px solid #555;padding:2px;" select="true" />' : '<img src="' + i + '" alt="' + r + '" title="' + r + '" onmouseover="$.product.GetProductImg(\'' + f + "', '" + u.substring(5, 7) + "')\" onmouseout=\"$('div.color img[select=true]').trigger('mouseover');$.product.GetCurrentSize();\" onclick=\"$.product.GetBorder($(this))\" />" : n ? '<img src="' + e + i + '" alt="' + r + '" title="' + r + '" onmouseover="$.product.GetProductImg(\'' + f + "', '" + u.substring(5, 7) + '\')" onmouseout="$(\'div.color img[select=true]\').trigger(\'mouseover\');$.product.GetCurrentSize();" onclick="$.product.GetBorder($(this))" style="border:1px solid #555;padding:2px;" select="true" />' : '<img src="' + e + i + '" alt="' + r + '" title="' + r + '" onmouseover="$.product.GetProductImg(\'' + f + "', '" + u.substring(5, 7) + "')\" onmouseout=\"$('div.color img[select=true]').trigger('mouseover');$.product.GetCurrentSize();\" onclick=\"$.product.GetBorder($(this))\" />"
		},
		GetBorder: function(t) {
			n("div.color img").css({
				border: "none",
				padding: "3px"
			}).removeAttr("select");
			t.css({
				border: "1px solid #555",
				padding: "2px"
			}).attr("select", !0)
		},
		GetProductImg: function(i) {
			n("#productImg").attr("src", e + f[i].ItemList[0].img280).each(function() {
				this.complete && n(this).trigger("load")
			});
			n("#sizelist").html("");
			n.each(f[i].ItemList, function(i, r) {
				var u = t.amount,
					f;
				parseInt(r.invt) < u && (u = parseInt(r.invt));
				f = r.體型尺寸 == r.size || !n.trim(r.體型尺寸);
				n("#sizelist").append(' <a id="' + r.sn + r.size.replace(".", "_") + '" href="/Detail/' + r.sn + '" onclick="$.product.ChangeSize(\'' + r.sn + "','" + u + "','" + r.size + "'," + r.isNotify + ');return false;">' + (f ? r.size : r.體型尺寸 + " (" + r.size + ")") + "<\/a> ");
				parseInt(r.invt) < 1 && n("#" + r.sn + r.size.replace(".", "_")).addClass("lack")
			});
			var r = 0;
			n("#sizelist a").each(function() {
				var i = n(this).outerWidth() - n(this).innerWidth(),
					t = n(this).width() + i;
				t > r && (r = t)
			});
			n("#sizelist a").css("width", r);
			n.product.GetCurrentSize()
		},
		GetCurrentSize: function() {
			t.defaultSize == "" && (t.defaultSize = n("#isize").text().substring(1, 4));
			var i = n("#sizelist a:contains(" + t.defaultSize + "):first");
			i.length > 0 && i.addClass("current").trigger("click")
		},
		GetItemList: function(i, r, u) {
			var h, e, o, s;
			n("#sizelist").html("");
			n("#buyCount").val("").attr("disabled", !0);
			h = !1;
			n.each(f[u].ItemList, function(e, o) {
				var h, s, c;
				n("#icolor").html(f[u].color).attr("color", o.sn.substring(5, 7));
				r != "1" ? t.size != "" ? o.sn == i && (n.product.ChangeSize(o.sn, o.invt, o.size, o.isNotify), falg = !0) : (n("#isize").html(""), n("#isn").html("尚未选择尺寸"), removeShoppcartOnClick()) : (h = "btn_addcart", n("#isize").html(""), n("#isn").html("尚未选择尺寸"), n("#addShopcar").html("加入购物车").removeAttr("class").addClass(h).unbind("click"), removeShoppcartOnClick());
				s = t.amount;
				parseInt(o.invt) < s && (s = parseInt(o.invt));
				c = o.體型尺寸 == o.size || !n.trim(o.體型尺寸);
				n("#sizelist").append(' <a id="' + o.sn + o.size.replace(".", "_") + '" href="/Detail/' + o.sn + '" onclick="$.product.ChangeSize(\'' + o.sn + "','" + s + "','" + o.size + "'," + o.isNotify + ');return false;">' + (c ? o.size : o.體型尺寸 + " (" + o.size + ")") + "<\/a> ");
				parseInt(o.invt) < 1 && n("#" + o.sn + o.size.replace(".", "_")).addClass("lack")
			});
			e = 0;
			n("#sizelist a").each(function() {
				var i = n(this).outerWidth() - n(this).innerWidth(),
					t = n(this).width() + i;
				t > e && (e = t)
			});
			n("#sizelist a").css("width", e);
			n("#sizelist").attr("currentsn", i);
			n.product.GetProductImg(u);
			n.product.SetReadingGlass(f[u].ItemList[0].sn);
			n(".clearfloat_qv").size() > 0 && parent.$("#fancybox-frame").size() > 0 && (o = n(".clearfloat_qv").height(), s = parent.$("#fancybox-frame").height(), o + 20 > s && parent.$("#fancybox-content, #fancybox-frame").animate({
				height: o + 20 + "px"
			}, 0))
		},
		GetSearchList: function(t) {
			var i = "";
			t != null && (n.each(t, function() {
				i += '<li><a class="imgd" href="/Detail/' + this.Col[0].Sn + '" target="_blank"><img src="' + (u > -1 && this.image_140 ? o[r] : "") + this.image_140 + '" alt="' + this.ProductName + '" title="' + this.ProductName + '" style="display: inline;"><\/a>';
				i += this.Col.length > 5 ? '<div class="picksize picksize_list alignL">' : '<div class="picksize picksize_list">';
				n.each(this.Col, function() {
					i += '<a href="/Detail/' + this.Sn + "/" + v(this.Size) + '" class="' + (this.invt < 1 ? " lack" : "") + '" target="_blank">' + this.Size + "<\/a>&nbsp;"
				});
				i += '<\/div><span class="productname">' + this.ProductName + '<\/span><br><span class="hidden">';
				this.IsActivities ? (this.Price != this.ActivityPrice && (i += '<span class="activities"><span class="currencyIdentifier">￥<\/span><span>' + toMoneyDisplay(this.Price) + "<\/span><\/span>&nbsp;&nbsp;"), i += '<span>优惠价<\/span><span class="currencyIdentifier">￥<\/span><span>' + toMoneyDisplay(this.ActivityPrice) + "<\/span>") : i += this.IsAddPurchase ? '<span class="activities"><span class="currencyIdentifier">￥<\/span><span>' + toMoneyDisplay(this.Price) + "<\/span><\/span>&nbsp;&nbsp;<span>另享满额优惠<\/span>" : '<span class="currencyIdentifier">￥<\/span><span>' + toMoneyDisplay(this.Price) + "<\/span>";
				i += "<\/span><\/li>";
				r = u > -1 && r == u ? 0 : ++r
			}), n("#productList").append(i), n(".list_display_5 .hidden:hidden").show())
		},
		GetNewProductList: function(t) {
			var i = "";
			t != null && (n.each(t, function() {
				i += '<li><a class="imgd" href="/Detail/' + this.Col[0].Sn + '" onclick="$.product.Redirect()" target="_blank"><img id="' + this.Col[0].Sn + '" src="' + (u > -1 && this.image_140 ? o[r] : "") + this.image_140 + '" alt="' + this.ProductName + '" title="' + this.ProductName + '" /><\/a>';
				i += this.Col.length > 5 ? '<div class="picksize picksize_list alignL">' : '<div class="picksize picksize_list">';
				n.each(this.Col, function() {
					i += '<a href="/Detail/' + this.Sn + "/" + v(this.Size) + '" class="' + (this.invt < 1 ? " lack" : "") + '" target="_blank">' + this.Size + "<\/a>&nbsp;"
				});
				i += '<\/div><span class="productname">' + this.ProductName + '<\/span><br><span class="hidden">';
				this.IsActivities ? (this.Price != this.ActivityPrice && (i += '<span class="activities"><span class="currencyIdentifier">￥<\/span><span>' + toMoneyDisplay(this.Price) + "<\/span><\/span>&nbsp;&nbsp;"), i += '<span>优惠价<\/span><span class="currencyIdentifier">￥<\/span><span>' + toMoneyDisplay(this.ActivityPrice) + "<\/span>") : i += this.IsAddPurchase ? '<span class="activities"><span class="currencyIdentifier">￥<\/span><span>' + toMoneyDisplay(this.Price) + "<\/span><\/span>&nbsp;&nbsp;<span>另享满额优惠<\/span>" : '<span class="currencyIdentifier">￥<\/span><span>' + toMoneyDisplay(this.Price) + "<\/span>";
				i += "<\/span><\/li>";
				r = u > -1 && r == u ? 0 : ++r
			}), n("#newProductList").append(i), n(".list_display .hidden:hidden").show())
		},
		OnFancyMouseOver: function(n) {
			n.parent().find("div > a.quickview").show().next().css("color", "#FFF").show()
		},
		OnFancyMouseOut: function(n) {
			n.parent().find("div > a.quickview").hide().next().hide()
		},
		QuickViewMouseOver: function(n) {
			n.show().next().css("color", "#333").show()
		},
		QuickViewClick: function(t) {
			n.fancybox({
				href: "/Product/QuickView?ItemNo=" + t.attr("item")
			}, {
				width: 1040,
				height: 522,
				type: "iframe",
				border: "5px solid rgba(68, 68, 68, 0.8)",
				titlePosition: "inside",
				title: " ",
				onStart: function() {
					n("a.fancy").hide().next().hide()
				},
				onClosed: function() {
					n.post("/Shopping/MiniCartList", function(t) {
						n("#MiniCartList").html(t)
					});
					n("#fancybox-title").remove();
					n("#fancybox-outer").removeAttr("style")
				}
			});
			n("#fancybox-title-inside").append(n("<a><img src=/images/btn_quickview_detail.gif /><\/a>").attr({
				href: "/Detail/" + t.attr("item")
			}));
			n("#fancybox-outer").css("width", "1050px").children("#fancybox-content").css("width", "1040px").css("height", "522px")
		},
		Redirect: function() {
			var t = location.href,
				u = n(document).scrollTop(),
				i = parseInt(n("#actionUrl").attr("pageindex")),
				r;
			t.indexOf("#") > -1 && (r = t.split("#"), t = r[0]);
			i != undefined && (t = t + "#" + i, location.replace(t))
		},
		GetActivity: function(i) {
			var e, f, r, u;
			i && (e = n.parseJSON(t.activity), n(".addPurchaseDetail").length ? (r = i.Price, u = n.trim(n("#price").text()), u != r && (n("#store_price").html(u), n("#store_price").addClass("activities"), n("#price").html('<span id="specialPrice">' + toMoneyDisplay(r) + "<\/span>")), ProductDetailHandle(), n("#product_price_area").show()) : (f = [], r = "", i.IsHide === !0 ? f.push("") : i.ActivityType === e.任選折扣 || i.ActivityType === e.任選特價 || i.ActivityType === e.任選變價 ? (f.push(n.format('<a href="/OnSale/{0}">{1}<\/a>', i.ActivityCode, i.ActivityName)), n("#activitylink").html(f.join("")).css("display", "block")) : i.ActivityType == e.滿額加價 && (f.push('<p style="color:#dd0000">【另享满额优惠】需至结帐页面选购<\/p>'), n("#activity").html(f.join(""))), r = n.product.GetProductPrice(i.ActivityType, i.Discount), u = n.trim(n("#price").text()), u != r && (n("#store_price").html(u), n("#store_price").addClass("activities"), n("#price").html('<span id="specialPrice">' + toMoneyDisplay(r) + "<\/span>")), ProductDetailHandle(), n("#product_price_area").show()))
		},
		ChangeSize: function(i, r, u, f) {
			var s = !0,
				e = n("#buyCount"),
				o, c;
			n("#isize").html("-" + u);
			n("#isn").html(i);
			n("#sizelist a").removeClass("current");
			n("#" + i + u.replace(".", "_")).addClass("current");
			t.defaultSize = u;
			e.val("").attr("disabled", !0);
			var h = "btn_addcart";
			r < t.amount ? r < 1 ? (f == !0 ? (removeShoppcartOnClick(), n("#addShopcar").html("货到提醒").removeAttr("class").addClass("btn_notify").unbind("click").click(function() {
				ShowFancyBox(t.notifyUrl + "?sn=" + i + "&pName=" + encodeURI(n("#product_name_area .title1").text()), 530, 350)
			})) : (n("#addShopcar").html("售完已绝版").removeAttr("class").addClass("btn_saleOut").unbind("click"), removeShoppcartOnClick()), s = !1) : n("#addShopcar").html("加入购物车").removeAttr("class").addClass(h).unbind("click") : (n("#addShopcar").html("加入购物车").removeAttr("class").addClass(h).unbind("click"), removeShoppcartOnClick());
			s && (r = r < t.amount ? parseInt(r, 10) : t.amount, e.val(1).attr("disabled", !1), removeShoppcartOnClick(), n("#addShopcar").live("click", function() {
				var f = e.val(),
					u;
				if (/^[1-9]{1}[0-9]{0,1}$/.test(f)) f = parseInt(f, 10);
				else return n.alerts.alert("商品数量异常！", "温馨提示", function() {
					e.val(1)
				}), !1;
				u = n("#checkTable .sn-" + i).length > 0 ? parseInt(n("#checkTable .sn-" + i).attr("amt"), 10) : 0;
				f + u > t.amount ? n.alerts.alert("已经超过单品购买上限！", "温馨提示", function() {
					var n = t.amount - u;
					n > 0 ? n <= r ? e.val(n) : e.val(r - u > 0 ? r - u : "") : e.val("")
				}) : f + u > r ? n.alerts.alert("库存不足无法购买！", "温馨提示", function() {
					e.val(r - u > 0 ? r - u : "")
				}) : n.ajax({
					type: "POST",
					url: "/Shopping/MiniCart",
					data: {
						itemNo: i,
						buyAmount: f
					},
					dataType: "json",
					async: !1,
					success: function(o) {
						var a, h, s, c, l;
						o[0].errorMsg != undefined && o[0].errorMsg != "" ? (a = o[0].errorMsg, n.post("/Shopping/MiniCartList", function(o) {
							n("#MiniCartList").html(o);
							n.alerts.alert(a, "温馨提示", function() {
								if (u = n("#checkTable .sn-" + i).length > 0 ? parseInt(n("#checkTable .sn-" + i).attr("amt"), 10) : 0, f + u > t.amount) {
									var o = t.amount - u;
									o > 0 ? o <= r ? e.val(o) : e.val(r - u > 0 ? r - u : "") : e.val("")
								} else f + u > r && e.val(r - u > 0 ? r - u : "")
							})
						})) : (o[0].alertMsg != undefined && o[0].alertMsg != "" && n.alerts.alert(o[0].alertMsg, "温馨提示", null), n("#tradeCount").text(parseInt(f) + parseInt(n("#tradeCount").text())), n("#ShowProduct").attr("class").indexOf("check_wrapper_qv") === -1 && n("#ShowProduct").find("#minicart").attr("class", n("#MiniCartList").find("#minicart").attr("class")), n("#ShowProduct .check2 .checkTable").prepend('<tr><th colspan="2">本商品已加入购物车<\/th><\/tr><tr><td class="wd07"><a href="#"><img src="' + n("#productImg").attr("src") + '" width="60px" height="60px" alt="' + t.pname + '"/><\/a><\/td><td>' + t.pname + "　" + n("#icolor").text() + n("#isize").text() + "　￥ " + n("#price").text() + "<\/td><\/tr>"), n("#ShowProduct .check2").slideDown(150), canClose = !1, hideCart(1800), e.val("").attr("disabled", !0), n("#isize").html(""), n("#isn").html("尚未选择尺寸"), n("#sizelist a").removeClass("current"), removeShoppcartOnClick(), n("#addShopcar").attr("data-ad") === "0" ? n.post(t.setAdUrl) : (h = n("#MiniCartList #checkTable tbody"), s = h.find('tr[class$="' + i + '"]'), s.length > 0 ? (c = parseInt(s.attr("amt"), 10) + f, s.attr("amt", c), s.find(".miniCartBuyAmount").html(c)) : (l = '<tr class="sn-' + i + '" amt="' + f + '"><th><a href="/Detail/' + i + "/" + o[0].size + '">' + o[0].product + "<\/a><\/th>", l += "<td>" + o[0].color + "<\/td><td>" + o[0].size + '<\/td><td class="miniCartBuyAmount">' + f + "<\/td><\/tr>", h.append(l))), setTimeout(function() {
							n("#ShowProduct .check2").hide();
							n("#ShowProduct .check2 .checkTable").html("")
						}, 1900))
					}
				})
			}));
			n(".clearfloat_qv").size() > 0 && parent.$("#fancybox-frame").size() > 0 && (o = n(".clearfloat_qv").height(), c = parent.$("#fancybox-frame").height(), o + 20 > c && parent.$("#fancybox-content, #fancybox-frame").animate({
				height: o + 20 + "px"
			}, 0))
		},
		NotBuy: function() {
			n("#isn").text() == "尚未选择尺寸" && n.alerts.alert("您尚未选择尺寸", "温馨提示", null)
		},
		GetReadingGlass: function(t) {
			var i = "";
			n.each(t, function(t, r) {
				var u = r.ItemList[0].img900;
				n.trim(u).length > 0 && (i += '<a id="glass_' + r.ItemList[0].sn.slice(0, 7) + '" class="fancyReadingGlass hidden" href="' + e + u + '">', i += "<\/a>")
			});
			n("#reading_glass_area").html(i);
			n("a.fancyReadingGlass").attr("rel", "otherImgGroup").fancybox({
				titleShow: !1,
				titlePosition: "inside",
				transitionIn: "elastic",
				transitionOut: "fade",
				autoScale: !1,
				autoDimensions: !1,
				cyclic: !0
			})
		},
		SetReadingGlass: function(t) {
			var i = t.slice(0, 7);
			n("a.fancyReadingGlass").addClass("hidden").html("");
			n("a#glass_" + i).html('<img id="glassImg" alt="" src="' + e + '/images/btn_zoom20.gif" />').removeClass("hidden");
			n("a#glass_" + i).size() > 0 ? n("#productImg").css("cursor", "pointer").unbind("click").click(function() {
				n("a#glass_" + i).click()
			}) : n("#productImg").css("cursor", "default").unbind("click")
		},
		BindProductImg: function() {
			n("a.fancyProductImg").each(function() {
				var t = n(this).find("table[class=tag]"),
					i = t[0].outerHTML,
					r = n(".tag .bkg").find("td").css("background-color");
				n(this).attr("rel", "imgGroup");
				n(this).fancybox({
					titleShow: !0,
					titlePosition: "over",
					transitionIn: "elastic",
					transitionOut: "fade",
					autoScale: !1,
					autoDimensions: !1,
					margin: 10,
					cyclic: !0,
					titleFormat: function(t, i, r) {
						var u = n(i[r]);
						return u != undefined && u.attr("Description") != undefined && u.attr("Description") != "" ? '<div id="fancybox-title-over">' + n(i[r]).attr("Description") + "<\/div>" : ""
					},
					onComplete: function() {
						n("#fancybox-outer").append(i);
						n("#fancybox-outer .tag").show();
						n(".tag .bkg").mouseover(function() {
							n(this).children("td").css("background-color", "#222")
						}).mouseout(function() {
							n(this).children("td").css("background-color", r)
						})
					},
					onCleanup: function() {
						n("#fancybox-outer").find(".tag").remove()
					}
				})
			})
		},
		ChangeImgPadding: function() {
			n("#productImg").height() > 280 ? (n(".product_image").removeClass("oldImg"), n(".product_image_qv").removeClass("gap110"), n(".product_image_qv").addClass("fix_img_ie6"), n(".product_image_qv img").removeClass("fix_img_ie7")) : (n(".product_image").addClass("oldImg"), n(".product_image_qv").addClass("gap110"), n(".product_image_qv").removeClass("fix_img_ie6"), n(".product_image_qv img").addClass("fix_img_ie7"))
		},
		SetImgLazyload: function() {
			var i = 1010,
				t;
			n(".oldPic img").length >= 1 && (t = new Image, t.name = "lazyloadImgOld", t.src = n(".oldPic img:nth-child(1)").attr("data-original"), n(t).load(function() {
				t.width = this.width;
				t.width < i ? (n(".oldPic img").css("width", t.width), n(".oldPic").css("text-align", "center")) : n(".oldPic img").css("width", i)
			}));
			setTimeout(function() {
				n("img:not(a.fancyProductImg img)").lazyload()
			}, 100)
		},
		GetProductPrice: function(i, r) {
			var u = n.parseJSON(t.activity),
				f = parseFloat(n.trim(n("#price").text())),
				e = parseFloat(r);
			return i == u.任選折扣 || i == u.全館折扣 ? f = f * e : (i == u.任選特價 || i == u.任選變價) && (isNaN(e) || (f = e)), Math.round(f)
		},
		DisplayMode: function(t) {
			if (t == "byStyle") {
				n("li[name^=styNo_]").hide();
				var i = [];
				n("li[name^=styNo_]").each(function() {
					var t = n(this).attr("name").split("_")[1];
					n.inArray(t, i) == -1 && i.push(t)
				});
				n.each(i, function(t, i) {
					var u = n("li[name=styNo_" + i + "]").length,
						f = Math.floor(Math.random() * u),
						r = n(n("li[name=styNo_" + i + "]")[f]);
					r.find(".picksize_list").hide();
					r.show()
				});
				n(".list_display").each(function() {
					n(this).find("li[name^=styNo_]:visible").each(function(t) {
						(t + 1) % 4 == 0 ? n(this).css("margin-right", "0px") : n(this).css("margin-right", "40px")
					})
				})
			} else n(".list_display").each(function() {
				n(this).find("li[name^=styNo_]").each(function(t) {
					(t + 1) % 4 == 0 ? n(this).css("margin-right", "0px") : n(this).css("margin-right", "40px")
				})
			}), n("li[name^=styNo_]").show(), n(".picksize_list").show();
			n("img").lazyload()
		},
		ReadOnSaleList: function(i, u) {
			var e = n("#actionUrl").attr("category"),
				f = parseInt(n("#actionUrl").attr("totalcount")),
				o = n("#actionUrl").val() + "&mainCategory=" + e + "&pageIndex=" + i + (f > 0 ? "&count=" + f : "") + "&cacheID=" + t.cacheID;
			s || (r = 0, n.ajax({
				type: "GET",
				url: o,
				async: !1,
				dataType: "json",
				beforeSend: function() {
					s = !0
				},
				success: function(t) {
					var i, f, r;
					t != null && t != "" && t != undefined && (n.product.GetOnSaleList(t), u || (i = n("#any_pick_panel"), i && (f = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop, r = i.offset().top + i.height() + 10, f > r && n(window).scrollTop(r))))
				},
				complete: function() {
					s = !1
				}
			}))
		},
		GetOnSaleList: function(t) {
			var f, l, p;
			if (t != null && t != "" && t != undefined) {
				var h = "",
					i = "",
					c = parseInt(t.PageCount),
					s = parseInt(t.PageIndex) + 1,
					w = n.parseJSON(t.SaleInfo),
					b = n.parseJSON(t.TotalCount);
				if (c > 1) {
					h = '<div class="pager_new grid_49">';
					var a = "",
						v = "",
						y = "";
					for (a = s == 1 ? '<a class="prev" href="javascript:void(0)">上一页<\/a>|&nbsp;' : '<a class="prev" href="javascript:void(0)" onclick="$.product.ReadOnSaleList(' + (s - 1) + '); return false;">上一页<\/a>|&nbsp;', v = s == c ? '&nbsp;|<a class="next" href="javascript:void(0)">下一页<\/a>' : '&nbsp;|<a class="prev" href="javascript:void(0)" onclick="$.product.ReadOnSaleList(' + (s + 1) + '); return false;">下一页<\/a>', f = 1; f <= c; f++) y += '<a href="javascript:void(0)" ' + (s == f ? 'class="current"' : 'onclick="$.product.ReadOnSaleList(' + f + '); return false;"') + ">" + f + "<\/a>";
					h += a + y + v + "<\/div>"
				}
				i += '<div class="clear"><\/div><ul class="any_display sale-list">';
				l = 0;
				n.each(w, function(t, f) {
					l++;
					i += "<li " + (l % 6 == 0 ? 'class="any_display_last_li"' : "") + ' data-pname="' + this.商品名稱 + "-" + this.顏色 + '">';
					i += '<a class="imga" href="/Detail/' + this.col[0].sn + '" onclick="openwin(\'/Detail/' + this.col[0].sn + "', 'onSale" + this.col[0].sn + "', 1277, 855, 'status=0, scrollbars=1'); return false;\">";
					i += '<img src="' + e + '/images/grey.gif" data-original="' + (u > -1 && this.圖片 ? o[r] : "") + this.圖片 + '" alt="' + this.商品名稱 + '" title="' + this.商品名稱 + this.顏色 + '" /><\/a>';
					i += '<h3  class="any_display_name">' + this.商品名稱 + '<\/h3><h3 class="any_display_price"><span class="hidden">';
					i += this.IsActivities ? this.單價 != this.ActivityPrice ? '<span class="activities">原价<span class="currencyIdentifier">￥<\/span><span>' + toMoneyDisplay(this.單價) + '<\/span><\/span>&nbsp;<span>优惠价<\/span><span class="currency symbol pricing" data-opricing="' + this.單價 + '" data-apricing="' + this.ActivityPrice + '">￥' + toMoneyDisplay(this.ActivityPrice) + "<\/span>" : '<span>优惠价<\/span><span class="currencyIdentifier">￥<\/span><span class="symbol pricing" data-opricing="' + this.單價 + '" data-apricing="' + this.ActivityPrice + '">' + toMoneyDisplay(this.ActivityPrice) + "<\/span>" : '<span><span class="currencyIdentifier">￥<\/span>' + toMoneyDisplay(this.單價) + "><\/span>";
					i += "<\/span><\/h3>";
					i += '<select class="size_opt"><option value=""><\/option>';
					n.each(this.col, function() {
						this.庫存 > 0 && (i += '<option value="' + this.sn + '" rel="' + this.庫存 + '">' + f.顏色 + "-" + this.size + "<\/option>")
					});
					i += '<\/select><div class="clear"><\/div>';
					i += '<table><tr><td align="left"><select class="stock_opt"><option style="color:#969696">数量<\/option><\/select><\/td>';
					i += '<td align="right"><a href="javascript:void(0)" class="check_btn" onclick="addShopCar($(this))"><span>选购<\/span><\/a><\/td><\/tr><\/table><\/li>';
					r = u > -1 && r == u ? 0 : ++r
				});
				i += '<\/ul><div class="clear"><\/div>';
				p = '<div id="AjaxDiv">' + h + i + h + '<div class="clear"><\/div><\/div>';
				n("#onsale-list").html(p);
				n("#actionUrl").attr("totalcount", b);
				AddColor();
				n(".any_display .hidden").show();
				n(".size_opt").change(function() {
					var r, i, t;
					if (AppendSizeOptions(n(this)), r = n("#pickedItems").val(), r.length > 0)
						for (i = JSON.parse(r), t = 0; t < i.length; t++) {
							if (n(this).val() == i[t].商品編號) {
								n(this).parents("li").find(".stock_opt").val(i[t].購買數量);
								n(this).parents("li").find("a.check_btn").parents("table,li").addClass("any_checked_display");
								return
							}
							n(this).parents("li").find("a.check_btn").parents("table,li").removeClass("any_checked_display")
						}
				});
				n("img[data-original]").lazyload({
					threshold: 200
				})
			}
		},
		ReadNewProductList: function(r, u) {
			var f = u ? 0 : parseInt(n("#actionUrl").attr("pageindex")) + 1,
				e = n("#actionUrl").val() + "&pageIndex=" + f + "&cacheID=" + t.cacheID;
			n.ajax({
				type: "GET",
				url: e,
				async: r,
				dataType: "json",
				beforeSend: function() {
					s = !0
				},
				success: function(t) {
					t != null && t != "" && t != undefined ? (c = !1, n.product.GetNewProductList(t), n("#actionUrl").attr("pageindex", f)) : c = !0
				},
				complete: function() {
					var r, f, t, e;
					if (s = !1, u) {
						if (r = location.href, r.indexOf("#") > -1 && (f = r.split("#"), f.length == 2 && (t = parseInt(f[1]), t != undefined && t > 0)))
							for (i = 1; i <= t; i++) c || n.product.ReadNewProductList(!1);
						FloatSideBar();
						n(".list_display .hidden:hidden").show();
						e = n("#newProductList li:first");
						n(window).scroll(function() {
							var t = n(document);
							t.height() - (n(window).height() + t.scrollTop()) <= e.height() * 4 && !c && !s && n.product.ReadNewProductList(!0)
						})
					}
				}
			})
		},
		printKeepList: function() {
			var t = "",
				i, f, s, h, c;
			n("#product-keep-list").hide();
			i = {};
			productJson && (f = 0, s = [], t = '<ul class="any_display">', n.each(productJson, function(i, h) {
				var l, c, a, v, y, p;
				s.push(this.ProductID);
				f++;
				l = "";
				f % 5 == 0 && (l = "last_li");
				this.IsInCart && (l += " any_checked_display");
				c = !1;
				this.Colors[0] || (c = !0);
				t += "<li " + (l ? 'class="' + l + '"' : "") + ' data-productsort="' + i + '" data-product="' + this.ProductID + '">';
				t += '<img  src="' + e + '/images/btn_del.png" alt="" class="delete-item" data-product="' + this.ProductID + '" />';
				a = "";
				c ? (t += '<a class="imga no-item" href="javascript:void(0)">', a = "/images/outofstock.gif") : (t += '<a class="imga" href="http://' + location.hostname + "/Detail/" + this.Colors[0].Details[0].Sn + '" target="_blank">', a = this.Colors[0].Image);
				t += '<img data-product="' + this.ProductID + '" alt="' + this.Name + '" src="' + (u > -1 && a ? o[r] : "") + a + '" />';
				t += "<\/a>";
				t += '<h3 class="any_display_name">' + this.Name + "<\/h3>";
				t += '<h3 class="any_display_price">';
				v = this.IsActivities || this.IsAddPurchase;
				y = "<span " + (v ? 'class="activities"' : "") + ">" + (v ? "原价" : "") + "￥" + toMoneyDisplay(this.Price) + "<\/span>";
				v && (y += "&nbsp;<span>" + (this.IsActivities ? "优惠价￥" + toMoneyDisplay(this.ActivityPrice) : "另享满额优惠") + "<\/span>");
				t += y + "<\/h3>";
				t += '<table><tr><td class="alignL">';
				t += '<select class="color-opt" data-product="' + this.ProductID + '" ' + (c ? "disabled" : "") + '><option value="">颜色<\/option>';
				p = !1;
				n.each(this.Colors, function(r) {
					var u = !1,
						f = "";
					h.IsInCart && !p && n.each(this.Details, function(t, i) {
						if (u) return !1;
						n.each(myCart, function(n, t) {
							if (i.Sn == t.sn) return p = !0, u = !0, f = 'data-sn="' + t.sn + '" data-amount="' + t.amount + '"', !1
						})
					});
					t += '<option value="' + this.Color + '" data-colorsort="' + r + '" data-productsort="' + i + '"' + (u ? f + " selected" : "") + ">" + this.Color + "<\/option>"
				});
				t += '<\/select><\/td><td class="alignR"><select class="size-opt" data-product="' + this.ProductID + '" ' + (c ? "disabled" : "") + '><option value="">尺寸<\/option><\/select><\/td><\/tr>';
				t += '<tr><td class="alignL padt13"><select class="stock-opt" data-product="' + this.ProductID + '" ' + (c ? "disabled" : "") + '><option value="">数量<\/option><\/select><\/td>';
				t += '<td class="alignR padt13">' + (c ? "" : '<a href="javascript:void(0)" class="check_btn" data-product="' + this.ProductID + '"><span>选购<\/span><\/a>') + "<\/td><\/tr><\/table>";
				t += "<\/li>";
				r = u > -1 && r == u ? 0 : ++r
			}), t += "<\/ul>", h = n.cookie("fav_item"), c = h ? n.parseJSON(h) : "", c || (i.login = !0, i.item = s.join(), n.cookie("fav_item", JSON.stringify(i), {
				path: "/"
			})), n("#product-keep-list").html(t), n(".color-opt").change(function() {
				n.product.changeColor(n(this))
			}), n(".size-opt").change(function() {
				n.product.changeSize(n(this))
			}), n("a.check_btn").click(function() {
				n.product.addShoppingCar(n(this))
			}), n(".delete-item").click(function() {
				n.product.deleteKeepItem(n(this))
			}), n.product.syncShoppingCartInfo());
			n("#product-keep-list").show()
		},
		deleteKeepItem: function(t) {
			var i = parseInt(t.attr("data-product"), 10);
			n.ajax({
				type: "POST",
				url: "/Member/DeleteKeepItem",
				data: {
					productID: i
				},
				traditional: !0,
				dataType: "json",
				async: !1,
				success: function(t) {
					var e, u, r;
					if (t.Success) {
						n("#product-keep-list li[data-product=" + i + "]").remove();
						e = parseInt(t.Data.count, 10);
						e ? (u = 0, n.each(n("#product-keep-list li"), function() {
							u++;
							n(this).removeClass("last_li");
							u % 5 == 0 && n(this).addClass("last_li")
						})) : (n("head").append(n('<link rel="stylesheet" type="text/css" />').attr("href", n("#cssUrl").val())), n("#product-keep-empty").html(t.Data.emptyHtml).show(), n("#product-keep-list").hide());
						var o = n.cookie("fav_item"),
							f = o ? n.parseJSON(o) : "",
							s = [];
						f != null && f.item != undefined && n.each(f.item.split(","), function(n, t) {
							isNaN(t) || parseInt(t, 10) == i || s.push(t)
						});
						r = {};
						r.login = !0;
						r.item = s.join();
						n.cookie("fav_item", JSON.stringify(r), {
							path: "/"
						})
					} else n.alerts.alert(t.errorMsg, "温馨提示", null)
				}
			})
		},
		syncShoppingCartInfo: function() {
			n.each(n("#product-keep-list li.any_checked_display"), function() {
				var t = n(this).find("select.color-opt"),
					i = t.find("option:selected");
				if (i) {
					var r = t.attr("data-product"),
						u = i.attr("data-sn"),
						f = i.attr("data-amount");
					t.change();
					n(".size-opt[data-product=" + r + "]").find("option[value=" + u + "]").attr("selected", "selected").change();
					n(".stock-opt[data-product=" + r + "]").find("option[value=" + f + "]").attr("selected", "selected")
				}
			})
		},
		changeColor: function(t) {
			var i = t.attr("data-product"),
				r = t.find("option:selected");
			if (r.val()) {
				t.addClass("selected");
				var u = r.attr("data-productsort"),
					f = r.attr("data-colorsort"),
					e = productJson[u].Colors[f].Image;
				e && n("a img[data-product=" + i + "]").attr("src", e);
				n.product.appendSize(i, u, f)
			} else t.removeClass("selected"), n(".size-opt[data-product=" + i + "]").removeClass("selected").empty().append('<option value="">尺寸<\/option>'), n(".stock-opt[data-product=" + i + "]").removeClass("selected").empty().append('<option value="">数量<\/option>')
		},
		appendSize: function(t, i, r) {
			var u = n(".size-opt[data-product=" + t + "]");
			u && (u.empty(), n.each(productJson[i].Colors[r].Details, function() {
				this.Invt > 0 && this.IsEnable && u.append('<option value="' + this.Sn + '" data-invt="' + this.Invt + '">' + this.Size + "<\/option>")
			}), u.addClass("selected"), u.change())
		},
		changeSize: function(t) {
			var u = t.attr("data-product"),
				f = t.find("option:selected").attr("data-invt"),
				r = n(".stock-opt[data-product=" + u + "]"),
				i;
			if (r) {
				for (r.empty(), i = 1; i <= parseInt(f); i++) r.append('<option value="' + i + '">' + i + "<\/option>");
				r.addClass("selected")
			}
		},
		addShoppingCar: function(t) {
			var i = t.attr("data-product"),
				o = n(".color-opt[data-product=" + i + "]").find("option:selected"),
				r, u, f, e;
			if (!o.val()) return n.alerts.alert("请先选择颜色！", "温馨提示", null), !1;
			if (r = n(".size-opt[data-product=" + i + "]").find("option:selected"), !r.val()) return n.alerts.alert("请先选择尺寸！", "温馨提示", null), !1;
			if (u = n(".stock-opt[data-product=" + i + "]").find("option:selected"), !u.val()) return n.alerts.alert("请先选择数量！", "温馨提示", null), !1;
			f = r.val();
			e = parseInt(u.val(), 10);
			n.ajax({
				type: "POST",
				url: "/Shopping/AddKeepItem",
				data: {
					itemNo: f,
					buyAmount: e
				},
				dataType: "json",
				async: !1,
				success: function(t) {
					var r = n.parseJSON(t.Data);
					t.Success ? (n("#product-keep-list li[data-product=" + i + "]").addClass("any_checked_display"), r.alertMsg && n.alerts.alert(r.alertMsg, "温馨提示", null), n.post("/Shopping/MiniCartList", function(t) {
						n("#MiniCartList").html(t)
					})) : r.errorMsg && n.alerts.alert(r.errorMsg, "温馨提示", null)
				}
			})
		},
		GenerateKeepItem: function() {
			var i = parseInt(n(".product-keep").attr("data-value"), 10),
				u = n.cookie("fav_prompt"),
				r = n.cookie("fav_item"),
				t = r ? n.parseJSON(r) : "";
			u || (l = !0);
			t != null && t.item != undefined ? n.each(t.item.split(","), function(t, r) {
				if (!isNaN(r) && parseInt(r, 10) == i) {
					n(".product-keep").addClass("on");
					return
				}
			}) : n.ajax({
				type: "POST",
				url: "/Product/GetKeepItem",
				dataType: "json",
				async: !0,
				success: function(t) {
					var r = {},
						u;
					t.Success && (r.login = t.Data.isLogin, u = "", t.Data.products.length > 0 && (n.inArray(i, t.Data.products) > -1 && n(".product-keep").addClass("on"), u = t.Data.products.join()), r.item = u);
					n.cookie("fav_item", JSON.stringify(r), {
						path: "/"
					})
				}
			});
			n(".product-keep").click(function() {
				var r, t, i;
				h || (r = n(this), t = parseInt(r.attr("data-value"), 10), h = !0, i = n.parseJSON(n.cookie("fav_item")), r.attr("class").indexOf("on") == -1 ? i != null && i.item != undefined && i.login ? n.ajax({
					type: "POST",
					url: "/Product/ProductKeep",
					data: {
						productID: t
					},
					dataType: "json",
					async: !0,
					success: function(i) {
						i && (i.Success ? n.product.KeepProduct(t, i.Data === !1 ? !1 : !0) : n.alerts.alert(i.Message, "温馨提示"))
					},
					complete: function() {
						h = !1
					}
				}) : (n.product.KeepProduct(t, !1), h = !1) : i != null && i.item != undefined && i.login ? n.ajax({
					type: "POST",
					url: "/Product/ProductKeepDel",
					data: {
						productID: t
					},
					dataType: "json",
					async: !0,
					success: function(i) {
						i && (i.Success ? n.product.DelKeepProduct(t, i.Data === !1 ? !1 : !0) : n.alerts.alert(i.Message, "温馨提示"))
					},
					complete: function() {
						h = !1
					}
				}) : (n.product.DelKeepProduct(t, !1), h = !1))
			})
		},
		KeepProduct: function(i, r) {
			var u, f, e;
			l && (n.alerts.alert((t.pname ? "商品「" + t.pname + "」" : "") + '收藏成功<br />您可至<span class="fav-prompt">「我的订单」>「我的收藏」<\/span>查看商品！', "温馨提示"), l = !1);
			n(".product-keep").removeClass("on").addClass("on");
			u = n.parseJSON(n.cookie("fav_item"));
			f = {};
			f.login = r;
			f.item = u != null && u.item ? u.item + "," + i : i.toString();
			n.cookie("fav_item", JSON.stringify(f), {
				path: "/"
			});
			e = new Date;
			e.setTime(e.getTime() + 63072e6);
			n.cookie("fav_prompt", "1", {
				path: "/",
				expires: e
			})
		},
		DelKeepProduct: function(t, i) {
			var r, u, f;
			n(".product-keep").removeClass("on");
			r = n.parseJSON(n.cookie("fav_item"));
			u = {};
			u.login = i;
			f = [];
			r != null && r.item && n.each(r.item.split(","), function(n, i) {
				isNaN(i) || parseInt(i, 10) != t && f.push(i)
			});
			u.item = f.join();
			n.cookie("fav_item", JSON.stringify(u), {
				path: "/"
			})
		}
	}
})(jQuery)