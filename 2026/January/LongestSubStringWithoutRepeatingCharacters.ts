// Time: O(2n), Space: O(charset size)
function lengthOfLongestSubstring(s: string): number {
    let maxLen = 0;
    let left = 0;
    let right = 0;
    let uniqueChars = new Map<string, number>(); // char, latestIdx
    while(right < s.length) {
        if(uniqueChars.has(s[right])) {
            let prevIdx = uniqueChars.get(s[right]);
            while(left <= prevIdx) {
                uniqueChars.delete(s[left]);
                left++;
            }
        }
        uniqueChars.set(s[right], right);
        maxLen = Math.max(uniqueChars.size, maxLen);
        right += 1;
    }
    return maxLen;
};
