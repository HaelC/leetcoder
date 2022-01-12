class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> hashmap;

        for (int i = 0; i < nums.size(); i++) {
            int num = nums[i];
            if (hashmap.count(target - num) > 0) {
                return {hashmap[target - num], i};
            }

            hashmap[num] = i;
        }

        return {-1, -1};
    }
};