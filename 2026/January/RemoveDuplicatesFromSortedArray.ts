// Time: O(n) and Space: O(1)
function removeDuplicates(nums: number[]): number {
    if(nums.length <= 1) {
        return nums.length;
    }
    let idx = 0;
    let crawler = 0;
    while(crawler < nums.length) {
        while(crawler < nums.length && nums[crawler] === nums[idx]){
            crawler += 1;
        }
        idx += 1;
        nums[idx] = nums[crawler];
        crawler += 1;
    }
    return crawler > nums.length ? idx : idx + 1;
};
