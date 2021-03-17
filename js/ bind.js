/*
 * @Description: 实现一个bind函数
 * @Autor: gqzhang
 * @LastEditors: gqzhang
 * @LastEditTime: 2021-03-15 11:14:00
 */

Function.prototype.myBind = function (context) {
    let _me = this
    return function () {
        return _me.apply(context)
    }
}