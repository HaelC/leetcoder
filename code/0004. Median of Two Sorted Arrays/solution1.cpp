class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int m = nums1.size(), n = nums2.size();
        int p1 = 0, p2 = 0, i = 0;
        vector<int> merged(m + n);
        
        while (p1 < m && p2 < n) {
            if (nums1[p1] <= nums2[p2]) {
                merged[i] = nums1[p1];
                p1++;
                i++;
            }
            else {
                merged[i] = nums2[p2];
                p2++;
                i++;
            }
        }
        
        while (p1 < m) {
            merged[i] = nums1[p1];
            p1++;
            i++;
        }
        
        while (p2 < n) {
            merged[i] = nums2[p2];
            p2++;
            i++;
        }
        
        if ((m + n) % 2 == 0) {
            return (merged[(m + n) / 2 - 1] + merged[(m + n) / 2]) / 2.0;
        }
        else {
            return merged[(m + n) / 2];
        }
    }
};