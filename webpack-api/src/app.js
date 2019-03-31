let app = {
    name:"app",
    version:"1.0.0",
    sayApp:function(name){
        this.name = name;
        console.log("this is 1 " + this.name)
    }
}

module.exports = app;
