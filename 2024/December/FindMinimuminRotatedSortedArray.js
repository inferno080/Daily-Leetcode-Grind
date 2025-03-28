// Time : O(log N)     Space : O(1)
findMin(nums) {
        let n = nums.length
        let left = 0;
        let right = n-1;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return nums[left];
    }
