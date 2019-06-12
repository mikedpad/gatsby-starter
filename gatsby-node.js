const path = require(`path`);
const slugify = require(`slugify`);

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  // Create slugs for blog posts
  if (node.internal.type === `MarkdownRemark`) {
    const slug = slugify(node.frontmatter.slug || node.frontmatter.title, { lower: true });
    createNodeField({
      name: `path`,
      node,
      value: `/blog/${slug}`,
    });
  }
};

exports.createPages = ({ actions: { createPage }, graphql }) =>
  // Query blog posts and create individual pages
  graphql(`
    {
      blog: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "^//src/markdown/blog/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              path
            }
          }
        }
      }
    }
  `).then(({ errors, data: { blog: { edges } } }) => {
    if (errors) {
      return Promise.reject(errors);
    }

    edges.forEach(({ node: { fields: { path: pagePath } } }) => {
      createPage({
        path: pagePath,
        component: path.resolve(`src/templates/PostTemplate.jsx`),
        context: {},
      });
    });

    return Promise.resolve();
  });
