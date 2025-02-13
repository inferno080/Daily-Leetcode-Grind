// recursive
// O(2^n) time and O(1) space
class Solution {
    lengthOfLIS(nums) {
        let maxLen = -1;
        let helper = (idx, len, curr) => {
            if (idx >= nums.length) {
                maxLen = Math.max(maxLen, len);
                return;
            }
            if (curr === null || nums[idx] > curr) {
                helper(idx + 1, len + 1, nums[idx]);
            }
            helper(idx + 1, len, curr);
        };
        helper(0, 0, null)
        return maxLen;
    }
}
// Binary Search is most optimal
// O(nlogn) Time and O(n) Space
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const dp = [];
        dp.push(nums[0]);

        let LIS = 1;
        for (let i = 1; i < nums.length; i++) {
            if (dp[dp.length - 1] < nums[i]) { 
                dp.push(nums[i]);
                LIS++;
                continue;
            }

            let left = 0, right = dp.length - 1;
            while (left < right) {
                const mid = Math.floor((left + right) / 2);
                if (dp[mid] < nums[i]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            dp[left] = nums[i]; 
        }

        return LIS;
    }
}
