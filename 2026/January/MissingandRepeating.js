// Time: O(n), Space: O(1)
findTwoElement(nums) {
        const expectedSum = nums.length * ( nums.length + 1) / 2;
        let runningSum = 0;
        let res = -1;
        nums.forEach((num) => {
            runningSum += Math.abs(num);
            if(nums[Math.abs(num)-1] > 0)
                nums[Math.abs(num)-1] = -nums[Math.abs(num)-1] ;
            else res = Math.abs(num);
        })
        return [res, expectedSum - (runningSum - res)];
    }
