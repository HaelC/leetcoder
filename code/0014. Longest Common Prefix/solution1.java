class Solution {
    public String longestCommonPrefix(String[] strs) {
        int len = 0, n = strs.length;
        
        while (true) {
            if (len >= strs[0].length()) {
                return strs[0].substring(0, len);
            }
            
            char c = strs[0].charAt(len);
            for (int i = 1; i < n; i++) {
                if (len >= strs[i].length() || strs[i].charAt(len) != c) {
                    return strs[0].substring(0, len);
                }
            }
            len++;
        }
    }
}