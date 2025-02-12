// Time & Space : O(n)
function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    let numSet = new Set(nums);
    let maxLen = 0;

    for (let num of numSet) {
        // Only process if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLen = 1;

            // Expand the sequence forward
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentLen += 1;
            }

            maxLen = Math.max(maxLen, currentLen);
        }
    }

    return maxLen;
}
