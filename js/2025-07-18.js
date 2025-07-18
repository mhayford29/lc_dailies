// LC 7 Longest Palindromic Substring

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let l = i;
    let r = i;
    while (s[l] === s[r + 1]) {
      r++;
    }
    while (s[l] && s[r] && s[l] === s[r]) {
      const currLength = r - l + 1;
      if (currLength > result.length) {
        result = s.slice(l, r + 1);
      }
      l--;
      r++;
    }
  }
  return result;
};
