// Time: O(26 * n^2)  Space : O(26 + n^2)  
public static int sherlockAndAnagrams(String s) {
    int ans = 0;
    HashMap<String, Integer> hm = new HashMap<>();

    // Generate all substrings
    for (int i = 0; i < s.length(); i++) {
        int[] charCount = new int[26]; // Frequency array for characters
        for (int j = i; j < s.length(); j++) {
            // Update frequency for the current character
            charCount[s.charAt(j) - 'a']++;

            // Convert frequency array to a unique string representation
            String signature = Arrays.toString(charCount);

            // Update the HashMap
            hm.put(signature, hm.getOrDefault(signature, 0) + 1);
        }
    }

    // Calculate the number of anagram pairs
    for (String key : hm.keySet()) {
        int val = hm.get(key);
        if (val > 1) {
            ans += (val * (val - 1)) / 2; // Combination formula
        }
    }

    return ans;
}
