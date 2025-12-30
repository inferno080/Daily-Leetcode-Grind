/**
Time: O(4*m*n) := O(m*n)
Space: O(1)
 */
function setZeroes(matrix: number[][]): void {

    let firstCol = 1;
    
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0){
                if(j !== 0){
                    matrix[0][j] = 0;
                } else {
                    firstCol = 0;
                }
                matrix[i][0] = 0;
            }
        }
    }

    for(let j = 1; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0){
            for(let i = 0; i < matrix.length; i++){
                matrix[i][j] = 0;
            }
        }
    }

    for(let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0){
            for(let j = 0; j < matrix[0].length; j++){
                matrix[i][j] = 0;
            }
        }  
    }

    if(firstCol === 0) {
        for(let i = 0; i < matrix.length; i++){
            matrix[i][0] = 0;
        }
    }
};
