// Time: O(n), Space: O(1)
function findMaxConsecutiveOnes(nums: number[]): number {
    let max_ones: number = 0;
    let count: number = 0;
    for(let i: number = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            count += 1;
        } else {
            max_ones = Math.max(max_ones, count);
            count = 0;
        }
    }
    return Math.max(max_ones, count);
};
