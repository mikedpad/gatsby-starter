/* eslint-disable import/prefer-default-export */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { SiteProvider } from './src/components/Context';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => <SiteProvider>{bodyComponent}</SiteProvider>;

  replaceBodyHTMLString(renderToString(<ConnectedBody />));
};
