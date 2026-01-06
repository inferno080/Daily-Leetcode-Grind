// Time: O(2n + log n) - Log n in both space and time is due to recursion stack
// Space: O(n + log n) - Each recursive call creates a temporary array, but they don't all exist simultaneously

function mergeAndCount(low: number, high: number, nums: number[]): number {

    if(high - low <= 1)
        return 0;

    let mid: number = low + Math.floor((high - low)/2);
    let count = 0;


    // Sort halves
        
    let leftCount = mergeAndCount(low, mid, nums);
    let rightCount = mergeAndCount(mid, high, nums);

    // Count reverse pairs after the two halves are sorted

    let i = low, j = mid;
    while(i < mid) {
        while(j < high && nums[i] > 2 * nums[j]) {
            j++;
        }
        count += j - mid;
        i++;
    }

    // Merge
    
    let leftIdx = low;
    let rightIdx = mid;

    let merged = new Array(high-low);
    let mergeIdx = 0;

    while(leftIdx < mid && rightIdx < high) {

        if(nums[leftIdx] <= nums[rightIdx]) {
            merged[mergeIdx++] = nums[leftIdx++];
        } else {
            merged[mergeIdx++] = nums[rightIdx++];
        }
    }
    while(leftIdx < mid) merged[mergeIdx++] = nums[leftIdx++];
    while(rightIdx < high) merged[mergeIdx++] = nums[rightIdx++];

    for(let i = low, j = 0; i < high && j < merged.length; i++, j++) {
        nums[i] = merged[j];
    }
    return leftCount + rightCount + count;
}

function reversePairs(nums: number[]): number {
    return mergeAndCount(0, nums.length, nums);
};
