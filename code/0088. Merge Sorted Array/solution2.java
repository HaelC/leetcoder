class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int[] auxiliary = new int[m + n];
        
        int p1 = 0, p2 = 0, i = 0;
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
        
        // we could not directly reassign nums1 = auxiliary
        for (i = 0; i < m + n; i++) {
            nums1[i] = auxiliary[i];
        }
    }
}