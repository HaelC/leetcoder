class Solution {
    public String convert(String s, int numRows) {
        // a special case if numRos == 1
        if (numRows == 1) {
            return s;
        }
        
        String[] zigzag = new String[numRows];
        Arrays.fill(zigzag, "");
        
        int dir = 1, i = 0;
        
        for (char c : s.toCharArray()) {
            zigzag[i] += c;
            if (i == numRows - 1) {
                dir = -1;
            }
            else if (i == 0) {
                dir = 1;
            }
            i += dir;
        }
        
        String result = "";
        
        for (String row : zigzag) {
            result += row;
        }
        
        return result;
    }
}