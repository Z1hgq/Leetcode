function deepClone (obj) {
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
    arr: [1,2,3],
    obj: {
        1: "111",
        2: "222"
    },
    date: new Date(),
    func: () => {}
}

console.log(a);
console.log(deepClone(a));