import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import SiteLink from '../SiteLink/SiteLink';
import style from './Layout.module.scss';
import '../../styles/global.scss';

const Layout = ({ children }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header className={style.header}>
        <div className={style.wrapper}>
          <div className={style.flex}>
            <h1 className={style.h1}>
              <SiteLink to="/" className={style.titleLink}>
                {title}
              </SiteLink>
            </h1>
            <nav className={style.nav}>
              <ul className={style.ul}>
                <li className={style.li}>
                  <SiteLink to="/" className={style.navLink}>
                    Home
                  </SiteLink>
                </li>
                <li className={style.li}>
                  <SiteLink to="/page-2" className={style.navLink}>
                    Page 2
                  </SiteLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className={style.main}>
        <div className={style.wrapper}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
