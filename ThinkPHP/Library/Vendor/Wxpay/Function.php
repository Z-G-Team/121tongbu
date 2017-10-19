<?php

    /************************* 二维码支付 start *************************/
    /**
     * 
     * 生成扫描支付URL,模式一
     * @param BizPayUrlInput $bizUrlInfo
     */
    function GetPrePayUrl($productId){
        $biz = new WxPayBizPayUrl();
        $biz->SetProduct_id($productId);
        $values = WxpayApi::bizpayurl($biz);
        $url = "weixin://wxpay/bizpayurl?" . ToUrlParams($values);
        return $url;
    }
    
    /**
     * 
     * 参数数组转换为url参数
     * @param array $urlObj
     */
    function ToUrlParams($urlObj){
        $buff = "";
        foreach ($urlObj as $k => $v)
        {
            $buff .= $k . "=" . $v . "&";
        }
        
        $buff = trim($buff, "&");
        return $buff;
    }
    
    /**
     * 
     * 生成直接支付url，支付url有效期为2小时,模式二
     * @param UnifiedOrderInput $input
     */
    function GetPayUrl($input){
        if($input->GetTrade_type() == "NATIVE")
        {
            $result = WxPayApi::unifiedOrder($input);
            return $result;
        }
    }

    /************************* 二维码支付 end *************************/