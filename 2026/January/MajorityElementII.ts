// Time: O(2n),  Space: O(1)
function majorityElement(nums: number[]): number[] {
    
    if(nums.length <= 1)
        return nums;

    let candidate1 = -1, candidate2 = -2, counter1 = 0, counter2 = 0;
    nums.forEach((num: number) => {

        if(counter1 <= 0 && num !== candidate2) {
            candidate1 = num;
        }
        else if (counter2 <= 0 && num !== candidate1) {
            candidate2 = num;
        } 

        if(num === candidate1) {
            counter1++;
        }
        else if(num === candidate2) {
            counter2++;
        } 
        else {
            counter1 --;
            counter2 --;
        }
    })
    // re-validate
    counter1 = 0;
    counter2 = 0;

    nums.forEach((num)=>{
        if(num === candidate1) 
            counter1++;
        else if(num === candidate2)
            counter2++;
    })

    if(counter1 > Math.floor(nums.length/3) && counter2 > Math.floor(nums.length/3)) {
        return [candidate1, candidate2];
    } else if(counter1 > Math.floor(nums.length/3)) {
        return [candidate1];
    } else if (counter2 > Math.floor(nums.length/3)) {
        return [candidate2];
    } else return [];
    
};
