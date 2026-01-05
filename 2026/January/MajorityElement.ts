
// Optimal - Boyer–Moore Voting Algorithm
// Time: O(n) and Space: O(1)

function majorityElement(nums: number[]): number {
    let counter = 0;
    let candidate = 0;
    nums.forEach((num: number, idx: number) => {
        if(counter === 0)
            candidate = num;
        counter += (num === candidate) ? 1 : -1
    })
    return candidate;
};
