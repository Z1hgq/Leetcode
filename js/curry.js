/*
 * @Description: 函数柯里化
 * @Autor: gqzhang
 * @LastEditors: gqzhang
 * @LastEditTime: 2021-03-17 18:17:19
 */
function curry(fun, args) {
    const len = fun.length
    args = args || []
    return function () {
        // 收集参数
        const newArgs = args.concat(Array.prototype.slice.call(arguments))
        if (newArgs.length < len) {
            // 递归柯里化，继续收集参数
            return curry.call(this, fun, newArgs)
        } else {
            // 函数执行
            return fun.apply(this, newArgs)
        }
    }
}

function add(a, b, c) {
    return a + b + c;
}

const addEx = curry(add);
console.log(addEx(1, 2, 3)); //6
console.log(addEx(1)(2, 3)); //6
console.log(addEx(1)(2)(3)); //6
