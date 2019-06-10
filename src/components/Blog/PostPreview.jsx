import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';

const Article = styled.article``;

const DateTime = styled.time``;

const PostLink = styled(Link)``;

const Title = styled.h1``;

const PostPreview = ({ id, fields: { path }, frontmatter: { title, date, dateFormat } }) => (
  <Article key={id} data-post-id={id}>
    <DateTime dateTime={date}>{dateFormat}</DateTime>
    <PostLink to={path}>
      <Title>{title}</Title>
    </PostLink>
  </Article>
);

export default PostPreview;

export const postPreviewFragment = graphql`
  fragment PostPreviewFragment on MarkdownRemark {
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
`;

PostPreview.propTypes = {
  id: PropTypes.string.isRequired,
  fields: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    dateFormat: PropTypes.string,
  }).isRequired,
};
