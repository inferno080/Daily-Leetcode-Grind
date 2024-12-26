// Time : O(n)      Space: O(1)
function maxArea(height: number[]): number {
    let maxPole  = 0;
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;
    while(left < right) {
        maxWater = Math.max(maxWater, ((Math.min(height[left], height[right]))*(right-left)));
        if(height[left] < height[right]) {
            left++;
        } else right--;
    }
    return maxWater;
};
