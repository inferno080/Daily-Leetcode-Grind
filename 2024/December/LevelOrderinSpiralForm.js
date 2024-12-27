// Time: O(n)  Space: O(width)

findSpiral(root) {
    if (!root) return [];
    
    let result = [];
    let queue = [root];
    let leftToRight = false; // Indicates the current traversal direction

    while (queue.length > 0) {
        let levelSize = queue.length;
        let level = [];
        
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            if (leftToRight) {
                level.push(node.data); // Add element to the end
            } else {
                level.unshift(node.data); // Add element to the front for reverse order
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(...level);
        leftToRight = !leftToRight; // Toggle direction
    }
    
    return result;
}
