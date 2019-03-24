
/*call的特点
    1) 可以改变我们当前函数的this指向
    2)还会让当前函数执行
*/ 
Function.prototype.apply = function(context,args){
    //{}.fn = fn1, this就指向{}
    context = context ? Object(context) : window; 
   context.fn = this;
   if(!args){
        return context.fn();
   }
    //利用数组的toString的特性
    let r = eval('context.fn('+args+')');
    delete context.fn;
    return r;
}
function fn1(){
    console.log(1,this,arguments);
}
function fn2(){
    console.log(2,this);
}
fn1.apply('hello',[1,2,3,4]);







