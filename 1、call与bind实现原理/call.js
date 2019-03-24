
/*call的特点
    1) 可以改变我们当前函数的this指向
    2)还会让当前函数执行
*/ 
Function.prototype.call = function(context){
    console.log(this);
    //{}.fn = fn1, this就指向{}
    context = context ? Object(context) : window; 
   context.fn = this;
    // 存放参数
    let args = [];
    for(let i=1;i<arguments.length;i++){
        args.push('arguments['+i+']');  //['','']数组中存放字符串
    }
    //利用数组的toString的特性
    let r = eval('context.fn('+args+')');
    delete context.fn;
    return r;
}
function fn1(){
    console.log(1,this);
}
function fn2(){
    console.log(2,this);
}
// fn1.call(fn2);
//如果多个call会让call方法执行 并且把call中this成fn2
fn1.call.call.call.call(fn2);







