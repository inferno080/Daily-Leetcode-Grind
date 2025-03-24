// Time: O(Math.max(m,n))   Space: O(n))
function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
    let s = 0;
    let f = 0;
    let answer = [];
    while (f < firstList.length && s < secondList.length) {
        let compare1 = { start: firstList[f][0], end: firstList[f][1] };
        let compare2 = { start: secondList[s][0], end: secondList[s][1] };

        if (compare1.end < compare2.start) {
            f++; 
            continue;
        } 
        if (compare2.end < compare1.start) {
            s++; 
            continue;
        }
        if (compare1.start >= compare2.start && compare1.end <= compare2.end) {
            answer.push([compare1.start, compare1.end]);
            f++; 
            continue;
        }
        if (compare2.start >= compare1.start && compare2.end <= compare1.end) {
            answer.push([compare2.start, compare2.end]);
            s++;
            continue;
        }
        if (compare2.start >= compare1.start && compare2.end >= compare1.end) {
            answer.push([compare2.start, compare1.end]);
            f++;
            continue;
        } 
        if (compare1.start >= compare2.start && compare1.end >= compare2.end) {
            answer.push([compare1.start, compare2.end]);
            s++;
            continue;
        }
    }
    return answer;
};
