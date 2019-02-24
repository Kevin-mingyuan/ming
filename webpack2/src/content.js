// export命令除了输出变量，还可以输出函数，甚至是类（react的模块基本都是输出类）
// export default 'A cat'
// export function say() {
//     return 'Hello'
// }
// export const type = 'dog'
var aa = function () { 
    setTimeout(()=>{
        console.log("延迟1500");
    },1500)
};
var bb = function (){
    setInterval(()=>{
        console.log("延迟3500");
    },3500)
}
module.exports = {aa,bb}
