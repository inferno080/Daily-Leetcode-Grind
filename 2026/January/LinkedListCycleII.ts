// Time: O(2n) and Space: O(1) - Optimal (but only under LC constraints of node values being [-10^5, 10^5]
function detectCycle(head: ListNode | null): ListNode | null {
    // early exit
    if(!head || !head.next) return null;

    // modify list
    let UPPER_LIMIT: number = 100001;
    let ptr: ListNode | null = head;
    while(ptr) {
        if(ptr.val > UPPER_LIMIT || ptr.val < (-1 * UPPER_LIMIT))
            break;
        ptr.val = (ptr.val < 0) ? -1 * (Math.abs(ptr.val) + UPPER_LIMIT) : (ptr.val + UPPER_LIMIT);
        ptr = ptr.next;
    }
    // cleanup
    let second_pass = head;
    while(second_pass !== ptr ) {
        if(second_pass.val > UPPER_LIMIT)
            second_pass.val -= UPPER_LIMIT;
        else if (second_pass.val < -1 * UPPER_LIMIT)
            second_pass.val = ((second_pass.val * -1) - UPPER_LIMIT) * -1;
        second_pass = second_pass.next;
    }
    return ptr;
};

// Standard Solution - Same Complexities

// function detectCycle(head: ListNode | null): ListNode | null {
//     let slow = head, fast = head;
    
//     // Detect cycle
//     while(fast?.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//         if(slow === fast) break;
//     }
    
//     if(!fast?.next) return null; // No cycle
    
//     // Find entry point
//     slow = head;
//     while(slow !== fast) {
//         slow = slow.next;
//         fast = fast.next;
//     }
//     return slow;
// }
