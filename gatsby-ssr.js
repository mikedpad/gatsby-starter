/* eslint-disable import/prefer-default-export */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from './src/components/context';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => (
    <Provider>
      {bodyComponent}
    </Provider>
  );

  replaceBodyHTMLString(renderToString(<ConnectedBody />));
};
