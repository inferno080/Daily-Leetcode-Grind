// Time: O(2n), Space: O(1)
function findDuplicate(nums: number[]): number {
    let res = -1
    nums.forEach((num) => {
        if(nums[Math.abs(num)-1] > 0) {
            nums[Math.abs(num)-1] = - nums[Math.abs(num)-1];
        }
        else res = Math.abs(num);
    })
    nums.forEach((num) => {
       if(num < 0) num *= -1;
    })
    return res;
};
