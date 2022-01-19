class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int m = nums1.length, n = nums2.length;
        
        // make sure m <= n
        if (m > n) {
            return findMedianSortedArrays(nums2, nums1);
        }
        
        int left = 0, right = m, halfSize = (m + n + 1) / 2;
        while (left <= right) {
            int index1 = (left + right) / 2;
            int index2 = halfSize - index1;
            
            if (index1 > 0 && nums1[index1 - 1] > nums2[index2]) {
                right = index1 - 1;
            }
            else if (index1 < m && nums1[index1] < nums2[index2 - 1]) {
                left = index1 + 1;
            }
            else {
                int maxSmall, minLarge;
                
                if (index1 == 0) {
                    maxSmall = nums2[index2 - 1];
                }
                else if (index2 == 0) {
                    maxSmall = nums1[index1 - 1];
                }
                else {
                    maxSmall = Math.max(nums1[index1 - 1], nums2[index2 - 1]);
                }
                
                if ((m + n) % 2 == 1) {
                    return maxSmall;
                }
                
                if (index1 == m) {
                    minLarge = nums2[index2];
                }
                else if (index2 == n) {
                    minLarge = nums1[index1];
                }
                else {
                    minLarge = Math.min(nums1[index1], nums2[index2]);
                }
                
                return (maxSmall + minLarge) / 2.0;
            }
        }
        
        return 0.0;
    }
}