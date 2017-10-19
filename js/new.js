//列表页面---------------------------------------------------------------------------------------
var default_id = 0;
var page = 1;
var currentPage = 1;
var totalPage = 0;
var count = 1;
//获取分类列表
function getClassList(){
	$.ajax({
		url : '/News/getCategory',
		data : '',
		dataType : 'json',
		type : 'post',
		success : function(ret){
			if(ret.status==1){
				var list = ret.info;
				var strs = '';
				for(k in list){
					if(k==0){
						default_id = list[k]['id'];
						var class1 = 'active';
					}else{
						class1 = '';
					}
					strs += '<a href="javascript:;" class="news-tab-item '+class1+'" data-id="'+list[k]['id']+'">';
                    strs += '<span>'+list[k]['name']+'</span>';
                	strs += '</a>';
				}

				$('.news-tab').html(strs);

				getNewsList();
			}else{
				$('.news-tab').html('');
				layer.msg('暂无分类');
			}
		}
	});
}

//获取新闻列表
function getNewsList(){
	layer.load(1);
	$.ajax({
		url : '/News/getNewsList',
		data : {p:page,id:default_id},
		dataType : 'json',
		type : 'post',
		success : function(ret){
			layer.closeAll('loading');
			if(ret.status==1){
				currentPage = ret.page;
				totalPage = ret.all_page;
				count = ret.counts;
				page = ret.next_page;
				var list = ret.list;
				var strs = '';
				for(k in list){
					
					strs +='<li class="news-list-item">';
                    strs +='<img class="item-pic" src="'+list[k]['main_img']+'" alt="">';
                    strs +='<div class="item-info">';
                    strs +='<p class="title l-ell l-ell-2">'+list[k]['name'];
                    strs +='</p>';
                    strs +='<p class="desc l-ell l-ell-2">'+list[k]['summ'];;
                    strs +='</p>';
                    strs +='<div class="other clearfix">';
                    strs +='<div class="time">'+list[k]['add_time'];
                    strs +='</div>';
                    strs +='<div class="category pl25">分类：'+list[k]['cname'];    
                    strs +='</div>';
                    strs +='<a href="/pages/NewsDetail.html?id='+list[k]['id']+'" class="btn btn-mini btn-detail">详情</a>';
                    strs +='</div>';
                    strs +='</div>';
                	strs +='</li>';
				}
				// alert(currentPage);
				pages();
				$('.news-list').html(strs);
			}else{
				currentPage = ret.page;
				totalPage = ret.all_page;
				count = ret.counts;
				page = ret.next_page;
				pages();
				$('.news-list').html('');
				layer.msg('暂无数据');
			}
		}
	});
}

//点击分类
$('.news-tab').on('click','a', function(){
	var id = $(this).data('id');
	default_id = id;
	page = 1;
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	
	getNewsList();
});

//点击分页
$('#pagination').on('click','a', function(){
	var p = $(this).data('current');
	if(p==0){
		page = 1;
	}else{
		page = p;
	}
	// alert(page);
	// alert(default_id);
	getNewsList();
});


//分页函数
function pages(){
	$("#pagination").pagination({
        currentPage: currentPage,
        totalPage: totalPage,
        isShow: false,
        count: count,
        prevPageText: "上一页",
        nextPageText: "下一页",
        callback: function (current) {}
    });
}


//详情页面 ------------------------------------------------------------------------------
//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

function  getInfo(){
	var id = getUrlParam('id');
	layer.load(1);
	$.ajax({
		url : '/News/getInfo',

		data : {id:id},
		dataType : 'json',
		type : 'post',
		success : function(ret){
			layer.closeAll('loading');
			if(ret.status==1){
				var info = ret.info;
				$('.detail-intro').html(info.summ);
				$('.title').html(info.name);
				$('.time').html(info.add_time);
				$('.category').html('分类：'+info.cname);
				$('.detail-content').html(info.content)
			}else{
				layer.msg(ret.info);
			}

		}
	})
}