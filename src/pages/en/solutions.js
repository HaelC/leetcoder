import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout-en";
import Seo from "../../components/seo";

const SolutionsPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Solutions" />
      <table className="solution-table">
        <colgroup>
          <col className="col-title" />
          <col className="col-difficulties" />
          <col className="col-tags" />
        </colgroup>
        <thead>
          <tr>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {data.allMdx.nodes.map(node => (
            <tr key={node.id}>
              <td>
                <Link to={`/${node.slug.slice(0, -1)}`}>
                  {node.frontmatter.number}. {node.frontmatter.title}
                </Link>
              </td>
              <td>
                <ul className="problem-difficulties">
                  {node.frontmatter.difficulties.map(difficulty => (
                    <li
                      className={`problem-difficulty ${difficulty}`}
                      key={difficulty}
                    >
                      {difficulty.toUpperCase()}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <ul className="problem-tags">
                  {node.frontmatter.tags.map(tag => (
                    <li className="problem-tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      filter: { slug: { regex: "/^en/" } }
      sort: { fields: frontmatter___number, order: ASC }
    ) {
      nodes {
        frontmatter {
          number
          title
          difficulties
          tags
        }
        id
        slug
      }
    }
  }
`;

export default SolutionsPage;
