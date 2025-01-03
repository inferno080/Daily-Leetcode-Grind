// Time: O(log n)  Space: O(1)
class Solution {
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let mid;
        while(left <= right) {
            mid = Math.floor((left + right) / 2);
            if(nums[mid] === target)
                return mid;
            if(nums[left] <= nums[mid]){
                if(target > nums[mid] || target < nums[left])
                    left = mid + 1;
                else right = mid - 1;
            } else {
                if(target < nums[mid] || target > nums[right])
                    right = mid - 1;
                else left = mid + 1;
            }
        }
        return -1;
    }
}
