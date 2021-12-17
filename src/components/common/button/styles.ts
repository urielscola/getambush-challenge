import styled, { css } from 'styled-components/macro';
import {
  color,
  layout,
  flexbox,
  space,
  typography,
  variant,
  border,
  compose,
} from 'styled-system';
import { theme, medias } from 'assets/styles';

const common = css`
  height: 35px;
  color: ${theme.colors.white};
  width: 200px;
  padding: 15px;
  text-align: center;
  border: none;
  transition: ${theme.transforms.transition};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  justify-content: center;

  &:disabled {
    cursor: not-allowed;
  }

  > span {
    margin-left: 10px;
    display: flex;
    align-items: center;
  }

  ${medias.greaterThan('lg')`
    height: 45px;
  `};
`;

const size = {
  prop: 'size',
  variants: {
    'x-small': {
      fontSize: [theme.typography.sizeSmall, theme.typography.sizeXSmall],
    },
    small: {
      fontSize: [theme.typography.sizeNormal, theme.typography.sizeSmall],
    },
    normal: {
      fontSize: theme.typography.sizeNormal,
    },
    medium: {
      fontSize: theme.typography.sizeMedium,
    },
    large: {
      fontSize: [theme.typography.sizeMedium, theme.typography.sizeLarge],
    },
    'x-large': {
      fontSize: [theme.typography.sizeLarge, theme.typography.sizeXLarge],
    },
  },
};

const appearence = {
  prop: 'appearence',
  variants: {
    primary: {
      backgroundColor: theme.colors.bg2,
      '&:hover': {
        backgroundColor: theme.colors.bg2Light,
      },
    },
    success: {
      backgroundColor: theme.colors.success,
      '&:hover': {
        backgroundColor: theme.colors.successDarken,
      },
    },
  },
};

interface ButtonProps {
  rounded?: boolean;
  disabled?: boolean;
  [key: string]: any;
}

export const Component = styled('button')<ButtonProps>`
  ${common};
  border-radius: ${({ rounded }) => (rounded ? '17px' : '0px')};

  ${compose(
    variant(appearence),
    layout,
    variant(size),
    color,
    typography,
    space,
    border,
    flexbox
  )}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
    `}
`;
