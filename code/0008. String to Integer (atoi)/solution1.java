class Solution {
    public int myAtoi(String s) {
        int i = 0, len = s.length();
        long result = 0;
        int sign = 1;
        
        // 1. Read in and ignore any leading whitespace.
        while (i < len && s.charAt(i) == ' ') {
            i++;
        }
        
        // 2. Check if the next character (if not already
        // at the end of the string) is '-' or '+'
        if (i < len && (s.charAt(i) == '-' || s.charAt(i) == '+')) {
            sign = s.charAt(i) == '-' ? -1 : 1;
            i++;
        }
        
        // 3. Read in next the characters until the next
        // non-digit character or the end of the input is reached.
        while (i < len && Character.isDigit(s.charAt(i))) {
            
            // 4. Convert these digits into an integer
            int digit = s.charAt(i) - '0';
            result = result * 10 + digit;
            
            // 5. If the integer is out of the 32-bit signed
            // integer range [-2^31, 2^31 - 1], then clamp
            // the integer so that it remains in the range.
            if (result * sign > Integer.MAX_VALUE) {
                return Integer.MAX_VALUE;
            }
            else if (result * sign < Integer.MIN_VALUE) {
                return Integer.MIN_VALUE;
            }
            i++;
        }
        
        // 6. Return the integer as the final result.
        return (int)result * sign;
    }
}