class Solution {
private:    
    void twoSum(vector<int>& nums, int target, int start, vector<vector<int>>& result) {
        int p1 = start, p2 = nums.size() - 1;
        while (p1 < p2) {
            int num1 = nums[p1], num2 = nums[p2];
            if (num1 + num2 == -target) {
                result.push_back({target, num1, num2});
                if (num1 == num2) {
                    return;
                }
                while (nums[p1] == num1) {
                    p1++;
                }
                while (nums[p2] == num2) {
                    p2--;
                }
            }
            else if (num1 + num2 < -target) {
                p1++;
            }
            else {
                p2--;
            }
        }
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