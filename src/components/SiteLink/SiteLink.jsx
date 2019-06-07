import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const SiteLink = ({ children, to, ...other }) => {
  const internal = /^\/(?!\/)/.test(to);

  if (internal) {
    return (
      <Link to={to} {...other}>
        {children}
      </Link>
    );
  }

  return (
    <a href={to} rel="noopener noreferrer" target="_blank" {...other}>
      {children}
    </a>
  );
};

export default SiteLink;

SiteLink.propTypes = {
  to: PropTypes.string.isRequired,
};
