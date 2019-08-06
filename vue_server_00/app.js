//1:引入第三方模块
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");
const bodyParser=require('body-parser');
//2:配置第三方模块
 //2.1:配置连接池
 var pool = mysql.createPool({
   host:"127.0.0.1",
   user:"root",
   password:"",
   port:3306,
   database:"yijia",
   connectionLimit:15
 })
 
 var server = express();
 server.use(express.static('public'));
 //使用body-parser中间件，将post请求的数据格式化为对象
 server.use(bodyParser.urlencoded({
  extended:false
}));
//2.2:跨域
 server.use(cors({
   origin:["http://127.0.0.1:8080",
   "http://localhost:8080"],
   credentials:true
 }))
 //2.3:session
 server.use(session({
   secret:"128位字符串",
   resave:true,
   saveUninitialized:true
 }))
 server.listen(3000);

//注册
server.get("/reg1", (req, res) => {
  var phone = req.query.tel;
  pool.query("SELECT * FROM yijia_user WHERE phone=?", [phone], (err, result) => {
      if (err) throw err;
      if (result.length == 0) {
          res.send({ code: 1, msg: "用户名可以使用" })
      } else {
          res.send({ code: -1, msg: "用户名已存在" })
      }
  })
})
server.get("/reg", (req, res) => {
  var obj = req.query;
  if (!obj.phone) {
      res.send({ code: -1, msg: "用户手机号不能为空" });
      return;
  }
  if (!obj.upwd) {
      res.send({ code: -1, msg: "用户密码不能为空" });
      return;
  }
  var sql = "INSERT INTO yijia_user(phone,upwd) VALUES (?,?)";
  pool.query(sql, [obj.phone, obj.upwd], (err, result) => {
      if (err) throw err;
      if (result.affectedRows > 0) {
          res.send({ code: 1, msg: "注册成功" });
      }
  })
})

//登录
server.get("/login", (req, res) => {
  var phone = req.query.phone;
  var upwd = req.query.upwd;
  var sql = "SELECT uid FROM yijia_user WHERE phone = ? AND upwd =?";
  pool.query(sql, [phone, upwd], (err, result) => {
      if (err) throw err;
      if (result.length == 0) {
          res.send({ code: -1, msg: "用户名或密码有误" });
      } else {
          // 将当前登录用户的uid保存在session对象
          // result=[{id:1}]
          req.session.uid = result[0].uid;
          res.send({ code: 1, msg: "登录成功" });
      }
  })
})

//查看房屋完整信息
server.get("/details",(req,res)=>{
  var hid=req.query.hid;
  if(!hid){
    res.send({code:-1,msg:"hid不能为空"});
    return;
  }
  var sql="SELECT * FROM yijia_house WHERE hid=?";
  pool.query(sql,[hid],(err,result)=>{
    if(err) throw err;
    if(result.length==0){
      res.send({code:0,msg:"查询失败"});
    }else{
      res.send({code:1,result:result});
    }
  })
})

//查看所有房屋
server.get("/house",(req,res)=>{
  var sql="SELECT * FROM yijia_house"
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    if(result.length==0){
      res.send({code:0,msg:"查询失败"});
    }else{
      res.send({code:1,result:result});
    }
  })
})

//3.分页查询房屋信息
server.get("/pagination",(req,res)=>{
  //1.参数
  var pno=req.query.pno;
  var ps=req.query.pageSize;
  //2.设置默认值
  if(!pno){pno=1;}
  if(!ps){ps=9;}
  //3.创建两条sql语句执行 嵌套完成
  var obj={code:1,msg:"查询成功"};
  var sql="SELECT* FROM yijia_house LIMIT ?,?";
  var off=(pno-1)*ps;
  ps=parseInt(ps);
  pool.query(sql,[off,ps],(err,result)=>{
    if(err) throw err;
    obj.data=result;
    var sql="SELECT COUNT(*) AS c FROM yijia_house";
    pool.query(sql,(err,result)=>{
      if(err) throw err;
      var pc=Math.ceil(result[0].c/ps);
      obj.pc=pc;
      res.send(obj);
    });
  });
});

//插入订单信息
server.get("/order",(req,res)=>{
  var obj=req.query;
  var uid=2;
  if(!uid){
    res.send({code:-1,msg:"uid不能为空"});
    return;
  }
  var sql="INSERT INTO orderinfo SET datestart=?,dateend=?,bookingnum=?,bookingpeonum=?,ownername=?,ownertel=?,ownernum=?,uid=?";
  pool.query(sql,[obj.datestart,obj.dateend,obj.bookingnum,obj.bookingpeonum,obj.ownername,obj.ownertel,obj.ownernum,uid],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows==0){
      res.send({code:0,msg:"添加失败"});
    }else{
      res.send({code:1,result:result});
    }
  })
})