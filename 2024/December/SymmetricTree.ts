// Time : O(n)    Space : O(n)
// See old submissions for recursive approach and bfs approach
function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true;

    const queue: (TreeNode | null)[] = [root.left, root.right];

    while (queue.length > 0) {
        const t1 = queue.shift();
        const t2 = queue.shift();

        if (!t1 && !t2) continue;
        if (!t1 || !t2 || t1.val !== t2.val) return false;

        queue.push(t1.left, t2.right, t1.right, t2.left);
    }

    return true;
}
