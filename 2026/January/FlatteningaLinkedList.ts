// Space: O(n) and Time: O(K) + O(N × log K) = O(N × log K)
class PriorityQueue {
  constructor(comparator = (a, b) => a < b) {
    this.heap = [];
    this.compare = comparator;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this.heap[0];
  }

  push(value) {
    this.heap.push(value);
    this._siftUp(this.size() - 1);
  }

  pop() {
    if (this.isEmpty()) return undefined;

    const top = this.peek();
    const last = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = last;
      this._siftDown(0);
    }

    return top;
  }

  _parent(i) {
    return Math.floor((i - 1) / 2);
  }

  _left(i) {
    return i * 2 + 1;
  }

  _right(i) {
    return i * 2 + 2;
  }

  _siftUp(i) {
    let parent = this._parent(i);
    while (
      i > 0 &&
      this.compare(this.heap[i], this.heap[parent])
    ) {
      [this.heap[i], this.heap[parent]] =
        [this.heap[parent], this.heap[i]];
      i = parent;
      parent = this._parent(i);
    }
  }

  _siftDown(i) {
    const n = this.size();

    while (true) {
      let left = this._left(i);
      let right = this._right(i);
      let best = i;

      if (
        left < n &&
        this.compare(this.heap[left], this.heap[best])
      ) {
        best = left;
      }

      if (
        right < n &&
        this.compare(this.heap[right], this.heap[best])
      ) {
        best = right;
      }

      if (best === i) break;

      [this.heap[i], this.heap[best]] =
        [this.heap[best], this.heap[i]];
      i = best;
    }
  }
}

class Solution {
    flatten(root) {
        let pq = new PriorityQueue((a,b)=>a.data < b.data);
        
        let head = root;
        let dummy = new Node(-1);
        let tail = dummy;
        
        while(head) {
            pq.push(head);
            head = head.next;
        }
        
        while(pq.size() > 0) {
            let node = pq.pop();
            tail.bottom = node;
            tail = tail.bottom;
            
            if(node.bottom) {
                pq.push(node.bottom);
            }
        }
        
        tail.bottom = null;
        tail.next = null;
        return dummy.bottom;
    }
}

// Truly Optimal - Space: log(k) and Time: O(N × log K)

flatten(root) {
    if (!root) return null;
    
    // Collect all vertical lists
    let lists = [];
    let curr = root;
    while (curr) {
        lists.push(curr);
        curr = curr.next;
    }
    
    return this.mergeKLists(lists, 0, lists.length - 1);
}

mergeKLists(lists, left, right) {
    if (left > right) return null;
    if (left === right) return lists[left];
    
    let mid = Math.floor((left + right) / 2);
    let l1 = this.mergeKLists(lists, left, mid);
    let l2 = this.mergeKLists(lists, mid + 1, right);
    
    return this.mergeTwoLists(l1, l2);
}

mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    
    let dummy = new Node(-1);
    let tail = dummy;
    
    while (l1 && l2) {
        if (l1.data <= l2.data) {
            tail.bottom = l1;
            l1 = l1.bottom;
        } else {
            tail.bottom = l2;
            l2 = l2.bottom;
        }
        tail = tail.bottom;
    }
    
    // Attach remaining nodes
    tail.bottom = l1 ? l1 : l2;
    
    return dummy.bottom;
}
