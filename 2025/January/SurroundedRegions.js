//  Space & Time : O((m.n)^2)
class Solution {
    solve(board) {
        let visited = new Set();
        let bfs = (i,j) => {
            visited.add(`${i},${j}`);
            if(i + 1 >= board.length || i - 1 < 0 || j + 1 >= board[0].length || j -1 < 0){
                visited.delete(`${i},${j}`);
                return false;
            }

            if(board[i+1][j] !== "X") {
                if(!visited.has(`${i+1},${j}`)){
                    const temp = bfs(i+1, j);
                    if(!temp){
                        visited.delete(`${i},${j}`);
                        return temp;
                    }
                }
            }
            
            if(board[i-1][j] !== "X") {
                if(!visited.has(`${i-1},${j}`)){
                    const temp = bfs(i-1, j);
                    if(!temp){
                        visited.delete(`${i},${j}`);
                        return temp;
                    }
                }
            }

            if(board[i][j+1] !== "X") {
                if(!visited.has(`${i},${j+1}`)){
                    const temp = bfs(i, j+1);
                    if(!temp){
                        visited.delete(`${i},${j}`);
                        return temp;
                    }
                }
            }
        
            if(board[i][j-1] !== "X") {
                if(!visited.has(`${i},${j-1}`)) {
                    const temp = bfs(i, j-1);
                    if(!temp){
                        visited.delete(`${i},${j}`);
                        return temp;
                    }
                }
            }
            visited.delete(`${i},${j}`);
            return true;
        }
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j< board[0].length; j ++) {
                if(board[i][j] === "O"){
                    const temp = bfs(i,j);
                    if(temp)
                        board[i][j] = "X";
                }
            }
        }
    }
}

// Optimized : CHATGPT
// Time: O(m,n)  Space: O(min(m,n))
class Solution {
    solve(board) {
        let m = board.length;
        let n = board[0].length;
        if (m === 0 || n === 0) return;

        let directions = [
            [1, 0],  // Down
            [-1, 0], // Up
            [0, 1],  // Right
            [0, -1]  // Left
        ];

        // Helper function for BFS
        const bfs = (i, j) => {
            let queue = [[i, j]];
            board[i][j] = 'T'; // Mark as temporary

            while (queue.length > 0) {
                let [x, y] = queue.shift();

                for (let [dx, dy] of directions) {
                    let nx = x + dx;
                    let ny = y + dy;

                    if (
                        nx >= 0 &&
                        nx < m &&
                        ny >= 0 &&
                        ny < n &&
                        board[nx][ny] === 'O'
                    ) {
                        board[nx][ny] = 'T'; // Mark as temporary
                        queue.push([nx, ny]);
                    }
                }
            }
        };

        // Step 1: Perform BFS from all border cells with 'O'
        for (let i = 0; i < m; i++) {
            if (board[i][0] === 'O') bfs(i, 0);
            if (board[i][n - 1] === 'O') bfs(i, n - 1);
        }
        for (let j = 0; j < n; j++) {
            if (board[0][j] === 'O') bfs(0, j);
            if (board[m - 1][j] === 'O') bfs(m - 1, j);
        }

        // Step 2: Flip all remaining 'O's to 'X' and 'T's back to 'O'
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === 'O') board[i][j] = 'X';
                if (board[i][j] === 'T') board[i][j] = 'O';
            }
        }
    }
}

