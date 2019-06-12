import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SiteLink from '../SiteLink';

const PostPreview = ({ id, fields: { path }, frontmatter: { title, date, dateFormat } }) => (
  <article key={id} data-post-id={id}>
    <time dateTime={date}>{dateFormat}</time>
    <SiteLink to={path}>
      <h1>{title}</h1>
    </SiteLink>
  </article>
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
