// Time: O(2n + 2m + (n-1 * m-1)) and Space: O(1)
class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {

        console.log(matrix.length, matrix[0].length)

        let isFirstRowZero = false;
        let isFirstColZero = false;

        for(let i = 0; i < matrix[0].length; i++) {
            if(matrix[0][i] === 0)
                isFirstRowZero = true;
        }

        for(let i = 0; i < matrix.length; i++) {
            if(matrix[i][0] === 0)
                isFirstColZero = true;
        }


        for(let i = 1; i < matrix.length; i++) {
            for(let j = 1; j < matrix[0].length; j++) {
                if(matrix[i][j] === 0){
                    matrix[0][j] = 0;
                    matrix[i][0] = 0;
                }
            }
        }

        for(let i = 0; i < matrix[0].length; i++) {
            if(matrix[0][i] === 0){
                if( i > 0)
                    for(let j = 0; j < matrix.length; j++) {
                        matrix[j][i] = 0;
                    }
                else isFirstColZero = true;
            }
        }
        for(let i = 0; i < matrix.length; i++) {
            if(matrix[i][0] === 0){
                if(i > 0)
                    for(let j = 0; j < matrix[0].length; j++) {
                        matrix[i][j] = 0;
                    }
                else isFirstRowZero = true;
            }
        }

        if(isFirstRowZero) {
            for(let i = 0; i < matrix[0].length; i++) {
                matrix[0][i] = 0;
            }
        }
        if(isFirstColZero) {
            for(let i = 0; i < matrix.length; i++) {
                console.log(matrix[i][0])
                matrix[i][0] = 0;
            }
        }

    }
}
