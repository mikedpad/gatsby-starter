import React from 'react';
import styled from 'styled-components';

const GoToTopButton = styled.button`
  background-color: #ffffff33;
  border: 2px solid #ffffff11;
  border-radius: 0.25em;
  color: #fff;
  margin: 1.5rem 0 3rem;
  outline: none;
  padding: 0.25em 0.75em;
`;

const BackToTop = () => {
  const onScrollToTopClick = event => {
    event.preventDefault();
    document.documentElement.scrollIntoView({
      behavior: `smooth`,
      block: `start`,
      inline: `start`,
    });
  };

  return (
    <GoToTopButton type="button" onClick={onScrollToTopClick}>
      Go To Top
    </GoToTopButton>
  );
};

export default BackToTop;
