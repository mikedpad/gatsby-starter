import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

const PostPreview = ({ id, path, title, date, dateFormat }) => (
  <article key={id} data-post-id={id}>
    <time dateTime={date}>{dateFormat}</time>
    <Link to={path}>
      <h1>{title}</h1>
    </Link>
  </article>
);

export default PostPreview;

PostPreview.propTypes = {
  id: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  dateFormat: PropTypes.string.isRequired,
};
