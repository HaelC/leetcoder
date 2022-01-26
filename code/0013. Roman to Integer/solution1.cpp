class Solution {
public:
    int romanToInt(string s) {
        unordered_map<string, int> symbolValues{
            {"M", 1000}, {"CM", 900}, {"D", 500}, {"CD", 400}, {"C", 100}, {"XC", 90}, 
            {"L", 50}, {"XL", 40}, {"X", 10}, {"IX", 9}, {"V", 5}, {"IV", 4}, {"I", 1}
        };
        
        int n = s.length();
        int result = 0;
        
        for (int i = 0; i < n; i++) {
            if (i < n - 1 && symbolValues.count(s.substr(i, 2)) > 0) {
                result += symbolValues[s.substr(i, 2)];
                i++;
            }
            else {
                result += symbolValues[s.substr(i, 1)];
            }
        }
        
        return result;
    }
};