import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { links, fg, bg } from '../../styles/colors';
import toc from './toc.json';

const Nav = styled.nav`
  margin: 3rem 0;
`;

const UnorderedList = styled.ul`
  display: ${props => (props.child ? `block` : `flex`)};
  justify-content: space-around;
  list-style-type: ${props => (props.child ? `square` : `none`)};
  margin: 0;
  padding: 0;
  /* padding: ${props => (props.child ? `0 0 0 1rem` : `1rem 0`)}; */
`;

const ListItem = styled.li`
  display: block;

  ${UnorderedList} li & {
    color: ${darken(0.4, fg)};
    display: list-item;
    margin: 0 0 0 2.5rem;

    &:hover {
      color: ${darken(0.2, fg)};
    }
  }
`;

const TocLink = styled.a`
  color: ${links.normal};
  display: block;
  font-size: 1.25rem;
  padding: 0.5em 0.7em;
  text-decoration: none;
  transition: background-color 0.2s ease-out;

  &:hover {
    color: ${links.active};
    background-color: ${lighten(0.05, bg)};
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
