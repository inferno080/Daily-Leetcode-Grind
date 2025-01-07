// Time: O(h) : h = n for skewed trees, logn for balanced; and Space O(1)    
findCeil(root, input) {
    // your code here
    let curr = root;
    let min = 1000001;
    while (curr) {
        if((curr.data === input)) {
            return curr.data
        }
        if(curr.data > input) {
            min = Math.min(curr.data, min);
            if(curr.left)
                curr = curr.left;
            else return curr.data;
        } else curr = curr.right;
    }
    return min === 1000001 ? -1 : min;
}
