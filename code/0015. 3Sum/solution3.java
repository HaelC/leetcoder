class Solution {
    private void twoSum(int[] nums, int target, int start, List<List<Integer>> result) {
        int p1 = start, p2 = nums.length - 1;
        while (p1 < p2) {
            int num1 = nums[p1], num2 = nums[p2];
            if (num1 + num2 == -target) {
                result.add(Arrays.asList(target, num1, num2));
                if (num1 == num2) {
                    return;
                }
                
                while (nums[p1] == num1) {
                    p1++;
                }
                
                while (nums[p2] == num2) {
                    p2--;
                }
            }
            else if (num1 + num2 < -target) {
                p1++;
            }
            else {
                p2--;
            }
        }
    }
    
    public List<List<Integer>> threeSum(int[] nums) {
        int n = nums.length;
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        
        for (int i = 0; i < n; i++) {
            if (i == 0 || nums[i] != nums[i - 1]) {
                int num = nums[i];
                twoSum(nums, num, i + 1, result);
            }
        }
        
        return result;
    }
}