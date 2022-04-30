/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 链表头指针
    let head = null;
    // 当前节点
    let tail = head;
    if (!list1 && !list2) return head;
    // 链表1当前节点
    let tail1 = list1;
    // 链表2当前节点
    let tail2 = list2;

    // 循环，当两个链表都结束之后，退出循环
    while (tail1 || tail2) {
        // 如果链表一为空，则只需要在后续加入链表二的数据
        if (!tail1) {
            while (tail2) {
                // 判断是否为第一次
                if (!head) {
                    head = tail = new ListNode(tail2.val)
                    tail2 = tail2.next
                } else {
                    tail.next = tail2;
                    tail = tail.next;
                    tail2 = tail2.next
                }
            }
            break;
        }

        // 如果链表二为空，则只需要在后续加入链表一的数据
        if (!tail2) {
            while (tail1) {
                // 判断是否为第一次
                if (!head) {
                    head = tail = new ListNode(tail1.val)
                    tail1 = tail1.next
                } else {
                    tail.next = tail1;
                    tail = tail.next;
                    tail1 = tail1.next
                }
            }
            break;
        }

        if (tail1.val < tail2.val) {
            if (!head) {
                head = tail = new ListNode(tail1.val)
                tail1 = tail1.next
            } else {
                tail.next = new ListNode(tail1.val)
                tail1 = tail1.next;
                tail = tail.next;
            }
        } else {
            if (!head) {
                head = tail = new ListNode(tail2.val)
                tail2 = tail2.next
            } else {
                tail.next = new ListNode(tail2.val)
                tail2 = tail2.next;
                tail = tail.next;
            }
        }
    }

    return head;
};