// Space: O(1) and Time: O(n^2)
function substrCount(n: number, s: string): number {
    let res = 0;
    for(let i = 0;  i < n; i++) {
        res++;
        for(let j = i + 1; j < n; j++) {
            if(s.charAt(i) === s.charAt(j)) {
                res++;
            } else {
                if( 2 * j - i < n) {
                    if(s.substring(i,j) === s.substring(j+1, 2*j - i+1)) {
                        res++
                    }
                    break;
                }  else break;
            }
        }
        
    }
    return res;
}
