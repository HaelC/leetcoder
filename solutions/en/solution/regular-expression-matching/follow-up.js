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

const RegularExpressionMatchingFollowUpEn = () => (
  <div id="follow-up">
    <h3>Follow-ups</h3>
    <ul className="follow-up-list">
      <li>
        <i>
          Can we add the question mark symbol to make the problem more
          challenging? Question mark <code>?</code> matches zero or one of the
          preceding element.
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
        <p>
          Similar to kleene star, if we meet the question mark, we check its
          preceding character.
        </p>
        <pre class="pseudo-code">{pseudo}</pre>
      </li>
    </ul>
  </div>
);

export default RegularExpressionMatchingFollowUpEn;
