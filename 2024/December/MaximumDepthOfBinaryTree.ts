// Time: O(n)   Space: O(width)
// Note that dfs approach technically would have better space complexity due to implicit level storage.
interface QueueNode {
    node: TreeNode,
    level : number
}

function maxDepth(root: TreeNode | null): number {
    if(!root)
        return 0;
    let queue : QueueNode[] = [{node : root, level: 1}]
    let queueFront = 0;
    let maxDepth = 1;
    while(queueFront !== queue.length) {
        let x : QueueNode = queue[queueFront++];
        maxDepth = Math.max(maxDepth, x.level);
        if(x.node.left) {
            queue.push({node: x.node.left, level : x.level + 1})
        }
        if(x.node.right) {
            queue.push({node: x.node.right, level : x.level + 1})
        }
    }
    return maxDepth;
};
