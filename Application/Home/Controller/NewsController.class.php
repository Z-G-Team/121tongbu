<?php
namespace Home\Controller;
use Think\Controller;
class NewsController extends Controller {
    //获取分类
    public function getCategory(){
        $category = M('article_category')->where('pid=0')->order('id asc')->select();

        if($category){
            $this->success($category);
        }else{
            $this->error('没有分类');
        }
    }

    //获取新闻列表
    public function getNewsList(){
        $id = I('id',0);
        $page = I('p', 1);
        if(!$id){
            $this->error('分类出错了');
        }

        if(!$page){
            $page = 1;
        }

        $size = 6;
        $start = ($page-1) * $size;
        $counts = M('article')->where('pid='.$id)->order('id desc')->count();
        $list = M('article a')
                ->field('a.*, ac.name as cname')
                ->join('left join '.C('DB_PREFIX').'article_category ac on ac.id = a.pid ')
                ->where('a.pid='.$id)
                ->order('a.id desc')
                ->limit($start.','.$size)
                ->select();

        $all_page = ceil($counts/$size);


        if($counts){
            $data = array();
            $data['status']=1;
            $data['counts']=$counts;
            $data['page'] = $page;
            if($counts<=$page * $size){
                $data['next_page'] = '';
            }else{
                $data['next_page'] = $page + 1;
            }
            $data['all_page'] = $all_page;
            
            $data['list'] = $list;
            $this->ajaxReturn($data);
        }else{
            $data = array();
            $data['status']=0;
            $data['counts']=$counts;
            $data['page'] = $page;
            if($counts<=$page * $size){
                $data['next_page'] = '';
            }else{
                $data['next_page'] = $page + 1;
            }
            $data['all_page'] = $all_page;
            
            $data['list'] = $list;
            $this->ajaxReturn($data);
        }

    }

    //获取新闻详情
    public function getInfo(){
        $id = I('id', 0);

        $info  = M('article a')
                    ->field('a.*,ac.name as cname')
                    ->join('left join '.C('DB_PREFIX').'article_category ac on ac.id = a.pid')
                    ->where('a.id='.$id)
                    ->find();

        if($info){
            $info['content'] = htmlspecialchars_decode($info['content']);
            $this->success($info);
        }else{
            $this->error('数据获取失败');
        }

    }



}