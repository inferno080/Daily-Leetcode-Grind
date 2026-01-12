// Time: O(1.5 n), Space: O(1)
function reverseLL(head: ListNode | null): ListNode | null {
    let curr: ListNode | null = head;
    let prev: ListNode | null = null;
    let temp: ListNode | null;
    while(curr) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}

function isPalindrome(head: ListNode | null): boolean {
    if(!head || !head.next)
        return true;
    let ptr1: ListNode | null = head;
    let ptr2: ListNode | null = head;
    while(ptr1 && ptr1.next) {
        ptr1 = ptr1.next.next;
        ptr2 = ptr2.next;
    }
    ptr1 = head;
    ptr2 = reverseLL(ptr2);
    while(ptr2) {
        if(ptr1.val !== ptr2.val)
            return false;
        else {
            ptr1 = ptr1.next;
            ptr2 = ptr2.next;
        }
    }
    return true;
};
