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
function flatten(obj, tempKey, resultObj) {
    tempKey = tempKey || '';
    resultObj = resultObj || {};
    // 遍历对象
    for (let key in obj) {
        var value = obj[key];
        if (Object.prototype.toString.call(value) == '[object Object]') {
            // 如果该对象的值为对象的话，那么进行递归
            // 中间key加上当前对象的key和.
            tempKey = tempKey + key + '.';
            flatten(value, tempKey, resultObj);
            // 完成之后中间key要清空
            tempKey = '';
        } else {
            // 如果不是对象的话那么就直接将传进来的中间key加上当前key作为当前变量的key
            resultObj[tempKey + key] = value;
        }
    };
    return resultObj;
}
console.log(flatten(data));
