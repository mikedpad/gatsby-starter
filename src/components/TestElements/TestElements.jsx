import React from 'react';
import TableOfContents from './TableOfContents';
import { TextElements, FormElements, EmbeddedElements } from './Elements';
import './css/TestElements.scss';

const TestElements = () => {
  return (
    <>
      <header role="banner">
        <h1>HTML5 Test Page</h1>
        <p>
          This is a test page filled with common HTML elements to be used to provide visual feedback
          whilst building CSS systems and frameworks.
        </p>
      </header>
      <TableOfContents />
      <main role="main">
        <TextElements />
        <EmbeddedElements />
        <FormElements />
      </main>
      <footer role="contentinfo">
        <p>
          Modified by <a href="https://github.com/mikedpad">Michael Daniel Padilla</a>.
        </p>
        <p>
          Forked from <a href="https://github.com/cbracco/html5-test-page">HTML5 Test Page</a>.
        </p>
      </footer>
    </>
  );
};

export default TestElements;
