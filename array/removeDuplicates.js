/**
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length < 3) return nums.length;
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === undefined) break;
        if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};
const arr = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(arr));