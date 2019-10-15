//给定一个没有重复数字的序列，返回其所有可能的全排列。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    var res = [];
    var tmp = []
    return Recursive(res, tmp, nums, 0, nums.length - 1);
};

var Recursive = function (res, tmp, arr, start, end) {
    if (start == end) {
        tmp = [...arr];
        res.push(tmp);
        return res;
    } else {
        for (let i = start; i <= end; i++) {
            if (!swipAccepted(arr, start, i)) {
                continue;
            }
            swip(arr, start, i);
            Recursive(res, tmp, arr, start + 1, end);
            swip(arr, start, i);//保证序列进入下一次循环时状态的一致性, 对序列进行还原操作
        }
        return res;
    }
}
var swip = (arr, i, j) => {
    if(i == j) return;
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;
}

var swipAccepted = (array, start, end) => {
    for (let i = start; i < end; i++) {
        if (array[i] == array[end]) {
            return false;
        }
    }
    return true;
}

permute([1, 2, 3]);