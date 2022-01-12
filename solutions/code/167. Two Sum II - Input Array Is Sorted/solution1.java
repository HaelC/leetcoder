class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int p1 = 0, p2 = numbers.length - 1;
        while (p1 < p2) {
            int num1 = numbers[p1], num2 = numbers[p2];
            if (num1 + num2 == target) {
                return new int[] {p1 + 1, p2 + 1};
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