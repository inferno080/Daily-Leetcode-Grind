// Time and Space both O(n^2)

function generate(numRows: number): number[][] {
    if(numRows == 1)
        return [[1]];
    if(numRows == 0)
        return [];

    let result: number[][] = [[1], [1,1]];
    if(numRows == 2)
        return result;

    numRows -= 2;

    while(numRows-- > 0){
        let lastArr: number[] = result[result.length - 1];
        let newArr: number[] = [1];
        for(let i = 0; i < lastArr.length - 1; i++) {
            newArr.push(lastArr[i] + lastArr[i+1]);
        }
        newArr.push(1);
        result.push(newArr);
    }
    return result;
};
