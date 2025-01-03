// Time: O(n)    Space: O(1)
hasCycle(head) {
        let slow = head;
        let fast = head;
        while(slow.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
            if(slow === fast)
                return true;
        }
        return false;
    }
