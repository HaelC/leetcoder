class Solution {
public:
    string longestPalindrome(string s) {
        int n = s.length();
        vector<vector<bool>> dp(n, vector<bool>(n, false));
        
        // length == 1
        string longest = s.substr(0, 1);
        for (int i = 0; i < n; i++) {
            dp[i][i] = true;
        }
        
        // length == 2
        for (int i = 0; i < n - 1; i++) {
            if (s[i] == s[i + 1]) {
                dp[i][i + 1] = true;
                if (longest.length() == 1) {
                    longest = s.substr(i, 2);
                }
            }
        }
        
        // length == 3 to n 
        for (int len = 3; len <= n; len++) {
            for (int i = 0; i < n - len + 1; i++) {
                int j = i + len - 1;
                if (s[i] == s[j] && dp[i+1][j-1]) {
                    dp[i][j] = true;
                    if (longest.length() < len) {
                        longest = s.substr(i, len);
                    }
                }
            }
        }
        
        return longest;
    }
};