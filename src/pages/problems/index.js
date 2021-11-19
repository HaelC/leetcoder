import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";

const ProblemsPage = ({ data }) => {
  return (
    <Layout pageTitle="Problems">
      <ul>
        {data.allMdx.nodes.map(node => (
          <li key={node.id}>
            <Link to={`/problems/${node.slug}`}>
              {node.frontmatter.number}. {node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___number, order: ASC }) {
      nodes {
        frontmatter {
          number
          title
        }
        id
        slug
      }
    }
  }
`;

export default ProblemsPage;
