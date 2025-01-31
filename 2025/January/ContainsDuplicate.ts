// Time & Space: O(n)
function containsDuplicate(nums: number[]): boolean {
    let set = new Set<number>(nums);
    return set.size !== nums.length
};
