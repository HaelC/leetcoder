class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n = nums.size();

        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] + nums[j] == target) {
                    // we can use curly braces {} to represent vector
                    return {i, j};
                }
            }
        }

        // return impossible values if there are no two numbers adding up to target
        return {-1, -1};
    }
};