
/**
 * 1、bind方法可以绑定this指向
 * 2、bind方法返回一个绑定后的函数(高阶函数)
 * 3、如果绑定的函数被new了 当前函数的this就是当前的实例
 * 4、new 出来的结果可以找到原有类的原型
 */
/*第一版简单实现
let obj = {
    name:'jw'
};
function fn(name,age){
    console.log(this.name + '养了一只' +name+age+'岁了');
}

Function.prototype.bind = function(context){
    let that = this;
    let bindArgs = Array.prototype.slice.call(arguments,1); //['猫']
    return function(){
        let args = Array.prototype.slice.call(arguments); //[9]
        return that.apply(context,bindArgs.concat(args))
    }
}
let bindFn = fn.bind(obj,'猫');
bindFn(9);
*/


/**
 * 第二版实现
 * let obj = {
    name:'jw'
};
function fn(name,age){
    this.say = '说话';
    console.log('this', this)  //this指向实例 instance
    // console.log(this.name + '养了一只' +name+age+'岁了');
}

Function.prototype.bind = function(context){
    let that = this;
    let bindArgs = Array.prototype.slice.call(arguments,1); //['猫']
     function fBound(){
        let args = Array.prototype.slice.call(arguments); //[9]
        return that.apply(this instanceof fBound? this:context,bindArgs.concat(args))
    }
    return fBound
}
let bindFn = fn.bind(obj,'猫');
let instance = new bindFn(9);
 */

 



/*第三版
* 原型公用不好，
let obj = {
    name:'jw'
};
function fn(name,age){
    this.say = '说话';
    console.log('this', this)  //this指向实例 instance
}

Function.prototype.bind = function(context){
    let that = this;
    let bindArgs = Array.prototype.slice.call(arguments,1); //['猫']
     function fBound(){
         console.log('this :', this);
        let args = Array.prototype.slice.call(arguments); //[9]
        return that.apply(this instanceof fBound? this:context,bindArgs.concat(args))
    }
    fBound.prototype = this.prototype; //两个类的原型的公用
    return fBound
}
fn.prototype.flag = '哺乳类';
let bindFn = fn.bind(obj,'猫');
let instance = new bindFn(9);
console.log('instance.flag :', instance.flag);
*/


let obj = {
    name:'jw'
};
function fn(name,age){
    this.say = '说话';
    console.log('this', this)  //this指向实例 instance
}

Function.prototype.bind = function(context){
    let that = this;
    let bindArgs = Array.prototype.slice.call(arguments,1); //['猫']
    function Fn(){  //Object.create原理

    }
     function fBound(){
        let args = Array.prototype.slice.call(arguments); //[9]
        return that.apply(this instanceof fBound? this:context,bindArgs.concat(args))
    }
    Fn.prototype = this.prototype; //两个类的原型的公用
    fBound.prototype = new Fn();
    return fBound
}
fn.prototype.flag = '哺乳类';
let bindFn = fn.bind(obj,'猫');
let instance = new bindFn(9);
console.log('instance.flag :', instance.flag);