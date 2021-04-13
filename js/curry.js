/*
 * @Description: 函数柯里化
 * @Autor: gqzhang
 * @LastEditors: gqzhang
 * @LastEditTime: 2021-03-17 18:17:19
 */
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}

function add(a, b, c) {
    return a + b + c;
}

const addEx = curry(add);
console.log(addEx(1, 2, 3)); //6
console.log(addEx(1)(2, 3)); //6
console.log(addEx(1)(2)(3)); //6
