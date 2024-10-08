// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
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
var addTwoNumbers = function (l1, l2) {
    const root = new ListNode();
    let currentNode = root,carry = 0;

    while (l1 || l2 || carry) {
        const l1Val = l1?.val || 0;
        const l2Val = l2?.val || 0;
        const sum = l1Val + l2Val + carry;
        carry = Math.floor(sum / 10);

        currentNode.next = new ListNode(sum % 10);
        currentNode = currentNode.next;
       
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    return root.next;
};
