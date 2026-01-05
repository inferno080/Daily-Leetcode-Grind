// Time: O(log n + log m), Space: O(1) - Optimal

function searchMatrix(matrix: number[][], target: number): boolean {

    if(target < matrix[0][0] || target > matrix[matrix.length - 1][matrix[0].length -1])
        return false;
    if(target === matrix[0][0] || target === matrix[matrix.length - 1][matrix[0].length -1])
        return true;

    let low = 0;
    if(matrix.length > 1) {
        // find the relevant row by binary searching the rows
        let high = matrix.length - 1;
        if(matrix[high][0] === target)
            return true;
        else if (matrix[high][0] < target) {
            low = high;
        }
        else while(high - low > 1) {
            console.log("First ", matrix[low][0], matrix[high][0])
            let mid: number = low + Math.floor((high - low) / 2);
            if(matrix[mid][0] === target)
                return true;
            else if (matrix[mid][0] > target) {
                high = mid;
                continue;
            } else {
                low = mid;
                continue;
            }
        }
    }
    // find the relevant column
    let start = 0;
    let end = matrix[low].length - 1;
    if(matrix[low][end] === target)
        return true;
    while (start < end - 1) {
        console.log(matrix[low][start], matrix[low][end])
        let mid: number = start + Math.floor((end - start) / 2);
        if(matrix[low][mid] === target)
            return true;
        else if (matrix[low][mid] > target) {
            end = mid;
            continue;
        } else {
            start = mid;
            continue;
        }
    }
    return false;
};
