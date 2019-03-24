function Animal(type){
    this.type = type;   //实例上的属性
    //如果当前构造函数返回的是一个引用类型,需要把这个对象或者
    return {name:'zs'}
}
Animal.prototype.say = function(){
    console.log('say');
}


function mockNew(){
    let Constructor = [].shift.call(arguments);
    let obj = {};
    obj.__proto = Constructor.prototype;
    let r = Constructor.apply(obj,arguments);
    return r instanceof Object?r:obj
}
let animal = mockNew(Animal,'哺乳类');
console.log(animal);