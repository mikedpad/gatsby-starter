import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import media, { defaultBreakpoints } from 'styled-media-query';
import Link from '../Link';
import colors from '../../styles/colors';
import SEO from '../SEO';

const Header = styled.header`
  background-color: ${colors.bg.light};
`;

const Main = styled.main`
  overflow: auto;
  padding: 0;
`;

const Container = styled.div`
  display: flex;
  flex-flow: ${props => props.orientation} nowrap;
  justify-content: space-between;
  margin: 0;

  ${media.greaterThan(`small`)`
    margin: 0 auto;
    max-width: ${defaultBreakpoints.small};
  `};

  ${media.greaterThan(`medium`)`
    margin: 0 auto;
    max-width: ${defaultBreakpoints.medium};
  `};
`;

const Title = styled.h1`
  display: block;
  margin: 0;
  white-space: nowrap;
`;

const TitleLink = styled(Link)`
  color: ${colors.fg.default};
  text-decoration: none;
  transition: color 0.2s ease-out;

  &:hover {
    color: #fff;
  }
`;

const UnorderedList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: inline-block;
  margin-left: 0.75rem;

  &:first-child {
    margin-left: 0;
  }
`;

const NavLink = styled(Link)`
  background-color: inherit;
  color: ${colors.links.default};
  display: inline-block;
  font-size: 1.25rem;
  font-weight: 300;
  padding: 8px 10px;
  text-decoration: none;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: #ffffff33;
    color: #fff;
  }
`;

export default ({ children }) => {
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
      <SEO />
      <Header>
        <Container orientation="row">
          <Title>
            <TitleLink to="/">{title}</TitleLink>
          </Title>
          <nav>
            <UnorderedList>
              <ListItem>
                <NavLink to="/">Home</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to="/blog">Blog</NavLink>
              </ListItem>
            </UnorderedList>
          </nav>
        </Container>
      </Header>
      <Main>
        <Container orientation="column">{children}</Container>
      </Main>
    </>
  );
};
