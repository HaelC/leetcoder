class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n = nums.size();

        // create sorted array
        vector<pair<int, int>> sortedWithIndex;
        for (int i = 0; i < n; i++) {
            sortedWithIndex.push_back({nums[i], i});
        }
        sort(sortedWithIndex.begin(), sortedWithIndex.end());

        // two pointers
        int p1 = 0, p2 = n - 1;
        while (p1 < p2) {
            int num1 = sortedWithIndex[p1].first, num2 = sortedWithIndex[p2].first;
            if (num1 + num2 == target) {
                return {sortedWithIndex[p1].second, sortedWithIndex[p2].second};
            }
            else if (num1 + num2 < target) {
                p1++;
            }
            else {
                p2--;
            }
        }

        return {-1, -1};
    }
};