/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const length = lists.length;
    if (!length) return null;
    const arr = [];
    // 将链表摊开成数组
    for (let i = 0; i < length; i++) {
        let head = lists[i];
        let tail = head;
        const arrI = []
        while (tail) {
            arrI.push(tail.val);
            tail = tail.next;
        }
        arr.push(...arrI);
    }
    // 将数组排序为升序
    arr.sort((a, b) => a - b);
    // 定义头指针
    let head = null;
    // 初始化当前节点；
    let tail = head;
    // 遍历arr数组，生成链表
    for (let i = 0; i < arr.length; i++) {
        // 头指针为空时，创建节点为头指针
        if (!head) {
            head = tail = new ListNode(arr[i]);
            continue;
        }
        tail.next = new ListNode(arr[i]);
        tail = tail.next;
    }

    return head;
};