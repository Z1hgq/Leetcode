/*
 * @Description: Object.create
 * @Autor: gqzhang
 * @LastEditors: gqzhang
 * @LastEditTime: 2021-03-15 14:31:51
 */

Object.createObj = function (o) {
    const fn = function(){};
    fn.prototype = o;
    return new fn();
}
