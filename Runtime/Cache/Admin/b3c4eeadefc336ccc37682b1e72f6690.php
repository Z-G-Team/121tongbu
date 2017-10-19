<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
	<meta charset="utf-8" />
	<title>后台管理</title>
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
	<!-- BEGIN GLOBAL MANDATORY STYLES -->
	<link href="/Public/Admin/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
	<link href="/Public/Admin/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css"/>
	<link href="/Public/Admin/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
	<link href="/Public/Admin/css/style-metro.css" rel="stylesheet" type="text/css"/>
	<link href="/Public/Admin/css/style.css" rel="stylesheet" type="text/css"/>
	<link href="/Public/Admin/css/style-responsive.css" rel="stylesheet" type="text/css"/>
	<link href="/Public/Admin/css/default.css" rel="stylesheet" type="text/css" id="style_color"/>
	<link href="/Public/Admin/css/uniform.default.css" rel="stylesheet" type="text/css"/>
	<!-- END GLOBAL MANDATORY STYLES -->
	<!-- BEGIN PAGE LEVEL STYLES -->
	<!-- END PAGE LEVEL STYLES -->
	<link rel="shortcut icon" href="/Public/Admin/image/favicon.ico" />
	
	<link rel="stylesheet" type="text/css" href="/Public/Admin/css/select2_metro.css" />
	<link rel="stylesheet" href="/Public/Admin/css/DT_bootstrap.css" />
	<link rel="stylesheet" href="/Public/Admin/css/product.css" />
	<script type="text/javascript" src="/Plug/ueditor/ueditor.config.js"></script>
	<script type="text/javascript" src="/Plug/ueditor/ueditor.all.js"></script>

</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class="<?php echo ($pageId); ?>">
	<!-- BEGIN LOGO -->
	
	<!-- BEGIN HEADER -->
	<div class="header navbar navbar-inverse navbar-fixed-top">
		<!-- BEGIN TOP NAVIGATION BAR -->
		<div class="navbar-inner">
			<div class="container-fluid">
				<!-- BEGIN LOGO -->
				<a class="brand" style="color:#FFF;padding-left:20px;" href="<?php echo U('Index/index');?>">武器大师</a>
				<!-- END LOGO -->  	             
				<!-- BEGIN TOP NAVIGATION MENU -->              
				<ul class="nav pull-right">
					<!-- BEGIN USER LOGIN DROPDOWN -->
					<li class="dropdown user">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
						<span class="username"><?php echo USERNAME;?></span>
						<i class="icon-angle-down"></i>
						</a>
						<ul class="dropdown-menu">
							<li><a href="#"><i class="icon-user"></i> <?php echo USERNAME;?></a></li>
							<li><a href="<?php echo U('User/updatepass');?>"><i class="icon-lock"></i> 修改密码</a></li>
							<li><a href="<?php echo U('Login/logout');?>"><i class="icon-key"></i> 退出</a></li>
						</ul>
					</li>
					<!-- END USER LOGIN DROPDOWN -->
				</ul>
				<!-- END TOP NAVIGATION MENU --> 
			</div>
		</div>
		<!-- END TOP NAVIGATION BAR -->
	</div>
	<!-- END HEADER -->
	
	
	<!-- BEGIN CONTAINER -->
	<div class="page-container row-fluid">
		<!-- BEGIN SIDEBAR -->
<div class="page-sidebar nav-collapse collapse">
	<!-- BEGIN SIDEBAR MENU -->        
	<ul class="page-sidebar-menu">
		<li>
			<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
			<div class="sidebar-toggler hidden-phone"></div>
			<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
		</li>

        <?php if(is_array($auth['menu'])): $i = 0; $__LIST__ = $auth['menu'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><li <?php if($item['cur']==1){ echo 'class="active"'; }?>>
                <a href="javascript:;">
                    <i class="icon-sitemap"></i>
                    <span class="title"><?php echo ($item['name']); ?></span>
                    <span class="fa arrow"></span>
                </a>
                <ul class="sub-menu">
                    <?php if(is_array($item['child'])): $i = 0; $__LIST__ = $item['child'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$minfo): $mod = ($i % 2 );++$i; if($minfo['show']==1){?>
                        <li <?php if($minfo['cur']==1){ echo 'class="active"'; }?>>
                            <a href="<?php echo U($minfo['controller'].'/'.$minfo['action']); ?>"><?php echo $minfo['name']; ?></a>
                        </li>
                        <?php } endforeach; endif; else: echo "" ;endif; ?>
                </ul>
            </li><?php endforeach; endif; else: echo "" ;endif; ?>
	</ul>
	<!-- END SIDEBAR MENU -->
</div>
<!-- END SIDEBAR -->
		<!-- BEGIN PAGE -->
		<div class="page-content">
			<!-- BEGIN PAGE CONTAINER-->        
			<div class="container-fluid">
				

<!-- BEGIN PAGE HEADER-->   
<div class="row-fluid">
	<div class="span12">
		<h3 class="page-title">
			编辑
		</h3>
		<ul class="breadcrumb">
			<li>
				<i class="icon-home"></i>
				<a href="<?php echo U('Index/index');?>">首页</a> 
				<span class="icon-angle-right"></span>
			</li>
			<li>
				<a href="<?php echo U('Product/index');?>">商品管理</a>
				<span class="icon-angle-right"></span>
			</li>
			<li><a href="javascript:;">编辑商品</a></li>
		</ul>
	</div>
</div>
<!-- END PAGE HEADER-->

<!-- BEGIN PAGE CONTENT-->

<div class="row-fluid">
	<div class="span12">
		<!-- BEGIN SAMPLE FORM PORTLET-->   
		<div class="portlet box blue tabbable">
			<div class="portlet-title">
				<div class="caption">
					<i class="icon-reorder"></i>
					<span class="hidden-480">商品表单</span>
				</div>
			</div>
			<div class="portlet-body form">
				<div class="tabbable portlet-tabs">
					<ul class="nav nav-tabs">
						<li class="active"><a href="#portlet_tab1" data-toggle="tab">Default</a></li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane active" id="portlet_tab1">

							<!-- BEGIN FORM-->
							<form class="form-horizontal" id="mForm" method="post" action="<?php echo U("Product/edit");?>">
								<input type="hidden" id="id" name="id" value="<?php echo $ProductInfo['id'];?>">

								<div class="control-group">
									<label class="control-label">所属分类</label>
									<div class="controls">
										<select id="fpid" class="medium m-wrap" name="fpid">
											<option value="">请选择</option>
						                    <?php if(is_array($flist)): $i = 0; $__LIST__ = $flist;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$info): $mod = ($i % 2 );++$i;?><option value="<?php echo ($info['id']); ?>" <?php if($info['id']==$ProductInfo['fpid']){ echo 'selected=""';}?>><?php echo ($info['name']); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
										</select>

										<select id="spid" class="medium m-wrap" name="spid">
											<option value="">请选择</option>
											<?php if(is_array($slist)): $i = 0; $__LIST__ = $slist;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$info): $mod = ($i % 2 );++$i;?><option value="<?php echo ($info['id']); ?>" <?php if($info['id']==$ProductInfo['spid']){ echo 'selected=""';}?>><?php echo ($info['name']); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
										</select>

										<select id="tpid" class="medium m-wrap" name="tpid">
											<option value="">请选择</option>
											<?php if(is_array($tlist)): $i = 0; $__LIST__ = $tlist;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$info): $mod = ($i % 2 );++$i;?><option value="<?php echo ($info['id']); ?>" <?php if($info['id']==$ProductInfo['tpid']){ echo 'selected=""';}?>><?php echo ($info['name']); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
										</select>
										<span class="help-inline" style="color:red;">*</span>
									</div>
								</div>


								<div class="control-group">
									<label class="control-label">商品类型</label>
									<div class="controls">
										<select id="type" class="medium m-wrap" name="type">
											<option value="1" <?php if($ProductInfo['type']==1){echo 'selected';}?>>普通商品</option>
										</select>
									</div>
								</div>



								<div class="control-group">
									<label class="control-label">商品名称</label>
									<div class="controls">
										<input type="text" name="name" id="name" class="m-wrap large" placeholder="商品名称" value="<?php echo ($ProductInfo['name']); ?>">
										<span class="help-inline" style="color:red;">*</span>
									</div>
								</div>

								<div class="control-group">
									<label class="control-label">商品编号</label>
									<div class="controls">
										<input type="text" name="num" id="num" class="m-wrap large" placeholder="商品编号" value="<?php echo ($ProductInfo['num']); ?>">
										<span class="help-inline" style="color:red;">*</span>
									</div>
								</div>

								<div class="control-group">
									<label class="control-label">SEO关键字</label>
									<div class="controls">
										<input type="text" name="keys" id="keys" class="m-wrap large" placeholder="SEO关键字" value="<?php echo ($ProductContent['keys']); ?>">
										<span class="help-inline" style="color:red;"></span>
									</div>
								</div>

								<div class="control-group">
									<label class="control-label">SEO描述</label>
									<div class="controls">
										<textarea class="large m-wrap" rows="3" name="description" id="description" placeholder="SEO描述"><?php echo ($ProductContent['description']); ?></textarea>
										<span class="help-inline" style="color:red;"></span>
									</div>
								</div>

								<div class="control-group" id="attributes">
									<!-- 商品属性 -->
									<?php if($attrs){ ?>
										<label class="control-label">商品属性</label>
										<div class="controls">
											<?php foreach($attrs as $k=>$v){?>
												<select class="small m-wrap" name="attribute[]">
												<option value="">请选择<?php echo $v['name'] ;?></option>
												<?php if($attrs[$k]['list']){ foreach($attrs[$k]['list'] as $key=>$val){?>
													<option value="<?php echo $v['id'] . '-' . $v['name'] . ':' . $val;?>" <?php if($v['flag'] && ($v['flag']==$key) ){ echo 'selected="true"';} ?>><?php echo $val;?></option>
												<?php } } ?>
												</select>
											<?php }?>
										</div>
									<?php } ?>
								</div>

								<div class="control-group">
									<label class="control-label" >销售价</label>
									<div class="controls">
										<input type="text" name="price" id="price" class="m-wrap small" value="<?php echo ($ProductInfo['price']); ?>">

										<span class="help-inline">市场价</span>
										<input type="text" name="market_price" id="market_price" class="m-wrap small" value="<?php echo ($ProductInfo['market_price']); ?>">
										
										<span class="help-inline">成本价</span>
										<input type="text" name="cost_price" id="cost_price" class="m-wrap small" value="<?php echo ($ProductInfo['cost_price']); ?>">

										<span class="help-inline">库存量</span>
										<input type="text" name="stock" id="stock" class="m-wrap small" value="<?php echo ($ProductInfo['stock']); ?>">
									</div>
								</div>

								<div class="control-group">
									<!-- 价格信息 -->
									<label class="control-label">重量</label>
									<div class="controls">
										<input type="text" name="weight" id="weight" class="m-wrap small" value="<?php echo ($ProductInfo['weight']); ?>">

										<span class="help-inline">销售量</span>
										<input type="text" name="sales" id="sales" class="m-wrap small" value="<?php echo ($ProductInfo['sales']); ?>">

										<span class="help-inline">点击量</span>
										<input type="text" name="clicks" id="clicks" class="m-wrap small" value="<?php echo ($ProductInfo['clicks']); ?>">
				
										<span class="help-inline">收藏量</span>
										<input type="text" name="collects" id="collects" class="m-wrap small" value="<?php echo ($ProductInfo['collects']); ?>">
									</div>

								</div>

								<div class="control-group">
									<label class="control-label">商品规格</label>
									<div class="controls">
										<a href="javascript:;" id="kongsku" class="btn blue"><i class="icon-share"></i>开启规格</a>
										<input type="hidden" value="0" name="issku" id="issku">
									</div>

									<div class="controls" id="lay_sku">
						                <!-- 规格 -->
						                <div class="goods_specs">
						                	<?php echo $specs['com'];?>
						                </div>

						                <!-- 规格组合 -->
						                <div class="construct_specs">
						                </div>
						            </div>
								</div>


								<div class="control-group" id="show_sku_imgs" style="display:none;">
									<label class="control-label">颜色图片</label>
									<div class="controls" id="lay_tu">
						                <!-- 规格 -->
						                <div class="goods_imgs">
						                	<table id="real_imgs" class="table table-striped table-hover table-bordered">
						                		<?php if(is_array($specs_imgs)): $i = 0; $__LIST__ = $specs_imgs;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$mimgs): $mod = ($i % 2 );++$i;?><tr id="my_<?php echo str_replace(":","_",$mimgs['specs_flag']);?>">
													<td><?php echo ($mimgs['specs_name']); ?></td>
														<td>
															<input type="hidden" name="specs_name[]" value="<?php echo ($mimgs['specs_name']); ?>">
															<input id="<?php echo ($mimgs['specs_flag']); ?>" type="hidden" name="specs_val[]" value="<?php echo ($mimgs['img']); ?>">
															<input type="hidden" name="img_specs[]" value="<?php echo ($mimgs['specs_flag']); ?>">
															<img src="<?php echo ((isset($mimgs['img']) && ($mimgs['img'] !== ""))?($mimgs['img']):'/Public/Admin/images/nophoto.jpg'); ?>" class="showimg_<?php echo ($mimgs['specs_flag']); ?>" width="50" height="50" id="showimg_<?php echo ($mimgs['specs_flag']); ?>">
														</td>
													<td><iframe src="/Admin/Images/upload/type/<?php echo ($mimgs['specs_flag']); ?>" scrolling="no" topmargin="no" width="330" height="30" marginwidth="0" marginheight="0" frameborder="0" align="center" class="imageIfram"></iframe></td>
												</tr><?php endforeach; endif; else: echo "" ;endif; ?>
						                	</table>
						                </div>

						            </div>

								</div>

								<div class="control-group">
									<label class="control-label">商品图片</label>
									<div class="controls">
										<iframe src="<?php echo U('Images/product');?>" scrolling="no" topmargin="no" width="330" height="30" marginwidth="0" marginheight="0" frameborder="0" align="center" class="imageIfram"></iframe>
										<span class="help-inline">
											（默认第一张为产品缩略图）
										</span>
									</div>
								</div>

								<div class="control-group">
									<label class="control-label">商品图片预览</label>
									<div class="controls all_pic">
										<?php if($imgs){ foreach ($imgs as $key => $value) { ?>
											<?php if($value){?>

					                        <div class="pic_list">
											    <img src="<?php echo $value;?>" width="120" height="120" class="showimg">
												<input type="hidden" value="1" class="has_image">
					                            <input type="hidden" name="pic[]" class="hideimageurl" value='<?php echo $value;?>'>
												<div class="operate">
					                                <i class="toleft">左移</i>
					                                <i class="toright">右移</i>
					                                <i class="del">删除</i>
					                            </div>
										   	</div>

					                        <?php }else{ ?>
											<div class="pic_list">
												<img src="/Public/Admin/images/nophoto.jpg" width="120" height="120" class="showimg">
												<input type="hidden" value="0" class="has_image">
					                            <input type="hidden" name="pic[]" class="hideimageurl" value=''>
												<div class="operate">
					                                <i class="toleft">左移</i>
					                                <i class="toright">右移</i>
					                                <i class="del">删除</i>
					                            </div>
					                        </div>
					                        <?php }?>
				                        <?php }} ?>
						            </div>
								</div>

								<div class="control-group">
									<label class="control-label">产品详细信息</label>
									<div class="controls">
										<textarea name="content" id="content" cols="30" rows="10"><?php echo ($ProductContent['content']); ?></textarea>
									</div>
									<!-- <div class="col-sm-2">
										<p class="help-block">Your help text!</p>
									</div> -->
								</div>

								<div class="control-group">
									<label class="control-label" >排序</label>
									<div class="controls">
										<input type="text" name="sort" id="sort" class="m-wrap small" value='<?php echo ($ProductInfo['sort']); ?>'>
									</div>
								</div>

								<div class="control-group">
									<label class="control-label">上下架</label>
									<div class="controls">
										<label class="radio">
											<input type="radio" name="checked" value="0" <?php echo $ProductInfo['checked']==1 ? 'checked="true"' : '' ;?>/>
											下架
										</label>
										<label class="radio">
											<input type="radio" name="checked" value="1" <?php echo $ProductInfo['checked']==1 ? 'checked="true"' : '' ;?> />
											上架
										</label>
									</div>
								</div>

								<div class="form-actions">
									<button type="submit" class="btn blue save"><i class="icon-ok"></i> 保存</button>
									<button type="button" class="btn" onclick="javascript:history.go(-1)">返回</button>
								</div>
							</form>

							<!-- END FORM-->  
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END SAMPLE FORM PORTLET-->
	</div>
</div>
<!-- END PAGE CONTENT-->         

			</div>
			<!-- END PAGE CONTAINER-->
		</div>
		<!-- END PAGE -->
	</div>
	<!-- END CONTAINER -->

	
	<!-- BEGIN FOOTER -->
<div class="footer">
	<div class="footer-inner">
		2016 &copy; copyright by 武器大师.
	</div>
	<div class="footer-tools">
		<span class="go-top">
		<i class="icon-angle-up"></i>
		</span>
	</div>
</div>
<!-- END FOOTER -->

	<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
	<!-- BEGIN CORE PLUGINS -->
	<script src="/Public/Admin/js/jquery-1.10.1.min.js" type="text/javascript"></script>
	<script src="/Public/Admin/js/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>
	<!-- IMPORTANT! Load jquery-ui-1.10.1.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
	<script src="/Public/Admin/js/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>
	<script src="/Public/Admin/js/bootstrap.min.js" type="text/javascript"></script>
	<!--[if lt IE 9]>
	<script src="/Public/Admin/js/excanvas.min.js"></script>
	<script src="/Public/Admin/js/respond.min.js"></script>  
	<![endif]-->   
	<script src="/Public/Admin/js/jquery.slimscroll.min.js" type="text/javascript"></script>
	<script src="/Public/Admin/js/jquery.blockui.min.js" type="text/javascript"></script>  
	<script src="/Public/Admin/js/jquery.cookie.min.js" type="text/javascript"></script>

	<script src="/Public/Admin/layer/layer.js"></script>
	<!-- END CORE PLUGINS -->

	
	<!-- END FOOTER -->
	<!-- END PAGE LEVEL PLUGINS -->
	<script src="/Public/Admin/js/app.js" type="text/javascript"></script> 
	<!-- BEGIN PAGE LEVEL SCRIPTS -->   
	<script>
		jQuery(document).ready(function() {   
		   // initiate layout and plugins
		   App.init();


		   $(".save").click(function(){
                    $.ajax({
                        url : '<?php echo U("Product/edit");?>',
                        data : $('#mForm').serialize(),
                        dataType : 'json',
                        type : 'post',
                        success : function(ret){
                            if(ret.status==1){
                            	layer.alert(ret.info, {icon: 6});
                                window.location.href=ret.url;
                            }else{
                        		layer.alert(ret.info, {icon: 5});
                            }
                        }

                    });

                   	return  false;
            });

	        //规格id
	        var ids = [];
	        var tmp_vals = [];  //临时存储记录的属性值
	        var specsName = new Object(),
	            specsList = new Object();
	        var specsHtml = '';

	        //加载编辑器
			var ue = UE.getEditor('content', {
			    autoHeight: false,
			    initialFrameWidth:750,
			    initialFrameHeight:390,
			    autoHeightEnabled:false
			});


	        function goodsSkuInit(){ // 编辑sku初始化
	            $('.goods_specs').find('li>input[type=checkbox]').each(function(){
	                var _this = $(this);
	                var _parent = _this.parent();
	                var pid = _this.data('pid');
	                var id = _this.data('id');
	                var name = _parent.find('.val_list').val();
	                var pname = _this.data('pname');

	                //选中状态
	                var _checked = _this.prop('checked');

	                if(!_checked){
	                    return;
	                }

	                var value = {
	                    id : id,
	                    pid : pid,
	                    name : name,
	                    pname : pname
	                }
	                if(specsList[pid] == undefined){
	                    specsList[pid] = new Array();
	                }
	                if(specsList[pid][id] == undefined){
	                    specsList[pid][id] = new Array();
	                }
	                if(specsName[pid] == undefined){
	                    specsName[pid] = pname;
	                }
	                specsList[pid][id] = value;

	                // console.log(specsList);

	                //由于js数组的下标都是从0开始的，所以这里进行处理 不存在的下标元素显示undefined
	                var tmpSpecs = new Array();
	                for(var k in ids){
	                    //规格列表临时数组
	                    var tmplist = new Array();

	                    //将选中的规格种类凭空undfined项
	                    if(specsList[ids[k]] == undefined || specsList[ids[k]].length < 1){
	                        break;
	                    }

	                    //将选中的规格规格清空undefined项
	                    for(i in specsList[ids[k]]){
	                        if(specsList[ids[k]][i] == undefined || specsList[ids[k]][i].length < 1){
	                            break;
	                        }
	                        tmplist.push(specsList[ids[k]][i]);
	                    }

	                    //优选中的元素则加入
	                    if(tmplist.length>0){
	                        tmpSpecs.push(tmplist);
	                    }
	                }

	                // console.log(tmpSpecs);

	                //计算规格所有组合
	                var all_sku = new Array();
	                if(tmpSpecs.length == ids.length){
	                    // if(tmpSpecs.length>=2){
	                        for(var i=0; i<tmpSpecs.length ; i++){
	                            //递归调用，获取所有属性组合
	                            all_sku = constitute_sku(all_sku, tmpSpecs[i])
	                        }
	                    // }
	                }else{
	                    //如果规格种类选择不全，则清空组合
	                    $('.construct_specs').html('');
	                }

	                // console.log(tmpSpecs);
	                //所有的规格类型都有选中的，则开始组合
	                specsHtml = '';
	                if(tmpSpecs.length == ids.length ){
	                    specsHtml += '<table><tr>';
	                    for(i in ids){
	                        specsHtml += '<th>'+specsName[ids[i]]+'</th>';
	                    }
	                    specsHtml += '<th><span style="color:red;">*</span>销售价</th><th><span style="color:red;">*</span>市场价</th><th><span style="color:red;">*</span>成本价</th><th><span style="color:red;">*</span>数量</th><th>商家编码</th></tr>';

	                    //调用sku构造函数
	                    constructSku(all_sku);

	                    specsHtml += '</table>';

	                    $('.construct_specs').html(specsHtml);
	                }
	            })
	        }

	        //sku初始化
	        <?php if($ProductInfo['issku'] == 1){?>
	            $('#issku').val(1);
	            ids = <?php echo $specs['ids'];?>;
	            tmp_vals = <?php echo $specs['tmp_val']?>;
	            $('#kongsku').html('<i class="icon-share"></i>关闭规格');
	            $('.goods_specs').show(); 
	            goodsSkuInit()  //初始化函数调用
	            $('.construct_specs').show(''); 
	            $('#show_sku_imgs').show();
	        <?php }?>

	        //选择一级分类
	        $('#fpid').change(function(){
	            $('#spid').html('<option value="">请选择</option>');
	            $('#tpid').html('<option value="">请选择</option>');
	            //属性值，规格值做对应的改变
	            hidesomething();

	            var pid = $(this).val();
	            if(pid){
	                //ajax获取子分类
	                getSub('#spid', pid);
	                getAttribute(pid);
	            }

	        });

	        //选择二级分类
	        $('#spid').change(function(){
	            $('#tpid').html('<option value="">请选择</option>');
	            //属性值，规格值做对应的改变
	            hidesomething();

	            var pid = $(this).val();
	            if(pid){
	                //ajax获取子分类
	                getSub('#tpid', pid);
	                getAttribute(pid);
	            }

	        });

	        //选择第三分类
	        $('#tpid').change(function(){
	            //属性值，规格值做对应的改变
	            hidesomething()

	            var pid = $(this).val();
	            if(pid){
	                getAttribute(pid);
	            }
	        });

			//获取属性里欸播啊
			function getAttribute(pid){
				//ajax获取属性值
	            $.ajax({
	                url : '<?php echo U("Product/getAttribute");?>',
	                data : {"pid":pid},
	                dataType : 'JSON',
	                type : 'POST',
	                success : function(ret){
	                    if(ret.status==1){
	                        var info = ret.info;
	                        var len = info.length;
	                        var str = '<label class="control-label">商品属性</label>';
	                        str += '<div class="controls">';
	                        for(i=0; i<len; i++){
	                            var vattr = info[i]['attr'];
	                            var vlen = vattr.length;  //属性值
	                            str += '<select name="attribute[]" class="small m-wrap">';
	                            str += '<option value="">请选择'+info[i]['name']+'</option>';
	                            for(j=0;j<vlen;j++){
	                                str += '<option value="' + info[i]['id'] + '-' + info[i]['name'] + ":" + vattr[j] + '">' + vattr[j] + '</option>';
	                            }
	                            str += '</select>';
	                        }
	                        str += '</div>';
	                        $('#attributes').html(str);
	                    }
	                }
	            });
			}


	        //隐藏规格属性
	        function hidesomething(){
	            $('#kongsku').html('<i class="icon-share"></i>开启规格');
	            $('#issku').val(0);
	            $('.goods_specs').html('');   //清空规格
	            $('.construct_specs').html(''); //清空组合规格
	            $('.goods_specs').hide();   //隐藏
	            $('.construct_specs').hide(''); //隐藏
	            $('#attributes').html('');
	            ids = '';
	            tmp_vals = [];
	            specsName = [];
	            specsList = [];
	            specsHtml = '';
	        }

	        //获取子分类ajax
	        function getSub(c_id, pid){
	            //ajax获取子分类
	            $.ajax({
	                url : '<?php echo U("Product/getSubCategory");?>',
	                data : {"pid":pid},
	                dataType : 'JSON',
	                type : 'POST',
	                success : function(ret){
	                    if(ret.status==1){
	                        var info = ret.info;
	                        var len = info.length;
	                        var str = '<option value="">请选择</option>';
	                        for(i=0; i<len; i++){
	                            str += '<option value="' + info[i]['id'] + '">' + info[i]['name'] + '</option>';
	                        }
	                        $(c_id).html(str);
	                    }
	                }
	            });
	        }

	        //开启SKU
	        $('#kongsku').click(function(){
	            var pid = $('#tpid').val(),
	                issku = $('#issku'),
	                _this = $(this);
	            if(pid==0){
	            	pid = $('#spid').val();
	            };
	            if(pid==0){
	            	pid = $('#fpid').val();
	            }

	            //判断是开启还是关闭
	            if(parseInt(issku.val())==1){
	                //关闭sku
	                $('.goods_specs').html('');   //清空规格
	                $('.construct_specs').html(''); //清空组合规格
	                $('.goods_specs').hide();   //隐藏
	                $('.construct_specs').hide(''); //隐藏
	                $('#show_sku_imgs').hide();
	                $('#real_imgs').html('');
	                issku.val('0');
	                _this.html('<i class="icon-share"></i>开启规格');
	                ids = '';
	                tmp_vals = [];
	                specsName = [];
	                specsList = [];
	                specsHtml = '';
	                return false;
	            }


	            $('#show_sku_imgs').show();


	            //开启规格操作
	            if(pid == ''){
	                alert('请选择分类');
	                return false;
	            }

	            //获取规格
	            getSpecs(pid);
	        });


	        //ajax获取分类规格
	        function getSpecs(pid){
	            $.ajax({
	                url : '<?php echo U("Product/getSpecs");?>',
	                data : {pid:pid},
	                type : 'post',
	                dataType : 'json',
	                success : function(ret){
	                    if(ret.status==1){
	                        ids = ret.ids;
	                        $('#issku').val('1');
	                        $('#kongsku').html('<i class="icon-share"></i>关闭规格');
	                        $('.goods_specs').html(ret.info);
	                        $('.goods_specs').show();   //清空规格
	                        $('.construct_specs').show(''); //清空组合规格
	                    }else{
	                        alert(ret.info);
	                    }
	                }
	            });
	        }


	        //选择属性
	        var all_imgs = new Array();
	        $('.goods_specs').on('change', '.has_img_1', function(){
	        	var _this = $(this);
	        	var _val = $(this).val();
	        	var _pid = $(this).data('pid');
	        	var _id = $(this).data('id');

	        	var _this_id = 'my_'+_pid+'_'+_id;
	        	var _checked = _this.prop('checked');

	        	if(!_checked){
	        		$('.goods_imgs').find('#'+_this_id).remove();
	                return false;
	            }

	        	var strs = '';
		       	var _name = 'pvn_'+_val;
		       	var name = $('input[name="'+_name+'"]').val();

		       	strs +='<tr id="my_'+_pid+'_'+_id+'">';
		       	strs +='<td>'+name+'</td>';
				strs +='<td>';
				strs += '<input  type="hidden" name="specs_name[]" value="'+name+'">';
				strs += '<input id="'+_val+'" type="hidden" name="specs_val[]">';
				strs += '<input type="hidden" name="img_specs[]" value="'+_val+'">';
				strs += '<img src="/Public/Admin/images/nophoto.jpg" class="showimg_'+_val+'" width="50" height="50" id="showimg_'+_val+'">';
				strs +='</td>';
				strs +='<td><a href=""><iframe src="/Admin/Images/upload/type/'+_val+'" scrolling="no" topmargin="no" width="330" height="30" marginwidth="0" marginheight="0" frameborder="0" align="center" class="imageIfram"></iframe></td>';
				strs +='</tr>';

	        	$('#real_imgs').append(strs);
	        });
	        
	        $('.goods_specs').on('change', 'input[type=checkbox]', function(){
	            var _this = $(this);
	            var _parent = _this.parent();
	            var pid = _this.data('pid');
	            var id = _this.data('id');
	            var name = _parent.find('.val_list').val();
	            var pname = _this.data('pname');

	            //选中状态
	            var _checked = _this.prop('checked');

	            if(!_checked){
	                for(var k in specsList[pid]){
	                    if(specsList[pid][k].id == id){
	                        delete(specsList[pid][k]);
	                        break;
	                    }
	                }
	                _parent.removeClass('selected');
	            }else{
	                var value = {
	                    id : id,
	                    pid : pid,
	                    name : name,
	                    pname : pname
	                }
	                if(specsList[pid] == undefined){
	                    specsList[pid] = new Array();
	                }
	                if(specsList[pid][id] == undefined){
	                    specsList[pid][id] = new Array();
	                }
	                if(specsName[pid] == undefined){
	                    specsName[pid] = pname;
	                }
	                specsList[pid][id] = value;
	                _parent.addClass('selected');
	            }

	            // console.log(specsList);

	            //由于js数组的下标都是从0开始的，所以这里进行处理 不存在的下标元素显示undefined
	            var tmpSpecs = new Array();
	            for(var k in ids){
	                //规格列表临时数组
	                var tmplist = new Array();

	                //将选中的规格种类凭空undfined项
	                if(specsList[ids[k]] == undefined || specsList[ids[k]].length < 1){
	                    break;
	                }

	                //将选中的规格规格清空undefined项
	                for(i in specsList[ids[k]]){
	                    if(specsList[ids[k]][i] == undefined || specsList[ids[k]][i].length < 1){
	                        break;
	                    }
	                    tmplist.push(specsList[ids[k]][i]);
	                }

	                //优选中的元素则加入
	                if(tmplist.length>0){
	                    tmpSpecs.push(tmplist);
	                }
	            }

	            // console.log(tmpSpecs);

	            //计算规格所有组合
	            var all_sku = new Array();
	            if(tmpSpecs.length == ids.length){
	                // if(tmpSpecs.length>=2){
	                    for(var i=0; i<tmpSpecs.length ; i++){
	                        //递归调用，获取所有属性组合
	                        all_sku = constitute_sku(all_sku, tmpSpecs[i])
	                    }
	                // }
	            }else{
	                //如果规格种类选择不全，则清空组合
	                $('.construct_specs').html('');
	            }

	            // console.log(tmpSpecs);
	            //所有的规格类型都有选中的，则开始组合
	            specsHtml = '';
	            if(tmpSpecs.length == ids.length ){
	                specsHtml += '<table><tr>';
	                for(i in ids){
	                    specsHtml += '<th>'+specsName[ids[i]]+'</th>';
	                }
	                specsHtml += '<th><span style="color:red;">*</span>销售价</th><th><span style="color:red;">*</span>市场价</th><th><span style="color:red;">*</span>成本价</th><th><span style="color:red;">*</span>数量</th><th>商家编码</th></tr>';

	                //调用sku构造函数
	                constructSku(all_sku);

	                specsHtml += '</table>';

	                $('.construct_specs').html(specsHtml);
	            }   
	            
	        });

	        //组合属性
	        function constructSku(arrs){
	            for(k in arrs){
	                
	                var tv = arrs[k]['id'],price,market,cost,quantity;

	                price =  tmp_vals[tv + 'p'] == undefined ? '' : formatPrice(tmp_vals[tv + 'p']);
	                market =  tmp_vals[tv + 'm'] == undefined ? '' : formatPrice(tmp_vals[tv + 'm']);
	                cost =  tmp_vals[tv + 'c'] == undefined ? '' : formatPrice(tmp_vals[tv + 'c']);
	                promotion_price1 =  tmp_vals[tv + 'h'] == undefined ? '' : formatPrice(tmp_vals[tv + 'h']);
	                quantity =  tmp_vals[tv + 'q'] == undefined ? '' : tmp_vals[tv + 'q'];
	                member =  tmp_vals[tv + 'mb'] == undefined ? '' : tmp_vals[tv + 'mb'];

	                specsHtml += '<tr>';
	                specsHtml += arrs[k]['name'];
	                specsHtml += '<td>' + '<input class="inputtext sku_input sku_price" type="text" value="' + price + '" name="' + tv + 'p" >' + '</td>';
	                specsHtml += '<td>' + '<input class="inputtext sku_input sku_marketprice" type="text" value="' + market + '" name="' + tv + 'm" >' + '</td>';
	                specsHtml += '<td>' + '<input class="inputtext sku_input sku_costprice" type="text" value="' + cost + '" name="' + tv + 'c" >' + '</td>';
	                // specsHtml += '<td>' + '<input class="inputtext sku_input sku_costprice" type="text" value="' + promotion_price1 + '" name="' + tv + 'h" >' + '</td>';
	                specsHtml += '<td>' + '<input class="inputtext sku_input sku_quantity" type="text" value="' + quantity + '" name="' + tv + 'q" >' + '</td>';
	                specsHtml += '<td>' + '<input class="inputtext sku_input sku_number" type="text" value="' + member + '" name="' + tv + 'mb" >' + '</td>';
	                specsHtml += '</tr>';
	            }
	        }

	        //计算出所有的规格（递归调用）
	        //a已经计算好的sku，b要进入计算的sku
	        function constitute_sku(a,b){
	            var tmp = new Array();
	            if(a.length>0){
	                for(k in a){
	                    for(v in b){
	                        var value = {
	                            id : a[k]['id'] +  b[v]['pid'] + ':' + b[v]['id'] + ';',
	                            name : a[k]['name'] + '<td><span class="sp_' + b[v]['pid'] + '_' + b[v]['id'] + '" data-id="' + b[v]['id'] + '">' + b[v]['name'] + '</span></td>',
	                        };
	                        tmp[tmp.length]=value;
	                    }
	                }
	            }else{
	                for(v in b){
	                    var value = {
	                            id :  b[v]['pid'] + ':' + b[v]['id'] + ';',
	                            name : '<td><span class="sp_' + b[v]['pid'] + '_' + b[v]['id'] + '" data-id="' + b[v]['id'] + '">' + b[v]['name'] + '</span></td>',
	                        };
	                    tmp[tmp.length]=value;
	                }

	            }
	            return tmp;
	        }

	        //价格处理成2位小数格式
	        function formatPrice(p){ // 将价格处理为 x.xx的格式
	            p = parseFloat(p);
	            if(isNaN(p) || p < 0){
	                p = 0;
	            }
	            var price = new Number(p);
	            return price.toFixed(2);
	        }

	        //修改规格值
	        $('.goods_specs').on('change', '.val_list', function(){
	            var _this = $(this),
	                pid = _this.data('pid'),
	                id = _this.data('id'),
	                val = _this.val(),
	                key = 'sp_' + pid + '_' + id;

	                //修改组合属性显示的值
	                $('.construct_specs').find('.' + key).html(val);

	                //修改选择的规格对象信息
	                if(specsList[pid] != undefined){
	                    for(k in specsList[pid]){
	                        if(specsList[pid][k].id == id){
	                            specsList[pid][k].name = val;
	                        }
	                    }
	                }
	        });

	        //修改商品数量
	        $('.construct_specs').on('change', '.sku_quantity', function(){
	            var _quantitys = $('.construct_specs').find('.sku_quantity');
	            var _stock = 0;
	            //修改库存
	            _quantitys.each(function(){
	            	var tmpTity = parseInt($(this).val());
	            	if(!isNaN(tmpTity)){
	            		_stock = _stock + tmpTity;
	            	}
	            	
	            });

	            $('#stock').val(_stock);
	        });

	        //编辑组合属性的规格对应的值
	        $('.construct_specs').on('change', '.sku_input', function(){
	            var _this = $(this);
	            var _name = _this.prop('name');
	            tmp_vals[_name] = _this.val();
	        });


	        //删除图片
			$('.del').on('click', function(){
				var _parent = $(this).parent().parent();
				var hasimage = _parent.find('.has_image');
				var url = _parent.find('.hideimageurl');
				var img = _parent.find('.showimg');
				if(hasimage.val()==1){
					var imgsrc = "/Public/Admin/images/nophoto.jpg";
					hasimage.val(0);
					url.val('');
					img.attr("src", imgsrc);  
					return false;
				}
			});
		});

	</script>

	<!-- END JAVASCRIPTS -->
	<script type="text/javascript">  var _gaq = _gaq || [];  _gaq.push(['_setAccount', 'UA-37564768-1']);  _gaq.push(['_setDomainName', 'keenthemes.com']);  _gaq.push(['_setAllowLinker', true]);  _gaq.push(['_trackPageview']);  (function() {    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);  })();</script>
</body>
<!-- END BODY -->
</html>