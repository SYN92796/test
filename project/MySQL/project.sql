#设置客户端语言为utf8;
SET NAMES UTF8;
#如果存在shasha,放弃数据库shasha;
DROP DATABASE IF EXISTS shasha;
#创建数据库xm,并设置编码格式为utf8;
CREATE DATABASE xm CHARSET=UTF8;
#进入数据库shasha;
USE shasha;
#创建数据库表格s_details;
CREATE TABLE s_details(
  pid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  newprice DECIMAL(8,2) DEFAULT NULL,
  oldprice DECIMAL(8,2) DEFAULT NULL,
  disc VARCHAR(32) DEFAULT NULL,
  src_lg VARCHAR(128) DEFAULT NULL,
  src_sm VARCHAR(128) DEFAULT NULL,
  title VARCHAR(64) DEFAULT NULL,
  detail VARCHAR(128) DEFAULT NULL
);
INSERT INTO s_details VALUES(null,49.0,108.0,'4.5折','img/box_lis1.jpg,img/box_lis2-2.jpg,img/box_lis2-3.jpg','img/box_lis2-1.jpg,img/box_lis2-2.jpg,img/box_lis2-3.jpg','BURBERRY','BRIT SHEER  红粉恋歌淡<span>香水</span>');