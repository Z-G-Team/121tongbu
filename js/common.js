function onlineApply() {
  layer.open({
    type: 1,
    title: false,
    skin: "layui-layer-service",
    // closeBtn: false,
    area: ["510px", "380px"], //宽高
    content: $(".service-big-box")
  });
}
function learnCarousel() {
  var carousel = $(".learn_carousel");
  var ul = carousel.find("ul");
  var li = carousel.find("li");
  var previous = carousel.find(".previous");
  var next = carousel.find(".next");
  var liWidth = li.width();
  var firstLi = li.first().clone();
  var lastLi = li.last().clone();
  var index = 1;
  var time;
  ul.prepend(lastLi);
  ul.append(firstLi);
  ul.width((liWidth + 40) * (li.length + 2));
  ul.find("li").width(liWidth);

  ul.css("left", -liWidth - 40);
  next.on("click", function () {
    if (!ul.is(":animated")) {
      index = index - 1;
      ul.animate({ "left": -(liWidth + 40) * index }, 800, function () {
        if (index == 0) {
          index = 5;
          ul.css("left", -(liWidth + 40) * index);
        }
      })
    }
  })
  previous.on("click", function () {
    if (!ul.is(":animated")) {
      index = index + 1;
      ul.animate({ "left": -(liWidth + 40) * index }, 800, function () {
        if (index == 6) {
          index = 1;
          ul.css("left", -(liWidth + 40) * index);
        }
      })
    }
  })
  carousel.on("mouseover", function () {
    clearInterval(time);
  })
  carousel.on("mouseout", function () {
    time = setInterval(function () {
      previous.trigger("click");
    }, 500000);
  })
  time = setInterval(function () {
    previous.trigger("click");
  }, 500000);

} $(function () {
  //tab 切换
  $.fn.navTabs = function (options) {
    //配置
    var defaults = {
      tabNav: ".nav-tabs",
      tabNavChild: "li",
      tabContent: ".tabs-content",
      tabPane: ".tabs-pane",
      tabEvent: "click"
    },
      opts = $.extend({}, defaults, options);
    return this.each(function () {
      //切换内容
      $(opts.tabNav).on(opts.tabEvent, opts.tabNavChild, function (e) {
        var $this = $(this);
        var $index = $this.index();
        console.log($index);
        $this
          .addClass("active")
          .siblings()
          .removeClass("active");
        $this
          .parent()
          .siblings(opts.tabContent)
          .children(opts.tabPane)
          .eq($index)
          .show()
          .siblings()
          .hide();
      });
    });
  };

  $("#distpicker").distpicker({
    autoSelect: false
  });
  $("#distpicker1").distpicker({
    autoSelect: false
  });
  //懒加载控件执行
  $("img").lazyload({
    placeholder: "images/grey.gif",
    effect: "fadeIn",
    failurelimit: 54
  });
  learnCarousel();
  $('.onSub').click(function () {
    var validate = {
      userName: {
        value: $('.yyUserName').val().trim(),
        message: '请输入姓名！'
      },
      phone: {
        value: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test($('.yyPhone').val().trim()),
        message: '请输入正确的手机号！'

      },
      email: {
        value: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test($('.yyEmail').val().trim()),
        message: '请输入正确的邮箱格式'
      },
      occupation: {
        value: $('.yyOccupation').val().trim(),
        message: '请输入您定职位！'
      },
      address: {
        value: $('.yyProvince').val() && $('.yyCity').val() && $('.yyDistrict').val(),
        message: '请选择地址！'
      }
    }
    for (var key in validate) {
      if (!validate[key].value) {
        layer.msg(validate[key].message)
        return
      }
    }
    // alert('ddd');
    layer.load(1)
    $.ajax({
      url: '/Index/addBook',
      data: $('#onForm').serialize(),
      dataType: 'json',
      type: 'post',
      success: function (ret) {
        layer.closeAll('loading');
        layer.msg(ret.info);
        $('.layui-layer-close').click();
        $('#butForm').find('input').val('');
        $('#butForm').find('#province02').val('');
        $('#butForm').find('#city02').val('');
        $('#butForm').find('#district02').val('');
      },
      error: function (ret) {
        setTimeout(function () {
          layer.closeAll();
        }, 5000)
      }
    });
  });
  function generatHtml() {
    var html = '<ul class="fixed-right">\
                <li class="item">\
                    <div class="inner code" id="fixedCode">\
                        <i></i>\
                        <p>二维码</p>\
                    </div>\
                </li>\
                <li class="item">\
                    <div class="inner yy" id="fixedYy">\
                            <i></i>\
                            <p>试听预约</p>\
                        </div>\
                </li>\
                <li class="item" id="serviceItem">\
                    <div class="inner service" id="fixedService">\
                        <i></i>\
                        <p>在线客服</p>\
                    </div>\
                    <div class="pos-inner service-inner">\
                      <p>客服QQ号：</p>\
                      <a href="tencent://message/?uin=3466513742&Site=http://www.121tongbu.com/&Menu=yes">3466513742</a>\
                    </div>\
                </li>\
                <li class="item">\
                    <a href="javascript::" class="inner toTop" id="fixedToTop">\
                        <i></i>\
                        <p>返回顶部</p>\
                    </a>\
                </li>\
            </ul>';
    $('body').append(html);
  }
  generatHtml();
  $('.fixed-right').on('click', '#fixedYy', function () {
    onlineApply();
  })
  $('.fixed-right').on('click', '#fixedToTop', function () {
    $('body,html').animate({ scrollTop: 0 }, 1000);
    return false;
  })
  $('.fixed-right').on('mouseover', '#serviceItem', function () {
    $(this).addClass('active');
  })
  $('.fixed-right').on('mouseout', '#serviceItem', function () {
    $(this).removeClass('active');
  })
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".fixed-right #fixedToTop").fadeIn(1500);
    } else {
      $(".fixed-right #fixedToTop").fadeOut(1500);
    }
  });
});
