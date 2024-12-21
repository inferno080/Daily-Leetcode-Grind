// Time : O(n),  Space : O(1)
class Solution {
    copyRandomList(head) {
        if (head === null) {
            return null;
        }

        let l1 = head;
        while (l1) {
            let l2 = new Node(l1.val);
            l2.next = l1.random;
            l1.random = l2;
            l1 = l1.next;
        }

        let newHead = head.random;

        l1 = head;
        while (l1) {
            let l2 = l1.random;
            l2.random = l2.next ? l2.next.random : null;
            l1 = l1.next;
        }

        l1 = head;
        while (l1) {
            let l2 = l1.random;
            l1.random = l2.next;
            l2.next = l1.next ? l1.next.random : null;
            l1 = l1.next;
        }

        return newHead;
    }
}
