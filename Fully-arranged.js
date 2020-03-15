// 给定一个没有重复数字的序列，返回其所有可能的全排列。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const res = [];
  const tmp = [];
  return Recursive(res, tmp, nums, 0, nums.length - 1);
};

const Recursive = function (res, tmp, arr, start, end) {
  if (start == end) {
    tmp = [...arr]; // 用另一个变量来存储每一次想要的结果，避免因为递归所有的结果都一样
    res.push(tmp);
    return res;
  } else {
    for (let i = start; i <= end; i++) {
      if (!swipAccepted(arr, start, i)) {
        continue;
      }
      swip(arr, start, i);
      Recursive(res, tmp, arr, start + 1, end);
      swip(arr, start, i); // 保证序列进入下一次循环时状态的一致性, 对序列进行还原操作
    }
    return res;
  }
};
const swip = (arr, i, j) => {
  if (i == j) return;
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
  return arr;
};

const swipAccepted = (array, start, end) => {
  for (let i = start; i < end; i++) {
    if (array[i] == array[end]) {
      return false;
    }
  }
  return true;
};

permute([1, 2, 3]);
