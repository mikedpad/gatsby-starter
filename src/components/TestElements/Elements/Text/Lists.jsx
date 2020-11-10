import React from 'react';
import TestElement from '../TestElement';

const Lists = () => {
  return (
    <TestElement id="text__lists" title="Lists">
      <h2>Definition list</h2>
      <dl>
        <dt>Definition List Title</dt>
        <dd>This is a definition list division.</dd>
      </dl>
      <h2>Ordered List</h2>
      <ol>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ol>
      <h2>Unordered List</h2>
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ul>
    </TestElement>
  );
};

export default Lists;
