class Solution {
    private Map<String, Map<String, Boolean>> hashmap = new HashMap<>();
    
    public boolean isMatch(String s, String p) {
        if (p.isEmpty()) {
            return s.isEmpty();
        }
        
        if (hashmap.containsKey(s) && hashmap.get(s).containsKey(p)) {
            return hashmap.get(s).get(p);
        }
        
        boolean matchFirst = !s.isEmpty() && (s.charAt(0) == p.charAt(0) || p.charAt(0) == '.');
        boolean result;
        
        if (p.length() > 1 && p.charAt(1) == '*') {
            result = isMatch(s, p.substring(2)) || (matchFirst && (isMatch(s.substring(1), p)));
        }
        else {
            result = matchFirst && isMatch(s.substring(1), p.substring(1));
        }
        
        if (!hashmap.containsKey(s)) {
            hashmap.put(s, new HashMap<>());
        }
        hashmap.get(s).put(p, result);
        
        return result;
    }
}