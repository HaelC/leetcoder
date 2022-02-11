class Solution {
private:
    void twoSum(vector<int>& nums, int target, int start, set<vector<int>>& triplets) {
        int n = nums.size();
        unordered_set<int> visited;
        unordered_set<int> used;
        for (int i = start; i < n; i++) {
            int num = nums[i];
            if (visited.count(-target - num) > 0 && used.count(num) == 0) {
                vector<int> triplet{target, -target - num, num};
                sort(triplet.begin(), triplet.end());
                triplets.insert(triplet);
                visited.insert(num);
                used.insert(num);
            }
            else {
                visited.insert(num);
            }
        }
    }
    
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        int n = nums.size();
        set<vector<int>> triplets;
        unordered_set<int> targets;
        
        for (int i = 0; i < n; i++) {
            int target = nums[i];
            if (targets.count(target) == 0) {
                twoSum(nums, target, i + 1, triplets);
                targets.insert(target);
            }
        }
        
        return vector<vector<int>>(triplets.begin(), triplets.end());
    }
};