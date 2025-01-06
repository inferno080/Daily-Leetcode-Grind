// Time: O(min(m,n))    Space: O(1)
function uniquePaths(m: number, n: number): number {
    let ans = 1;
    for (let i=m+n-2, j=1; i>=(m>n?m:n); i--, j++)
        ans *= i / j;
    return ans;
};
