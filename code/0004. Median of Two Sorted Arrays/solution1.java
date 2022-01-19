class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int m = nums1.length, n = nums2.length;
        int[] merged = new int[m + n];
        
        int p1 = 0, p2 = 0, i = 0;
        
        while (p1 < m && p2 < n) {
            if (nums1[p1] < nums2[p2]) {
                merged[i] = nums1[p1];
                i++;
                p1++;
            }
            else {
                merged[i] = nums2[p2];
                i++;
                p2++;
            }
        }
        
        while (p1 < m) {
            merged[i] = nums1[p1];
            i++;
            p1++;
        }
        
        while (p2 < n) {
            merged[i] = nums2[p2];
            i++;
            p2++;
        }
        
        if ((m + n) % 2 == 0) {
            return (merged[(m + n) / 2 - 1] + merged[(m + n) / 2]) / 2.0;
        }
        else {
            return merged[(m + n) / 2];
        }
    }
}