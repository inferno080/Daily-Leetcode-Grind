// Time: O(3*m*n)    Space: O(1)
function orangesRotting(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const bfsRot = (i,j) => {
        if(i - 1 >= 0) {
            if(grid[i-1][j] === 1) {
                grid[i-1][j] = 3;
            }
        }
        if(i + 1 < m) {
            if(grid[i+1][j] === 1) {
                grid[i+1][j] = 3;
            }
        }
        if(j + 1 < n) {
            if(grid[i][j+1] === 1) {
                grid[i][j+1] = 3;
            }
        }
        if(j - 1 >= 0) {
            if(grid[i][j-1] === 1) {
                grid[i][j-1] = 3;
            }
        }
    }
    let prevFreshOranges = 0;
    let currentFreshOranges = 0;
    let counter = 0;

    while(true) {

        for(let i = 0; i<m; i++) {
            for(let j = 0; j <n; j++) {
                if(grid[i][j] === 2) {
                  bfsRot(i,j);
                }
            }
        }

        for(let i = 0; i<m; i++) {
            for(let j = 0; j <n; j++) {
                if(grid[i][j] === 1 || grid[i][j] === 3) {
                  currentFreshOranges += 1;
                }
            }
        }
        if((prevFreshOranges === currentFreshOranges) && (currentFreshOranges > 0))
            return -1;
        if(currentFreshOranges === 0)
            return counter;

        counter++;

        for(let i = 0; i<m; i++) {
            for(let j = 0; j <n; j++) {
                if(grid[i][j] === 3) {
                  grid[i][j] = 2;
                }
            }
        }  
        prevFreshOranges = currentFreshOranges;
        currentFreshOranges = 0;
    }
    return -1;
};
