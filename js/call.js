/*
 * @Description: 实现一个call函数
 * @Autor: gqzhang
 * @LastEditors: gqzhang
 * @LastEditTime: 2021-03-15 11:00:31
 */

// fn.call(obj, ...arguments)

Function.prototype.CustomCall = function (context, ...args) {
    context = context || window
    context.fn = this
    const ret = context.fn(...args) // fn执行时 内部的this指向context
    delete context.fn
    return ret
}

// 浏览器环境下
const obj = { a: 10, b: 20 }

globalThis.a = 1
globalThis.b = 2

function test(key1, key2) {
    // this 默认指向globalThis
    console.log(this)
    console.log(this[key1] + this[key2])
}
test('a', 'b') // 3
test.CustomCall(obj, 'a', 'b') // 30

