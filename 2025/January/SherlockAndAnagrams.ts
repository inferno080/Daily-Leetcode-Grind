// Time & Space : O(n^2)
function sherlockAndAnagrams(s: string): number {
    let signatureMap = new Map<string, number>();
    let ans = 0;

    // Generate all substrings
    for (let i = 0; i < s.length; i++) {
        let substrMap = new Array(26).fill(0); // Initialize with zeros

        for (let j = i; j < s.length; j++) {
            substrMap[s.charCodeAt(j) - 'a'.charCodeAt(0)] += 1; // Update frequency count

            const signature = JSON.stringify(substrMap); // Convert array to string as a unique key
            if (!signatureMap.has(signature)) {
                signatureMap.set(signature, 0);
            }
            signatureMap.set(signature, signatureMap.get(signature) + 1);
        }
    }

    // Count anagrammatic pairs
    for (let val of signatureMap.values()) {
        if (val > 1) {
            ans += (val * (val - 1)) / 2; // Combination formula
        }
    }

    return ans;
}
