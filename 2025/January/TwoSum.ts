// O(n) for both space and time
function twoSum(nums: number[], target: number): number[] {
    let hashMap : Map<number, number> = new Map<number, number>();
    for(let i = 0; i < nums.length; i++) {
        if(hashMap.has(target - nums[i])){
            return [hashMap.get(target - nums[i]), i];
        } else hashMap.set(nums[i], i);
    }
};
