var express = require('express');
var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId; 
var db_url = 'mongodb://localhost:27017/houtai';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// register
router.post('/register',(req,res)=>{
    mongodb.connect(db_url,(err,database)=>{
      database.collection('user',(err,coll)=>{
        coll.find({username:req.body.username}).toArray((err,data)=>{
            if(data.length>0){
                res.send('0');
            }else{
              coll.save(req.body,()=>{
                  res.send('1');
              })
            }
            database.close();
        })
      })
    })
})

// login
router.post('/login',(req,res)=>{
    mongodb.connect(db_url,(err,database)=>{
        database.collection('user',(err,coll)=>{
            coll.find(req.body).toArray((err,data)=>{
                if(data.length>0){
                  req.session.name = data[0].username;
                  console.log(req.session.name);
                    res.send('1');
                }else{
                    res.send('0');
                }
                database.close();
            })
        })
    })
})

// page 
router.post('/page',(req,res)=>{
    mongodb.connect(db_url,(err,database)=>{
        database.collection('web',(err,coll)=>{
            coll.save(req.body,(err)=>{
                res.send('1');
                database.close();
            })
              
        })
    })
})


// pagedel
router.get('/pageDel',(req,res)=>{
    console.log(req.query); 
    var id = ObjectId(req.query.id);
    mongodb.connect(db_url,(err,database)=>{
        database.collection('web',(err,coll)=>{
            coll.deleteOne({_id:id},(err)=>{
                res.send('1');
                database.close();
            })
        })
    })
})

// pageAdd

router.post('/column',(req,res)=>{
  // console.log(req.body);
    mongodb.connect(db_url,(err,database)=>{
        database.collection('column',(err,coll)=>{
            coll.save(req.body,(err)=>{
                res.send('1');
                database.close();
            })
        })
    })
})

// columnDel
router.post('/columnDel',(req,res)=>{
    var id = ObjectId(req.body.id);
    mongodb.connect(db_url,(err,database)=>{
        database.collection('column',(err,coll)=>{
            coll.deleteOne({_id:id},(err)=>{
                res.send('1');
                database.close();
            })
        })
    })
})


// columnUpdate
router.post('/columnUpdate',(req,res)=>{
    console.log(req.body);
    var id = ObjectId(req.body.id);
    console.log(req.body.id)
    mongodb.connect(db_url,(err,database)=>{
        database.collection('column',(err,coll)=>{
            coll.update({_id:id},{$set:{name_con:req.body.name_con,content:req.body.content}},false,true,);
            res.send('1');
            database.close();
        })
    })
})

// passUpdata

router.post('/passUpdata',(req,res)=>{
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    mongodb.connect(db_url,(err,database)=>{
        database.collection('user',(err,coll)=>{
            coll.update({username:username},{$set:{password:password}});
            res.send('1');
            database.close();
        })
    })
})


module.exports = router;
