/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //如果两个链表都为空，直接返回null
    if (!l1 && !l2) return null
        // 默认进位数为0
    let addNum = 0;
    // 链表头
    let head = null;
    // 链表当前位置
    let tail = null;

    while (l1 || l2) {
        let n1 = l1 ? l1.val : 0;
        let n2 = l2 ? l2.val : 0;

        let sum = n1 + n2 + addNum

        if (sum >= 10) {
            sum %= 10;
            addNum = 1
        } else {
            addNum = 0
        }

        // 如果当前头指针指向还为null，则当前元素为第一个 
        if (!head) {
            // 调用构造函数创建链表当前节点
            head = tail = new ListNode(sum)
        } else { //否者当前元素不为第一个
            // 调用构造函数创建下一个节点
            tail.next = new ListNode(sum)
            tail = tail.next
        }

        // 链表继续i向后移动
        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
    }

    // 如果结束了，进位数不为0，则还需添加下一位
    if (addNum) tail.next = new ListNode(addNum)

    return head
};