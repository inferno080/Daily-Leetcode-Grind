// Constant Time and Space

interface colorCounts {
    red: number,
    blue: number,
    white: number
}
function sortColors(nums: number[]): void {
    let counts: colorCounts = {
        red: 0, blue: 0, white: 0
    };

    nums.forEach((num: number)=>{
        if(num === 0) counts.red += 1
        else if (num === 1) counts.white += 1
        else counts.blue += 1
    })

    for(let i = 0; i < nums.length; i ++) {
        if(counts.red > 0) {
            nums[i] = 0;
            counts.red --;
        }
        else if(counts.white > 0) {
            nums[i] = 1;
            counts.white --;
        }
        else if(counts.blue > 0) {
            nums[i] = 2;
            counts.blue --;
        }
    }
};
