// Time: O(n³ + nlogn) and Space: O(1)
function fourSum(nums: number[], target: number): number[][] {
    let res: number[][] = [];
    nums.sort((a,b)=>a-b);
    for(let i = 0; i < nums.length - 3; i++) {
        if(i > 0 && nums[i] === nums[i-1]) continue;
        for(let j = i + 1; j < nums.length - 2; j++) {
            if(j > i + 1 && nums[j] === nums[j-1]) continue;
            let left = j + 1;
            let right = nums.length - 1;
            while(left < right) {
                let curr = nums[left] + nums[right] + nums[i] + nums[j];
                if(target > curr) {
                    left++;
                } else if (target === curr) {
                    res.push([nums[right], nums[i], nums[j], nums[left]]);
                    left++;
                    right--;
                    while(left < right && nums[left] === nums[left-1]) left++;
                    while(left < right && nums[right] === nums[right+1]) right--;
                } else {
                    right--;
                }
                
            }
        }
    }
    return res;
};
