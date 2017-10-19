<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html class="ui-mobile">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
    <meta name="format-detection" content="telephone=no, address=no, email=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-title" content="lativ" />
    <meta name="keywords" content="lativ,羽绒外套,衣类" />
    <meta name="description" content="lativ" />
    <title>商品详情</title>
    <link rel="shortcut icon" href="/favicon.ico?0074" type="image/x-icon" />
    <link href="/Public/Mobile/m/css/mobile.css" rel="stylesheet" type="text/css" />
    <link href="/Public/Mobile/m/css/index.css" rel="stylesheet" type="text/css" />
    
    <style type="text/css">
        .owl-carousel .animated { -webkit-animation-duration: 1000ms; animation-duration: 1000ms; -webkit-animation-fill-mode: both; animation-fill-mode: both; }
        .owl-carousel .owl-animated-in { z-index: 0; }
        .owl-carousel .owl-animated-out { z-index: 1; }
        .owl-carousel .fadeOut { -webkit-animation-name: fadeOut; animation-name: fadeOut; }
        @-webkit-keyframes
        "fadeOut" {0%;
        { opacity: 1; }
        100% { opacity: 0; }
        }
        @keyframes
        "fadeOut" {0%;
        { opacity: 1; }
        100% { opacity: 0; }
        }
        .owl-height { -webkit-transition: height 100ms ease-in-out; -moz-transition: height 100ms ease-in-out; -ms-transition: height 100ms ease-in-out; -o-transition: height 100ms ease-in-out; transition: height 100ms ease-in-out; }
        .owl-carousel { display: none; width: 100%; -webkit-tap-highlight-color: transparent; position: relative; z-index: 1; }
        .owl-carousel .owl-stage { position: relative; -ms-touch-action: pan-Y; }
        .owl-carousel .owl-stage:after { content: "."; display: block; clear: both; visibility: hidden; line-height: 0; height: 0; }
        .owl-carousel .owl-stage-outer { position: relative; overflow: hidden; -webkit-transform: translate3d(0px, 0px, 0px); }
        .owl-carousel .owl-controls .owl-nav .owl-prev, .owl-carousel .owl-controls .owl-nav .owl-next, .owl-carousel .owl-controls .owl-dot { cursor: pointer; cursor: hand; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }
        .owl-carousel.owl-loaded { display: block; }
        .owl-carousel.owl-loading { opacity: 0; display: block; }
        .owl-carousel.owl-hidden { opacity: 0; }
        .owl-carousel .owl-refresh .owl-item { display: none; }
        .owl-carousel .owl-item { position: relative; min-height: 1px; float: left; -webkit-backface-visibility: hidden; -webkit-tap-highlight-color: transparent; -webkit-touch-callout: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }
        .owl-carousel .owl-item img { display: block; width: 100%; -webkit-transform-style: preserve-3d; }
        .owl-carousel.owl-text-select-on .owl-item { -webkit-user-select: auto; -moz-user-select: auto; -ms-user-select: auto; user-select: auto; }
        .owl-carousel .owl-grab { cursor: move; cursor: -webkit-grab; cursor: -o-grab; cursor: -ms-grab; cursor: grab; }
        .owl-carousel.owl-rtl { direction: rtl; }
        .owl-carousel.owl-rtl .owl-item { float: right; }
        .no-js .owl-carousel { display: block; }
        .owl-carousel .owl-item .owl-lazy { opacity: 0; -webkit-transition: opacity 400ms ease; -moz-transition: opacity 400ms ease; -ms-transition: opacity 400ms ease; -o-transition: opacity 400ms ease; transition: opacity 400ms ease; }
        .owl-carousel .owl-item img { transform-style: preserve-3d; }
        .owl-carousel .owl-video-wrapper { position: relative; height: 100%; background: #000; }
        .owl-carousel .owl-video-play-icon { position: absolute; height: 80px; width: 80px; left: 50%; top: 50%; margin-left: -40px; margin-top: -40px; background: url("owl.video.play.png") no-repeat; cursor: pointer; z-index: 1; -webkit-backface-visibility: hidden; -webkit-transition: scale 100ms ease; -moz-transition: scale 100ms ease; -ms-transition: scale 100ms ease; -o-transition: scale 100ms ease; transition: scale 100ms ease; }
        .owl-carousel .owl-video-play-icon:hover { -webkit-transition: scale(1.3, 1.3); -moz-transition: scale(1.3, 1.3); -ms-transition: scale(1.3, 1.3); -o-transition: scale(1.3, 1.3); transition: scale(1.3, 1.3); }
        .owl-carousel .owl-video-playing .owl-video-tn, .owl-carousel .owl-video-playing .owl-video-play-icon { display: none; }
        .owl-carousel .owl-video-tn { opacity: 0; height: 100%; background-position: center center; background-repeat: no-repeat; -webkit-background-size: contain; -moz-background-size: contain; -o-background-size: contain; background-size: contain; -webkit-transition: opacity 400ms ease; -moz-transition: opacity 400ms ease; -ms-transition: opacity 400ms ease; -o-transition: opacity 400ms ease; transition: opacity 400ms ease; }
        .owl-carousel .owl-video-frame { position: relative; z-index: 1; }
        .owl-carousel .owl-wrapper, .owl-carousel .owl-item { -webkit-backface-visibility: hidden; -moz-backface-visibility: hidden; -ms-backface-visibility: hidden; -webkit-transform: translate3d(0,0,0); -moz-transform: translate3d(0,0,0); -ms-transform: translate3d(0,0,0); }
        .owl-theme .owl-nav { margin-top: 10px; text-align: center; -webkit-tap-highlight-color: transparent; }
        .owl-theme .owl-nav [class*=owl-] { color: #FFF; font-size: 14px; margin: 5px; padding: 4px 7px; background: #D6D6D6; display: inline-block; cursor: pointer; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; }
        .owl-theme .owl-nav [class*=owl-]:hover { background: #869791; color: #FFF; text-decoration: none; }
        .owl-theme .owl-nav .disabled { opacity: .5; cursor: default; }
        .owl-theme .owl-nav.disabled + .owl-dots { margin-top: 10px; }
        .owl-theme .owl-dots { text-align: center; -webkit-tap-highlight-color: transparent; }
        .owl-theme .owl-dots .owl-dot { display: inline-block; zoom: 1; *display: inline; }
        .owl-theme .owl-dots .owl-dot span { width: 10px; height: 10px; margin: 5px 7px; background: #D6D6D6; display: block; -webkit-backface-visibility: visible; -webkit-transition: opacity 200ms ease; -moz-transition: opacity 200ms ease; -ms-transition: opacity 200ms ease; -o-transition: opacity 200ms ease; transition: opacity 200ms ease; -webkit-border-radius: 30px; -moz-border-radius: 30px; border-radius: 30px; }
        .owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span { background: #869791; }
        #zoom-img { width: 240px; overflow: scroll; display: none; }
        #d-product-img { width: 240px; display: none; margin-bottom: 20px; }
        .product-img img{width:100%;}
        .owl-controls { position: relative; bottom: -5px; }
        .owl-controls .owl-dots { position: absolute; left: 0; right: 0; line-height: 0; }
        .owl-theme .owl-dots .owl-dot span { width: 6px; height: 6px; border-radius: 6px; background: #000; opacity: 0.05; }
        .owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span { background: #000; opacity: 0.2; }
        .sizelist a {
            padding: 0 5px;
            margin: 7px 7px 1px 1px;
            position: relative;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 3px;
            color: #999;
            text-align: center;
            font-weight: lighter;
            height: 32px;
            line-height: 32px;
            letter-spacing: 0;
            font-size: 13px;
        }
    </style>

</head>
<body>
    
    <div data-role="page" id="index" class="ui-page ui-page-theme-a ui-page-active" style="position: relative;">
        <div id="main-header">
    <div>
        <a id="logo" href="<?php echo U('Index/index');?>" data-ajax="false"></a>
        <div id="searchbox">
            <a class="search-icon" href="javascript:void(0)"></a>
        </div>
    </div>
</div>
<div id="main-menu">
    <ul>
        <?php if(is_array($cate_f)): $i = 0; $__LIST__ = $cate_f;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><li data-category="<?php echo ($item['ename']); ?>" class="wd16 <?php if($cinfo && $cinfo['id']==$item['id']){ echo 'active';} ?>">
                <span id="<?php echo ($item['ename']); ?>" class="ui-btn"><?php echo ($item['name']); ?></span>
            </li><?php endforeach; endif; else: echo "" ;endif; ?>
        
        <!-- <li data-category="MEN" class="wd16">
            <span id="MEN" class="ui-btn" onclick="StatisticClick(64602)">男装</span>
        </li>
        <li data-category="KIDS" class="wd16">
            <span id="KIDS" class="ui-btn" onclick="StatisticClick(64603)">童装</span>
        </li>
        <li data-category="BABY" class="wd20">
            <span id="BABY" class="ui-btn" onclick="StatisticClick(64604)">婴幼儿</span>
        </li>
        <li data-category="SPORTS" class="wd16">
            <span id="SPORTS" class="ui-btn" onclick="StatisticClick(64605)">运动</span>
        </li> -->
        <li data-category="SALE" class="wd16">
            <span id="SALE" class="ui-btn ui-btn-sale">优惠</span>
        </li>
    </ul>
</div>
<div id="search-container">
    <div class="search-input">
        <input type="text" id="keyword" />
    </div>
    <div class="search-btn">
        <a id="sendkeyword" class="search-icon" href="javascript:void(0)"></a>
    </div>
</div>
<div style="clear: both;"></div>
<div id="menu"></div>
        <div id="main-content">

            <div class="sitemap">
                <a onclick="window.history.back();" data-ajax="false" class="btn-back ui-icon-carat-l ui-alt-icon"></a>
                <span class="maptext">
                    <a data-ajax="false" href="#" onclick="javascript:setMenu(&#39;<?php echo ($cinfo['ename']); ?>&#39;);"><?php echo ($cinfo['ename']); ?></a>
                    ／
                    <a data-ajax="false" href="#" onclick="javascript:setMenu(&#39;<?php echo ($cinfo['ename']); ?>&#39;,&#39;Coat_category&#39;);"><?php echo ($tinfo['name']); ?></a>
                    ／
                    <a data-ajax="false" href="#"><?php echo ($sinfo['name']); ?></a>
                </span>
            </div>
            <div class="display-product-img alignc">
                <div style="display: inline-block; position: relative;">
                    <a id="tap-to-zoom" href="#" style="padding: 10px;">
                        <img src="<?php echo ($pr['pic']); ?>" alt="" />
                    </a>
                    <div id="zoom-img"></div>
                    <div id="d-product-img">
                        <img class="owl-product-img" src="<?php echo ($pr['pic']); ?>"/>

                        <?php if(is_array($img)): $i = 0; $__LIST__ = $img;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$imgs): $mod = ($i % 2 );++$i;?><img class="owl-product-img" src="<?php echo ($imgs); ?>"/><?php endforeach; endif; else: echo "" ;endif; ?>

                    </div>
                </div>
            </div>
            <div class="order">
                <div class="product-info">
                    <div class="name-area">
                        <?php echo ($pr['name']); ?>
                    </div>
                    <div class="price-area">
                        <div class="l-div">

                            <span class="sprice">￥</span>
                            <span id="special-price" class="price"><?php echo ($pr['market_price']); ?></span>
                            <span class="store-price activities"><?php echo ($pr['price']); ?></span>

                        </div>
                        <div class="r-div">
                            <span id="activity"></span>
                            <span id="activity-link">
                                <a data-ajax="false" href="<?php echo U('Sale/lists', array('id'=>$sales['id']));?>">【<?php echo ($sales['name']); ?>】</a>
                            </span>
                        </div>
                    </div>
                </div>

                <!-- 商品规格 -->
                <!-- 商品规格属性 -->
<?php if($issku==1){ foreach($skus['val'] as $key=>$val){?>    
    <?php if($skus['name'][$key]=='颜色'){?>
        <div class="color select_specs">
            <?php foreach ($val as $k => $v) { ?>
                <a id="<?php echo $key.':'.$k;?>" class="product-color" href="javascript:;" data-val="<?php echo $key.':'.$k;?>">
                    <img class="product-color-img" src="<?php echo $specs_imgs[$v]['img'];?>" alt="<?php echo $v;?>" title="<?php echo $v;?>">
                </a>
            <?php }?>
        </div>
    <?php }else{?>
        <div class="size">
            <span><?php echo $skus['name'][$key];?></span>
            <div id="sizelist" class="select_specs">

                <?php foreach ($val as $k => $v) { ?>
                    <a id="<?php echo $key.':'.$k;?>" class="product-size" href="javascript:;" data-val="<?php echo $key.':'.$k;?>" style="width: 76px;">
                        <?php echo $v;?>

                    </a>
                <?php }?>
            </div>
        </div>

    <?php }?>
<?php } } ?>


                <table id="amt-table" class="wid100 ui-orderamt">
                    <tbody>
                        <tr>
                            <td>
                                <div class="ui-nodisc-icon ui-alt-icon">
                                    <a class="decrease" data-role="none" href="javascript:void(0)"></a>
                                    <input id="buyCount" class="order-amount" data-role="none" type="tel" maxlength="2" value="1">
                                    <a class="increase" data-role="none" href="javascript:void(0)"></a>

                                </div>
                            </td>
                            <td class="alignr">

                                <input type="hidden" id="id" name="id" value="<?php echo ($pr['id']); ?>">
                                <input type="hidden" id="pid" name="pid" value="<?php echo ($pr['id']); ?>">
                                <input type="hidden" id="max_stock" name="max_stock" value="<?php echo ($pr['stock']); ?>">

                                <a id="addShopcar" href="#"  class="btn-gold ui-link">加入购物车</a>
                                <span class="product-keep" data-value="<?php echo ($pr['id']); ?>">收藏</span>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div id="product-prompt" class="ui-grid-b wid100 ui-orderamt">

                    <div class="ui-block-a">
                        <span class="prompt-first">满99包邮</span>
                    </div>

                    <div class="ui-block-b">
                        <span class="prompt-second">无理由退货</span>
                    </div>

                    <div class="ui-block-c">
                        <span class="prompt-third">顺丰配送</span>
                    </div>
                </div>
            </div>
            <div class="product-report gapm20">
                <div class="ui-grid-b product-report-nav">
                    <div class="ui-block-a open" data-child="product-img">图文详情</div>
                    <div class="ui-block-b" data-child="product-desc">商品说明</div>
                    <div class="ui-block-c" data-child="product-size">尺码说明</div>
                </div>
                <div class="product-desc">
                    <ul class="font14 gapl5">
                        <li>面料组成：</li>
                        <li>面料 - 聚酯纤维 100%</li>
                        <li>里料 - 棉 100%</li>
                        <li>罗纹 - 腈纶 100%</li>
                        <li>帽毛 - 腈纶 100%</li>
                        <li>填充物 - 灰鸭绒 含绒量 70% （详细充绒量请见尺码表）</li>
                        <li style="line-height: 1;">&nbsp;</li>
                        <li>1.深浅色请分开洗涤；如有帽毛条，请拆下另外轻柔手洗。</li>
                        <li>2.请拉上拉链后放入细网洗衣袋中清洗，以保持商品型态。</li>
                        <li>3.洗涤时，水温请低于30℃；请使用中性洗剂；浸泡时间不宜过长。</li>
                        <li>4.请勿使用漂白剂、荧光增白剂及衣物柔软剂，以免破坏布料。</li>
                        <li>5.不可湿放，清洗后请快速调整商品型态，并吊挂阴干或反面低温烘干即可，勿直接曝晒于阳光下。</li>
                    </ul>
                </div>
                <div class="product-size">
                    <div id="size-report-area" class="osize font-xs">
    <table>
        <thead>
            <tr>
                <th>尺码(cm)</th>
                <th>身高/胸围</th>
                <th>肩宽</th>
                <th>胸宽</th>
                <th>衣长(后中量)</th>
                <th>下摆</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>S</td>
                <td>155/80A</td>
                <td>36</td>
                <td>45</td>
                <td>55</td>
                <td>33.5</td>
            </tr>
            <tr>
                <td>M</td>
                <td>160/84A</td>
                <td>37</td>
                <td>47</td>
                <td>57</td>
                <td>35.5</td>
            </tr>
            <tr>
                <td>L</td>
                <td>160/88A</td>
                <td>38.5</td>
                <td>50</td>
                <td>59</td>
                <td>38.5</td>
            </tr>
            <tr>
                <td>XL</td>
                <td>165/92A</td>
                <td>40</td>
                <td>53</td>
                <td>60</td>
                <td>41.5</td>
            </tr>
            <tr>
                <td>XXL</td>
                <td>170/96A</td>
                <td>41.5</td>
                <td>56</td>
                <td>62</td>
                <td>43.5</td>
            </tr>
        </tbody>
    </table>

</div>
<div id="try-report-area" class="osize font-xs">
    <table>
        <thead>
            <tr>
                <th>试穿人员</th>
                <th>身高(cm)</th>
                <th>胸围</th>
                <th>体重(kg)</th>
                <th>肩宽</th>
                <th>建议尺码</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>人员1</td>
                <td>151-155</td>
                <td>86.5</td>
                <td>55</td>
                <td>37.5</td>
                <td>M</td>
            </tr>
            <tr>
                <td>人员2</td>
                <td>151-155</td>
                <td>105</td>
                <td>74.4</td>
                <td>42.5</td>
                <td>XXL</td>
            </tr>
            <tr>
                <td>人员3</td>
                <td>156-160</td>
                <td>80</td>
                <td>49</td>
                <td>36.5</td>
                <td>S</td>
            </tr>
            <tr>
                <td>人员4</td>
                <td>156-160</td>
                <td>87.5</td>
                <td>56</td>
                <td>37</td>
                <td>L</td>
            </tr>
            <tr>
                <td>人员5</td>
                <td>161-165</td>
                <td>97</td>
                <td>70</td>
                <td>40.5</td>
                <td>XL</td>
            </tr>
            <tr>
                <td>人员6</td>
                <td>161-165</td>
                <td>87</td>
                <td>59.3</td>
                <td>37</td>
                <td>L</td>
            </tr>
        </tbody>
    </table>

</div>
<div id="feather-content-area" class="osize font-xs">
    <table>
        <thead>
            <tr>
                <th>充绒颜色/充绒量</th>
                <th>
                    桃红
                    <br>(灰鸭绒)</th>
                <th>
                    灰蓝
                    <br>(灰鸭绒)</th>
                <th>
                    红色
                    <br>(灰鸭绒)</th>
                <th>
                    蓝黑
                    <br>(灰鸭绒)</th>
                <th>
                    米白
                    <br>(白鸭绒)</th>
                <th>
                    黑色
                    <br>(灰鸭绒)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>S</td>
                <td>72克</td>
                <td>72克</td>
                <td>72克</td>
                <td>72克</td>
                <td>72克</td>
                <td>72克</td>
            </tr>
            <tr>
                <td>M</td>
                <td>77克</td>
                <td>77克</td>
                <td>77克</td>
                <td>77克</td>
                <td>77克</td>
                <td>77克</td>
            </tr>
            <tr>
                <td>L</td>
                <td>84克</td>
                <td>84克</td>
                <td>84克</td>
                <td>84克</td>
                <td>84克</td>
                <td>84克</td>
            </tr>
            <tr>
                <td>XL</td>
                <td>88克</td>
                <td>88克</td>
                <td>88克</td>
                <td>88克</td>
                <td>88克</td>
                <td>88克</td>
            </tr>
            <tr>
                <td>XXL</td>
                <td>93克</td>
                <td>93克</td>
                <td>93克</td>
                <td>93克</td>
                <td>93克</td>
                <td>93克</td>
            </tr>
        </tbody>
    </table>

</div>
<div id="model-info-area" class="osize font-xs">

    <table>
        <tbody>
            <tr>

                <td>身高</td>
                <td>171</td>

                <td>体重(kg)</td>
                <td>48</td>

            </tr>

            <tr>

                <td>肩宽</td>
                <td>38</td>

                <td>胸围</td>
                <td>78</td>

            </tr>

            <tr>

                <td>腰围</td>
                <td>61</td>

                <td>低腰围</td>
                <td>78</td>

            </tr>

            <tr>

                <td>臀围</td>
                <td>88</td>

                <td colspan="2"></td>

            </tr>

            <tr class="gray-bg">
                <td colspan="4">试穿尺寸</td>
            </tr>
            <tr class="gray-bg">

                <td>上身</td>
                <td>S／M (最小尺寸)</td>

                <td>下身</td>
                <td>S／24／61</td>

            </tr>

        </tbody>
    </table>

</div>
                </div>
                <div class="product-img open">
                   <?php echo (htmlspecialchars_decode($pr_con["content"])); ?>
                </div>
            </div>
            <div data-role="popup" id="popupArrow" data-theme="b" data-shadow="false" data-history="false" class="ui-content customized-popup-buy">
                <p></p>
            </div>

        </div>

        <style type="text/css">#customized-popup-map-alert-popup { width: 90%; }</style>
        <div data-role="popup" id="customized-popup-map-alert" class="customized-popup-map" data-overlay-theme="a" data-corners="false" data-history="false" data-tolerance="15,15">
            <a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right popup-map-close"></a>
            <div class="popup-map-box">
                <div class="popup-map-header">温馨提示</div>
                <div class="popup-map-content"></div>
                <div class="popup-map-footer custom-btn-rwd-pop">
                    <!-- <a href="<?php echo U('Login/login');?>" class="btn-gold">登录</a> -->
                    <a href="#" class="btn-gold" data-rel="back">确定</a>
                </div>
            </div>
        </div>


        <style type="text/css">
    #customized-popup-map-alert-popup { width: 90%; }
    #main-footer td a {
        font-size: 12px;
        display: inline-block;
        width: 100%;
        margin-top: 5px;
        margin-bottom: 2px;
        padding-top: 22px;
        color: #fff;
        font-weight: 400;
    }
</style>
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

<div id="main-footer">
    <table>
        <tr>
            <td id="lativ-home" style="width: 25%;">
                <span url="<?php echo U('Index/index');?>">首页</span>
            </td>
            <td id="lativ-mykeep" style="width: 25%;">
                <span url="<?php echo U('Member/collect');?>">
                    收藏( <em id="fav-amt">0</em>
                    )
                </span>
            </td>
            <td id="lativ-user" style="width: 25%;">
                <span url="<?php echo U('Member/order');?>">我的订单</span>
            </td>
            <td id="lativ-cart" style="width: 25%;">
                <a href="<?php echo U('Cart/index');?>" buycount="0" id="m_Cart">结算(0)</a>
            </td>
        </tr>
    </table>
</div>
    </div>

        <div id="declare" data-role="footer">
    <div class="webtxt">
        ©2016 lativ&nbsp;.&nbsp;
        <a href="http://www.miibeian.gov.cn/" target="_blank">沪ICP备15013396号</a>
        &nbsp;.&nbsp;
        <a href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&entyId=20150330152028883" target="_blank">上海工商</a>
    </div>
</div>


    
</body>
<script type="text/javascript" src="/Public/Mobile/m/js/lativ.js"></script>
<script type="text/javascript" src="/Public/Mobile/m/js/owl.carousel.js"></script>
<script type="text/javascript" src="/Public/Mobile/m/js/lazyload.js"></script>

    
    <script type="text/javascript">
        $.mobile.hideUrlBar = false;
        $.mobile.buttonMarkup.hoverDelay = 0;
        $(function ()
        {
            Mobile.common.Initialize({ AppName: '', ajaxTimeout: 6000, ajaxRetryMax: 3, cartMemoryDays: 15 });
            Mobile.common.siteInit('');
            // $.retryAjax({
            //     type: 'POST',
            //     url: 'http://m.lativ.com/Shopping/MiniCartList',
            //     dataType: 'text',
            //     success: function (data)
            //     {
            //         $('.minicart').html(data);
            //         $('#lativ-cart').click(function ()
            //         {
            //             var $count = $(this).find('span');

            //             if (parseInt($count.attr('buycount')) <= 0 || isNaN(parseInt($count.attr('buycount'))))
            //             { Mobile.common.showAlertMessage('您的购物车内没有商品！'); }
            //             else
            //             { location.href = $count.attr('url'); }
            //         });

            //         if (Mobile.common.isWeixinApp() == false)
            //         {
            //             $('#declare .webbtn').show();
            //             $.retryAjax({
            //                 type: 'GET',
            //                 url: 'http://m.lativ.com/Home/LogoutState',
            //                 data: { r: self.name },
            //                 dataType: 'text',
            //                 success: function (data)
            //                 {
            //                     $('#login-state').next('span').remove();
            //                     $('#login-state').after(data);
            //                     if ($('#login-state + span').attr('data-login') === "false")
            //                     { $('#login-state').removeClass('login-img').addClass('logout-img'); }
            //                 }
            //             });
            //         }
            //     }
            // });


            Mobile.common.GetMenu($.parseJSON($.trim('<?php echo json_encode($trees);?>')));
        });
    </script>

    <script type="text/javascript">
        $(function ()
        {
            $("img[data-original]").lazyload({ failurelimit: 200 });
            $('#BannerSlideShow img').show();
            $('#BannerSlideShow').on('initialized.owl.carousel', function ()
            {
                var $slider = $(this);
                var previousCss = $slider.attr('style');

                $slider.css({ position: 'absolute' });

                var height = $slider.find('.active img:first').height();

                if (height > 1)
                {
                    $('.owl-stage-outer').css('height', height);
                    $slider.attr('style', previousCss ? previousCss : '').css('visibility', 'visible');
                }
                else
                {
                    $slider.find('.active img:first').one('load', function ()
                    {
                        if (this.complete)
                        {
                            $('.owl-stage-outer').css('height', $(this).height());
                            $slider.attr('style', previousCss ? previousCss : '').css('visibility', 'visible');
                        }
                    });
                }
            }).owlCarousel(
            {
                loop: true,
                autoHeight: true,
                autoplay: true,
                autoplayTimeout: 6000,
                responsiveRefreshRate: 0,
                responsive: { 0: { items: 1 } }
            });

            Mobile.common.indexClickEventBinding();
            Mobile.common.indexAutoScrollTop();
        });
    </script>

    <script type="text/javascript">
        $(function() {
            $('#d-product-img').on('initialized.owl.carousel', function() {
                var $slider = $(this);
                var previousCss = $slider.attr('style');

                $slider.css({
                    position: 'absolute',
                    visibility: 'hidden',
                    display: 'block'
                });

                var height = $slider.find('.active img').height();

                if (height > 1) {
                    $('.owl-stage-outer').css('height', height);
                    $slider.attr('style', previousCss ? previousCss : '').show();
                } else {
                    $slider.find('.active img').one('load', function() {
                        if (this.complete) {
                            $('.owl-stage-outer').css('height', $(this).height());
                            $slider.attr('style', previousCss ? previousCss : '').show();
                        }
                    });
                }
            }).owlCarousel({
                loop: true,
                autoHeight: true,
                responsiveRefreshRate: 0,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            });

            // Mobile.product.Init({
            //     issecureconn: 'False',
            //     sno: '22331',
            //     ino: '22331031',
            //     size: '',
            //     bedurl: 'http://s4.lativ.com/m',
            //     pname: '毛领连帽羽绒背心-女',
            //     mainCategory: 'WOMEN',
            //     activity: '{"任選折扣":1,"任選特價":2,"滿額贈":3,"全館折扣":4,"滿額加價":5,"滿件贈送":6,"體驗活動":7,"任選變價":8}'
            // });
            // Mobile.product.Generate('22331', '22331031');
            setTimeout(function() {
                Mobile.common.ScrollTopBtn();
            }, 100);


            $("#popupMap").bind({
                popupafterclose: function(event, ui) {
                    $('#rHtml').hide();
                    $('#jHtml').show();
                    $('#closeDiv').hide();
                }
            });
            // $(".product-color").bind("vclick", function() {
            //     Mobile.product.GetItemList($(this).attr("data-sn"), 1, $(this).attr("data-sort"));
            //     Mobile.product.GetBorder($(this).find(".product-color-img"))
            // });
        }); 
    </script>

    <script type="text/javascript">
        if (navigator.onLine) {
            var cssName = 'mobile.css';
            var hasMainCss = false;
            for (var i = 0; i < document.styleSheets.length; i++) {
                var name = document.styleSheets[i].href;
                if (name && name != '') {
                    if (name.indexOf(cssName) > -1) {
                        hasMainCss = true;
                    }
                }
            }
            if (!hasMainCss) {
                showNetworkMsg();
            } else if (eval("typeof " + 'jQuery') == 'undefined') {
                showNetworkMsg();
            } else if (eval("typeof " + 'jQuery.mobile') == 'undefined') {
                showNetworkMsg();
            }
        } 


        var detailSkuInfos = <?php echo json_encode($items);?>;
        var sales = <?php echo json_encode($sales);?>;
        //如果存在sku，初始化选项
        <?php if($issku){?>
            //初始化sku
            initSku();

        <?php }else{ ?>
            //没有SKU，则将id赋值给标签
            $('#id').val(detailSkuInfos[0]['id']);
            for(k in detailSkuInfos){
                var tmpInfo = detailSkuInfos[k];
                  // console.log(tmpInfo);
                  //产品价格改变
                  $('.store_price').html('￥'+tmpInfo['price']);
                  $('.price').val(tmpInfo['price']);
                  // $('.del').html('￥'+tmpInfo['market_price']);
                  // var zhekou = (10/(tmpInfo['market_price']/tmpInfo['price'])).toFixed(1);
                  // $('.disc').html(zhekou+'折');
                  $('#stock').html('库存'+tmpInfo['stock']+'件');
                  $('.stock').html(tmpInfo['stock']);
                  //可获得积分
                  // $('#getJifen').html(parseInt(tmpInfo['price'] * 0.1));
                  //id标签赋值
                  $('#id').val(tmpInfo['id']);
            }
        <?php }?>
        function initSku(){
            //默认选中第一个规格信息
            $(".color").each(function(){
                $(this).find('a:first').addClass('active');
                $(this).find('a:first img').addClass('current');
            });


            $("#sizelist").each(function(){
                $(this).find('a:first').addClass('current');
                $(this).find('a:first').addClass('active');
            });

            //默认选中的规格信息的产品信息
            getInfo();
            
        }
        //切换规格操作
        $('.color a').on('click',function(){
            if($(this).hasClass('active')) return;
            $(this).siblings('a').removeClass('active');
            $(this).addClass('active');

            $(this).find('img').addClass('current');
            $(this).siblings('a').find('img').removeClass('current');
            $('#buyCount').val(1);
            getInfo();
        })


        $('#sizelist a').on('click',function(){
            if($(this).hasClass('active')) return;
            $(this).siblings('a').removeClass('active');
            $(this).addClass('active');

            $(this).siblings('a').removeClass('current');
            $(this).addClass('current');
            $('#buyCount').val(1);
            getInfo();
        })
        //切换id尺码规格时执行函数
        function getInfo(){
            var comsku = '';
            var showtag = '';
            $(".select_specs a.active").each(function(){
                comsku += $(this).data('val')+';';
                showtag += $(this).html() + ' ';
            });

            // $('#yixuanze').html(showtag);
            comsku = comsku.substring(0,comsku.length-1);
            // alert(comsku);
            for(k in detailSkuInfos){
                var tmpInfo = detailSkuInfos[k];
                if(tmpInfo['specs'] == comsku){
                    //产品价格改变
                    $('#special-price').html(tmpInfo['market_price']);
                    $('.store-price').html(tmpInfo['price']);
                    // $('#totalPrice').html('￥'+tmpInfo['price']);
                    // $('.del').html('￥'+tmpInfo['market_price']);
                    // var zhekou = (10/(tmpInfo['market_price']/tmpInfo['price'])).toFixed(1);
                    // $('.disc').html(zhekou+'折');
                    $('#max_stock').val(tmpInfo['stock']);
                    //可获得积分
                    // $('#getJifen').html(parseInt(tmpInfo['price'] * 0.1));
                    //id标签赋值
                    $('#id').val(tmpInfo['id']);
                }
            }
        }
        $('.increase').on('click',function(){
            var number = parseFloat($('#max_stock').val());
            var num = parseInt($('#buyCount').val());
            
            if (num >= number) {
                return false;
            }
            $('#buyCount').val(num+1);
        });
        $('.decrease').on('click',function(){
            var number = parseFloat($('#max_stock').val());
            var num = parseInt($('#buyCount').val());
            if (num <=1) {
                return false;
            }
            $('#buyCount').val(num-1);
        })
        $('#addShopcar').click(function(){
            var count = parseInt($('#buyCount').val());
          
            if (count > parseInt($("#max_stock").val())) {
                Mobile.common.showAlertMessage('抱歉，您的购买量超过了库存了');
                return false;
            }
            if (count <= 0) {
                Mobile.common.showAlertMessage('抱歉，购买数量至少为1');
                return false;
            }
            var id = $('#id').val();
            var pid = $('#pid').val();
            //参数
            var data = {pid:pid, id:id, count:count};
            //ajax 添加购物车  
            $.ajax({
                url: '<?php echo U("Cart/addcart");?>',
                dataType : 'json',
                type : 'post',
                data : data,
                success: function(ret) {

                    Mobile.common.showAlertMessage(ret.info);
                }
            });
        })
    </script>

</html>