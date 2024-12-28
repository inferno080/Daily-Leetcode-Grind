// memory optimal
function containsDuplicate(nums: number[]): boolean {
    nums.sort((a,b)=>a-b);
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i-1])
            return true;
    }
    return false;
};
// time optimal
function containsDuplicate(nums: number[]): boolean {
    let v = new Set()
    for(let i = 0; i < nums.length; i++) {
        if(v.has(nums[i]))
            return true;
        else v.add(nums[i])
    }
    return false;
};
