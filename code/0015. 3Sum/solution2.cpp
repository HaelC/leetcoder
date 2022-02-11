class Solution {
private:
    unordered_set<int> visited;
    
    void twoSum(vector<int>& nums, int target, int start, vector<vector<int>>& result) {
        int n = nums.size();
        
        for (int i = start; i < n; i++) {
            int num = nums[i];
            if (visited.count(-target - num) > 0) {
                result.push_back({target, -target - num, num});
                while (i + 1 < n && nums[i + 1] == num) {
                    i++;
                }
            }
            else {
                visited.insert(num);
            }
        }
        
        visited.clear();
    }
    
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        int n = nums.size();
        sort(nums.begin(), nums.end());
        vector<vector<int>> result;
        
        for (int i = 0; i < n; i++) {
            if (i == 0 || nums[i] != nums[i - 1]) {
                int target = nums[i];
                twoSum(nums, target, i + 1, result);
            }
        }
        
        return result;
    }
};