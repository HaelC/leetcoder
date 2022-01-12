class Solution {
    public int lengthOfLongestSubstring(String s) {
        int longest = 0, n = s.length(), begin = 0;

        for (int i = 0; i < n; i++) {
            char c = s.charAt(i);
            for (int j = begin; j < i; j++) {
                if (s.charAt(j) == c) {
                    begin = j + 1;
                }
            }
            longest = Math.max(longest, i - begin + 1);
        }

        return longest;
    }
}