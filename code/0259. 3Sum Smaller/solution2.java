class Solution {
    public int threeSumSmaller(int[] nums, int target) {
        int n = nums.length, result = 0;
        Arrays.sort(nums);
        
        for (int i = 0; i < n; i++) {
            int num = nums[i];
            int p1 = i + 1, p2 = n - 1;
            while (p1 < p2) {
                if (num + nums[p1] + nums[p2] < target) {
                    result += p2 - p1;
                    p1++;
                }
                else {
                    p2--;
                }
            }
        }
        
        return result;
    }
}