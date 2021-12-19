const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            number
            title
          }
          slug
          id
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const nodes = result.data.allMdx.nodes;
  nodes.forEach(node => {
    const lang = node.slug.split("/")[0];
    createPage({
      path: node.slug,
      component: path.resolve(`src/templates/solution-${lang}.js`),
      context: {
        id: node.id,
      },
    });
  });
};
