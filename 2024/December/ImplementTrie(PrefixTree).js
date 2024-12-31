// Time complexity: O(word.length) for each function call.
// Space complexity: O(no_nodes * 26)

class TrieNode {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }
    
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur = this.root;
        for (let c of word) {
            if (!cur.children.has(c)) {
                cur.children.set(c, new TrieNode());
            }
            cur = cur.children.get(c);
        }
        cur.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cur = this.root;
        for (let c of word) {
            if (!cur.children.has(c)) {
                return false;
            }
            cur = cur.children.get(c);
        }
        return cur.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur = this.root;
        for (let c of prefix) {
            if (!cur.children.has(c)) {
                return false;
            }
            cur = cur.children.get(c);
        }
        return true;
    }
}
