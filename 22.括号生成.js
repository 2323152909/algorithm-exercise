/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    // 利用递归传入初始值
    backtrack(res, "", 0, 0, n);
    return res;
};

/**
 * 递归加回溯生成有效括号集合
 * @param {Array} res 
 * @param {String} string 
 * @param {Number} left 
 * @param {Number} right 
 * @param {Number} max 
 */
const backtrack = function(res, string, left, right, max) {
    // 当前生成字符长度满足要求，则直接压入字符串，并结束此次递归
    if (string.length === max * 2) {
        res.push(string);
        return;
    }
    // 只要左括号还有剩的，可以添加左括号继续递归
    if (left < max) {
        string += "(";
        // 递归继续添加
        backtrack(res, string, left + 1, right, max);
        // 回溯，删除最新添加的‘(’
        string = string.slice(0, -1);
    }
    // 只有左括号多余右括号，才能添加右括号继续递归
    if (right < left) {
        string += ")";
        // 递归继续添加
        backtrack(res, string, left, right + 1, max);
        // 回溯，删除最新添加的‘)’
        string = string.slice(0, -1);
    }
}

console.log(generateParenthesis(3));