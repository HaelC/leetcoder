class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> hashmap;
        int longest = 0, n = s.length(), begin = 0;

        for (int i = 0; i < n; i++) {
            char c = s[i];
            if (hashmap.count(c) > 0 && hashmap[c] >= begin) {
                begin = hashmap[c] + 1;
            }
            longest = max(longest, i - begin + 1);
            hashmap[c] = i;
        }

        return longest;
    }
};