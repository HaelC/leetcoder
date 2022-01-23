class Solution {
    private String longest = "";
    
    private void expand(String s, int i, int j) {
        int n = s.length();
        
        while (i > 0 && j < n - 1 && s.charAt(i - 1) == s.charAt(j + 1)) {
            i--;
            j++;
        }
        
        int len = j - i + 1;
        if (len > longest.length()) {
            longest = s.substring(i, j + 1);
        }
    }
    
    public String longestPalindrome(String s) {
        int n = s.length();
        for (int i = 0; i < n; i++) {
            expand(s, i, i);
            if (i < n - 1 && s.charAt(i) == s.charAt(i + 1)) {
                expand(s, i, i + 1);
            }
        }
        
        return longest;
    }
}