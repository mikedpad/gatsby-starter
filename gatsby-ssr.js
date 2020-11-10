/* eslint-disable import/prefer-default-export */
import { SiteProvider } from './src/components/Context';
import GlobalCssStyle from './src/styles/globalStyles';

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = (
    <>
      <GlobalCssStyle />
      <SiteProvider>{element}</SiteProvider>
    </>
  );
  return ConnectedRootElement;
};
