// Time: O(n^2), Space: O(1)
function threeSum(nums: number[]): number[][] {
    let res: number[][] = [];
    nums.sort((a: number, b: number) => a - b);
    
    for(let i: number = 0; i < nums.length - 2; i++) {
        if(i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        
        let left: number = i + 1;
        let right: number = nums.length - 1;
        
        while(left < right) {
            const sum: number = nums[i] + nums[left] + nums[right];
            
            if(sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while(left < right && nums[left] === nums[left-1]) {
                    left++;
                }
                while(left < right && nums[right] === nums[right+1]) {
                    right--;
                }
            } else if(sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return res;
}
