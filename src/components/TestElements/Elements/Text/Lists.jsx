import React from 'react';
import TestElement from '../TestElement';

const Lists = () => {
  return (
    <TestElement id="text__lists" title="Lists">
      <h3>Definition list</h3>
      <dl>
        <dt>Definition List Title</dt>
        <dd>This is a definition list division.</dd>
      </dl>
      <h3>Ordered List</h3>
      <ol>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ol>
      <h3>Unordered List</h3>
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ul>
    </TestElement>
  );
};

export default Lists;
