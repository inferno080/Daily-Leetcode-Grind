// All operations run in O(word.length) time and total data structure space is : O(node_count * 26)
class Node {
    constructor() {
        this.arr = new Map();
        this.isEnd = false;
    }
}
class PrefixTree {
    constructor() {
        this.root = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let x = word.charAt(i);
            if(!curr.arr.has(x))
                curr.arr.set(x, new Node());
            curr = curr.arr.get(x);
        }
        curr.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let x = word.charAt(i);
            if(!curr.arr.has(x))
                return false;
            else curr = curr.arr.get(x);
        }
        return curr.isEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;
        for(let i = 0; i < prefix.length; i++) {
            let x = prefix.charAt(i);
            if(!curr.arr.has(x))
                return false;
            else curr = curr.arr.get(x);
        }
        return true;
    }
}
