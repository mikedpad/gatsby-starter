import { lighten, darken } from 'polished';

const bg = `#242a31`;
const fg = `#afafb1`;
const headline = `#f5f5f7`;
const defaultLink = `#455a72`;
const activeLink = `#698eb9`;

export default {
  bg: {
    default: bg,
    light: lighten(0.05, bg),
  },
  fg: {
    default: fg,
    dark: darken(0.2, fg),
    darker: darken(0.4, fg),
  },
  headline,
  links: {
    default: defaultLink,
    active: activeLink,
  },
};
