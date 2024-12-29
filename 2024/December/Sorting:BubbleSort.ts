function countSwaps(a: number[]): void {
    // Write your code here
    let ans = 0;
    for(let i = 0; i < a.length; i++) {
        for (let j = i+1; j < a.length; j++) {
            if(a[j] < a[i]){
                [a[i], a[j]] = [a[j], a[i]];
                ans++;
            }
        }
    }
    console.log("Array is sorted in", ans, "swaps.");
    console.log("First Element:", a[0]);
    console.log("Last Element:", a[a.length-1]);
}
