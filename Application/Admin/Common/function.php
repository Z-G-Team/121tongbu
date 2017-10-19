<?php


/**
 * 返回开启/关闭
 * @return string
 * @author keg <1067547248@qq.com>
 */
function is_show($type){
    return $type ? '开启' : '关闭';
}

//获取订单状态
function order_status($type){
	$status = C('ORDER_STATUS');
	return $status[$type];
}

//获取付款方式
function pay_mode($type){
	$mode = C('PAY_MODE');
	return $mode[$type];
}