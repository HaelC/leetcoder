import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../../components/layout-en";
import "./solutions.css";
import Seo from "../../../components/seo";

const SolutionsPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Solutions" />
      <ul className="solution-list">
        {data.allMdx.nodes.map(node => (
          <li key={node.id}>
            <Link to={`/${node.slug}`}>
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

export default SolutionsPage;
