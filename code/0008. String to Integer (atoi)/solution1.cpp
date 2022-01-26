class Solution {
public:
    int myAtoi(string s) {
        int i = 0, len = s.length();
        int sign = 1;
        long result = 0;

        // 1. Read in and ignore any leading whitespace.
        while (i < len && s[i] == ' ') {
            i++;
        }

        // 2. Check if the next character (if not already
        // at the end of the string) is '-' or '+'
        if (i < len && (s[i] == '-' || s[i] == '+')) {
            sign = s[i] == '-' ? -1 : 1;
            i++;
        }

        // 3. Read in next the characters until the next
        // non-digit character or the end of the input is reached.
        while (i < len && isdigit(s[i])) {

            // 4. Convert these digits into an integer
            int digit = s[i] - '0';
            result = result * 10 + digit;

            // 5. If the integer is out of the 32-bit signed
            // integer range [-2^31, 2^31 - 1], then clamp
            // the integer so that it remains in the range.
            if (result * sign > INT_MAX) {
                return INT_MAX;
            }
            if (result * sign < INT_MIN) {
                return INT_MIN;
            }
            i++;
        }

        // 6. Return the integer as the final result.
        return result * sign;
    }
};