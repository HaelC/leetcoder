class Solution {
    public int[] twoSum(int[] nums, int target) {
        int n = nums.length;

        // create sorted array
        List<Pair<Integer, Integer>> sortedWithIndex = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            sortedWithIndex.add(new Pair<>(nums[i], i));
        }
        Collections.sort(sortedWithIndex, Comparator.comparing(Pair::getKey));

        // two pointers
        int p1 = 0, p2 = n - 1;
        while (p1 < p2) {
            int num1 = sortedWithIndex.get(p1).getKey(), num2 = sortedWithIndex.get(p2).getKey();
            if (num1 + num2 == target) {
                return new int[] {sortedWithIndex.get(p1).getValue(), sortedWithIndex.get(p2).getValue()};
            }
            else if (num1 + num2 < target) {
                p1++;
            }
            else {
                p2--;
            }
        }

        return null;
    }
}