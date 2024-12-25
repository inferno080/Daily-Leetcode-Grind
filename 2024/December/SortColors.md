[Runtime 0ms | Beats 100% | Typescript ✅](https://leetcode.com/problems/sort-colors/solutions/6183961/runtime-0ms-beats-100-typescript/)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Create an array of length 3 that keeps track of the count of each color. Then simply overwrite the nums array with each occurance

# Approach
<!-- Describe your approach to solving the problem. -->
Create a map of color : count using an array of length 3. Then iterate over this color map of length 3, and fill nums array for each occurance.

# Complexity
- Time complexity: $$O(n + 3)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ --> 

- Space complexity: $$O(3)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let colorCount = new Array(3).fill(0);
    for(let i = 0; i < nums.length; i++) {
        colorCount[nums[i]]++;
    }
    let idx = 0;
    for(let i = 0; i < 3; i++) {
        while(colorCount[i]--) {
            nums[idx++] = i;
        }
    }
};
```
