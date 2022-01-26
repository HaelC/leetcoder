class Solution {
public:
    string intToRoman(int num) {
        string roman = "";
        
        vector<int> values{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        vector<string> symbols{"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
        
        for (int i = 0; i < values.size(); i++) {
            int value = values[i];
            string symbol = symbols[i];
            while (num >= value) {
                num -= value;
                roman += symbol;
            }
            
            if (num == 0) {
                break;
            }
        }
        
        return roman;
    }
};