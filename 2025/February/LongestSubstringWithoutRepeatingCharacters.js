// Time & Space : O(n)
lengthOfLongestSubstring(s) {
    let hm = new Map();
    let maxLen = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        if (hm.has(s[right]) && hm.get(s[right]) >= left) {
            left = hm.get(s[right]) + 1;
        }
        hm.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
