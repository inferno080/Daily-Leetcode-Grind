// Time : O(M.N)    Space : O(M.N)

function pacificAtlantic(heights: number[][]): number[][] {
    if (heights.length === 0 || heights[0].length === 0) return [];

    let rows = heights.length;
    let cols = heights[0].length;
    let pacificReachable = Array.from({ length: rows }, () => Array(cols).fill(false));
    let atlanticReachable = Array.from({ length: rows }, () => Array(cols).fill(false));

    // DFS function
    function dfs(i: number, j: number, reachable: boolean[][], prevHeight: number) {
        if (i < 0 || i >= rows || j < 0 || j >= cols || reachable[i][j] || heights[i][j] < prevHeight) {
            return;
        }
        reachable[i][j] = true;
        dfs(i - 1, j, reachable, heights[i][j]);
        dfs(i + 1, j, reachable, heights[i][j]);
        dfs(i, j - 1, reachable, heights[i][j]);
        dfs(i, j + 1, reachable, heights[i][j]);
    }

    // Start DFS from Pacific boundary (top and left edges)
    for (let i = 0; i < rows; i++) {
        dfs(i, 0, pacificReachable, heights[i][0]);
    }
    for (let j = 0; j < cols; j++) {
        dfs(0, j, pacificReachable, heights[0][j]);
    }

    // Start DFS from Atlantic boundary (bottom and right edges)
    for (let i = 0; i < rows; i++) {
        dfs(i, cols - 1, atlanticReachable, heights[i][cols - 1]);
    }
    for (let j = 0; j < cols; j++) {
        dfs(rows - 1, j, atlanticReachable, heights[rows - 1][j]);
    }

    // Find cells that can reach both oceans
    let result: number[][] = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (pacificReachable[i][j] && atlanticReachable[i][j]) {
                result.push([i, j]);
            }
        }
    }

    return result;
}
