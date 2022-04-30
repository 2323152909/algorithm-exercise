/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return []
    const letterMap = {
        "0": "",
        "1": "",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    let res = [];
    dfs("", digits);
    return res;

    function dfs(str, digit) {
        // 如果字符串为空了，将拼接好的字符加入数组
        if (digit.length === 0) res.push(str);
        else {
            // 拿到字符串第一个字符，拿到其对应的数字
            let numstr = letterMap[digit[0]];
            // 对可能性进行组合
            for (let i = 0; i < numstr.length; i++) {
                // 递归组好的 str和下一段字符串(这一行代码是下面三行代码的汇总，不改变str，就不用回溯)
                dfs(str + numstr[i], digit.slice(1));

                // str += numstr[i];
                // 递归组好的 str和下一段字符串
                // dfs(str, digit.slice(1));
                // 回溯(即剔除掉当前加的最后一个字符)
                // str = str.slice(0, -1);
            }
        }
    }
};

console.log(letterCombinations("23"));