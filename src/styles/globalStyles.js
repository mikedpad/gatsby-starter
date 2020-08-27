import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { bg, fg } from './colors';
import { sansSerif } from './fonts';

const globalCssStyle = createGlobalStyle`
  ${normalize()}

  :root {
    background-color: ${bg};
    color: ${fg};
    margin: 0;
    padding: 0;
    font-family: ${sansSerif};
  }
`;

export default globalCssStyle;
