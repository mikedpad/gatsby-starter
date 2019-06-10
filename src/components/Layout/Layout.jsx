import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { fluidRange, lighten } from 'polished';
import SiteLink from '../SiteLink/SiteLink';
import Navigation from './Navigation';
import { sansSerif } from '../../styles/fonts';
import { bg, fg } from '../../styles/colors';

const GlobalCSS = createGlobalStyle`
  :root {
    background-color: ${bg};
    color: ${fg};
    font-family: ${sansSerif};
    text-rendering: optimizeLegibility;
  }
`;

const Header = styled.header`
  background-color: ${lighten(0.05, bg)};
  margin-bottom: 1.45rem;
`;

const Main = styled.main`
  overflow: auto;
  padding: 0;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1.5rem 1.25rem;

  ${fluidRange(
    {
      prop: `max-width`,
      fromSize: `600px`,
      toSize: `960px`,
    },
    `640px`,
    `1200px`,
  )}
`;

const FlexWrap = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 0;
`;

const TitleLink = styled(SiteLink)`
  color: ${fg};
  text-decoration: none;
  transition: color 0.2s ease-out;

  &:hover {
    color: #fff;
  }
`;

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
      <GlobalCSS />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header>
        <Wrapper>
          <FlexWrap>
            <Title>
              <TitleLink to="/">{title}</TitleLink>
            </Title>
            <nav>
              <Navigation />
            </nav>
          </FlexWrap>
        </Wrapper>
      </Header>
      <Main>
        <Wrapper>{children}</Wrapper>
      </Main>
    </>
  );
};

export default Layout;
