var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;
var async = require('async');
var db_url = 'mongodb://localhost:27017/houtai';


/* GET home page. */
router.get('/', function(req, res, next){
  res.render('index', { title:'Express',name:req.session.name});
});
// 网站设置
router.get('/info',(req,res)=>{
    res.render('info',{});
})
// alert
router.get('/alert',(req,res)=>{
    res.render('alert',{});
})

// page
router.get('/page',(req,res)=>{
    mongodb.connect(db_url,(err,database)=>{
        database.collection('web',(err,coll)=>{
            coll.find({}).toArray((err,data)=>{
              res.render('page',{data:data});
                // console.log(data);
                database.close();
            })
        })
    })
})
// pageDel
router.get('/pageDel',(req,res)=>{
    res.render('page',{});
})

router.get('/book',(req,res)=>{
    res.render('book',{});
})

// register
router.get('/register',(req,res)=>{
  res.render('register',{});
})

// login 
router.get('/login',(req,res)=>{
    res.render('login',{});
})

// relogin
router.get('/relogin',(req,res)=>{
    req.session.destroy((err)=>{
      if(err){
        console.log(err);
      }else{
        res.redirect('/');  //路由的跳转
      }
    })
  })

// column
router.get('/column',(req,res)=>{
    mongodb.connect(db_url,(err,database)=>{
        database.collection('column',(err,coll)=>{
            var str = req.query.s;
            console.log(str);
            var size = 5;
            var count = 0;
            var page = 0;
            if(str){
                // search
                var pageNo = req.query.pageNo;
                pageNo = pageNo?pageNo:1;
                async.series([
                    //页码操作
                    function(callback){
                        coll.find({$or:[{name_con:str},{content:str}]}).toArray((err,data)=>{
                            count = data.length; //总页码
                            page = Math.ceil(count/size);  //页码
                            // 下一页
                            pageNo = pageNo>page?page:pageNo;
                            // 上一页
                            pageNo = pageNo<1?1:pageNo;
            
                            callback(null,'');
                        })
                    },  //data操作
                    function(callback){
                        coll.find({$or:[{name_con:str},{content:str}]}).limit(size).skip((pageNo-1)*size).toArray((err,data)=>{
                        callback(null,data);
                        
                        })
                    }
                ],function(err,data){
                    res.render('column',{data:data[1],pageNo:pageNo,page:page,count:count})
                    database.close();
                })
            }else{
                var pageNo = req.query.pageNo;
                    pageNo = pageNo?pageNo:1;
                async.series([
                    //页码操作
                    function(callback){
                        coll.find({}).toArray((err,data)=>{
                            count = data.length; //总页码
                            page = Math.ceil(count/size);  //页码
                            // 下一页
                            pageNo = pageNo>page?page:pageNo;
                            // 上一页
                            pageNo = pageNo<1?1:pageNo;

                            callback(null,'');
                        })
                    },  //data操作
                    function(callback){
                        coll.find({}).limit(size).skip((pageNo-1)*size).toArray((err,data)=>{
                        callback(null,data);
                        
                        })
                    }
                ],function(err,data){
                    res.render('column',{data:data[1],pageNo:pageNo,page:page,count:count,restr:str})
                    database.close();
                })
            }
        })
    })
});

//pass up-date
router.get('/pass',(req,res)=>{
    res.render('pass',{});
})
module.exports = router;
