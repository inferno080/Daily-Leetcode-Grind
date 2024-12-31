// Time : O(m+n)    Space: O(1)
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let dummy = new ListNode(-1);
    let curr = dummy;
    let ptr1 = list1;
    let ptr2 = list2;
    while(ptr1 && ptr2) {
        if(ptr1.val < ptr2.val) {
            curr.next = ptr1;
            ptr1 = ptr1.next;
        } else {
            curr.next = ptr2;
            ptr2 = ptr2.next;
        }
        curr = curr.next;
    }
    if(ptr1)
        curr.next = ptr1;
    if(ptr2)
        curr.next = ptr2;
    return dummy.next;
};
