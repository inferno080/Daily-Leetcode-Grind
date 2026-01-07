// Time and Space: O(n)
subarrayXor(arr, k) {
        // your code here
        let runningXoR = 0;
        let count = 0;
        let hashMap = new Map();
        for(let i = 0; i < arr.length; i++) {
            runningXoR ^= arr[i];
            if(runningXoR === k) {
                count += 1;
            }
            if(hashMap.has(runningXoR ^ k)) {
                count += hashMap.get(runningXoR ^ k)
            }
            hashMap.set(runningXoR, (hashMap.get(runningXoR) || 0) + 1)
        }
        return count;
    }
