type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let curr = init;
    for(let x of nums) {
        curr = fn(curr, x);
    }
    return curr;
};
