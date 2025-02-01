// Time : O(2n)        Space : O(1)
function minimumBribes(q: number[]): void {
    let res = 0;
    for(let i = 0; i < q.length; i ++) {
        if(q[i] > i+3){
            console.log("Too chaotic")
            return;
        }
        else {
            for (let j = Math.max(0, q[i] - 2); j < i; j++) {
                if (q[j] > q[i]) {
                    res++;
                }
            }
        }
    }
    console.log(res)
}
