//引入项目所需要的包
const express = require('express');
//引入第三方中间件
const bodyParser = require('body-parser');
//引入user路由
// const user = require('./routes/user.js');
//引入index路由
// const index=require("./routes/index.js");
//使用express创建web服务器
//监听端口为3000
var app = express();
app.listen(4000,()=>{
  console.log('success!');
});
//托管静态资源
app.use(express.static('./static'));
//配置中间件body-parser
app.use(bodyParser.urlencoded({
  extended:false
}));
//使用路由器管理用户模块下的所有路由
//将路由挂载到user下
// app.use('/user',user);
//将路由挂载到index下
// app.use("/index",index);


