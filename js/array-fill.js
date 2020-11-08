Array.prototype.fill = function() {
    const O = this; // 取得源数组对象
    const start = arguments[1]; // 开始替换的索引
    const end = arguments[2]; // 结束替换的索引
    let realStart, realEnd;
    realStart = start || 0;
    realEnd = end || O.length;

    let k = realStart;
    while (k < realEnd) {
        O[k] = arguments[0];
    }
    return O;
}