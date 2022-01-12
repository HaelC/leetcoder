class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int longest = 0, n = s.length(), begin = 0;

        for (int i = 0; i < n; i++) {
            char c = s[i];
            for (int j = begin; j < i; j++) {
                if (s[j] == c) {
                    begin = j + 1;
                }
            }
            longest = max(longest, i - begin + 1);
        }

        return longest;
    }
};