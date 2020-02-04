/* eslint-disable import/prefer-default-export */
import React from 'react';
import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { sansSerif } from './src/styles/fonts';
import { SiteProvider } from './src/components/Context';
import { bg, fg } from './src/styles/colors';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    background-color: ${bg};
    color: ${fg};
    margin: 0;
    padding: 0;
    font-family: ${sansSerif};
  }
`;

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = (
    <>
      <GlobalStyle />
      <SiteProvider>{element}</SiteProvider>
    </>
  );
  return ConnectedRootElement;
};
