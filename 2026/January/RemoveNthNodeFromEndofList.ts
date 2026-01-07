// Time: O(n), Space: O(1)
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let lead = head;
    let dummy = new ListNode(-1, head);
    let curr = dummy;
    while(n--) {
        lead = lead.next;
    }
    while(lead) {
        lead = lead.next;
        curr = curr.next;
    }
    curr.next = curr.next.next;
    return dummy.next;
};
