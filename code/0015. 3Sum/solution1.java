class Solution {    
    private void twoSum(int[] nums, int target, int start, Set<List<Integer>> triplets) {
        int n = nums.length;
        Set<Integer> visited = new HashSet<>();
        Set<Integer> used = new HashSet<>();
        for (int i = start; i < n; i++) {
            int num = nums[i];
            if (visited.contains(-target - num) && !used.contains(num)) {
                List<Integer> triplet = Arrays.asList(target, -target - num, num);
                Collections.sort(triplet);
                triplets.add(triplet);
                visited.add(num);
                used.add(num);
            }
            else {
                visited.add(num);
            }
        }
    }
    
    public List<List<Integer>> threeSum(int[] nums) {
        int n = nums.length;
        Set<List<Integer>> triplets = new HashSet<>();
        Set<Integer> targets = new HashSet<>();
        
        for (int i = 0; i < n; i++) {
            int target = nums[i];
            if (!targets.contains(target)) {
                twoSum(nums, target, i + 1, triplets);
                targets.add(target);
            }
        }
        
        List<List<Integer>> result = new ArrayList<>(triplets);
        return result;
    }
}