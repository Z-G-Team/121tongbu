
function learnCarousel(){
  var carousel = $(".learn_carousel");
  var ul=carousel.find("ul");
  var li=carousel.find("li");
  var previous=carousel.find(".previous");
  var next=carousel.find(".next");
  var liWidth=li.width();
  var firstLi=li.first().clone();
  var lastLi=li.last().clone();
  var index=1;
  var time;
  ul.prepend(lastLi);
  ul.append(firstLi);
  ul.width((liWidth+40)*(li.length+2));
  ul.find("li").width(liWidth);
  
  ul.css("left",-liWidth-40);
  next.on("click",function(){
    if(!ul.is(":animated")){
      index=index-1;
      ul.animate({"left":-(liWidth+40)*index},800,function(){
        if(index==0){
          index=5;
          ul.css("left",-(liWidth+40)*index);
        }
      })
    }
  })
  previous.on("click",function(){
    if(!ul.is(":animated")){
      index=index+1;
      ul.animate({"left":-(liWidth+40)*index},800,function(){
        if(index==6){
          index=1;
          ul.css("left",-(liWidth+40)*index);
        }
      })
    }
  })
  carousel.on("mouseover",function(){
    clearInterval(time);
  })
  carousel.on("mouseout",function(){
    time=setInterval(function(){
      previous.trigger("click");
    },500000);
  })
  time=setInterval(function(){
    previous.trigger("click");
  },500000);
  
}$(function() {
  //tab 切换
  $.fn.navTabs = function(options) {
    //配置
    var defaults = {
        tabNav: ".nav-tabs",
        tabNavChild: "li",
        tabContent: ".tabs-content",
        tabPane: ".tabs-pane",
        tabEvent: "click"
      },
      opts = $.extend({}, defaults, options);
    return this.each(function() {
      //切换内容
      $(opts.tabNav).on(opts.tabEvent, opts.tabNavChild, function(e) {
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

  //懒加载控件执行
  $("img").lazyload({
    placeholder: "images/grey.gif",
    effect: "fadeIn",
    failurelimit: 54
  });
  learnCarousel();
  
});
