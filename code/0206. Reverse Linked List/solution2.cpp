/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
private:
    ListNode* reverseListHelper(ListNode* cur, ListNode* prev) {
        if (!cur) {
            return prev;
        }

        ListNode* next = cur->next;
        cur->next = prev;
        return reverseListHelper(next, cur);
    }

public:
    ListNode* reverseList(ListNode* head) {
        return reverseListHelper(head, nullptr);
    }
};