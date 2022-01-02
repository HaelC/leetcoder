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
extension = ".mdx"
filename = path + slug + extension

with open(filename, 'w') as f:
    f.write(frontmatter)
    for i in range(solutions):
        f.write("### Solution " + str(i + 1) + ": ")
        f.write(solution_body)
    if (hasFollowUp == "y"):
        f.write(followup_body)

