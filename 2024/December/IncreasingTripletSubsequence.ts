// Time: O(n)       Space: O(1)
function increasingTriplet(nums: number[]): boolean {
    let seq = [Infinity, Infinity];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] <= seq[0])
            seq[0] = nums[i];
        else if(nums[i] <= seq[1])
            seq[1] = nums[i]
        else return true;
    } return false;
};
