import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ children, to, ...other }) => {
  const internal = /^\/(?!\/)/.test(to);

  if (internal) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a href={to} rel="noopener noreferrer" target="_blank" {...other}>
      {children}
    </a>
  );
};

export default Link;

Link.propTypes = {
  to: PropTypes.string.isRequired,
};
