// Time: O(n) and Space: O(n)
function insert(intervals: number[][], newInterval: number[]): number[][] {
    if(intervals.length === 0)
        return [newInterval];
    let result = [];
    let start = newInterval[0];
    let end = newInterval[1];
    if(start > intervals[intervals.length - 1][1])
        return [...intervals, [start, end]];
    if (end < intervals[0][0]) 
        return [[start, end], ...intervals]
    let nextDanger = false;
    let done = false;
    for(let i = 0; i < intervals.length; i++) {
        if(nextDanger) {
            if (end >= intervals[i][0] && end <= intervals[i][1]) {
                let last = result.pop();
                result.push([last[0], intervals[i][1]]);
                nextDanger = false;
                continue;
            } else if (end < intervals[i][0])
                nextDanger = false;
            else if (end > intervals[i][1])
                continue;
        }
        if((start > intervals[i][1]) || (start >= intervals[i][0] && end <= intervals[i][1]) || end < intervals[i][0]){
            if(start < intervals[i][0] && !done) {
                done = true;
                result.push(newInterval);
            }
            if((start >= intervals[i][0] && end <= intervals[i][1]))
                done = true;
            result.push(intervals[i]);
            continue;
        }
        done = true;
        if(start >= intervals[i][0] && end >= intervals[i][1])
            result.push([intervals[i][0], end]);
        else if (start <= intervals[i][0] && end <= intervals[i][1])
            result.push([start, intervals[i][1]]);
        else if (start <= intervals[i][0] && end >= intervals[i][0])
            result.push([start, end]);
        nextDanger = true;
    }
    return result;
};
