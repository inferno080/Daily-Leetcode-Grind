// Time: O(n*m)  & Space: O(1)
spiralOrder(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return [];
    
    let rows = matrix.length;
    let cols = matrix[0].length;
    let left = 0, right = cols - 1, top = 0, bottom = rows - 1;
    let ans = [];

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            ans.push(matrix[i][right]);
        }
        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                ans.push(matrix[bottom][i]);
            }
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                ans.push(matrix[i][left]);
            }
            left++;
        }
    }
    
    return ans;
}
