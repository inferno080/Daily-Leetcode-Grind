// Time: O(n log n)
// Space: O(n) - Index based approach has same O(n) complexity but no constant allocation and deallocation of memory
inversionCount(arr) {
        
        if(arr.length <= 1)
            return 0;
            
        let mid = Math.floor(arr.length / 2);
        let leftArr = arr.slice(0, mid);
        let rightArr = arr.slice(mid, arr.length);
        
        // leftArr and rightArr get sorted in the process
        let leftCount = this.inversionCount(leftArr);
        let rightCount = this.inversionCount(rightArr);
        
        let count = 0;
        let leftPtr = 0;
        let rightPtr = 0;
        let mergedIndex = 0;
        
        while(leftPtr < mid && rightPtr < rightArr.length ) {
            
            if(leftArr[leftPtr] <= rightArr[rightPtr]) {
                arr[mergedIndex++] = leftArr[leftPtr++];
            } else {
                // This is only possible if leftArr is sorted
                count += mid - leftPtr;
                arr[mergedIndex++] = rightArr[rightPtr++];
            }
        }
        while(leftPtr < mid) {
            arr[mergedIndex++] = leftArr[leftPtr++];
        }
        while(rightPtr < rightArr.length ) {
            arr[mergedIndex++] = rightArr[rightPtr++];
        }
        return count + leftCount + rightCount;
    }

// OPTIMAL - Index Based

// class Solution {
//     inversionCount(arr) {
//         let temp = new Array(arr.length);  // Single temp array, reused throughout
//         return this.mergeSortCount(arr, temp, 0, arr.length - 1);
//     }
    
//     mergeSortCount(arr, temp, left, right) {
//         let count = 0;
        
//         if (left < right) {
//             let mid = Math.floor((left + right) / 2);
            
//             // Recursively count inversions in left and right halves
//             count += this.mergeSortCount(arr, temp, left, mid);
//             count += this.mergeSortCount(arr, temp, mid + 1, right);
            
//             // Merge and count cross-inversions
//             count += this.merge(arr, temp, left, mid, right);
//         }
        
//         return count;
//     }
    
//     merge(arr, temp, left, mid, right) {
//         let i = left;      // Index for left subarray
//         let j = mid + 1;   // Index for right subarray
//         let k = left;      // Index for temp array
//         let count = 0;
        
//         // Merge while counting inversions
//         while (i <= mid && j <= right) {
//             if (arr[i] <= arr[j]) {
//                 temp[k++] = arr[i++];
//             } else {
//                 temp[k++] = arr[j++];
//                 count += (mid - i + 1);  // All remaining elements in left form inversions
//             }
//         }
        
//         // Copy remaining elements from left subarray
//         while (i <= mid) {
//             temp[k++] = arr[i++];
//         }
        
//         // Copy remaining elements from right subarray
//         while (j <= right) {
//             temp[k++] = arr[j++];
//         }
        
//         // Copy merged elements back to original array
//         for (i = left; i <= right; i++) {
//             arr[i] = temp[i];
//         }
        
//         return count;
//     }
// }
