import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout-zh";
import Seo from "../components/seo";

const RelatedProblems = ({ related_problems }) => {
  if (related_problems.length === 0) {
    return null;
  }
  return (
    <div className="related-problems">
      <h4>相关问题：</h4>
      <ul>
        {related_problems.map(problem => (
          <li key={problem}>
            <Link to={`/zh/solution/${problem[1]}`}>{problem[0]}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SolutionPage = ({ data }) => {
  const { title, difficulties, link, number, related_problems, topics } =
    data.mdx.frontmatter;

  const [language, setLanguage] = useState("none");

  const zhToEn = {
    简单: "easy",
    中等: "medium",
    困难: "difficult",
  };

  console.log(zhToEn);

  return (
    <Layout>
      <Seo lang="zh-CN" title={title} />
      <div className="problem-info">
        <h2 className="problem-title">
          {number}. {title}
        </h2>
        {difficulties.map(difficulty => (
          <span className={`difficulty ${zhToEn[difficulty]}`} key={difficulty}>
            {difficulty}
          </span>
        ))}
        <a
          href={link}
          className="leetcode-link"
          target="_blank"
          rel="noreferrer"
        >
          LeetCode 链接
        </a>
        <ul className="problem-topics">
          Topics:
          {topics.map(topic => (
            <li className="problem-topic" key={topic}>
              {topic}
            </li>
          ))}
        </ul>
        <label htmlFor="language-choice">Solution language choice: </label>
        <select
          id="language-choice"
          name="language-choice"
          onChange={e => setLanguage(e.target.value)}
        >
          <option value="none">Hide code</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
        </select>
      </div>

      <div className={`language-${language}`}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
      <RelatedProblems related_problems={related_problems} />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        difficulties
        link
        number
        related_problems
        topics
      }
      body
    }
  }
`;

export default SolutionPage;
