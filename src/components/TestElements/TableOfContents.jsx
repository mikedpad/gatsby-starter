import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import colors from '../../styles/colors';
import toc from './toc.json';

const Nav = styled.nav`
  margin: 3rem 0;
`;

const UnorderedList = styled.ul`
  justify-content: space-around;
  list-style-type: none;
  margin: ${props => (props.child ? `0 0 2rem` : `0`)};
  padding: 0;
  text-align: center;

  ${media.greaterThan(`small`)`
    display: ${props => (props.child ? `block` : `flex`)};
    list-style-type: ${props => (props.child ? `square` : `none`)};
    margin: 0;
    text-align: left;
  `};
`;

const ListItem = styled.li`
  display: block;

  ${UnorderedList} li & {
    color: ${colors.fg.darker};
    display: list-item;

    ${media.greaterThan(`560px`)`
      margin: 0 0 0 2.5rem;
    `};

    &:hover {
      color: ${colors.fg.dark};
    }
  }
`;

const TocLink = styled.a`
  color: ${colors.links.default};
  display: block;
  font-size: 1.25rem;
  padding: 0.5em 0.7em;
  text-decoration: none;
  transition: background-color 0.2s ease-out;

  &:hover {
    color: ${colors.links.active};
    background-color: ${colors.bg.light};
  }

  ${ListItem} ${ListItem} & {
    font-size: 1rem;
  }
`;

const scrollToElement = evt => {
  evt.preventDefault();
  document.getElementById(evt.target.hash.slice(1)).scrollIntoView({
    behavior: `smooth`,
    inline: `start`,
  });
};

const mapTableOfContents = node => {
  const { label, href, child } = node;
  return (
    <ListItem key={label}>
      <TocLink href={href} onClick={scrollToElement}>
        {label}
      </TocLink>
      {child && <UnorderedList child>{child.map(mapTableOfContents)}</UnorderedList>}
    </ListItem>
  );
};

const TableOfContents = () => (
  <Nav>
    <UnorderedList>{toc.map(mapTableOfContents)}</UnorderedList>
  </Nav>
);

export default TableOfContents;
