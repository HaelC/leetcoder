class Solution {
    public boolean isMatch(String s, String p) {
        int m = s.length(), n = p.length();
        
        boolean[][] dp = new boolean[n + 1][m + 1];
        dp[0][0] = true;
        
        for (int i = 0; i < n; i++) {
            if (p.charAt(i) == '*') {
                dp[i + 1][0] = dp[i - 1][0];
            }
        }
        
        for (int i = 0; i < n; i++) {
            char c = p.charAt(i);
            if (c == '*') {
                for (int j = 0; j < m; j++) {
                    dp[i + 1][j + 1] = dp[i - 1][j + 1] || 
                        (dp[i + 1][j] && (s.charAt(j) == p.charAt(i - 1) || p.charAt(i - 1) == '.'));
                }
            }
            else {
                for (int j = 0; j < m; j++) {
                    dp[i + 1][j + 1] = dp[i][j] && (s.charAt(j) == c || c == '.');
                }
            }
        }
        
        return dp[n][m];
    }
}