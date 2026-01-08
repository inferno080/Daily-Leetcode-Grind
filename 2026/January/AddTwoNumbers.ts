// Space: O(1), Time: O(m + n + Max(m,n))

function findlen(l: ListNode | null) : number {
    let c = 0;
    while(l) {
        c++;
        l = l.next;
    }
    return c;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let len1 = findlen(l1);
    let len2 = findlen(l2);
    let largerList: ListNode | null, smallerList: ListNode | null;
    if (len1 > len2){
        largerList = l1;
        smallerList = l2; 
    } else {
        largerList = l2;
        smallerList = l1; 
    }
    let carry = 0;
    let digitSum = 0;
    let res = largerList;
    let tail = largerList;
    
    while(smallerList) {
        digitSum = (smallerList.val + largerList.val + carry)
        if (digitSum >= 10) {
            carry = 1;
            digitSum %= 10;
        } else carry = 0;
        smallerList = smallerList.next;
        largerList.val = digitSum;
        tail = largerList;
        largerList = largerList.next;
    }
    while(largerList) {
        digitSum = (largerList.val + carry)
        if (digitSum >= 10) {
            carry = 1;
            digitSum %= 10;
        } else carry = 0;
        largerList.val = digitSum;
        tail = largerList;
        largerList = largerList.next;
    }
    if(carry) {
        tail.next = new ListNode(1, null);
    }
    return res;
};
