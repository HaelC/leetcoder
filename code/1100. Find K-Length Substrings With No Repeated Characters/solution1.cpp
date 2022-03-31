class Solution {
public:
    int numKLenSubstrNoRepeats(string s, int k) {
        int n = s.length(), result = 0;
        if (n < k) {
            return 0;
        }
        
        int len = 0, start = 0;
        unordered_map<char, int> hashmap;
        
        for (int i = 0; i < n; i++) {
            char c = s[i];
            if (hashmap.count(c) == 0 || hashmap[c] < start) {
                len++;
            }
            else {
                len = i - hashmap[c];
                start = hashmap[c] + 1;
            }
            hashmap[c] = i;
            
            if (len >= k) {
                result++;
            }
        }
        
        return result;
    }
};