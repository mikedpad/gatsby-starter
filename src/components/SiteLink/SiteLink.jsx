import React from 'react';
import PropTypes from 'prop-types';
import { Link, navigate } from 'gatsby';

const SiteLink = ({ children, to, ...other }) => {
  const internal = /^\/(?!\/)/.test(to);
  const navigateToSelf = event => {
    const { pathname } = event.target;

    if (pathname === document.location.pathname) {
      event.stopPropagation();
      navigate(pathname, { replace: true });
      return;
    }

    event.preventDefault();
    navigate(pathname);
  };

  if (internal) {
    return (
      <Link to={to} onClick={navigateToSelf} {...other}>
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
