/*****************
 * js 中的一些继承方式
 ****************/

// 1. 原型链继承

function Parent() {

}

function Child() {

}

Child.prototype = new Parent();

// 缺点：Child实例化的对象会共享Parent中的属性


// 2. 构造函数继承

function Parent() {

}

function Child() {
    Parent.call(this);
}
// 优点：
// 1.避免了引用类型的属性被所有实例共享
// 2.可以在 Child 中向 Parent 传参

// 缺点： Child中通过构造函数产生的方法，在每一次实例化对象的时候都会重新去生成


// 3. 组合继承：构造函数+原型链

function Parent() {

}

function Child(...args) {
    Parent.apply(this, args);
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

// 优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。


// 4. 原型式继承

/**
 * 相当于ES5中的Object.create
 * @param {Object} o 
 */
function createObj(o) {
    function F() { }
    F.prototype = o;
    return new F();
}

// 将传入的对象作为创建的对象的原型。
// 缺点：与原型链继承相同


// 5. 寄生式继承

function createObj(o) {
    const clone = Object.create(o);
    return clone;
}

// 缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。



// 6. 寄生组合继承

function Parent() {
    
}

function Child() {
    Parent.call(this);
}

Child.prototype = new Parent();