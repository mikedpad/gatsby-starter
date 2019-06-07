import React from 'react';
import toc from './toc.json';

const TableOfContents = () => {
  const scrollToElement = (evt, id) => {
    evt.preventDefault();
    document.getElementById(id.slice(1)).scrollIntoView({
      behavior: `smooth`,
      block: `start`,
      inline: `start`,
    });
  };

  const mapTableOfContents = node => {
    const { label, href, child } = node;
    return (
      <li key={label}>
        <a href={href} onClick={evt => scrollToElement(evt, href)}>
          {label}
        </a>
        {child && <ul>{child.map(mapTableOfContents)}</ul>}
      </li>
    );
  };

  return (
    <nav>
      <ul>{toc.map(mapTableOfContents)}</ul>
    </nav>
  );
};

export default TableOfContents;
