/*
 * @Description: 实现一个apply函数
 * @Autor: gqzhang
 * @LastEditors: gqzhang
 * @LastEditTime: 2021-03-15 11:10:22
 */

Function.prototype.myApply = function (context) {
    context = context ? Object(context) : window;
    context.fn = this;
    const args = [...arguments][1];
    if (!args) {
        return context.fn();
    }
    const result = context.fn(...args);
    delete context.fn;
    return result;
}
