function curry(fn, args) {
    args = args || []
    const length = fn.length
    return function() {
        const curArgs = Array.prototype.slice.call(arguments, 0)
        const newArgs = args.concat(curArgs)
        if (newArgs.length === length) {
            return fn.apply(this, newArgs)
        } else {
            return curry(fn, newArgs)
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