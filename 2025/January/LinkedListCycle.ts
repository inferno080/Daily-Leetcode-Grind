// Time: O(n)   Space: O(1)
function hasCycle(head: ListNode | null): boolean {
    let fast = head;
    let slow = head;
    while(slow && fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast)
            return true;
    }
    return false;
};
