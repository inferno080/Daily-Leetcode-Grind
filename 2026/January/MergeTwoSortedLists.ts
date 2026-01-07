// Space: O(1), Time: O(m+n)
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let dummy = new ListNode(-1, list1);
    let start1 = list1;
    let start2 = list2;
    let mergedIdx = dummy;
    while(start1 && start2) {
        if(start1.val <= start2.val) {
            mergedIdx.next = start1;
            start1 = start1.next;
        } else {
            mergedIdx.next = start2;
            start2 = start2.next;
        }
        mergedIdx = mergedIdx.next;
    }
    while(start1) {
        mergedIdx.next = start1;
        start1 = start1.next;
        mergedIdx = mergedIdx.next;
    }
    while(start2) {
        mergedIdx.next = start2;
        start2 = start2.next;
        mergedIdx = mergedIdx.next;
    }
    return dummy.next;
};
