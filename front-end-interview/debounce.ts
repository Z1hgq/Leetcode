/**
 * 防抖
 * @param fn 
 * @param delay 
 */
const de = function (fn: Function, delay: number = 100) {
    let timer: number;
    return (...args: []) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay)
    }
}