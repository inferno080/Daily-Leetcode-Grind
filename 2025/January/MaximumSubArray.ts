// O(n) Time and O(1) Space
function maxSubArray(nums: number[]): number {
    let max_sum = nums[0];
    let curr_sum = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > curr_sum + nums[i])
            curr_sum = nums[i];
        else curr_sum += nums[i];
        max_sum = Math.max(max_sum, curr_sum);
    }
    return max_sum;
}
