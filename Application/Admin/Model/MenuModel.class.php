<?php
namespace Admin\Model;
use Think\Model;


/**
 *	权限菜单模型
 *  @author keg
 */
class MenuModel extends Model {


	/*	
	查找子孙树（缩进格式）
	param array $data 类目列表
	param int $cay_id  要查找的id
	return array $arr 
	*/
	public function getSubs($data, $id = 0, $lev = 0){
		$arr = array();
		if(!$data){
			return false;
		}
		foreach($data as $v){
			if($v['pid'] == $id){
				$v['lev'] = $lev;
				$arr[] = $v;
				$arr = array_merge($arr, $this->getSubs($data, $v['id'], $lev+1));
			}
		}
		return $arr;
	}


	/**
	 *	获取树结构菜单列表
	 *
	 */
	public function getMenuTree($data, $id = 0, $lev = 0){
		$arr = array();
		if(!$data){
			return false;
		}
		foreach($data as $k=>$v){
			if($v['pid'] == $id){
				unset($data[$k]);
				$v['lev'] = $lev;
				$v['child'] =self::getMenuTree($data, $v['id'], $lev+1);
				$arr[$v['id']] = $v;
			}
		}
		return $arr;
	}

	/**
	 *	查找祖先
	 *
	 */
	public function getFamily($data, $id){
		$arr = array();
		while ($id != 0) {
			foreach ($data as $v) {
				if($v['id'] == $id){
					$arr[] = $v;
					$id = $v['pid'];
					break;
				}
			}
		}
		return array_reverse($arr);
	}


	/**
	 *	设置（标识）当前访问路径
	 */
	public function setCurr($data, $ids){
		static $arr;
		$arr = $data;
		if(!$data){
			return false;
		}
		// print_r($ids); exit;
		foreach($arr as $k=>$v){
			if(in_array($v['id'], $ids)){
				$arr[$k]['cur'] = 1;
				$this->setCurr($arr, array($v['pid']));
			}			
		}
		return $arr;
	}
}