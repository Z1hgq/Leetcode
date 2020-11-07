/**
 * 实现一个Promsie.all()函数
 */
Promise.prototype.all = function (promises) {
    // 传进来的数据必须是一个promise数组
    if (Object.prototype.toString.call(promises) != '[object Array]') {
        throw 'arguments must be an array';
    }
    // 最后的结果数组中保存的结果与传入数组中的promise对象一一对应
    const res = new Array(promises.length);
    let count = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((p, index) => {
            Promise.resolve(p).then(d => {
                res[index] = d;
                count++;
                if (count === promises.length) {
                    resolve(res);
                }
            }).catch(err => {
                reject(err);
            })
        })

    })
}