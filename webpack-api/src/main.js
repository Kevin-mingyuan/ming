var timer = { //返回全局共享的变量或者方法。
    name:"app",
    version:"1.0.0",
    setimer: setTimeout(()=>{
        console.log("hello 22")
    },1000),
    sayName:function(name){
        console.log(this.name);
    }
}
var app = require('./app.js'); //调用app.js内方法
console.log(app , "111")
app.sayApp('hello app');//hello app

module.exports = timer;