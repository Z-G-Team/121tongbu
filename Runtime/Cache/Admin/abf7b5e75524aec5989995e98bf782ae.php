<?php if (!defined('THINK_PATH')) exit();?><script src="/Public/Admin/js/jquery.min.js"></script>
<style>
	input[type="file"] {
	    display: block;
	}

</style>
<form action="<?php echo U('Images/product', array('file'=>'upFile'));?>" method="post" enctype="multipart/form-data" id="mForm">
    <input type="file" id="upFile" name="upFile">
    <input type="hidden" name="type" value="<?php echo $type;?>">
</form>

<script>
	$('#upFile').change(function(){
		$('#mForm').submit();
	});
</script>


<?php if(isset($flag) && $flag==0){ ?>
	<script>
		alert("<?php echo $msg;?>");
	</script>
<?php }elseif(isset($flag) && $flag==1){?>
	<script>
		var images = $(".all_pic",parent.document);
			images.find('.pic_list').each(function(){
				var _this = $(this);
				var hasimage = _this.find('.has_image');
				var url = _this.find('.hideimageurl');
				var img = _this.find('.showimg');
				// console.log(img);
				if(hasimage.val()==0){
					var imgsrc = "<?php echo $upload_path .$info['savepath'].'m_'.$info['savename'];?>";
					hasimage.val(1);
					url.val(imgsrc);
					img.attr('src',imgsrc);  
					return false;
				}
			});
	</script>
<?php }?>