// O(1) - get & put

class DoublyLinkedList {
    private head: Node
    private tail: Node
    constructor() {
        this.head = new Node(-1, -1);
        this.tail = new Node(-1, -1);
        this.head.setNext(this.tail);
        this.tail.setPrev(this.head);
    }

    addFirst(x: Node) {
        x.setNext(this.head.getNext());
        x.getNext().setPrev(x);
       this.head.setNext(x);
        x.setPrev(this.head);
    }

    removeLast() {
        let deletedNode = this.tail.getPrev()
        this.tail.setPrev(deletedNode.getPrev());
        this.tail.getPrev().setNext(this.tail);
        return deletedNode;
    }

    removeMiddle(x: Node){
        let next : Node = x.getNext();
        x.getPrev().setNext(next)
        next.setPrev(x.getPrev())
    }
}

class Node {
    private next : Node | null
    private prev : Node
    private val : number
    private key : number
    constructor(val : number, key: number) {
        this.next = null;
        this.prev = null;
        this.val = val;
        this.key = key;
    }

    setNext(x: Node) {
        this.next = x;
    }

    setPrev(x: Node) {
        this.prev = x;
    }

    getValue() {
        return this.val;
    }

    getPrev() {
        return this.prev;
    }

    getNext() {
        return this.next;
    }

    getKey() {
        return this.key;
    }
}

class LRUCache {
    private hashMap : Map<number, Node>
    private dll : DoublyLinkedList
    private capacity: number

    constructor(capacity: number) {
        this.hashMap = new Map<number, Node>();
        this.dll = new DoublyLinkedList();
        this.capacity = capacity;
    }

    get(key: number): number {
        if(this.hashMap.has(key)) {
            let existingNode : Node = this.hashMap.get(key);
            this.dll.removeMiddle(existingNode);
            this.dll.addFirst(existingNode);
            return existingNode.getValue();
        } else {
            return -1;
        }
    }

    put(key: number, value: number): void {
        let n = new Node(value, key);
        if(this.hashMap.has(key)) {
            this.dll.removeMiddle(this.hashMap.get(key));
        } else {
            if(this.capacity  === this.hashMap.size) {
                this.hashMap.delete(this.dll.removeLast().getKey());
            }
        }
        this.dll.addFirst(n);
        this.hashMap.set(key, n);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
