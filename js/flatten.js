/*
 * @Description: flatten
 * @Autor: gqzhang
 * @LastEditors: gqzhang
 * @LastEditTime: 2021-03-23 16:57:47
 */
const data = {
    a: {
        b: 1,
        c: 2,
        d: {
            x: 6,
            y: 7,
            z: 8
        }
    },
    c: 3
}
/**
 * 对象数据扁平化
 * @param {*} obj 需要进行扁平化的对象
 * @param {*} tempKey 中间key
 * @param {*} resultObj 结果
 */
function objectFlatten(obj, tempKey, resultObj) {
    tempKey = tempKey || '';
    resultObj = resultObj || {};
    // 遍历对象
    for (let key in obj) {
        var value = obj[key];
        if (Object.prototype.toString.call(value) == '[object Object]') {
            // 如果该对象的值为对象的话，那么进行递归
            // 中间key加上当前对象的key和.
            tempKey = tempKey + key + '.';
            objectFlatten(value, tempKey, resultObj);
            // 完成之后中间key要清空
            tempKey = '';
        } else {
            // 如果不是对象的话那么就直接将传进来的中间key加上当前key作为当前变量的key
            resultObj[tempKey + key] = value;
        }
    };
    return resultObj;
}
const flatten = (data, temp, res) => {
    temp = temp || '';
    res = res || {};
    Object.keys(data).forEach(key => {
        if (Object.prototype.toString.call(data[key]) === '[object Object]') {
            temp = temp + key;
            flatten(data[key], temp, res);
            temp = '';
        } else {
            res[temp + key] = data[key];
        }
    })
    return res;
};
console.log(objectFlatten(data));

/**
 * Array.prototype.flatten toString
 * @param {Array} arr 
 */
const arrayFlatten = (arr) => {
    return arr.toString().split(",").map((item) => +item)
}
/**
 * Array.prototype.flatten 递归
 * @param {Array} arr 
 */
const arrayFlatten = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element && Object.prototype.toString.call(element) === '[object Array]') {
            newArr = newArr.concat(arrayFlatten(element))
        } else {
            newArr.push(element)
        }
    }
    return newArr
}
/**
 * Array.prototype.flatten reduce
 * @param {Array} arr 
 */
const arrayFlatten = (arr) => {
    return arr.reduce((prev, next) => {
        return prev.concat(Object.prototype.toString.call(next) === '[object Array]' ? arrayFlatten(next) : next)
    }, [])
}
/**
 * Array.prototype.flatten 扩展运算符 + while + some
 * @param {Array} arr 
 */
const arrayFlatten = (arr) => {
    while( arr.some ( item => Array.isArray(item))){
      arr = [].concat(...arr);
    }
    return arr
  }
  
const arr = [1, 2, [3, 4, [5, 6]], 7, 8, [9, 10, 11, [12]]];
console.log(arrayFlatten(arr));
