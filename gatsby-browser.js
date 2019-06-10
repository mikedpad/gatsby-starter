/* eslint-disable import/prefer-default-export */
import React from 'react';
import { SiteProvider } from './src/components/Context';
import 'normalize.css/normalize.css';

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = <SiteProvider>{element}</SiteProvider>;
  return ConnectedRootElement;
};
