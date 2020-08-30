import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import colors from './colors';
import { sansSerif } from './fonts';

const globalCssStyle = createGlobalStyle`
  ${normalize()}

  :root {
    background-color: ${colors.bg.default};
    color: ${colors.fg.default};
    font-family: ${sansSerif};
    margin: 0;
    padding: 0;
    text-rendering: geometricPrecision;
  }
`;

export default globalCssStyle;
