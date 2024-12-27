// Time: O(n)  Space : O(n) 

boundaryTraversal(root) {
        // code here
        let dfsLeaf = (root, answer) => {
            if(!root.left && !root.right){
                answer.push(root.data)
            }
            if(root.left)
                dfsLeaf(root.left, answer);
            if(root.right)
                dfsLeaf(root.right, answer);
        }
        let dfsRight = (root, rev) => {
            rev.push(root.data);
            if(root.right) {
                dfsRight(root.right, rev)
            } else if (root.left) {
                dfsRight(root.left, rev);
            }
        }
        let dfsLeft = (root, answer) => {
            answer.push(root.data);
            if(root.left) {
                dfsLeft(root.left, answer);
            } else if (root.right) dfsLeft(root.right, answer);
        }
        if(!root)
            return [];
        if(!root.right && !root.left)
            return [root.data]
        let answer = [];
        // left boundary
        if(root.left)
            dfsLeft(root, answer);
        else answer.push(root.data)
        // leaf nodes
        if(answer.length !== 1)
            answer.pop();
        dfsLeaf(root, answer);
        // right boundary
        if(root.right) {
            let rev = [];
            answer.pop();
            dfsRight(root.right, rev);
            for(let i = rev.length - 1; i >= 0; i--) {
                answer.push(rev[i]);
            }
        }
        return answer;
    }
