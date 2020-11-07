/**
 * 防抖
 * @param fn 
 * @param delay 
 */
const th = function (fn: Function, delay: number = 100) {
    let flag = true;
    return (...args: []) => {
        if (!flag) {
            return;
        }
        flag = false;
        setTimeout(() => {
            fn.apply(this, args);
            flag = true;
        }, delay)
    }
}