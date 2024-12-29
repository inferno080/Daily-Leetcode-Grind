// Time: O(nlogn)  Space: O(1)
function maximumToys(prices: number[], k: number): number {
    // Write your code here
    let ans = 0;
    prices.sort((a,b)=>a-b);
    for(let p of prices) {
        if(k <= 0)
            break;
        else k -= p;
        ans+= 1;
    }
    return ans-1;
}
