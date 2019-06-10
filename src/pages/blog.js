import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostPreview from '../components/Blog/PostPreview';

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    {edges.map(({ node }) => (
      <PostPreview key={node.id} {...node} />
    ))}
  </Layout>
);

export default Blog;

export const blogQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "^//src/markdown/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          ...PostPreviewFragment
        }
      }
    }
  }
`;
