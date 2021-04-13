/*
 * @Description: 
 * @Autor: gqzhang
 * @LastEditors: gqzhang
 * @LastEditTime: 2021-03-15 14:09:20
 */
/*****************************
 * JavaScript实现继承的几种方式
 **************************/

/**
 * 1. 原型链
 */

 // 申明一个父类
 function Parent() {
     this.name = `father`;
     this.children = ['a', 'b'];
 }

 // 申明另一个类
 function Child() {

 }
 // 将第二个类的原型对象prototype指向父类的实例
 Child.prototype = new Parent();

 const sun = new Child();

 sun.children.push('c');
 console.log(sun.children); // [ 'a', 'b', 'c' ]
 const anotherSun = new Child();
 sun.children.push('d'); // [ 'a', 'b', 'c', 'd' ]
 console.log(anotherSun.children);

 // 缺点：父类的属性被所有子类实例共享
 // 原因：因为属性是挂载在父类上的，在内存中这个属性直属父类，任何子类的实例去修改都是直接修改这段内存上的数据，类似闭包

/**
 * 2.  借用构造函数
 */
function Parent(age) {
    this.names = ['lucy', 'dom'];
    this.age = age;

    this.getName = function() {
        return this.name;
    }

    this.getAge = function() {
        return this.age;
    }
}

function Child(age) {
    Parent.call(this, age);
}
var child1 = new Child(18);
child1.names.push('child1');
console.log(child1.names); // [ 'lucy', 'dom', 'child1' ]

var child2 = new Child(20);
child2.names.push('child2');
console.log(child2.names); // [ 'lucy', 'dom', 'child2' ]

// 缺点：每次构造子类实例的时候都会创建一遍父类中的方法

/**
 * 3. 组合继承
 * 组合继承就是将原型链和借用构造函数的技术结合到一起，发挥二者长处的一种继承模式，
 * 背后思想是使用原型链实现对原型属性和方法的继承，通过借用构造函数实现对实例属性的继承。
 * 这样，既能够保证能够通过原型定义的方法实现函数复用，又能够保证每个实例有自己的属性。
 */
function Parent(name, age) {
    this.name = name;
    this.age = age;
    this.colors = ['red', 'green']
    console.log('parent')
}

Parent.prototype.getColors = function() {
    console.log('color', this.colors);
}

function Child(name, age, grade) {
    Parent.call(this, name, age);// 创建子类实例时会执行一次
    this.grade = grade;
}

Child.prototype = new Parent(); // 指定子类原型会执行一次
Child.prototype.constructor = Child;// 校正构造函数
Child.prototype.getName = function() {
    console.log('name', this.name)
}

var c = new Child('alice', 10, 4)
c.getColors();
c.getName();




