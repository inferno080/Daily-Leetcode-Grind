// Time: O(n), Space: O(n)
function longestConsecutive(nums: number[]): number {
    let hashSet = new Set<number>(nums);
    let globalMax: number = 0;
    // avoid duplicates by traversing over set instead of nums
    hashSet.forEach((num: number) => {
        // only start counting if this is the first element of the subsequence
        if(!hashSet.has(num - 1)) {
            let c: number = 0;
            let temp = num;
            while (hashSet.has(temp++))
                c++;
            globalMax = Math.max(globalMax, c);
        }
    });
    return globalMax;
};
