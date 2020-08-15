/**
 * 经典的爬台阶问题，一次走一个台阶或者三个台阶，求走n级台阶总共有多少种走法，台阶数不超过50
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 3) {
        return 1;
    }
    if (n === 3) {
        return 2;
    }
    return climbStairs(n - 1) + climbStairs(n - 3);
};
console.log(climbStairs(50));
var dpClimbStairs = function(n) {
    const dp = [];
    dp[0] = 1, dp[1] = 1, dp[2] = 2;
    for (let i = 3; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 3];
    }
    return dp[n - 1];
};
console.log(dpClimbStairs(50));