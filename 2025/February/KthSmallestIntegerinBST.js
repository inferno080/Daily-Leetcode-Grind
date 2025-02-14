// My Solution : Not Optimal
// Time : O(N log N + k log N) and Space : O(2N) including recussion stack

    kthSmallest(root, k) {
        let pq = new MinPriorityQueue();
        let dfs = (root) => {
            if(!root)
                return 
            else {
                dfs(root.left);
                dfs(root.right);
                pq.push(root.val);
            }
        }
        dfs(root);
        let ans = 0;
        while(k--) {
            ans = pq.pop();
        }
        return ans;
    }

// Optimal: Time O(N) and Space: O(1) - Morris Traversal

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let curr = root;
    
        while (curr) {
            if (!curr.left) {
                k--;
                if (k === 0) return curr.val;
                curr = curr.right;
            } else {
                let pred = curr.left;
                while (pred.right && pred.right !== curr) 
                    pred = pred.right;
                
                if (!pred.right) {
                    pred.right = curr;
                    curr = curr.left;
                } else {
                    pred.right = null;
                    k--;
                    if (k === 0) return curr.val;
                    curr = curr.right;
                }
            }
        }
        return -1;
    }
}
