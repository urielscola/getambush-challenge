import React from 'react';
import { SpaceProps, LayoutProps } from 'styled-system';
import { theme } from 'assets/styles';
import * as Styles from './styles';

interface CustomProps {
  size?: 'x-small' | 'x-large';
  color?: string;
  [key: string]: any;
}

type Props = CustomProps & SpaceProps & LayoutProps;

const Loader: React.FC<Props> = ({ ...props }) => (
  <Styles.Container {...props} />
);

export default Loader;

Loader.defaultProps = {
  size: 'x-small',
  color: theme.colors.offWhite,
};
