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
// DP is most optimal
