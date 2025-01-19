// Time : O(s + t)    Space: O(26)
function isAnagram(s: string, t: string): boolean {
    let hm = new Map<string, number>();
    if(s.length !== t.length)
        return false;
    for(let letter of s) {
        if(!hm.has(letter))
            hm.set(letter, 0)
        hm.set(letter, hm.get(letter) + 1);
    }
    for(let letter of t) {
        if(!hm.has(letter)) 
            return false;
        if(hm.get(letter) === 1)
            hm.delete(letter);
        else hm.set(letter, hm.get(letter) - 1);
    }
    return (hm.size === 0);
};
