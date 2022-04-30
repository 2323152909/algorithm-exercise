/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const length = s.length
    const arr = s.split("")
    const db = []
    db[0] = arr[0]
    for (let i = 1; i < length; i++) {
        // 查找前一个最长子字符串中与当前字符相同的索引
        const preIndex = db[i - 1].indexOf(arr[i])
            // 如果存在相同的
        if (preIndex > -1) {
            // 当前索引对应的动态规划字符串为前一字符串截取相同值之后的字符串+当前字符
            db[i] = "" + db[i - 1].slice(preIndex + 1) + arr[i]
        } else {
            // 不存在相同的，则与前一字符串相加
            db[i] = "" + db[i - 1] + arr[i]
        }
    }

    let result = 0;
    for (let i = 0; i < db.length; i++) {
        if (db[i].length > result) {
            result = db[i].length
        }
    }

    return result
};