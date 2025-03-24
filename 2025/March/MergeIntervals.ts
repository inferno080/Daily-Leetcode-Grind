// Space: O(n) and Time: O(n)
function merge(intervals: number[][]): number[][] {
    let ans = [];
    if (intervals.length > 0) { 
        intervals.sort((a, b) => a[0] - b[0]);
        intervals.forEach(([start, end]) => {
            if (ans.length === 0 || ans[ans.length - 1][1] < start) {
                ans.push([start, end]);
            } else {
                let [oldStart, oldEnd] = ans.pop();
                ans.push([oldStart, Math.max(oldEnd, end)]);
            }
        });
    }
    return ans;
}
