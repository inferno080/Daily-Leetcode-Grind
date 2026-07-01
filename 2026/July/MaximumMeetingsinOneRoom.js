// Space: O(2n)
// Time: O(2n logn)
maxMeetings(s, f) {
        let combined = new Array(s.length);
        let res = [];
        for(let i = 0; i < combined.length; i++){
            combined[i] = {
                start: s[i],
                finish: f[i],
                idx: i + 1
            };
        }
        combined.sort((a,b)=>{
            if(a.finish != b.finish) {
                return a.finish - b.finish;
            } else return a.idx - b.idx;
        })
        let lastEndTime = -1;
        combined.forEach((meeting)=>{
            if(meeting.start > lastEndTime){
                res.push(meeting.idx);
                lastEndTime = meeting.finish;
            }
        })
        return res.sort((a,b)=>a-b);
    }
