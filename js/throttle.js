/**
 * 节流函数
 * @param {Function} fn 需要进行节流函数
 * @param {number} delay 节流的时间设置
 */
const throttle = (fn, delay = 500) => {
    let flag = true;
    return (...args) => {
        // 每次调用进来之后，如果flag === false 表示上一次的执行还没有结束，那么不会执行调用函数，直接返回
        if (!flag) return;
        // 如果flag === true 表示上一次的节流已经执行完了，开始下一次的执行，把flag置为false，表示下次调用节流函数不能执行
        flag = false;
        setTimeout(() => {
            // 执行节流的调用函数，这里注意参数传递和this传递
            fn.apply(this, args);
            // 函数执行完成之后将flag置为true表示可以进行下一次节流函数的调用
            flag = true;
        }, delay);
    };
};