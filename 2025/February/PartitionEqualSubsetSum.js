
// Optimal -  (O(n * sum/2) Time, O(sum/2) Space)
// Mine - O(2^n) Time, O(n) space : Call stack
function canPartition(nums) {
    let fullArraySum = nums.reduce((acc, num) => acc + num, 0);
    
    // If the total sum is odd, we cannot partition it into two equal subsets
    if (fullArraySum % 2 !== 0) return false;
    
    let target = fullArraySum / 2;
    let dp = new Array(target + 1).fill(false);
    dp[0] = true;  // Base case: A subset sum of 0 is always possible

    for (let num of nums) {
        for (let sum = target; sum >= num; sum--) {
            dp[sum] = dp[sum] || dp[sum - num];
        }
    }
    
    return dp[target];
}

// Mine
class Solution {
    canPartition(nums) {
        if(nums.length <= 1)
            return false;
        let fullArraySum = 0;
        for(let n of nums)
            fullArraySum += n;
        let helper = (idx, subArraySum) => {
            if(idx > nums.length - 1)
                return false;
            if(subArraySum * 2 > fullArraySum)
                return false;
            if(subArraySum * 2 === fullArraySum)
                return true;
            else
                return helper(idx + 1, subArraySum) || helper(idx + 1, subArraySum + nums[idx])
        }
        return helper(0, 0)
    }
}
