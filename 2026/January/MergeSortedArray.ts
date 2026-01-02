// Time O(2m+2n) and Space O(1)
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let nums1ptr : number = m - 1;
    let nums2ptr : number = n - 1;
    let endptr : number = nums1.length - 1;
    while(nums1ptr >= 0 && nums2ptr >=0) {
        if(nums1[nums1ptr] > nums2[nums2ptr]) 
            nums1[endptr--] = nums1[nums1ptr--];
        else 
            nums1[endptr--] = nums2[nums2ptr--];
    }
    while(nums1ptr >= 0) 
        nums1[endptr--] = nums1[nums1ptr--];

    while(nums2ptr >= 0)
        nums1[endptr--] = nums2[nums2ptr--];
};
