// Time: O(n), Space: O(1) - OPTIMAL

function reversePartial(start: ListNode, end: ListNode | null, prev: ListNode|null): ListNode | null {
    let curr: ListNode | null = end;
    let head: ListNode = start;
    let temp: ListNode;
    while(head !== end) {
        temp = head.next;
        head.next = curr;
        curr = head;
        head = temp;
    }
    head = end ? end.next :  null;
    if(prev) 
        prev.next = curr;
    return curr;
}   

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {

    if(!head || !head.next || k === 1)
        return head;

    let end: ListNode | null = head;
    let start: ListNode | null = head;
    let prev: ListNode | null = null;
    let res: ListNode = start;
    let first = true;
    
    while(end) {
        for(let i: number = 0; i < k; i++) {
            if(!end.next && i !== k-1) {
                return res;
            }
            end = end ? end.next : null;
            if(first && i == k-2) {
                res = end;
                first = false;
            }
        }
        head = reversePartial(start, end, prev);
        prev = start;
        start = end;
    }
    return res;
};
