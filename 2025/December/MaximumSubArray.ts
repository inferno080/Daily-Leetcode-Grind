// Time: O(n), Space: O(1)
function maxSubArray(nums: number[]): number {
    let globalMax: number = Number.MIN_SAFE_INTEGER;
    let currentMax: number = Number.MIN_SAFE_INTEGER;

    for(let num of nums) {
        currentMax = Math.max(currentMax + num, num);
        globalMax = Math.max(currentMax, globalMax);
    }
    return globalMax;
};
