import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { Link, StaticQuery } from 'gatsby';
import ContentWrapper from './contentWrapper';
import styles from './css/header.module.scss';

class Header extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => {
          const { siteMetadata } = data.site;
          return (
            <Fragment>
              <Helmet
                titleTemplate={`%s | ${siteMetadata.title}`}
                defaultTitle={siteMetadata.title}
              />
              <header className={styles.header}>
                <ContentWrapper>
                  <h1 className={styles.h1}>
                    <Link
                      to='/'
                      className={styles.titleLink}
                    >
                      {siteMetadata.title}
                    </Link>
                  </h1>
                </ContentWrapper>
              </header>
            </Fragment>
          );
        }}
      />
    );
  }
}

export default Header;
