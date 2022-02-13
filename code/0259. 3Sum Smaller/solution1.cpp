class Solution {
public:
    int threeSumSmaller(vector<int>& nums, int target) {
        int n = nums.size(), result = 0;
        sort(nums.begin(), nums.end());
        
        for (int i = 0; i < n - 2; i++) {
            int num1 = nums[i];
            for (int j = i + 1; j < n - 1; j++) {
                int num2 = nums[j];
                if (num1 + num2 + nums[j + 1] >= target) {
                    break;
                }
                
                int left = j + 1, right = n - 1;                
                while (left < right) {
                    int mid = (left + right + 1) / 2;
                    if (num1 + num2 + nums[mid] < target) {
                        left = mid;
                    }
                    else {
                        right = mid - 1;
                    }
                }
                result += left - j;
            }
        }
        
        return result;
    }
};