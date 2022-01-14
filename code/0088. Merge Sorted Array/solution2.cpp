class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        vector<int> auxiliary(m + n, 0);
        
        int p1 = 0, p2 = 0;
        int i = 0;
        while (p1 < m && p2 < n) {
            if (nums1[p1] <= nums2[p2]) {
                auxiliary[i] = nums1[p1];
                i++;
                p1++;
            }
            else {
                auxiliary[i] = nums2[p2];
                i++;
                p2++;
            }
        }
        
        while (p1 < m) {
            auxiliary[i] = nums1[p1];
            i++;
            p1++;
        }
        
        while (p2 < n) {
            auxiliary[i] = nums2[p2];
            i++;
            p2++;
        }
        
        nums1 = auxiliary;
    }
};