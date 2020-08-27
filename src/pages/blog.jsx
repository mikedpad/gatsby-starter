import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';

export default () => {
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
            id
            fields {
              path
            }
            frontmatter {
              title
              date
              dateFormat: date(formatString: "MMM D, YYYY")
            }
          }
        }
      }
    }
  `);
  return (
    <Layout title=": Blog">
      {edges.map(({ node: { id, fields, frontmatter } }) => (
        <PostPreview
          key={id}
          id={id}
          path={fields.path}
          title={frontmatter.title}
          date={frontmatter.date}
          dateFormat={frontmatter.dateFormat}
        />
      ))}
    </Layout>
  );
};
