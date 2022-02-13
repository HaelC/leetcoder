class Solution {
    private void twoSum(int[] nums, int target, int start, List<List<Integer>> result) {
        int n = nums.length;
        Set<Integer> visited = new HashSet<>();
        
        for (int i = start; i < n; i++) {
            int num = nums[i];
            if (visited.contains(-target - num)) {
                result.add(Arrays.asList(target, -target - num, num));
                while (i + 1 < n && nums[i + 1] == num) {
                    i++;
                }
            }
            else {
                visited.add(num);
            }
        }
    }
    
    public List<List<Integer>> threeSum(int[] nums) {
        int n = nums.length;
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        
        for (int i = 0; i < n; i++) {
            if (i == 0 || nums[i] != nums[i - 1]) {
                int target = nums[i];
                twoSum(nums, target, i + 1, result);
            }
        }
        
        return result;
    }
}