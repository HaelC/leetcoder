class Solution {
    public int numKLenSubstrNoRepeats(String s, int k) {
        int n = s.length(), result = 0;
        if (n < k) {
            return 0;
        }
        
        Map<Character, Integer> hashmap = new HashMap<>();
        int len = 0, start = 0;
        for (int i = 0; i < n; i++) {
            char c = s.charAt(i);
            if (!hashmap.containsKey(c) || hashmap.get(c) < start) {
                len++;
            }
            else {
                len = i - hashmap.get(c);
                start = hashmap.get(c) + 1;
            }
            hashmap.put(c, i);
            
            if (len >= k) {
                result++;
            }
        }
        
        return result;
    }
}