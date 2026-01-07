// Time: O(n), Space: O(1)
function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    let curr = head;
    let temp;
    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
};
