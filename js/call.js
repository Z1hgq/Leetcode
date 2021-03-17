/*
 * @Description: 实现一个call函数
 * @Autor: gqzhang
 * @LastEditors: gqzhang
 * @LastEditTime: 2021-03-15 11:00:31
 */

// fn.call(obj, ...arguments)

Function.prototype.myCall = function (context) {
    context = context ? Object(context) : window;
    context.fn = this; // 重置上下文, 这里的this就是调用myCall的函数
    console.log(this);
    const args = [...arguments].slice(1); // 获取参数
    const result = context.fn(...args); // 执行函数
    delete context.fn; // 删除添加的过渡性函数，避免对象属性污染
    return result; // 返回结果
}

// 浏览器环境下
var a = 1, b = 2;
var obj = { a: 10, b: 20 }
function test(key1, key2) {
    console.log(this[key1] + this[key2])
}
test('a', 'b') // 3
test.myCall(obj, 'a', 'b') // 30

