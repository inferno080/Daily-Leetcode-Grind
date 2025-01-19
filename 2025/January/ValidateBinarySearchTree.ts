/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// Time: O(n)    Space: O(h), O(n) for skewed
function isValidBST(root: TreeNode | null): boolean {
    const helper = (node : TreeNode, upper : number, lower : number) => {

        if(!node)
            return true;

        if(node.left) {
            if(node.left.val >= node.val)
                return false;
        }
        if(node.right) {
            if(node.right.val <= node.val)
                return false;
        }
        if(node.val <= lower || node.val >= upper)
            return false;
        
        let l =  helper(node.left, node.val, lower);
        let r = helper(node.right, upper, node.val);

        return l && r;
    }
    return helper(root, Infinity, -Infinity);
};
