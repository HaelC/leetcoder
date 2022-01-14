class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int n = numbers.size();
        for (int i = 0; i < n; i++) {
            int number = numbers[i];
            // binary search from i + 1 to n - 1
            int left = i + 1, right = n - 1;
            while (left <= right) {
                int mid = left + (right - left) / 2;
                int sum = number + numbers[mid];
                if (sum == target) {
                    return {i + 1, mid + 1};
                }
                else if (sum < target) {
                    left = mid + 1;
                }
                else {
                    right = mid - 1;
                }
            }
        }

        return {-1, -1};
    }
};