/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let max = nums[0];
  const dp = new Array(nums.length);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] > 0) dp[i] = dp[i - 1] + nums[i];
    else dp[i] = nums[i];
    max = Math.max(dp[i], max);
  }
  return max;
};

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(arr));
