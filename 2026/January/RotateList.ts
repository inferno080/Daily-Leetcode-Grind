// Time: O(n), Space: O(1)
function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(!head || !head.next)
        return head;
    let ptr1: ListNode | null = head;
    let ptr2: ListNode | null = head;
    let len: number = 0;
    while(ptr1){
        len += 1;
        ptr1 = ptr1.next;
    }
    ptr1 = head;
    for(let i: number = 0; i < ((k >= len) ? k%len : k); i++) {
        ptr2 = ptr2.next;
    }
    while(ptr2.next){
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    ptr2.next = head;
    let res: ListNode | null = ptr1.next;
    ptr1.next = null;
    return res;
};
