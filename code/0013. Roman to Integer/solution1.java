class Solution {
    public int romanToInt(String s) {
        Map<String, Integer> symbolValues = new HashMap<>();
        symbolValues.put("M", 1000);
        symbolValues.put("CM", 900);
        symbolValues.put("D", 500);
        symbolValues.put("CD", 400);
        symbolValues.put("C", 100);
        symbolValues.put("XC", 90);
        symbolValues.put("L", 50);
        symbolValues.put("XL", 40);
        symbolValues.put("X", 10);
        symbolValues.put("IX", 9);
        symbolValues.put("V", 5);
        symbolValues.put("IV", 4);
        symbolValues.put("I", 1);
        
        int n = s.length();
        int result = 0;
        
        for (int i = 0; i < n; i++) {
            if (i < n - 1 && symbolValues.containsKey(s.substring(i, i + 2))) {
                result += symbolValues.get(s.substring(i, i + 2));
                i++;
            }
            else {
                result += symbolValues.get(s.substring(i, i + 1));
            }
        }
        
        return result;
    }
}