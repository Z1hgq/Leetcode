/*
 * @Description: 实现一个new方法
 * @Autor: gqzhang
 * @LastEditors: gqzhang
 * @LastEditTime: 2021-03-15 10:29:53
 */

const objFactory = () => {
    // 取出构造函数
    const Constructor = [].shift.call(arguments);
    // 创建一个新的空对象
    const obj = Object.create(null);
    // 将空对象的原型对象指向构造函数的原型
    obj.__proto__ = Constructor.prototype;
    // 绑定this到obj
    const result = Constructor.call(obj, ...arguments);
    // 返回结果必须是对象
    return typeof result === 'object' ? result : obj;
};
