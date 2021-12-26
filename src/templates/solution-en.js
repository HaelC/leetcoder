import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout-en";
import Seo from "../components/seo";

const RelatedProblems = ({ related_problems }) => {
  if (related_problems.length === 0) {
    return null;
  }
  return (
    <div className="related-problems">
      <h4>Related Problems:</h4>
      <ul>
        {related_problems.map(problem => (
          <li key={problem}>
            <Link to={`/en/solution/${problem[1]}`}>{problem[0]}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SolutionPage = ({ data }) => {
  const { title, difficulties, link, number, related_problems, topics } =
    data.mdx.frontmatter;

  return (
    <Layout>
      <Seo title={title} />
      <div className="problem-info">
        <h2 className="problem-title">
          {number}. {title}
        </h2>
        {difficulties.map(difficulty => (
          <span className={`difficulty ${difficulty}`} key={difficulty}>
            {difficulty.toUpperCase()}
          </span>
        ))}
        <a
          href={link}
          className="leetcode-link"
          target="_blank"
          rel="noreferrer"
        >
          LeetCode Link
        </a>
        <ul className="problem-topics">
          Topics:
          {topics.map(topic => (
            <li className="problem-topic" key={topic}>
              {topic}
            </li>
          ))}
        </ul>
      </div>

      <div className="solution-main">
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
