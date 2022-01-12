class Solution {
    public int[] twoSum(int[] nums, int target) {
        int n = nums.length;
        Map<Integer, Integer> hashmap = new HashMap<>();

        for (int i = 0; i < n; i++) {
            int num = nums[i];
            if (hashmap.containsKey(target - num)) {
                return new int[] {hashmap.get(target - num), i};
            }
            hashmap.put(num, i);
        }


        return null;
    }
}