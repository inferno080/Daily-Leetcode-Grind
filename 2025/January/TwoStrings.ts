// Time : O(s1.length + s2.length)    Space: O(s1.length)
function twoStrings(s1: string, s2: string): string {
    let mySet = new Set();
    for(let letter of s1) {
        mySet.add(letter);
    } 
    for(let letter of s2) {
        if(mySet.has(letter)) {
            return "YES";
        }
    } 
    return "NO";
}
