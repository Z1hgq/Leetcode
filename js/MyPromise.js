/*
 * @Description: 实现一个promise
 * @Autor: gqzhang
 * @LastEditors: gqzhang
 * @LastEditTime: 2021-03-22 11:18:34
 */
const states = ['pending', 'fulfilled', 'rejected']; // 三种状态
class MyPromise {

    constructor(callback) {
        this.state = states[0];
        this.value = null;
        this.reason = null;
        callback(this.resolve, this.reject);
    }

    resolve = (value) => {
        if (this.state === states[0]) {
            this.state = states[1];
            this.value = value;
        }
    };

    reject = (reason) => {
        if (this.state === states[0]) {
            this.state = states[2];
            this.reason = reason;
        }
    };

    then = (onFulfilled, onRejected) => {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
        onRejected = typeof onRejected === 'function' ? onRejected : (reason) => reason;
        if (this.state === states[1]) {
            return new MyPromise((resolve, reject) => {
                try {
                    const res = onFulfilled(this.value); // 执行传入的onFulilled方法
                    // 如果onFulilled返回的是一个Promise,则调用then方法
                    if (res && res instanceof MyPromise) {
                        res.then(resolve, reject);
                    } else {
                        resolve(res);
                    }
                } catch (err) {
                    reject(err);
                }
            });
        }
        // 如果状态是rejected
        if (this.state === stateArr[2]) {
            // then返回的必须是一个promise
            return new MyPromise((resolve, reject) => {
                try {
                    const result = onRejected(this.reason); // 执行传入的onRejected方法

                    // 如果onRejected返回的是一个Promise,则调用then方法
                    if (result instanceof MyPromise) {
                        result.then(resolve, reject);
                    } else {
                        resolve(result);
                    }
                } catch (err) {
                    reject(err);
                }
            })
        }

    };
}

const p = new MyPromise((resolve, reject) => {
    console.log('dadadada');
});