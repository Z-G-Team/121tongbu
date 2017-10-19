/*
Navicat MySQL Data Transfer

Source Server         : xampp
Source Server Version : 50527
Source Host           : localhost:3306
Source Database       : sc

Target Server Type    : MYSQL
Target Server Version : 50527
File Encoding         : 65001

Date: 2017-10-18 14:08:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `ke_article`
-- ----------------------------
DROP TABLE IF EXISTS `ke_article`;
CREATE TABLE `ke_article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL DEFAULT '0' COMMENT '分类id',
  `name` varchar(200) NOT NULL DEFAULT '' COMMENT '信息标题',
  `origin` varchar(100) DEFAULT '' COMMENT '来源',
  `main_img` varchar(200) NOT NULL DEFAULT '' COMMENT '图片',
  `summ` varchar(200) DEFAULT '' COMMENT '摘要',
  `content` text COMMENT '内容',
  `clicks` int(11) NOT NULL DEFAULT '0' COMMENT '点击量',
  `url` varchar(250) DEFAULT '' COMMENT '外部链接',
  `add_time` timestamp NULL DEFAULT NULL COMMENT '添加时间',
  `update_time` timestamp NULL DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COMMENT='信息表';

-- ----------------------------
-- Records of ke_article
-- ----------------------------
INSERT INTO `ke_article` VALUES ('1', '12', '七天承诺', '', '', '', '&lt;p&gt;七天承诺&lt;/p&gt;', '0', '', '2016-11-02 22:32:21', '2016-11-02 22:32:49');
INSERT INTO `ke_article` VALUES ('2', '12', '退货服务', '退货服务', '', '', '&lt;p&gt;&lt;a href=&quot;http://www.lativ.com/Page/service&quot; target=&quot;_blank&quot; style=&quot;color: rgb(49, 49, 49); text-decoration: none; font-family: Verdana, 宋体; font-size: 12px; text-align: -webkit-center; white-space: normal; background-color: rgb(250, 250, 250);&quot;&gt;退货服务&lt;/a&gt;&lt;/p&gt;', '0', '', '2016-11-02 22:32:33', '2016-11-02 22:34:31');
INSERT INTO `ke_article` VALUES ('3', '14', '了解我们', '了解我们', '', '', '&lt;p&gt;了解我们&lt;/p&gt;', '0', '', '2016-11-02 22:35:15', null);
INSERT INTO `ke_article` VALUES ('4', '14', '加入我们', '加入我们', '', '', '&lt;p&gt;加入我们&lt;/p&gt;', '0', '', '2016-11-02 22:35:30', null);
INSERT INTO `ke_article` VALUES ('5', '14', '关注微信', '关注微信', '', '', '&lt;p&gt;&lt;a href=&quot;http://www.lativ.com/Page/mobileWechat&quot; target=&quot;_blank&quot; style=&quot;color: rgb(49, 49, 49); text-decoration: none; font-family: Verdana, 宋体; font-size: 12px; text-align: -webkit-center; white-space: normal; background-color: rgb(250, 250, 250);&quot;&gt;关注微信&lt;/a&gt;&lt;/p&gt;', '0', '', '2016-11-02 22:35:44', null);
INSERT INTO `ke_article` VALUES ('6', '12', '订单查询', '订单查询', 'http://www.sc.com/Data/uploads/20171018/150829994193546.jpg', '订单查询订单查询订单查询订单查询\r\n订单查询订单查询订单查询订单查询', '&lt;p&gt;&lt;span style=&quot;color: rgb(49, 49, 49); font-family: Verdana, 微軟正黑體; font-size: 20px; text-align: -webkit-center; background-color: rgb(250, 250, 250);&quot;&gt;订单查询&lt;/span&gt;&lt;/p&gt;', '0', '', '2016-11-02 22:36:16', '2017-10-18 12:12:32');
INSERT INTO `ke_article` VALUES ('7', '13', '新手指南', '新手指南', '', '', '&lt;p&gt;&lt;a href=&quot;http://www.lativ.com/Page/newmember&quot; target=&quot;_blank&quot; style=&quot;color: rgb(49, 49, 49); text-decoration: none; font-family: Verdana, 宋体; font-size: 12px; text-align: -webkit-center; white-space: normal; background-color: rgb(250, 250, 250);&quot;&gt;新手指南&lt;/a&gt;&lt;/p&gt;', '0', '', '2016-11-02 22:36:49', null);
INSERT INTO `ke_article` VALUES ('8', '13', '支付方式', '支付方式', '', '', '&lt;p&gt;&lt;a href=&quot;http://www.lativ.com/Page/payment&quot; target=&quot;_blank&quot; style=&quot;color: rgb(49, 49, 49); text-decoration: none; font-family: Verdana, 宋体; font-size: 12px; text-align: -webkit-center; white-space: normal; background-color: rgb(250, 250, 250);&quot;&gt;支付方式&lt;/a&gt;&lt;/p&gt;', '0', '', '2016-11-02 22:36:59', null);
INSERT INTO `ke_article` VALUES ('9', '13', '配送方式', '配送方式配送方式', '', '', '&lt;p&gt;&lt;a href=&quot;http://www.lativ.com/Page/ship&quot; target=&quot;_blank&quot; style=&quot;color: rgb(49, 49, 49); text-decoration: none; font-family: Verdana, 宋体; font-size: 12px; text-align: -webkit-center; white-space: normal; background-color: rgb(250, 250, 250);&quot;&gt;配送方式&lt;/a&gt;&lt;/p&gt;', '0', 'http://www.baidu.com', '2016-11-02 22:37:13', '2016-11-02 22:56:58');
INSERT INTO `ke_article` VALUES ('10', '16', '阿迪斯发多少', '啊手动阀第三方', 'http://www.op.com/Data/uploads/20171018/150830675961161.jpg', 'asdfas士大夫是非得失十分士大夫', '&lt;p&gt;&lt;img src=&quot;/Data/product/desc/20171018/1508306777119860.jpg&quot; style=&quot;&quot; title=&quot;1508306777119860.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;/Data/product/desc/20171018/1508306777174881.jpg&quot; style=&quot;&quot; title=&quot;1508306777174881.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;/Data/product/desc/20171018/1508306777556486.jpg&quot; style=&quot;&quot; title=&quot;1508306777556486.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;/Data/product/desc/20171018/1508306777984481.jpg&quot; style=&quot;&quot; title=&quot;1508306777984481.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;', '0', '', '2017-10-09 22:29:42', '2017-10-18 14:06:20');
INSERT INTO `ke_article` VALUES ('11', '16', '阿斯顿发', '阿斯顿发1111', 'http://www.sc.com/Data/uploads/20171018/150829842936792.jpg', 'asdfasdfasdfadsf', '&lt;p&gt;&lt;img src=&quot;http://www.sc.com/Data/product/desc/20171018/1508306613812784.jpg&quot; style=&quot;&quot; title=&quot;1508306613812784.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.sc.com/Data/product/desc/20171018/1508306613106684.jpg&quot; style=&quot;&quot; title=&quot;1508306613106684.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.sc.com/Data/product/desc/20171018/1508306613457427.jpg&quot; style=&quot;&quot; title=&quot;1508306613457427.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;http://www.sc.com/Data/product/desc/20171018/1508306613694963.jpg&quot; style=&quot;&quot; title=&quot;1508306613694963.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;', '0', '', '2017-10-09 22:32:15', '2017-10-18 14:03:39');

-- ----------------------------
-- Table structure for `ke_article_category`
-- ----------------------------
DROP TABLE IF EXISTS `ke_article_category`;
CREATE TABLE `ke_article_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL DEFAULT '0' COMMENT '上级分类',
  `name` varchar(50) NOT NULL DEFAULT '' COMMENT '分类标题',
  `add_time` timestamp NULL DEFAULT NULL COMMENT '添加时间',
  `update_time` timestamp NULL DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COMMENT='信息分类表';

-- ----------------------------
-- Records of ke_article_category
-- ----------------------------
INSERT INTO `ke_article_category` VALUES ('12', '0', '服务支持', '2016-10-26 17:18:13', null);
INSERT INTO `ke_article_category` VALUES ('13', '0', '帮助中心', '2016-10-26 17:18:19', null);
INSERT INTO `ke_article_category` VALUES ('14', '0', '关于我们', '2016-10-26 17:19:32', null);
INSERT INTO `ke_article_category` VALUES ('15', '0', '新闻资讯', '2016-11-02 22:49:20', null);
INSERT INTO `ke_article_category` VALUES ('16', '0', '测试分类', '2017-10-09 22:22:40', null);

-- ----------------------------
-- Table structure for `ke_book`
-- ----------------------------
DROP TABLE IF EXISTS `ke_book`;
CREATE TABLE `ke_book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` char(2) NOT NULL DEFAULT '00' COMMENT '类型 00默认  10 官网',
  `name` varchar(20) NOT NULL DEFAULT '',
  `sex` tinyint(1) NOT NULL DEFAULT '1' COMMENT '性别0男 1女',
  `phone` varchar(15) NOT NULL DEFAULT '' COMMENT '电话号码',
  `email` varchar(50) NOT NULL DEFAULT '' COMMENT '常用邮箱',
  `position` varchar(50) NOT NULL DEFAULT '' COMMENT '职业',
  `quota` float(10,2) NOT NULL DEFAULT '0.00' COMMENT '投资额度',
  `region` varchar(200) NOT NULL DEFAULT '' COMMENT '地区  省份 市 区   （使用 空格 分割）',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态 4删除 1待处理   2已通过  3已拒绝',
  `add_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '预约时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ke_book
-- ----------------------------
INSERT INTO `ke_book` VALUES ('25', '00', '111', '1', '111', '11111', '1111', '11111.00', '山东省 德州市 宁津县', '1', '2017-10-10 01:13:19');
INSERT INTO `ke_book` VALUES ('26', '00', '2222', '0', '22', '2222', '222', '2222.00', '安徽省 黄山市 徽州区', '1', '2017-10-10 01:13:34');
INSERT INTO `ke_book` VALUES ('27', '00', 'asdf', '0', 'dfasdf', 'asdf', 'asdf', '0.00', '天津市 天津市市辖区 河东区', '1', '2017-10-10 01:27:10');
INSERT INTO `ke_book` VALUES ('28', '00', '111', '0', '222', '111', '111', '222.00', '福建省 福州市 仓山区', '1', '2017-10-10 09:44:20');
INSERT INTO `ke_book` VALUES ('29', '00', '111', '0', '222', '21212', '111', '1212.00', '湖北省 恩施土家族苗族自治州 利川市', '1', '2017-10-10 15:23:21');
INSERT INTO `ke_book` VALUES ('30', '00', 'asdf', '1', '15859421542', 'asdf@qq.com', 'asdf', '0.00', '山东省 德州市 陵城区', '1', '2017-10-11 10:59:21');
INSERT INTO `ke_book` VALUES ('31', '10', 'keke', '0', '15859018792', '123@qq.com', 'asdf', '11111.00', '福建省 三明市 沙县', '1', '2017-10-18 10:53:04');
INSERT INTO `ke_book` VALUES ('32', '10', 'aaa', '1', '18897993895', '23432@qq.com', 'sddf', '22222.00', '安徽省 六安市 裕安区', '1', '2017-10-18 10:53:01');
INSERT INTO `ke_book` VALUES ('33', '10', '你好', '0', '18897993562', '1056@qq.com', '主席', '200000.00', '福建省 莆田市 涵江区', '1', '2017-10-18 10:56:01');

-- ----------------------------
-- Table structure for `ke_join`
-- ----------------------------
DROP TABLE IF EXISTS `ke_join`;
CREATE TABLE `ke_join` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '姓名',
  `phone` varchar(15) NOT NULL DEFAULT '' COMMENT '手机号码',
  `region` varchar(200) NOT NULL DEFAULT '' COMMENT '地区',
  `classes` varchar(100) NOT NULL DEFAULT '' COMMENT '年级',
  `subjects` varchar(100) NOT NULL DEFAULT '' COMMENT '科目',
  `add_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ke_join
-- ----------------------------
INSERT INTO `ke_join` VALUES ('1', '可', '1887977541', 'sdf', 'wef', 'sdf', '2017-10-18 11:13:32');
INSERT INTO `ke_join` VALUES ('2', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', '2017-10-18 11:19:13');
INSERT INTO `ke_join` VALUES ('3', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', '2017-10-18 11:26:18');
INSERT INTO `ke_join` VALUES ('4', 'asdfa', 'sdfas', 'dfas', 'dfasdf', 'asdf', '2017-10-18 11:27:02');
INSERT INTO `ke_join` VALUES ('5', 'asdf', 'asdf', 'asdf', 'asdfa', 'sdfasdf', '2017-10-18 11:28:27');
INSERT INTO `ke_join` VALUES ('6', 'ad', 'fasdf', 'asdf', 'asdfa', 'sdf', '2017-10-18 12:44:42');
INSERT INTO `ke_join` VALUES ('7', 'asdfasdf', 'GSDGD', 'ADFAF', '阿斯顿fasdfasdfasdfasdf', 'ASDFASDF', '2017-10-18 14:06:55');

-- ----------------------------
-- Table structure for `ke_menu`
-- ----------------------------
DROP TABLE IF EXISTS `ke_menu`;
CREATE TABLE `ke_menu` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '菜单类型 1后台菜单  2前台菜单',
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '菜单名称',
  `pid` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '菜单父id 0顶级类',
  `module` varchar(20) NOT NULL DEFAULT '' COMMENT '模块',
  `controller` varchar(40) NOT NULL DEFAULT '' COMMENT '控制器',
  `action` varchar(40) NOT NULL DEFAULT '' COMMENT '方法',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '状态1正常 0关闭',
  `show` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '1显示 0不显示',
  `sort` int(11) unsigned NOT NULL DEFAULT '50' COMMENT '排序',
  `add_time` timestamp NULL DEFAULT NULL COMMENT '新增时间',
  `update_time` timestamp NULL DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=490 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of ke_menu
-- ----------------------------
INSERT INTO `ke_menu` VALUES ('126', '1', '后台首页', '0', 'Admin', 'Index', 'index', '1', '1', '90', '0000-00-00 00:00:00', '2016-02-19 11:46:44');
INSERT INTO `ke_menu` VALUES ('127', '1', '系统信息', '126', 'Admin', 'Index', 'index', '1', '1', '50', '2016-03-22 10:51:30', '2016-07-14 14:49:28');
INSERT INTO `ke_menu` VALUES ('134', '1', '用户管理', '339', 'Admin', 'User', 'index', '1', '1', '50', '2016-03-01 17:14:06', '2016-03-01 17:14:06');
INSERT INTO `ke_menu` VALUES ('135', '1', '新增管理员', '134', 'Admin', 'User', 'add', '1', '0', '50', '2016-03-01 17:09:16', '2016-03-01 17:09:16');
INSERT INTO `ke_menu` VALUES ('147', '1', '编辑管理员', '134', 'Admin', 'User', 'edit', '1', '0', '50', '2016-02-26 17:22:16', '2016-02-26 17:22:16');
INSERT INTO `ke_menu` VALUES ('156', '1', '删除管理员', '134', 'Admin', 'User', 'delete', '1', '0', '50', '2016-02-26 17:22:31', '2016-02-26 17:22:31');
INSERT INTO `ke_menu` VALUES ('161', '1', '修改密码', '127', 'Admin', 'User', 'updatepass', '1', '0', '50', '2016-01-15 15:18:10', '2016-01-15 18:03:16');
INSERT INTO `ke_menu` VALUES ('179', '1', '上传产品图片', '163', 'Admin', 'Images', 'product', '1', '0', '50', '2016-01-15 18:02:23', '0000-00-00 00:00:00');
INSERT INTO `ke_menu` VALUES ('180', '1', '上传图片', '127', 'Admin', 'Images', 'uploadImg', '1', '0', '50', '2016-01-15 18:03:33', '0000-00-00 00:00:00');
INSERT INTO `ke_menu` VALUES ('181', '1', '单图上传', '127', 'Admin', 'Images', 'upload', '1', '0', '50', '2016-01-15 18:04:03', '0000-00-00 00:00:00');
INSERT INTO `ke_menu` VALUES ('339', '1', '权限管理', '0', 'Admin', 'Menu', 'index', '1', '1', '5', '2016-02-22 12:45:53', '2016-07-11 00:43:14');
INSERT INTO `ke_menu` VALUES ('340', '1', '菜单管理', '339', 'Admin', 'Menu', 'index', '1', '1', '50', '2016-03-01 17:14:16', '2016-03-01 17:14:16');
INSERT INTO `ke_menu` VALUES ('341', '1', '新增菜单', '340', 'Admin', 'Menu', 'add', '1', '1', '50', '2016-03-01 17:11:26', '2016-03-01 17:11:26');
INSERT INTO `ke_menu` VALUES ('342', '1', '编辑菜单', '340', 'Admin', 'Menu', 'edit', '1', '0', '50', '2016-03-01 17:11:48', '2016-03-01 17:11:48');
INSERT INTO `ke_menu` VALUES ('343', '1', '角色管理', '339', 'Admin', 'Role', 'index', '1', '1', '50', '2016-02-21 17:50:17', '0000-00-00 00:00:00');
INSERT INTO `ke_menu` VALUES ('344', '1', '新增角色', '343', 'Admin', 'Role', 'add', '1', '0', '50', '2016-03-01 17:13:45', '2016-03-01 17:13:45');
INSERT INTO `ke_menu` VALUES ('345', '1', '编辑角色', '343', 'Admin', 'Role', 'edit', '1', '0', '50', '2016-03-01 17:13:30', '2016-03-01 17:13:30');
INSERT INTO `ke_menu` VALUES ('346', '1', '删除角色', '343', 'Admin', 'Role', 'delete', '1', '0', '50', '2016-03-01 17:13:15', '2016-03-01 17:13:15');
INSERT INTO `ke_menu` VALUES ('347', '1', '角色授权', '343', 'Admin', 'Role', 'auth', '1', '0', '50', '2016-03-01 17:13:00', '2016-03-01 17:13:00');
INSERT INTO `ke_menu` VALUES ('349', '1', '更新配置', '127', 'Admin', 'Menu', 'html', '1', '0', '50', '2016-02-22 23:19:24', '0000-00-00 00:00:00');
INSERT INTO `ke_menu` VALUES ('373', '1', '删除菜单', '340', 'Admin', 'Menu', 'del', '1', '0', '50', '2016-03-01 17:12:11', '2016-03-01 17:12:11');
INSERT INTO `ke_menu` VALUES ('392', '1', '新闻管理', '0', 'Admin', 'Article', 'index', '1', '1', '50', '2016-07-10 14:23:32', '2017-10-09 22:21:51');
INSERT INTO `ke_menu` VALUES ('393', '1', '新闻分类', '392', 'Admin', 'ArticleCategory', 'index', '1', '1', '50', '2016-07-10 14:24:35', '2017-10-09 22:22:05');
INSERT INTO `ke_menu` VALUES ('394', '1', '新增分类', '393', 'Admin', 'ArticleCategory', 'add', '1', '0', '50', '2016-07-10 14:26:41', null);
INSERT INTO `ke_menu` VALUES ('395', '1', '编辑分类', '393', 'Admin', 'ArticleCategory', 'edit', '1', '0', '50', '2016-07-10 14:27:01', null);
INSERT INTO `ke_menu` VALUES ('396', '1', '删除分类', '393', 'Admin', 'ArticleCategory', 'delete', '1', '0', '50', '2016-07-10 14:27:29', null);
INSERT INTO `ke_menu` VALUES ('397', '1', '新闻列表', '392', 'Admin', 'Article', 'index', '1', '1', '50', '2016-07-10 14:28:15', '2017-10-09 22:22:16');
INSERT INTO `ke_menu` VALUES ('398', '1', '新增资讯', '397', 'Admin', 'Article', 'add', '1', '0', '50', '2016-07-10 14:28:40', null);
INSERT INTO `ke_menu` VALUES ('399', '1', '编辑资讯', '397', 'Admin', 'Article', 'edit', '1', '0', '50', '2016-07-10 14:28:55', null);
INSERT INTO `ke_menu` VALUES ('400', '1', '删除资讯', '397', 'Admin', 'Article', 'delete', '1', '0', '50', '2016-07-10 14:29:12', null);
INSERT INTO `ke_menu` VALUES ('401', '1', '上传图片', '126', 'Admin', 'Images', 'upload', '1', '0', '50', '2016-07-10 19:06:25', null);
INSERT INTO `ke_menu` VALUES ('440', '1', '上传伪多图', '126', 'Admin', 'Images', 'product', '1', '0', '50', '2016-07-22 17:57:43', null);
INSERT INTO `ke_menu` VALUES ('482', '1', '预约管理', '0', 'Admin', 'Book', 'index', '1', '1', '50', '2017-10-09 22:52:02', null);
INSERT INTO `ke_menu` VALUES ('483', '1', '预约列表', '482', 'Admin', 'Book', 'index', '1', '1', '50', '2017-10-09 22:53:41', null);
INSERT INTO `ke_menu` VALUES ('484', '1', '预约处理', '482', 'Admin', 'Book', 'process', '1', '0', '50', '2017-10-09 22:54:06', null);
INSERT INTO `ke_menu` VALUES ('485', '1', '留言管理', '0', 'Admin', 'Message', 'index', '1', '1', '50', '2017-10-09 22:55:05', null);
INSERT INTO `ke_menu` VALUES ('486', '1', '留言列表', '485', 'Admin', 'Message', 'index', '1', '1', '50', '2017-10-09 22:55:23', '2017-10-09 22:55:56');
INSERT INTO `ke_menu` VALUES ('487', '1', '删除留言', '485', 'Admin', 'Message', 'delete', '1', '0', '50', '2017-10-09 23:53:21', null);
INSERT INTO `ke_menu` VALUES ('488', '1', '注册管理', '0', 'Admin', 'Join', 'index', '1', '1', '50', '2017-10-18 11:14:33', null);
INSERT INTO `ke_menu` VALUES ('489', '1', '注册列表', '488', 'Admin', 'Join', 'index', '1', '1', '50', '2017-10-18 11:14:49', null);

-- ----------------------------
-- Table structure for `ke_message`
-- ----------------------------
DROP TABLE IF EXISTS `ke_message`;
CREATE TABLE `ke_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '姓名',
  `phone` varchar(15) NOT NULL DEFAULT '' COMMENT '电话号码',
  `region` varchar(200) NOT NULL DEFAULT '' COMMENT '合作区域 @#@分割',
  `brief` varchar(255) NOT NULL DEFAULT '' COMMENT '简要说明',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态  1正常  0删除 ',
  `add_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '留言时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ke_message
-- ----------------------------
INSERT INTO `ke_message` VALUES ('19', 'asdasd', 'asdas', 'asdasd', 'sdsdasd', '1', '2017-10-10 01:13:24');
INSERT INTO `ke_message` VALUES ('20', 'sdfg', 'sdfgsdf', 'gsdfgsdfg', 'dfgsfdg', '1', '2017-10-10 15:23:29');
INSERT INTO `ke_message` VALUES ('21', 'asdf', '15859018794', 'asdf', 'asdf', '1', '2017-10-11 10:51:35');

-- ----------------------------
-- Table structure for `ke_role`
-- ----------------------------
DROP TABLE IF EXISTS `ke_role`;
CREATE TABLE `ke_role` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` char(20) NOT NULL DEFAULT '' COMMENT '角色名称',
  `state` tinyint(1) NOT NULL DEFAULT '1' COMMENT '角色状态',
  `sort` int(11) NOT NULL DEFAULT '50' COMMENT '排序',
  `auth` text NOT NULL COMMENT '权限',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of ke_role
-- ----------------------------
INSERT INTO `ke_role` VALUES ('1', '超级管理员', '1', '50', '126,127,161,180,181,349,401,440,339,134,135,147,156,340,341,342,373,343,344,345,346,347,392,393,394,395,396,397,398,399,400,482,483,484,485,486,487,488,489');

-- ----------------------------
-- Table structure for `ke_user`
-- ----------------------------
DROP TABLE IF EXISTS `ke_user`;
CREATE TABLE `ke_user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自动增量',
  `username` char(20) NOT NULL DEFAULT '' COMMENT '登录用户名',
  `password` char(32) NOT NULL DEFAULT '' COMMENT '登录密码',
  `tel` varchar(11) NOT NULL COMMENT '手机',
  `email` varchar(30) NOT NULL COMMENT '邮箱',
  `role` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '角色id',
  `sysuser` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '1超级后台添加的管理员 0公司下的人员',
  `last_login_ip` char(15) NOT NULL DEFAULT '' COMMENT '最后登录ip',
  `last_login_time` timestamp NULL DEFAULT NULL COMMENT '最后登录时间',
  `now_login_ip` char(15) NOT NULL DEFAULT '' COMMENT '当前登录ip',
  `now_login_time` timestamp NULL DEFAULT NULL COMMENT '当前登录时间',
  `login_times` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '登录次数',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '账号状态1正常，2锁定禁用',
  `add_time` timestamp NULL DEFAULT NULL COMMENT '添加时间',
  `update_time` timestamp NULL DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of ke_user
-- ----------------------------
INSERT INTO `ke_user` VALUES ('1', 'admin', 'MDAwMDAwMDAwMK-EgbGzdYdj', '15859018792', '1067547248@qq.com', '1', '1', '127.0.0.1', '2017-10-18 14:02:30', '127.0.0.1', '2017-10-18 14:05:27', '255', '1', null, '2016-07-06 01:52:07');
