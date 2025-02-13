// Time: O(2 n^2) and Space: O(1)
class Solution {
    rotate(matrix) {
        let n = matrix.length;
        // swap across diagonal
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                if(i < j) {
                    [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
                }
            }
        }
        // swap across middle
        for(let row of matrix) {
            row = row.reverse();
        }
    }
}
