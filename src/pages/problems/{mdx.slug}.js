import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";

const ProblemPage = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <h2>
        {data.mdx.frontmatter.number}. {data.mdx.frontmatter.title}
      </h2>
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
