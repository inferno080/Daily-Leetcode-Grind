// startegy pattern
//open-close principle
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const res = []; 
    for(let i in arr) {
        res.push(fn(arr[i], Number(i)));
    }
    return res;
};
