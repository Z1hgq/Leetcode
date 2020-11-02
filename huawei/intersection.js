const source = [
    [0, 3],
    [1, 3],
    [3, 5],
    [3, 6]
];
source.sort((a, b) => a[0] > b[0]);
function Intersection(arr) {
    const len = arr.length;
    let res = [];
    let flag = true;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i][1] >= arr[j][0]) {
                res.push([arr[j][0], arr[i][1]]);
                flag = false;
            }
        }
    }
    // 处理没有交集的情况
    if (flag) {
        return 'None';
    }
    // 去除重复的交集
    res = filter(res);
    // 结果取并集，这里做错了
    return merge(res);
}
function filter(arr) {
    const len = arr.length;
    if (len === 0) {
        return arr;
    }
    const newArr = [];
    const strArr = [];
    newArr.push(arr[0]);
    strArr.push(JSON.stringify(arr[0]));
    for (let i = 1; i < len; i++) {
        if (strArr.indexOf(JSON.stringify(arr[i])) === -1) {
            newArr.push(arr[i]);
            strArr.push(JSON.stringify(arr[i]));
        }
    }
    return newArr;
}

// var merge = function (intervals) {
//     if (!intervals.length) return []
//     if (intervals.length === 1) return intervals
//     intervals.sort((a, b) => a[0] - b[0])
//     let start = intervals[0][0], end = intervals[0][1], res = []
//     for (let interval of intervals) {
//         if (interval[0] <= end) { 
//             end = Math.max(end, interval[1])
//         } else { 
//             res.push([start, end])
//             start = interval[0]
//             end = interval[1]
//         }
//     }
//     res.push([start, end])
//     return res
// };

const result = Intersection(source);
result.sort((a, b) => a[0] > b[0]);
if (result !== 'None') {
    for (const item of result) {
        console.log(item.join(' '));
    }
} else {
    console.log('None');
}