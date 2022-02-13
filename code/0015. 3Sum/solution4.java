class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        Map<Integer, Integer> numCount = new TreeMap();
        for (int num : nums) {
            numCount.put(num, numCount.getOrDefault(num, 0) + 1);
        }
        
        List<Integer> sortedNums = new ArrayList<>(numCount.keySet());
        
        for (int i = 0; i < sortedNums.size(); i++) {
            int num1 = sortedNums.get(i);
            numCount.put(num1, numCount.get(num1) - 1);
            for (int j = i; j < sortedNums.size(); j++) {
                int num2 = sortedNums.get(j);
                if (num2 > -num1 - num2) {
                    break;
                }
                if (numCount.get(num2) > 0) {
                    numCount.put(num2, numCount.get(num2) - 1);
                    if (numCount.getOrDefault(-num1 - num2, 0) > 0) {
                        result.add(Arrays.asList(num1, num2, -num1 - num2));
                    }
                    numCount.put(num2, numCount.get(num2) + 1);
                }
            }
            numCount.put(num1, numCount.get(num1) + 1);
        }
        
        return result;
    }
}