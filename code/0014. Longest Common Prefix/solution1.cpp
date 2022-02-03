class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        int len = 0, n = strs.size();
        
        while (true) {
            if (len >= strs[0].size()) {
                return strs[0].substr(0, len);
            }
            char c = strs[0][len];
            for (int i = 1; i < n; i++) {
                if (len >= strs[i].size() || strs[i][len] != c) {
                    return strs[0].substr(0, len);
                }
            }
            len++;
        }
        
        return "";
    }
};