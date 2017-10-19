<?php
namespace Admin\Model;
use Think\Model;


/**
 *	模型
 *  @author keg
 */
class RoleModel extends Model {

	public function lists($map){
		$tmps = $this->where($map)->select();
		if($tmps){
			foreach ($tmps as $key => $val) {
				$data[$val['id']] = $val;
			}
		}

		return $data;
	}
}