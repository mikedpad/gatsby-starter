import React from 'react';
import TestElement from '../TestElement';

const Blockquotes = () => {
  return (
    <TestElement id="text__blockquotes" title="Blockquotes">
      <blockquote>
        <p>
          A block quotation (also known as a long quotation or extract) is a quotation in a written
          document, that is set off from the main text as a paragraph, or block of text.
        </p>
        <p>
          It is typically distinguished visually using indentation and a different typeface or
          smaller size quotation. It may or may not include a citation, usually placed at the
          bottom.
        </p>
        <cite>
          <a href="#!">Said no one, ever.</a>
        </cite>
      </blockquote>
    </TestElement>
  );
};

export default Blockquotes;