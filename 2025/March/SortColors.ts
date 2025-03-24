// O(1) Space and O(2n) time
function sortColors(nums: number[]): void {
    let colors = [0,0,0];
    nums.forEach((num)=>{
        colors[num]++;
    })
    let idx = 0;
    for(let color = 0; color <= 2; color++)
        for(let i = 0 ; i < colors[color]; i++){
            nums[idx++] = color;
        }
};
