// Time: O(n)   Space: O(n)
function insert(intervals: number[][], newInterval: number[]): number[][] {
    let newIntervals : number[][] = [];
    let currEnd = -1;
    if(intervals.length < 1)
        return [newInterval]
    if(newInterval[1] < intervals[0][0]){
        return [newInterval, ...intervals]
    }
    for(let interval of intervals) {
        if(interval[0] > newInterval[1] && newIntervals[newIntervals.length-1][1] < newInterval[0]){
            newIntervals.push(newInterval);
            newIntervals.push(interval);
            currEnd = interval[1];
            continue;
        }
        if(currEnd >= interval[0] && currEnd <= interval[1]) {
            let x = newIntervals.pop();
            newIntervals.push([x[0], interval[1]]);
            continue;
        } else if (currEnd >= interval[0])
            continue;
        if((newInterval[0] > interval[1]) || (interval[0] > newInterval[1]) || 
        ((newInterval[0] >= interval[0]) && (newInterval[1] <= interval[1]))) {
            currEnd = interval[1]
            newIntervals.push(interval);
        }
        else if (interval[0] > newInterval[0] && interval[1] > newInterval[1]){
            currEnd = interval[1]
            newIntervals.push([newInterval[0], interval[1]]);
        }
        else if (interval[0] < newInterval[0] && interval[1] < newInterval[1]) {
            currEnd = newInterval[1]
            newIntervals.push([interval[0], newInterval[1]]);
        }
        else {
            currEnd = newInterval[1]
            newIntervals.push(newInterval)
        }
    }
    if(currEnd < newInterval[0])
        newIntervals.push(newInterval);
    return newIntervals;
};
