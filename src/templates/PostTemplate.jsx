/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { serif, sansSerif } from '../styles/fonts';
import Layout from '../components/Layout';

const Article = styled.article`
  margin: 0;
`;

const Title = styled.h1`
  font-family: ${sansSerif};
  font-size: 1.75rem;
  margin-bottom: 0.5em;
`;

const DateTime = styled.div``;

const Body = styled.section`
  font-family: ${serif};
  margin: 2rem 0;
`;

const PostTemplate = ({
  data: {
    markdownRemark: {
      id,
      frontmatter: { title, date, dateFormat },
      html,
    },
  },
}) => (
  <Layout>
    <Article data-post-id={id}>
      <header>
        <Title>{title}</Title>
        <DateTime>
          <time dateTime={date}>{dateFormat}</time>
        </DateTime>
      </header>
      <Body dangerouslySetInnerHTML={{ __html: html }} />
    </Article>
  </Layout>
);

export default PostTemplate;

export const postQuery = graphql`
  query PostQuery($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      id
      frontmatter {
        title
        date
        dateFormat: date(formatString: "MMM D, YYYY — h:mma z")
      }
      html
    }
  }
`;
