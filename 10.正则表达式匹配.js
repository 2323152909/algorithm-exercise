/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // 先计算出两个字符串的长度
    const slen = s.length;
    const plen = p.length;

    // 判断p中是否有*,因为*会影响我们对应长度的判断
    const flag = p.indexOf("*")
        // 如果有*
    if (flag > -1) {
        // 匹配字符串
        const result = s.match(p)
            // 是否能匹配到
        if (result) {
            // 匹配到且匹配到的字符串与s相同
            if (result[0] == s) {
                // 返回true
                return true;
            } else {
                // 不相同则返回false
                return false
            }
        } else {
            // 未匹配到，则直接返回false
            return false
        }
    } else { // 不存在*
        // 判断s和p长度是否相同
        if (slen !== plen) { //长度不同
            // 返回false
            return false
        } else { //长度相同
            // 匹配字符串
            if (s.match(p)) { //成功则返回true
                return true;
            } else { //失败则返回false
                return false
            }
        }
    }
};