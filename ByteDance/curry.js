function curry(fn) {
    var argArr = Array.prototype.slice.call(arguments, 1); // curry的第二个参数以及后面的参数，初始值通常情况下是[]
    var len = fn.length; // 待柯里化函数的参数个数
    return function () { 
        // 获得本轮递归执行的函数的参数
        var innerArgs = Array.prototype.slice.call(arguments); 
        // 将上一轮递归的参数与本轮递归的参数进行合并
        // 注意： argArr 里面缓存了上一轮递归执行参数合并后的结果
        argArr = argArr.concat(innerArgs); 
        if (argArr.length === len) { 
            // 如果最终合并后的参数个数，与被柯里化的函数的参数个数相同
            // 那么将合并后的参数作为被柯里化函数的参数，执行
            // 相当于提取所有的参数，然后拿到原函数里面去执行
            var result = fn.apply(null, argArr);
            // 到这里就执行完成了
            argArr = [];
            return result;
        } else {
            // 返回正在执行的函数，也就是函数自身，相当于递归
            // 但是递归层数是动态的
            // 这里会把本轮递归的参数通过 argArr 带到下一轮递归中
            return arguments.callee;
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