// Time : O(n)  Space : O(1)

class Solution {
    minCostClimbingStairs(cost) {
        for (let i = cost.length - 3; i >= 0; i--) {
            cost[i] += Math.min(cost[i + 1], cost[i + 2]);
        }
        return Math.min(cost[0], cost[1]);
    }
}
