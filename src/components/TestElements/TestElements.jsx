import React from 'react';
import styled from 'styled-components';
import TableOfContents from './TableOfContents';
import Text from './Elements/Text';
import Embedded from './Elements/Embedded';
import Form from './Elements/Form';
import Link from '../Link';

const PageHeadline = styled.h1`
  color: #fff;
`;

const TestElements = () => {
  return (
    <>
      <header role="banner">
        <PageHeadline>Content Test Page</PageHeadline>
        <p>
          This is a test page filled with common HTML elements wrapped in React components… but
          rather than be used to build CSS styles, these elements are just fodder for
          demonstrational purposes.
        </p>
      </header>
      <TableOfContents />
      <main role="main">
        <Text />
        <Embedded />
        <Form />
      </main>
      <footer role="contentinfo">
        <p>
          Modified by <Link to="https://github.com/mikedpad">Michael Daniel Padilla</Link>.
        </p>
        <p>
          Forked from{` `}
          <Link to="https://github.com/cbracco/html5-test-page">HTML5 Test Page</Link>.
        </p>
      </footer>
    </>
  );
};

export default TestElements;
