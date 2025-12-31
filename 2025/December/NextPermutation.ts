// Time: O(3n) and O(1) Space
function nextPermutation(nums: number[]): void {
    let swapIndex = -1;
    for(let i: number = nums.length - 2; i >= 0; i--) {
        if(nums[i] < nums[i+1]){
            swapIndex = i;
            break;
        }
    }
    for(let i: number = nums.length - 1; i > swapIndex && swapIndex >= 0; i--) {
        if(nums[i] <= nums[swapIndex]){
            continue;
        } else {
            [nums[i], nums[swapIndex]] =  [nums[swapIndex], nums[i]];
            break;
        }
    }
    for(let i: number = swapIndex + 1, j: number = nums.length -1; i < j; i++, j--) {
        [nums[i], nums[j]] =  [nums[j], nums[i]];
    }
};
