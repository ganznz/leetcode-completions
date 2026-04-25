/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const seenSet = new Set();
    let node = head, prevNode = null;

    while (node) {
        if (seenSet.has(node.val)) {
            prevNode.next = node.next;
        } else {
            seenSet.add(node.val);
            prevNode = node;
        }
        node = node.next;
    }

    return head;
};

deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2))));
// [1,2]

deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))));
// [1,2,3]

deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(1))));
// [1]