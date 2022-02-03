import os
from turtle import title

problem_number = input("Problem number: ")
problem_title = input("Problem title: ")
problem_link = input("Problem link: ")
difficulties = input("Difficulties: ")
problem_tags = input("Tags: ")
solutions = int(input("Number of solutions: "))
hasFollowUp = input("Has follow ups (y/n): ")

frontmatter = "---"
frontmatter += "\nnumber: " + problem_number
frontmatter += "\ntitle: " + problem_title
frontmatter += "\nlink: " + problem_link
frontmatter += "\ndifficulties: [" + difficulties + "]"
frontmatter += "\ntags: [" + problem_tags + "]"
frontmatter += "\nrelated_problems: []\n---\n\n"


solution_body = '''

<details class="code-details">
    <summary>C++ Solution</summary>

```cpp
```

</details>

<details class="code-details">
    <summary>Java Solution</summary>

```java
```

</details>

**Analysis:**

- **Time complexity:** $O()$.
- **Space complexity:** $O()$.

'''

followup_body = '''
<div id="follow-up">
  <h3>Follow-ups</h3>
  <ul className="follow-up-list">
    <li>
      <i></i>
      <pre>
        <strong>Input:</strong> <br />
        <strong>Output:</strong>
      </pre>
      <p></p>
    </li>
  </ul>
</div>
'''

path = "../solutions/en/solution/"
slug = problem_link.split("/")[-2]

os.mkdir(path + slug)

extension = "/index.mdx"
filename = path + slug + extension

four_digits = '0' * (4 - len(problem_number)) + problem_number
code_folder = "../code/{}. {}".format(four_digits, problem_title)
os.mkdir(code_folder)

with open(filename, 'w') as f:
    f.write(frontmatter)
    for i in range(solutions):
        id = i + 1
        with open("{}/solution{}.cpp".format(code_folder, id), 'w') as fp:
          pass
        with open("{}/solution{}.java".format(code_folder, id), 'w') as fp:
          pass
        f.write("<h3 id=\"solution_{id}\">Solution {id}: </h3>".format(id=id))
        f.write(solution_body)
    if (hasFollowUp == "y"):
        f.write(followup_body)

readme_path = "../README.md"
readme_zh_path = "../README-zh.md"

link_url = "https://leetcoder.me/en/solution/" + slug
code_url = "https://github.com/HaelChan/leetcoder/tree/main/code/{}.%20{}".format(four_digits, problem_title.replace(" ", "%20"))
row = "| {}. {} | {} | [link]({}) | [code]({}) |\n".format(problem_number, problem_title, difficulties, link_url, code_url)

with open(readme_path, 'a') as f:
    f.write(row)

with open(readme_zh_path, 'a') as f:
    f.write(row)