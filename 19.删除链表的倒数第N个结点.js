/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 如果头指针之下没有结点，则肯定删除头指针，则直接返回null
    if (!head.next) return null;
    // 定义当前节点
    let tail = head;

    while (true) {
        // 如果存在向下的
        if (tail.next) {
            // 给当前节点的next节点添加一个指针指向自己，实现双向链表
            tail.next.pre = tail;
            tail = tail.next;
        } else { //不存在下一节点，则表示到最后了
            break;
        }
    }

    // 定义结尾开始数第几个节点
    let count = 1;
    while (true) {
        // 如果从尾部开始数数量达到指定位置
        if (count === n) {
            // 判断当前位置是否已经到head指针指向
            if (tail === head) { //如果是
                // 则头指针直接指向当前节点的子节点
                head = tail.next;
            } else { //不是
                // 将当前节点的上一节点的next指针指向自己的next指针所指的节点（实现删除）
                tail.pre.next = tail.next;
            }
            break;
        }
        // 指针从尾部往前移动
        tail = tail.pre;
        // 同时增加当前节点为逆向第几个
        count++;
    }

    return head
};