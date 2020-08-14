/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let maxLength = 1;
  let maxString = s[0];
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = 0; j < s.length - 1; j++) {
      const subs = s.substring(i, j);
      if (isPalindrome(subs) && subs.length > maxLength) {
        maxLength = subs.length;
        maxString = subs;
      }
    }
  }
  return maxString;
};

function isPalindrome(s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(longestPalindrome("cbiicubccbnsucbuewibcieuwbcbd"));
console.log(isPalindrome("bb"));
