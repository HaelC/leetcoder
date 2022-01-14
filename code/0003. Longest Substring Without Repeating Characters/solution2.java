class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> hashmap = new HashMap<>();
        int longest = 0, n = s.length(), begin = 0;

        for (int i = 0; i < n; i++) {
            char c = s.charAt(i);
            if (hashmap.containsKey(c) && hashmap.get(c) >= begin) {
                begin = hashmap.get(c) + 1;
            }
            longest = Math.max(longest, i - begin + 1);
            hashmap.put(c, i);
        }

        return longest;
    }
}