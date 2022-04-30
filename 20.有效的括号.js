/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const length = s.length;
    if (length <= 1 || length % 2 !== 0) return false

    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    // stack表示一个栈，利用栈先进后出，后进先出的原则来实现匹配
    const stack = []
    for (let i = 0; i < length; i++) {
        if (pairs.has(s[i])) {
            // 如果次吃栈中已经是空的，则肯定不满足
            // 如果如果栈顶的元素与当前括号对应的正括号不对应，也不满足
            if (!stack.length || stack[stack.length - 1] !== pairs.get(s[i])) return false;
            // 如果满足，则弹出栈顶元素
        } else {
            stack.push(s[i])
        }
    }
    // 判断栈是否为空，为空则返回true，否则返回false
    return !stack.length;
};

console.log(isValid("()"));