// Time : O(n)   Space : O(1)
twoSum(nums, target) {
        let hashMap = new Map();
        for(let i = 0 ; i < nums.length; i++) {
            if(hashMap.has(target - nums[i])) {
                return [i, hashMap.get(target - nums[i])];
            } else {
                hashMap.set(nums[i], i);
            }
        }
    }
