import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import PostPreview from '../components/Blog/PostPreview';

const Blog = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
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
  `);
  return (
    <Layout>
      {edges.map(({ node }) => (
        <PostPreview key={node.id} {...node} />
      ))}
    </Layout>
  );
};

export default Blog;
