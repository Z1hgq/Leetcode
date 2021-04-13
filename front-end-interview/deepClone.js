/*
 * @Description: 
 * @Autor: gqzhang
 * @LastEditors: gqzhang
 * @LastEditTime: 2021-03-09 22:54:34
 */
function deepClone(obj) {
    if (typeof obj !== "object" || !obj) return obj;
    let _target = {};
    if (Object.prototype.toString.call(obj) === "[object Array]") {
        _target = [];
    }
    if (Object.prototype.toString.call(obj) === "[object Date]") {
        _target = new Date(obj.getTime());
    }
    for (const key in obj) {
        _target[key] = deepClone(obj[key]);
    }
    return _target;
}

const a = {
    arr: [1, 2, 3],
    obj: {
        1: "111",
        2: "222"
    },
    date: new Date(),
    func: () => { }
}

console.log(a);
console.log(deepClone(a));

// 工具函数
let _toString = Object.prototype.toString
let map = {
    array: 'Array',
    object: 'Object',
    function: 'Function',
    string: 'String',
    null: 'Null',
    undefined: 'Undefined',
    boolean: 'Boolean',
    number: 'Number'
}
let getType = (item) => {
    return _toString.call(item).slice(8, -1)
}
let isTypeOf = (item, type) => {
    return map[type] && map[type] === getType(item)
}
let DFSdeepClone = (obj, visitedArr = []) => {
    let _obj = {}
    if (isTypeOf(obj, 'array') || isTypeOf(obj, 'object')) {
        let index = visitedArr.indexOf(obj)
        _obj = isTypeOf(obj, 'array') ? [] : {}
        if (~index) { // 判断环状数据
            _obj = visitedArr[index]
        } else {
            visitedArr.push(obj)
            for (let item in obj) {
                _obj[item] = DFSdeepClone(obj[item], visitedArr)
            }
        }
    } else if (isTypeOf(obj, 'function')) {
        _obj = eval('(' + obj.toString() + ')');
    } else {
        _obj = obj
    }
    return _obj
}