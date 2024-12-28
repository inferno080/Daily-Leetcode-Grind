'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

// Define a TreeNode class for the BST
class TreeNode {
    data: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Function to find the Lowest Common Ancestor in a BST
function findLCA(root: TreeNode | null, v1: number, v2: number): TreeNode | null {
    return dfs(root, v1, v2);
}

function dfs(root : TreeNode, v1 : number, v2: number) : TreeNode {
    if(root.data === v1 || root.data === v2)
        return root;
    else if((v1 > root.data && v2 < root.data) || (v2 > root.data && v1 < root.data))
        return root;
    else if (v1 > root.data && v2 > root.data)
        return dfs(root.right, v1, v2);
    else if (v1 < root.data && v2 < root.data)
        return dfs(root.left, v1, v2)
}

function main() {
    const n: number = parseInt(readLine());
    const values: number[] = readLine()
        .split(' ')
        .map(Number);
    const [v1, v2] = readLine()
        .split(' ')
        .map(Number);

    // Create the BST
    let root: TreeNode | null = null;

    // Helper function to insert a value into the BST
    const insert = (node: TreeNode | null, data: number): TreeNode => {
        if (node === null) return new TreeNode(data);
        if (data < node.data) node.left = insert(node.left, data);
        else node.right = insert(node.right, data);
        return node;
    };

    // Build the BST
    for (const value of values) {
        root = insert(root, value);
    }

    // Call the LCA function
    const lcaNode = findLCA(root, v1, v2);

    // Output the result
    if (lcaNode) {
        console.log(lcaNode.data);
    } else {
        console.log('LCA not found');
    }
}
``
