class Solution {
    public String longestPalindrome(String s) {
        int n = s.length();
        
        boolean[][] dp = new boolean[n][n];
        
        // length == 1
        String longest = s.substring(0, 1);
        for (int i = 0; i < n; i++) {
            dp[i][i] = true;
        }
        
        // length == 2
        for (int i = 0; i < n - 1; i++) {
            if (s.charAt(i) == s.charAt(i + 1)) {
                dp[i][i + 1] = true;
                if (longest.length() == 1) {
                    longest = s.substring(i, i + 2);
                }
            }
        }
        
        // length == 3 to n
        for (int len = 3; len <= n; len++) {
            for (int i = 0; i < n - len + 1; i++) {
                int j = i + len - 1;
                if (s.charAt(i) == s.charAt(j) && dp[i+1][j-1]) {
                    dp[i][j] = true;
                    if (len > longest.length()) {
                        longest = s.substring(i, j + 1);
                    }
                }
            }
        }
        
        return longest;
    }
}