// Time : O(n)        Space : O(1)
// Despite nested loops, we will only ever travers the entire array once
function minimumSwaps(arr) {
    let swaps = 0;
    for(let i = 0; i < arr.length; ++i) {
        while(arr[i] != i+1) {
            // can't swap with [[],[]] = [[],[]]. Messes up refs
            let valAtSwapIndex = arr[arr[i]-1];
            arr[arr[i]-1] = arr[i];
            arr[i] = valAtSwapIndex;
            swaps+=1;
        }
    }
    return swaps;
}
