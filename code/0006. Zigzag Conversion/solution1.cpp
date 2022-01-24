class Solution {
public:
    string convert(string s, int numRows) {
        // a special case if numRos == 1
        if (numRows == 1) {
            return s;
        }
        
        vector<string> zigzag(numRows, "");
        int i = 0;
        int dir = 1;
        
        for (char c : s) {
            zigzag[i] += c;
            if (i == numRows - 1) {
                dir = -1;
            }
            else if (i == 0) {
                dir = 1;
            }
            i += dir;
        }
        
        string result = "";
        for (auto row : zigzag) {
            result += row;
        }
        
        return result;
    }
};