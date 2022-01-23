class Solution {
private:
    void expand(string& s, int i, int j, string& longest) {
        int n = s.length();
        while (i > 0 && j < n - 1 && s[i - 1] == s[j + 1]) {
            i--;
            j++;
        }
        
        int len = j - i + 1;
        if (len > longest.length()) {
            longest = s.substr(i, len);
        }
    }
    
public:
    string longestPalindrome(string s) {
        string longest = "";
        int n = s.length();
        
        for (int i = 0; i < n; i++) {
            expand(s, i, i, longest);
            if (i < n - 1 && s[i] == s[i + 1]) {
                expand(s, i, i + 1, longest);
            }
        }
        
        return longest;
    }
};