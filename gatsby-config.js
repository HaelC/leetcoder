/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "LeetCoder",
    description: "A website for leetcode problems and solutions",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `problems`,
        path: `${__dirname}/problems`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: { js: "javascript" },
              noInlineHighlight: true,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
        ],
        remarkPlugins: [require("remark-math")],
      },
    },
  ],
};
