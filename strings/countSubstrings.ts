function countSubstrings(s: string): number {
    let count = 0;
    const dp: number[] = [];
    for (let i = 0; i < s.length; i++) {
        dp[i] = 1;
        // 每一个
        count ++;
        for (let j = 0; j < i; j++) {
            if (s[j] === s[i] && dp[i] === 1) {
                dp[j] = 1;
                count++;
            } else {
                dp[j] = 0;
            }
        }
        console.log(dp);
    }
    return count;
};
console.log(countSubstrings('asddsaasd'));