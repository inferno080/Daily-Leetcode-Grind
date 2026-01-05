// Time: O(log n) and Space O(log n) - Both due to recursion
function helper(memo: Map<number, number>, x: number, n: number): number {
    if(memo.has(n))
        return memo.get(n);
    else {
        let res;
        if(n < 1) {
            res = 1/helper(memo, x, n * -1);
        } else {
            let partialRes = myPow(x, Math.floor(n/2));
            res = (n%2 === 0) ? partialRes * partialRes : partialRes * partialRes * x;
        }
        memo.set(n, res);
        return res;
    }
}

function myPow(x: number, n: number): number {
    let memo = new Map<number, number>();
    memo.set(0,1);
    memo.set(1,x);
    return helper(memo, x, n);
};
