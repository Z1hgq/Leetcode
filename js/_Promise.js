function _Promise(fn) {
    const self = this;
    self.status = 'pending'; // 状态
    self.data = undefined; // 结果
    self.onFulfilledCallback = [];
    self.onRejectedCallback = [];

    function resolve(value) {
        self.status = 'fulfilled';
        self.data = value;
        setTimeout(() => {
            for (const callback of self.onFulfilledCallback) {
                callback(value)
            }
        })
    }

    function reject(reason) {
        self.status = 'rejected';
        self.data = reason;
        setTimeout(() => {
            for (const callback of self.onRejectedCallback) {
                callback(reason)
            }
        })
    }

    try {
        fn(resolve, reject);
    } catch (error) {
        reject(error);
    }

}

_Promise.prototype.then = function (onFulfilled, onRejected) {
    const self = this;

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { };
    onRejected = typeof onRejected === 'function' ? onRejected : () => { };

    if (self.status === 'fulfilled') {
        return new _Promise((resolve, reject) => {
            try {
                const res = onFulfilled(self.data);
                if (res instanceof _Promise) {
                    res.then(resolve, reject);
                } else {
                    resolve(res);
                }
            } catch (error) {
                reject(error)
            }
        });
    } else if (self.status === 'rejected') {
        return new _Promise((resolve, reject) => {
            try {
                const res = onRejected(self.data);
                if (res instanceof _Promise) {
                    res.then(resolve, reject);
                } else {
                    reject(res);
                }
            } catch (error) {
                reject(error)
            }
        });
    } else if (self.status === 'pending') {
        return new _Promise((resolve, reject) => {
            self.onFulfilledCallback.push(
                function () {
                    try {
                        const res = onFulfilled(self.data);
                        if (res instanceof _Promise) {
                            res.then(resolve, reject);
                        } else {
                            resolve(res);
                        }
                    } catch (error) {
                        reject(error)
                    }
                }
            )
            self.onRejectedCallback.push(
                function () {
                    try {
                        const res = onRejected(self.data);
                        if (res instanceof _Promise) {
                            res.then(resolve, reject);
                        } else {
                            reject(res);
                        }
                    } catch (error) {
                        reject(error)
                    }
                }
            )
        });
    }
}

// 顺便实现一下catch方法
_Promise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
}


const p = new _Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1);
    }, 2000);
});

p.then(function (v) {
    console.log(v);
    return 2;
}).then(function (v) {
    console.log(v);
    return new _Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(3);
        }, 3000);
    });
}).then(function (v) {
    console.log(v);
});