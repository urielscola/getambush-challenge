export interface Colors {
  black: string;
  blackDark: string;
  blackLight: string;
  white: string;
  whiteDark: string;
  whiteLight: string;
  offWhite: string;
  offWhiteDark: string;
  offWhiteLight: string;
  bg1: string;
  bg1Dark: string;
  bg1Light: string;
  bg2: string;
  bg2Dark: string;
  bg2Light: string;
  success: string;
  successDark: string;
  successLight: string;
  warn: string;
  warnDark: string;
  warnLight: string;
  info: string;
  infoDark: string;
  infoLight: string;
  error: string;
  errorDark: string;
  errorLight: string;
  blue: string;
  purple: string;
  pink: string;
  salmon: string;
  gold: string;
  yellow: string;
  lemon: string;
  cyan: string;
  [key: string]: string;
}

export interface Typography {
  sizeXSmall: string;
  sizeSmall: string;
  sizeNormal: string;
  sizeMedium: string;
  sizeLarge: string;
  sizeXLarge: string;
  weightLight: number;
  weightNormal: number;
  weightBold: number;
}

export interface Layout {
  borderRadius: string;
  boxShadow: string;
}

export interface Transforms {
  transition: string;
}

export type ThemeScale<Type, Aliases extends string> = Array<Type> &
  Record<Aliases, Type>;
export type BreakpointAlias = 'sm' | 'md' | 'lg' | 'xlg';

export interface Theme {
  colors: Colors;
  typography: Typography;
  layout: Layout;
  transforms: Transforms;
  breakpoints?: ThemeScale<string, BreakpointAlias>;
}
