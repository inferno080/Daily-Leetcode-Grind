
// Time:" O(log m + log n)   Space: O(1)
class Solution {

    searchMatrix(matrix, target) {
        let m = matrix.length;
        let n = matrix[0].length;

        if (m === 1 && n === 1) {
            return target === matrix[0][0];
        }

        let high = m - 1;
        if (m !== 1) {
            let low = 0;
            while (low <= high) {
                let mid = Math.floor((low + high) / 2);
                if (target < matrix[mid][0]) {
                    high = mid - 1;
                } else if (target === matrix[mid][0]) {
                    return true;
                } else {
                    low = mid + 1;
                }
            }
        }

        if (high < 0)
            return false;

        let left = 0;
        let right = n - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (target < matrix[high][mid]) {
                right = mid - 1;
            } else if (target === matrix[high][mid]) {
                return true;
            } else {
                left = mid + 1;
            }
        }

        return false;
    }
}
