const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const nodeSlug = createFilePath({ node, getNode });
    const contentType = node.fileAbsolutePath.split(`/markdown/`)[1].split(`/`)[0];
    const pathValue = `/${contentType}${nodeSlug}`;
    createNodeField({
      name: `path`,
      node,
      value: pathValue,
    });
  }
};

exports.createPages = ({ actions: { createPage }, graphql }) =>
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
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const blogEdges = result.data.blog.edges;

    // Log: Create page for each post
    blogEdges.forEach(({ node }) => {
      createPage({
        path: node.fields.path,
        component: path.resolve(`src/templates/PostTemplate.jsx`),
        context: {},
      });
    });

    return Promise.resolve();
  });
