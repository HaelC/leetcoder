class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        map<int, int> numCount;
        vector<vector<int>> result;
        
        for (int num : nums) {
            numCount[num]++;
        }
        
        
        for (auto it = numCount.begin(); it != numCount.end(); it++) {
            int num1 = (*it).first;
            (*it).second = (*it).second - 1;
            for (auto it2 = it; it2 != numCount.end(); it2++) {
                if ((*it2).second > 0) {
                    int num2 = (*it2).first;
                    if (num2 > -num1 - num2) {
                        break;
                    }
                    (*it2).second = (*it2).second - 1;
                    if (numCount.count(-num1 - num2) > 0 && numCount[-num1 - num2] > 0) {
                        result.push_back({num1, num2, -num1 - num2});
                    }
                    (*it2).second = (*it2).second + 1;
                }                
            }
            (*it).second = (*it).second + 1;
        }
        
        return result;
    }
};