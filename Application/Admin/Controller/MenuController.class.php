<?php
namespace Admin\Controller;
use Admin\Controller\Base;

/**
 *	菜单权限管理
 *	@author keg 1067547248@qq.com
 */
class MenuController extends Base {

	/**
	 *  菜单列表默认方法（列表显示）
	 */
    public function index(){
        //获取查询条件
        $pid = I('pid', 0);
        $name = I('name', '');
        $type = I('type', 1);
        $where = ' 1 = 1 ';

        //标题搜索
        $name && $where .= ' AND name = "' . $name . '"';
        $type && $where .= ' AND type= ' . $type;

        //id搜索
        $where .= ' AND pid = ' . $pid;
        // echo $where;
        //获取菜单列表
        $Menu = D('Menu');
        
        //如果是参看子菜单，则获取本菜单信息
        if($pid>0){
        	$currMenu = $Menu->find($pid);
        }

        //获取菜单分组
        $list = $Menu->where(array($where))->order('sort desc, id asc')->select();

        //获取导航列表
        $all_menu = $Menu->where('1=1')->select();
        $bars =$Menu->getFamily($all_menu, $pid);

        // print_r($bars);
        $this->assign('bars', $bars);


        //传递变量
        $this->assign('smenu', $currMenu['name']);
        $this->assign('name', $name);
        $this->assign('list', $list);
        $this->assign('pid', $pid);
        $this->assign('type', $type);
        $this->assign('pageId', 'page-header-fixed');
        $this->display();
    }

    /**
     *	添加权限菜单
     */
   	public function add(){

   		//新增表单处理
   		if(IS_POST){
   			$Menu = D('Menu');
        $data = $Menu->create();
   			$data['add_time'] = date('Y-m-d H:i:s');

   			//参数验证
   			if(!$data['name']){
   				$this->error('菜单名不能为空');
   			}

   			if(!$data['module']){
   				$this->error('模块名不能为空');
   			}

   			if(!$data['controller']){
   				$this->error('控制器名不能为空');
   			}

   			if(!$data['action']){
   				$this->error('方法名不能为空');
   			}

   			//新增操作
   			
   			if($Menu->add($data)){
   				$this->success('菜单新增成功', U('Menu/index', array('pid'=>$data['pid'], 'type'=>$data['type'])));
   			}else{
   				// echo $Menu->getLastSql();
   				$this->error('菜单新增失败');
   			}
   		}else{
   			//父菜单id
	   		$pid = I('pid', 0);
        $type = I('type', 1);
	   		if($pid<0){
	   			  $this->error('系统未知错误');
	   		}

	   		$Menu = D('Menu');
        //获取菜单分组
        $tmpList = $Menu->where(array('type'=>$type, 'state'=>1))->order('sort desc')->select();
        $list = array();
        if($tmpList){
          foreach ($tmpList as $key => $val) {
            if($val['pid'] == 0){
                $val['lev'] = 0;
                $list[] = $val;
                $list = array_merge($list, $Menu->getSubs($tmpList, $val['id'], 1));
            }
          }
        }
        $this->assign('pid', $pid);
        $this->assign('list', $list);
        $this->assign('type', $type);
        $this->assign('pageId', "page-header-fixed");
        $this->display();
   		}
   	}

   	/**
   	 *	修改菜单信息
   	 */
   	public function edit(){
   		//表单处理
   		if(IS_POST){
   			$Menu = D('Menu');
        $data = $Menu->create();
   			// $data['add_time'] = NOW_TIME;
        $data['update_time'] = date('Y-m-d H:i:s');

   			//参数验证
   			if($data['id']<1){
   				$this->error('菜单信息获取失败');
   			}

   			if(!$data['name']){
   				$this->error('菜单名不能为空');
   			}

   			if(!$data['module']){
   				$this->error('模块名不能为空');
   			}

   			if(!$data['controller']){
   				$this->error('控制器名不能为空');
   			}

   			if(!$data['action']){
   				$this->error('方法名不能为空');
   			}

   			//新增操作

        if($data['pid'] == $data['id']){
          $this->error('不能修改成自身的子类');
        }

   			//获取菜单，并判断不能修改为自己的子菜单
   			$list = $Menu->order('sort desc')->select();
	        $list = $Menu->getSubs($list, $data['id']);
	        if($list){
	        	foreach ($list as $key => $value) {
	        		if($value['id'] == $data['pid']){
	        			$this->error('父类不能为自身的子类');
	        		}
	        	}
	        }
	       
	        //修改菜单
   			if($Menu->save($data)){
   				$this->success('修改成功', U('Menu/index', array('pid'=>$data['pid'], 'type'=>$data['type'])));
   			}else{
   				// echo $Menu->getLastSql();
   				$this->error('修改失败');
   			}
   		}else{
   			//获取ID
   			$id = I('id',0,'int');
        $type = I('type', 0);
   			if($id<1){
   				$this->error('菜单信息获取失败');
   			}

   			//获取菜单信息
   			$Menu = D('Menu');
   			$info = $Menu->find($id);

   			//信息获取失败
   			if(!$info){
   				$this->error('菜单信息获取失败');
   			}

   			//获取菜单列表
   			$tmpList = $Menu->where(array('type'=>$type, 'state'=>1))->order('sort desc')->select();

        $list = array();
        if($tmpList){
          foreach ($tmpList as $key => $val) {
            if($val['pid'] == 0){
                $val['lev'] = 0;
                $list[] = $val;
                $list = array_merge($list, $Menu->getSubs($tmpList, $val['id'], 1));
            }
          }
        }
        // print_r($list);
        $this->assign('type', $type);
	      $this->assign('list', $list);
   			$this->assign('info', $info);
   			$this->display();
   		}
   	}

   	/**
   	 *	AJAX删除菜单
   	 */
   	public function del(){
   		$id = I('id', 0, 'int');
   		if($id<1){
   			$this->ajaxReturn(array('status'=>-1, 'msg'=>'信息提交失败'));
   		}

   		//查询要删除的信息
   		$Menu = D('Menu');

      //查询分类信息
      $info = $Menu->find($id);
      if(!$info){
        $this->ajaxReturn(array('status'=>-2, 'msg'=>'要删除的记录不存在'));
      }

      $list = $Menu->where('pid='.$id)->select();
      if($list){
        $this->ajaxReturn(array('status'=>-3, 'msg'=>'栏目存在子类，无法删除'));
      }
 
   		//删除操作
   		if($Menu->delete($id)){
   			$this->ajaxReturn(array('status'=>1, 'msg'=>'删除成功'));
   		}else{
   			$this->ajaxReturn(array('status'=>-2, 'msg'=>'删除失败'));
   		}

   	}

    //生成模块配置文件
    public function html(){
      $Menu = D('Menu');
      $type = I('type', 0);
      $tmpList = $Menu->where(array('state'=>1, 'type'=>$type))->order('sort desc, id asc')->select();

      //防止递归调用100层的问题，循环再递归
      $list = array();
      $list2 = array();
      if($tmpList){
        foreach ($tmpList as $key => $val) {
          if($val['pid'] == 0){
              $val['lev'] = 0;
              $list2[] = $val;
              $list2 = array_merge($list2, $Menu->getSubs($tmpList, $val['id'], 1));
          }
        }
      }

      foreach ($list2 as $key => $val) {
          $list[$val['id']] = $val;
      }

      if($type==1){
        $tmpname = 'admin';
      }else{
        $tmpname = 'front';
      }
      if($list){
          $file_name = ROOT_PATH . C('TMPL_PARSE_STRING.__DATA__') . '/config/menu_'.$tmpname.'.php';
          $fp = fopen($file_name, 'w');
          if(!$fp){
              $this->error('更新失败');
          }

          $string = "<?php\n return " . var_export($list,TRUE) . " \n?>";
          $result = fwrite($fp, $string);

          fclose($fp);

          if($result){
              $this->success('更新成功', U('Menu/index', array('type'=>$type)));
          }else{
              $this->error('更新失败');
          }
      }else{
          $this->error('不需要更新');
      }

    }
 
}