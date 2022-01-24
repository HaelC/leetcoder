import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout-zh";
import Seo from "../../components/seo";

const SolutionsPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Solutions" />
      <ul className="solution-list">
        {data.allMdx.nodes.map(node => (
          <li key={node.id}>
            <Link to={`/${node.slug.slice(0, -1)}`}>
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
    allMdx(
      filter: { slug: { regex: "/^zh/" } }
      sort: { fields: frontmatter___number, order: ASC }
    ) {
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
