// Time: O(3n), Space: O(n)
function copyRandomList(head: _Node | null): _Node | null {
    let curr: _Node | null = head;
    let first: boolean = true;
    let new_head: _Node | null = null;

    while (curr) {
        let temp = new _Node(curr.val, curr.next, null);
        let next: _Node | null = curr.next;

        curr.next = temp;
        curr = next;

        if (first) {
            first = false;
            new_head = temp;
        }
    }
    
    curr = head;
    while (curr) {
        if (curr.random) {
            curr.next!.random = curr.random.next;
        }
        curr = curr.next!.next;
    }
    curr = head;
    let curr_old: _Node | null = new_head;

    while (curr && curr_old) {
        curr.next = curr_old.next;
        curr = curr.next;

        curr_old.next = curr ? curr.next : null;
        curr_old = curr_old.next;
    }

    return new_head;
}
