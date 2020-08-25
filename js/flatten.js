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
function flatten(obj, tempKey, resultObj) {
    tempKey = tempKey || '';
    resultObj = resultObj || {};
    for (let key in obj) {
        var value = obj[key];
        if (Object.prototype.toString.call(value) == '[object Object]') {
            tempKey = tempKey + key + '.';
            flatten(value, tempKey, resultObj);
            tempKey = '';
        } else {
            resultObj[tempKey + key] = value;
        }
        console.log(tempKey);
    };
    return resultObj;
}
console.log(flatten(data));
