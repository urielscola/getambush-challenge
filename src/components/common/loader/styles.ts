import styled, { keyframes } from 'styled-components/macro';
import { variant } from 'styled-system';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const size = {
  prop: 'size',
  variants: {
    'x-small': {
      width: '20px',
      height: '20px',
      '&:after': {
        width: '18px',
        height: '18px',
      },
    },
    'x-large': {
      width: '60px',
      height: '60px',
      '&:after': {
        width: '58px',
        height: '58px',
      },
    },
  },
};

interface Props {
  [key: string]: any;
  color: string;
}

export const Container = styled('div')<Props>`
  display: inline-block;

  &:after {
    content: ' ';
    display: block;
    border-radius: 50%;
    animation: ${spinAnimation} 1.2s linear infinite;
    border: 1px solid ${({ color }) => color};
    border-color: ${({ color }) => color} transparent ${({ color }) => color}
      transparent;
  }

  ${variant(size)};
`;
