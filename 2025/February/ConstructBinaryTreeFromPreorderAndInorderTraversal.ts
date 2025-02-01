// Time & Space: O(N)
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const inorderMap = new Map<number, number>();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }
    
    function helper(preStart: number, preEnd: number, inStart: number, inEnd: number): TreeNode | null {
        if (preStart > preEnd) return null;
        
        const rootVal = preorder[preStart];
        const root = new TreeNode(rootVal);
        const inIndex = inorderMap.get(rootVal)!;
        const leftSize = inIndex - inStart;
        
        root.left = helper(preStart + 1, preStart + leftSize, inStart, inIndex - 1);
        root.right = helper(preStart + leftSize + 1, preEnd, inIndex + 1, inEnd);
        
        return root;
    }
    
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
}
