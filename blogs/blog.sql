-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-04-07 13:34:11
-- 服务器版本： 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- 表的结构 `blog_blog`
--

CREATE TABLE IF NOT EXISTS `blog_blog` (
`id` mediumint(8) unsigned NOT NULL,
  `title` varchar(200) CHARACTER SET utf8 NOT NULL,
  `content` text CHARACTER SET utf8 NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `blog_blog`
--

INSERT INTO `blog_blog` (`id`, `title`, `content`, `date`) VALUES
(1, '1', '1', '2016-02-02 00:44:42'),
(2, '1234', '1111', '2016-02-02 23:43:55');

-- --------------------------------------------------------

--
-- 表的结构 `blog_skin`
--

CREATE TABLE IF NOT EXISTS `blog_skin` (
`id` mediumint(8) unsigned NOT NULL,
  `s_bg` varchar(200) NOT NULL,
  `b_bg` varchar(200) CHARACTER SET utf8 NOT NULL,
  `bg_color` varchar(200) CHARACTER SET utf8 NOT NULL,
  `bg_text` varchar(200) CHARACTER SET utf8 NOT NULL,
  `bg_flag` tinyint(1) unsigned NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `blog_skin`
--

INSERT INTO `blog_skin` (`id`, `s_bg`, `b_bg`, `bg_color`, `bg_text`, `bg_flag`) VALUES
(1, '03 (19).jpg', '03 (19).jpg', '#ffffff', 'skin1', 1),
(2, '02.jpg', '02.jpg', '#ffffff', 'skin2', 0),
(3, '03 (19).jpg', '03 (19).jpg', '#ffffff', 'skin1', 0),
(4, '02.jpg', '02.jpg', '#ffffff', 'skin2', 0);

-- --------------------------------------------------------

--
-- 表的结构 `blog_user`
--

CREATE TABLE IF NOT EXISTS `blog_user` (
`id` mediumint(8) unsigned NOT NULL,
  `user` varchar(20) CHARACTER SET utf8 NOT NULL,
  `pass` char(40) NOT NULL,
  `ques` varchar(200) CHARACTER SET utf8 NOT NULL,
  `ans` varchar(200) CHARACTER SET utf8 NOT NULL,
  `email` varchar(200) CHARACTER SET utf8 NOT NULL,
  `birthday` date NOT NULL,
  `ps` varchar(200) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `blog_user`
--

INSERT INTO `blog_user` (`id`, `user`, `pass`, `ques`, `ans`, `email`, `birthday`, `ps`) VALUES
(1, '1122', '0df38f39c85f6da2a950100cc901af0bc12171f1', '2', '11', '11@qq.com', '1964-05-14', '11'),
(2, '111', '0df38f39c85f6da2a950100cc901af0bc12171f1', '3', '22', '22@163.com', '1964-04-15', '22'),
(3, '3333', '0df38f39c85f6da2a950100cc901af0bc12171f1', '2', '2222', '22@sohu.com', '1966-04-17', '111'),
(4, '3333', '0df38f39c85f6da2a950100cc901af0bc12171f1', '2', '2222', '22@sohu.com', '1966-04-17', '111'),
(5, '444', '0df38f39c85f6da2a950100cc901af0bc12171f1', '3', '44', '22@sohu.com', '1967-04-16', '11'),
(6, '5555', '0df38f39c85f6da2a950100cc901af0bc12171f1', '3', '333', '33@sina.com', '1966-04-18', '1222'),
(8, '1234', '0df38f39c85f6da2a950100cc901af0bc12171f1', '3', '11', '11@163.com', '1966-04-15', '11');

-- --------------------------------------------------------

--
-- 表的结构 `c_data`
--

CREATE TABLE IF NOT EXISTS `c_data` (
`id` int(10) unsigned NOT NULL,
  `id_device` int(10) DEFAULT NULL,
  `type_device` varchar(10) DEFAULT NULL,
  `data1` varchar(10) DEFAULT NULL,
  `data2` varchar(10) DEFAULT NULL,
  `data3` varchar(10) DEFAULT NULL,
  `time` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=gbk;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog_blog`
--
ALTER TABLE `blog_blog`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog_skin`
--
ALTER TABLE `blog_skin`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog_user`
--
ALTER TABLE `blog_user`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `c_data`
--
ALTER TABLE `c_data`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog_blog`
--
ALTER TABLE `blog_blog`
MODIFY `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `blog_skin`
--
ALTER TABLE `blog_skin`
MODIFY `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `blog_user`
--
ALTER TABLE `blog_user`
MODIFY `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `c_data`
--
ALTER TABLE `c_data`
MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
