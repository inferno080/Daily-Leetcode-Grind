//Time and Space: O(n * 2^n)
function subsetsWithDup(nums: number[]): number[][] {
    let answer: number[][] = [];
    nums.sort((a, b) => a - b);
    
    let helper = (
        nums: number[],
        index: number,
        current_arr: number[]
    ) => {
        answer.push([...current_arr]);
        
        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] === nums[i - 1]) {
                continue;
            }
            current_arr.push(nums[i]);
            helper(nums, i + 1, current_arr);
            current_arr.pop();
        }
    };
    
    helper(nums, 0, []);
    return answer;
}
