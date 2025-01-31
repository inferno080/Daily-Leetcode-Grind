// O(n) Time and O(1) space
function middleNode(head: ListNode | null): ListNode | null {
    if(!head || !head.next)
        return head;
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return fast.next ? slow.next : slow;
};
