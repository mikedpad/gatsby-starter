import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BackToTop from './BackToTop';
import { fg } from '../../../styles/colors';

const Article = styled.article`
  padding: 1rem 2rem;
`;

const Title = styled.h1`
  border-bottom: 1px solid ${fg};
  color: #fff;
  margin-bottom: 0.67em;
  padding-bottom: 0.2em;
`;

const TestElement = ({ id, title, children }) => (
  <Article id={id}>
    <header>
      <Title>{title}</Title>
    </header>
    <div>{children}</div>
    <footer>
      <BackToTop />
    </footer>
  </Article>
);

export default TestElement;

TestElement.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
