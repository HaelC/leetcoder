class Solution {
public:
    bool isMatch(string s, string p) {
        int m = s.length(), n = p.length();
        vector<vector<bool>> dp(n + 1, vector<bool>(m + 1, false));
        
        dp[0][0] = true;
        
        for (int i = 0; i < n; i++) {
            if (p[i] == '*') {
                dp[i + 1][0] = dp[i - 1][0];
            }
        }
        
        for (int i = 0; i < n; i++) {
            if (p[i] == '*') {
                for (int j = 0; j < m; j++) {
                    dp[i + 1][j + 1] = dp[i - 1][j + 1] || (dp[i + 1][j] && (s[j] == p[i - 1] || p[i - 1] == '.'));
                }
            }
            else {
                for (int j = 0; j < m; j++) {
                    dp[i + 1][j + 1] = dp[i][j] && (s[j] == p[i] || p[i] == '.');
                }
            }
        }
        
        return dp[n][m];
    }
};