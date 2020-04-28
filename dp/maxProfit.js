/**
 * 时间控件复杂度过高
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit0 = function (prices) {
  const res = new Array(prices.length);
  if (prices.length <= 1) return 0;
  res[0] = 0;
  for (let i = 1; i < prices.length; i++) {
    res[i] = prices[i] - Math.min(...prices.slice(0, i));
  }
  return Math.max(...res);
};

/**
 * 代码复杂，但是性能高
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const dp = new Array(prices.length);
  // 数组长度为1、2的情况
  if (prices.length <= 1) return 0;
  if (prices.length == 2) {
    return prices[1] > prices[0] ? prices[1] - prices[0] : 0;
  }
  // 前两个数的最优解
  dp[0] = 0;
  dp[1] = prices[1] > prices[0] ? prices[1] - prices[0] : 0;
  // 当前最优解的最大值
  let resMax = prices[1] > prices[0] ? prices[1] : prices[0];
  // 当前最优解的最小值
  let resMin = prices[1] > prices[0] ? prices[0] : prices[1];
  // 下一个最优解的最小值
  let nextResMin = resMin;
  for (let i = 2; i < prices.length; i++) {
    // 当前数字大于之前最优解的最大值时,重新计算最优解，更换最优解最大值
    if (prices[i] >= resMax) {
      dp[i] = prices[i] - resMin;
      resMax = prices[i];
    }
    // 当前数字小于之前最优解的最大值时，最优解不变
    if (prices[i] < resMax) dp[i] = dp[i - 1];
    // 当前数字小于下一个最优解的最小值时，更换下一个最优解的最小值
    if (prices[i] < nextResMin) nextResMin = prices[i];
    // 当前数字与下一个最优解的最小值的差大于当前最优解时，重新计算最优解，更换最优解的最大值和最小值
    if (prices[i] - nextResMin > dp[i - 1]) {
      dp[i] = prices[i] - nextResMin;
      resMax = prices[i];
      resMin = nextResMin;
    }
  }
  return dp[prices.length - 1];
};

console.log(maxProfit([7, 4, 1, 2]));
