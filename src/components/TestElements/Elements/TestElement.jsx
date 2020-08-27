import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../../styles/colors';
import BackToTop from './BackToTop';

const Article = styled.article`
  padding: 1rem 2rem;
`;

const Title = styled.h1`
  border-bottom: 1px solid ${colors.fg.default};
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
