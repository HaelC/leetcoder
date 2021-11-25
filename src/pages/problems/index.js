import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import "./problems.css";
import Seo from "../../components/seo";

const ProblemsPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Problems" />
      <ul className="problem-list">
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
