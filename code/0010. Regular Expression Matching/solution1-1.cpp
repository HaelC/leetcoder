class Solution {
private:
    unordered_map<string, unordered_map<string, bool>> hashmap;

public:
    bool isMatch(string s, string p) {
        if (p.empty()) {
            return s.empty();
        }

        if (hashmap.count(s) > 0 && hashmap[s].count(p) > 0) {
            return hashmap[s][p];
        }

        bool matchFirst = !s.empty() && (p[0] == '.' || p[0] == s[0]);
        bool result;

        if (p.length() > 1 && p[1] == '*') {
            result = (isMatch(s, p.substr(2)) || (matchFirst && isMatch(s.substr(1), p)));
        }
        else {
            result = (matchFirst && isMatch(s.substr(1), p.substr(1)));
        }

        hashmap[s][p] = result;
        return result;
    }
};