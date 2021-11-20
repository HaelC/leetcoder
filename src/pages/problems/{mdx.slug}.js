import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";

const ProblemPage = ({ data }) => {
  const { title, difficulty, link, number } = data.mdx.frontmatter;
  return (
    <Layout pageTitle={title}>
      <h2 className="problem-title">
        {number}. {title}
      </h2>
      <div className="problem-info">
        <span className={`difficulty ${difficulty}`}>
          {difficulty.toUpperCase()}
        </span>
        <a
          href={link}
          className="leetcode-link"
          target="_blank"
          rel="noreferrer"
        >
          LeetCode Link
        </a>
      </div>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        difficulty
        link
        number
      }
      body
    }
  }
`;

export default ProblemPage;
