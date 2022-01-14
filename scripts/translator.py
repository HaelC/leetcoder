import re
import os

folder_name = input("Problem slug: ")
solution = ""

path_en = "../solutions/en/solution/"
path_zh = "../solutions/zh/solution/"
extension = "/index.mdx"
full_filename = path_en + folder_name + extension
new_filename = path_zh + folder_name + extension

with open(full_filename) as f:
    solution = f.read()

difficulties = {'easy': '简单', 'medium': '中等', 'hard': '困难'}
tags = {
    'Array': '数组', 'String': '字符串', 'Hash Table': '哈希表', 
    'Dynamic Programming': '动态规划', 'Two Pointers': '双指针',
    'Sorting': '排序', 'Linked List': '链表', 'Math': '数学',
    'Depth-First Search': '深度优先搜索', 'Binary Search': '二分查找',
    'Breadth-First Search': '广度优先搜索', 'Greedy': '贪心',
    'Tree': '树', 'Binary Tree': '二叉树', 'Stack': '栈',
    'Queue': '队列', 'Heap (Priority Queue)': '堆（优先队列）',
    'Recursion': '递归', 'Backtracking': '回溯',
    'Sliding Window': '滑动窗口'
}
word_dict = {
    'Analysis:': '分析：', 'Time complexity:': '时间复杂度：',
    'Space complexity:': '空间复杂度：', 'Follow-ups': '后续问题',
    'Input:': '输入：', 'Output:': '输出：'
}

for difficulty_en, difficulty_zh in difficulties.items():
    solution = solution.replace(difficulty_en, difficulty_zh)

for tag_en, tag_zh in tags.items():
    # solution = solution.replace(tag_en, tag_zh)
    solution = re.sub(fr'tags: \[(.*?){tag_en}(.*?)\]',
           fr'tags: [\1{tag_zh}\2]',
           solution)

for word_en, word_zh in word_dict.items():
    solution = solution.replace(word_en, word_zh)

# edit leetcode link
solution = solution.replace('leetcode', 'leetcode-cn')
# can't simply replace 'Solution' with '解法', because
# there are 'Solution' in the code as well. 
solution = re.sub(fr'(<h3 id="solution_\d">)Solution \d: ',
        fr'\1解法：',
        solution)
solution = solution.replace('C++ Solution', 'C++解法')
solution = solution.replace('Java Solution', 'Java解法')

os.mkdir(path_zh + folder_name)
with open(new_filename, 'w') as f:
    f.write(solution)
