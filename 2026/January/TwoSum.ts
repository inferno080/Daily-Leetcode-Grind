function twoSum(nums: number[], target: number): number[] {
    let hashMap = new Map<number, number>();
    for(let [idx, num] of nums.entries()) {
        if(hashMap.has(target - num))
            return [hashMap.get(target - num), idx];
        else hashMap.set(num, idx);
    }
    return [];
};
