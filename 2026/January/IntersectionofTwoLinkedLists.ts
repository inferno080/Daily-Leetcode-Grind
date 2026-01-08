// Time: O(min(m, n)) + O(|m - n|) + O(m + n)
// Space: O(1)

function lengthLL(head: ListNode | null): number {
    let l: ListNode | null = head;
    let c: number = 0;
    while(l){
        c++;
        l = l.next;
    }
    return c;
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let len1: number = lengthLL(headA);
    let len2: number = lengthLL(headB);
    let larger: ListNode | null, smaller: ListNode | null;
    if(len1 > len2) {
        larger = headA;
        smaller = headB;
    } else {
        larger = headB;
        smaller = headA;
    }
    let diff: number = Math.abs(len1 - len2);
    while(diff--) {
        larger = larger.next;
    }
    while(smaller) {
        if(larger === smaller)
            return smaller;
        else {
            larger = larger.next;
            smaller = smaller.next;
        }
    }
    return smaller;
};
