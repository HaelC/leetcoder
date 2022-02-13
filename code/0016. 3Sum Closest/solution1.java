class Solution {
    public int threeSumClosest(int[] nums, int target) {
        int n = nums.length;
        int closestSum = Integer.MAX_VALUE, minDiff = Integer.MAX_VALUE;
        Arrays.sort(nums);
        
        for (int i = 0; i < n; i++) {
            int num = nums[i];
            int p1 = i + 1, p2 = n - 1;
            while (p1 < p2) {
                int sum = num + nums[p1] + nums[p2];
                if (sum == target) {
                    return sum;
                }
                else if (sum < target) {
                    if (target - sum < minDiff) {
                        closestSum = sum;
                        minDiff = target - sum;
                    }
                    p1++;
                }
                else {
                    if (sum - target < minDiff) {
                        closestSum = sum;
                        minDiff = sum - target;
                    }
                    p2--;
                }
            }
        }
        
        return closestSum;
    }
}