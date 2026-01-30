// Time: O(n), Space: O(1)
function trap(height: number[]): number {
    if(height.length <= 2) 
        return 0;
    let curr_water: number = 0;
    let left: number = 0, left_max: number = 0, right: number = height.length - 1, right_max: number = 0;
    while(left < right) {
        if(height[left] < height[right]) {
            if(height[left] >= left_max) {
                left_max = height[left];
            } else {
                curr_water += left_max - height[left];
            }
            left++;
        } else {
            if(height[right] >= right_max) {
                right_max = height[right];
            } else {
                curr_water += right_max - height[right];
            }
            right--; 
        }
    }
    return curr_water;
};
