import React from 'react';
import { SiteProvider } from './src/components/Context/context';

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = <SiteProvider>{element}</SiteProvider>;
  return ConnectedRootElement;
};
