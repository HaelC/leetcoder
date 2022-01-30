class Solution {
public:
    bool isMatch(string s, string p) {
        if (p.empty()) {
            return s.empty();
        }
        
        bool matchFirst = !s.empty() && (p[0] == '.' || p[0] == s[0]);
        
        if (p.length() > 1 && p[1] == '*') {
            return (isMatch(s, p.substr(2)) || (matchFirst && isMatch(s.substr(1), p)));
        }
        else {
            return (matchFirst && isMatch(s.substr(1), p.substr(1)));
        }
    }
};