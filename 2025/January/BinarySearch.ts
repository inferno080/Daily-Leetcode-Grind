// Time: O(logn)    Space: O(1)
function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        let mid = Math.floor((left+right)/2);
        if(nums[mid] === target)
            return mid;
        else if (nums[mid]  > target) right = mid - 1;
        else left = mid + 1;
    }
    return -1;
};
