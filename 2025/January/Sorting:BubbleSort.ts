// Time: O(n^2)    Space: O(1)
function countSwaps(a: number[]): void {
   let c = 0;
   for(let i = 0; i < a.length; i++) {
    for(let j = i; j < a.length; j++) {
        if(a[i] > a[j]) {
            c++;
            [a[i], a[j]] = [a[j], a[i]];
        }
    }
   }
   console.log(`Array is sorted in ${c} swaps.`);  
   console.log("First Element:", a[0]); 
   console.log("Last Element:", a[a.length - 1]);   
}
