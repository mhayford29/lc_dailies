// LC 91 Decode Ways

// Need to clean up the s.length of 1 & 2 cases

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === "0") return 0;
  if (s.length === 1) {
    return 1;
  }
  if (s.length === 2) {
    if (s[0] === "0") return 0;
    if (s[1] === "0" && Number(s[0]) > 2) return 0;
    if (s[1] === "0" && Number(s[0]) < 3) return 1;
    if (!isTwoDigitLetter(s[0], s[1])) return 1;
    if (isTwoDigitLetter(s[0], s[1])) return 2;
  }
  if (!Number(s[1]) && Number(s[0]) > 2) return 0;
  const firstIndex = !Number(s[1]) ? 1 : isTwoDigitLetter(s[0], s[1]) ? 2 : 1;
  const dp = [1, firstIndex];
  for (let i = 2; i < s.length; i++) {
    if (!Number(s[i])) {
      if (Number(s[i - 1]) > 2 || !Number(s[i - 1])) return 0;
      dp.push(dp[i - 2]);
    } else if (isTwoDigitLetter(s[i - 1], s[i])) {
      dp.push(dp[i - 2] + dp[i - 1]);
    } else {
      dp.push(dp[i - 1]);
    }
  }
  return dp[dp.length - 1];
};

const isTwoDigitLetter = (char1, char2) => {
  const char1Num = Number(char1);
  const char2Num = Number(char2);
  if (!char1Num) return false;
  if (char1Num < 2) return true;
  if (char1Num < 3 && char2Num < 7) return true;
  return false;
};
