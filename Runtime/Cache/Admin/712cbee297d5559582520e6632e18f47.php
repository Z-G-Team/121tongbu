<?php if (!defined('THINK_PATH')) exit();?><script src="/Public/Admin/js/jquery.min.js"></script>
<style>
	input[type="file"] {
	    display: block;
	}

</style>
<form action="<?php echo U('Images/upload', array('file'=>'upFile'));?>" method="post" enctype="multipart/form-data" id="mForm">
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
		var showimg = $(".showimg_<?php echo $type;?>", parent.document);
		var image = $("#<?php echo $type;?>",parent.document);
		var imgsrc = "<?php echo WEB_DOMAIN.$upload_path . $info['savepath'].$info['savename'];?>";
			image.val(imgsrc);
			showimg.attr('src', imgsrc);

		window.parent.document.getElementById("<?php echo $type;?>").value = imgsrc;
		window.parent.document.getElementById("showimg_<?php echo $type;?>").src = imgsrc;

	</script>
<?php }?>