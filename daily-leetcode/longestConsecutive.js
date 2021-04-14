/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function (nums) {
    let map = {};
    let max = 0;
    for (const num of nums) {
        if (map[num]) continue;
        const left = map[num - 1] || 0;
        const right = map[num + 1] || 0;
        map[num] = 1 + left + right;
        map[num - left] = map[num];
        map[num + right] = map[num];
        max = Math.max(map[num], max);
    }
    return max;
};
const res = longestConsecutive([100,4,200,1,3,2]);
console.log(res);