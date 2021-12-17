import styled from 'styled-components';
import {
  compose,
  color,
  variant,
  space,
  typography,
  layout,
} from 'styled-system';
import { theme } from 'assets/styles';

const size = {
  prop: 'size',
  variants: {
    'x-small': {
      fontSize: theme.typography.sizeXSmall,
    },
    small: {
      fontSize: theme.typography.sizeSmall,
    },
    normal: {
      fontSize: theme.typography.sizeNormal,
    },
    medium: {
      fontSize: theme.typography.sizeMedium,
    },
    large: {
      fontSize: theme.typography.sizeLarge,
    },
    'x-large': {
      fontSize: theme.typography.sizeXLarge,
    },
  },
};

const font = {
  prop: 'font',
  variants: {
    light: {
      fontWeight: theme.typography.weightLight,
    },
    medium: {
      fontWeight: theme.typography.weightNormal,
    },
    bold: {
      fontWeight: theme.typography.weightBold,
    },
  },
};

const appearence = {
  prop: 'appearence',
  variants: {
    light: {
      color: theme.colors.offWhite,
    },
    dark: {
      color: theme.colors.black,
    },
  },
};

interface Props {
  [key: string]: any;
}

export const Component = styled('p')<Props>`
  letter-spacing: 0.4px;
  line-height: 30px;
  ${compose(variant(font), variant(appearence), variant(size))};
  ${space};
  ${color};
  ${typography};
  ${layout};
`;
