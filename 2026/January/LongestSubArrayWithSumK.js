// Time & Space: O(n)
longestSubarray(arr, k) {
        let hashMap = new Map();
        let runningSum = 0;
        let res = 0;
        for(let i = 0; i < arr.length; i++) {
            runningSum += arr[i];
            if(runningSum == k) {
                res = Math.max(res, i + 1);
            }
            if(hashMap.has(runningSum - k)) {
                res = Math.max(res, i - hashMap.get(runningSum - k));
            }
            if(!hashMap.has(runningSum))
                hashMap.set(runningSum, i);
        }
        return res;
    }
}
