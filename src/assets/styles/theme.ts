import { darken, lighten } from 'polished';
import { breakpoints } from './breakpoints';
import {
  Colors,
  Layout,
  Transforms,
  Typography,
  Theme,
  ThemeScale,
  BreakpointAlias,
} from './interfaces';

const ALTERATION_POWER = 0.1;

const colors: Colors = {
  black: '#000000',
  blackDark: '',
  blackLight: '',
  white: '#fff',
  whiteDark: '',
  whiteLight: '',
  offWhite: '#a1a5ab',
  offWhiteDark: '',
  offWhiteLight: '',
  blue: '#788cfe',
  blueDark: '',
  blueLight: '',
  bg1: '#33373c',
  bg1Dark: '',
  bg1Light: '',
  bg2: '#272b30',
  bg2Dark: '',
  bg2Light: '',
  success: '#2caa3b',
  successDark: '',
  successLight: '',
  warn: '#dfb52b',
  warnDark: '',
  warnLight: '',
  info: '#274cb1',
  infoDark: '',
  infoLight: '',
  error: '#e35b5c',
  errorDark: '',
  errorLight: '',
};

Object.keys(colors).forEach((key) => {
  if (!!colors[key]) {
    colors[`${key}'Dark'`] = darken(ALTERATION_POWER, colors[key]);
    colors[`${key}Light`] = lighten(ALTERATION_POWER, colors[key]);
  }
});

const typography: Typography = {
  sizeXSmall: '12px',
  sizeSmall: '14px',
  sizeNormal: '16px',
  sizeMedium: '18px',
  sizeLarge: '24px',
  sizeXLarge: '32px',
  weightLight: 300,
  weightNormal: 400,
  weightBold: 700,
};

const layout: Layout = {
  borderRadius: '20px',
  boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.16)',
};

const transforms: Transforms = {
  transition: '150ms ease-in-out',
};

export const theme: Theme = {
  colors,
  typography,
  layout,
  transforms,
};

theme.breakpoints = breakpoints as ThemeScale<string, BreakpointAlias>;
[
  theme.breakpoints.sm,
  theme.breakpoints.md,
  theme.breakpoints.lg,
  theme.breakpoints.xlg,
] = theme.breakpoints;

export default theme;
