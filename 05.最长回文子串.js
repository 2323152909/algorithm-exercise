/**
 * 最长回文子串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    /*  
        暴力破解：
        时间复杂度：两层 for 循环 O(n²）O(n²），for 循环里边判断是否为回文 O(n）O(n），所以时间复杂度为 O(n³）O(n³）。
        空间复杂度：O(1）O(1），常数个变量。
     */
    // const length = s.length;
    // let maxString = ""

    // for (let i = 0; i < length; i++) {
    //     // 此处j遍历到length+1是保证截取字符串能达到最后
    //     for (let j = i + 1; j < length + 1; j++) {
    //         // 截取子串
    //         const subString = s.substring(i, j)
    //         if (isPalinedrome(subString) && subString.length > maxString.length) {
    //             maxString = subString
    //         }
    //     }
    // }

    // return maxString

    /* 
        使用动态规划
    */
    if (s.length < 2) return s;
    const length = s.length;
    let maxLen = 1;
    let begin = 0;
    const sArr = s.split("");
    // 动态规划：二维数组，存储各个i,j对应的字符串是否为回文
    const db = [];
    // 初始化所有单个都为tru
    for (let i = 0; i < length; i++) {
        db[i] = []
        for (let j = 0; j < length; j++) {
            if (i === j) {
                db[i][i] = true
            }
        }
    }

    // 枚举子串长度
    for (let len = 2; len <= length; len++) {
        // 枚举左边界
        for (let i = 0; i < length; i++) {
            // 通过左边界和子串长度计算右边界
            let j = len + i - 1;
            // 如果右边界越界，就退出当前循环
            if (j >= length) {
                break;
            }

            // 如果左边界字符串和右边界字符串不相同，则其对应的动态规划数组值为false
            if (sArr[i] !== sArr[j]) {
                db[i][j] = false
            } else {
                if (j - i < 3) {
                    db[i][j] = true
                } else {
                    db[i][j] = db[i + 1][j - 1]
                }
            }

            // 当前i,j对应子串是否满足回文
            if (db[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1
                begin = i
            }
        }
    }

    return s.substring(begin, begin + maxLen)
};
console.log(longestPalindrome("xaabacxcabaaxcabaax"));
/**
 * 判断该字符串是否是回文
 * @param {String} s 
 */
function isPalinedrome(s) {
    for (let i = 0; i < s.length / 2; i++) {
        if (s.charAt(i) != s.charAt(s.length - i - 1)) {
            return false;
        }
    }

    return true
}