/*
 * @Description: 实现一个new方法
 * @Autor: gqzhang
 * @LastEditors: gqzhang
 * @LastEditTime: 2021-03-15 10:29:53
 */

function CustomNew() {
    // 参数的第一个是构造函数
    const Constuctor = Array.prototype.shift.call(arguments) // 注意function函数才有arguments 属性

    const obj = Object.create(null)

    // 连接原型链
    obj.__proto__ = Constuctor.prototype

    const ret = Constuctor.apply(obj, [...arguments])

    // 如果构造器有返回值，直接返回，否则返回创建的对象

    return typeof ret === 'object' ? ret : obj

};

function Person(args) {
    const { name, age } = args
    this.name = name
    this.age = age
    this.getName = () => {
        return this.name
    }
    this.getAge = () => {
        return this.age
    }
}

// const p = new Person({ name: 'z1hgq', age: 23 })
const p = CustomNew(Person, { name: 'z1hgq', age: 23 })

console.log(p.getName())
console.log(p.getAge())
