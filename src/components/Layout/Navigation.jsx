import React from 'react';
import styled from 'styled-components';
import Link from '../Link';
import { links } from '../../styles/colors';

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
  color: ${links.normal};
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

const Navigation = () => {
  return (
    <UnorderedList>
      <ListItem>
        <NavLink to="/">Home</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/blog">Blog</NavLink>
      </ListItem>
    </UnorderedList>
  );
};

export default Navigation;
