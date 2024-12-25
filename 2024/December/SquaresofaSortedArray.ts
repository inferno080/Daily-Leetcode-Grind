// Time: O(2n)   // Space: O(n)
function sortedSquares(nums: number[]): number[] {
    let newArr = [];
    let right = nums.length;
    let left = 0;
    if(nums[nums.length - 1] < 0) {
        left = nums.length - 1;
    } else {
        let sum  = 0;
        for(let i = 0; i < nums.length; i++) {
            if(sum <= sum + nums[i]) {
                right = i;
                break;
            } 
            sum += nums[i];
        } 
        left = right - 1;
    }
    while(right < nums.length && left >= 0) {
        let A = nums[right] * nums[right];
        let B = nums[left] * nums[left];
        if(A < B) {
            newArr.push(A);
            right++;
        } else {
            newArr.push(B);
            left--;
        }
    }
    while(left >= 0) {
        newArr.push(nums[left] * nums[left]);
        left--;
    }
    while(right < nums.length) {
        newArr.push(nums[right] * nums[right]);
        right++;
    }
    return newArr;
};
