import React from "react";

const pseudo = `function isMatch(s, p):
    if (p is empty):
        return (s is empty)

    if (p[1] == '*'):
        return isMatch(s, p[2..]) OR
                ((s[0] == p[0] OR p[0] == '.') AND isMatch(s[1..], p))
    else if (p[1] == '?'):
        return isMatch(s, p[2..]) OR
                ((s[0] == p[0] OR p[0] == '.') AND isMatch(s[1..], p[2..]))
    else:
        return (s[0] == p[0] OR p[0] == '.') AND isMatch(s[1..], p[1..])
`;

const RegularExpressionMatchingFollowUpZh = () => (
  <div id="follow-up">
    <h3>后续问题</h3>
    <ul className="follow-up-list">
      <li>
        <i>
          我们能否加上问号符来使问题更具有挑战性？问号`?`匹配零个或一个前面的那一个元素。
        </i>
        <pre>
          <strong>Input:</strong> s = "abcd" p="abcde?" <br />
          <strong>Output:</strong> true
        </pre>
        <pre>
          <strong>Input:</strong> s = "abcdee" p = "abcde?"
          <br />
          <strong>Output:</strong> false
        </pre>
        <p>与克林星类似，如果我们遇到了问号，我们检查其前一个字符。</p>
        <pre class="pseudo-code">{pseudo}</pre>
      </li>
    </ul>
  </div>
);

export default RegularExpressionMatchingFollowUpZh;
