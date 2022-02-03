class Solution {
public:
    int maxArea(vector<int>& height) {
        int p1 = 0, p2 = height.size() - 1;
        int result = 0;
        
        while (p1 < p2) {
            int h1 = height[p1], h2 = height[p2];
            result = max(result, min(h1, h2) * (p2 - p1));
            if (h1 <= h2) {
                while (p1 < p2 && height[p1] <= h1) {
                    p1++;
                }
            }
            else {
                while (p2 > p1 && height[p2] <= h2) {
                    p2--;
                }
            }
        }
        
        return result;
    }
};