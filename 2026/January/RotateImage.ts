// Time: O(1.5 n^2), Space: O(1)
function rotate(matrix: number[][]): void {
    let n: number = matrix.length;
    for(let i: number = 0; i < n; i++) {
        for(let j: number = i; j < n; j++) {
            if( i !== j) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }
    }
    for(let i: number = 0; i < n; i++) {
        for(let j: number = 0, k = n-1; j < k; j++, k--) {
            [matrix[i][j], matrix[i][k]] = [matrix[i][k], matrix[i][j]];
        }
    }
};
