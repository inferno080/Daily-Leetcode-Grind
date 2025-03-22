
// Time: O(N) and Space: O(H)
function isValidBST(root: TreeNode | null): boolean {
    function isValidInRange(low: number, high:number, root: TreeNode | null) {
        if(!root)
            return true;
        if(!root.left && !root.right)
            return true;
        if((root.left && root.left.val < root.val &&  root.left.val  > low) && (root.right && root.right.val > root.val) &&  root.right.val < high) {
            return isValidInRange(low, root.val, root.left) && isValidInRange(root.val, high, root.right);
        } else if (!root.left && (root.right && root.right.val > root.val  &&  root.right.val < high)){
            return isValidInRange(root.val, high, root.right);
        } else if (!root.right && (root.left && root.left.val < root.val &&  root.left.val  > low)) {
            return isValidInRange(low, root.val, root.left);
        } else {
            console.log(low, high, root.val)
            return false;
        }
    }
    return isValidInRange(-Infinity, Infinity, root);
};
