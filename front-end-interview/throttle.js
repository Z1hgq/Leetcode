function throttle (fn, delay = 500) {
    let flag = true;
    return function () {
        const _this = this;
        const args = arguments;
        if (!flag) return;
        flag = false;
        setTimeout(function () {
            fn.apply(_this, args);
            flag = true;
        }, delay);
    }
}

function printf () {
    console.log(new Date());
}

const throttleFn = throttle(printf, 500);
const t = setInterval(throttleFn, 100);