const rob = (nums) => {
    if (nums.length === 1) return nums[0];
    return Math.max(robRange(nums, 0, nums.length - 2), robRange(nums, 1, nums.length - 1))
}

const robRange = (nums, start, end) => {
    const dp = [];
    dp[0] = nums[start];
    dp[1] = Math.max(nums[start], nums[start + 1]);
    for (let i = 2; i <= end - start; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i + start], dp[i - 1]);
    }
    return dp[end - start];
}

const arr = [1, 2, 3, 1, 4, 2, 1, 2];
console.log(rob(arr));