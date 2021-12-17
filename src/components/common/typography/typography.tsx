import React from 'react';
import {
  TypographyProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
} from 'styled-system';
import * as Styles from './styles';

interface CustomProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: 'p' | 'span' | 'b' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
  size?: 'x-small' | 'small' | 'normal' | 'medium' | 'large' | 'x-large';
  appearence?: 'light' | 'dark';
  font?: 'x-light' | 'normal' | 'bold';
  [key: string]: any;
}

type Props = CustomProps &
  TypographyProps &
  SpaceProps &
  ColorProps &
  LayoutProps;

const Typography: React.FC<Props> = ({ as = 'p', children, ...props }) => (
  <Styles.Component as={as} {...props} data-testid="text">
    {children}
  </Styles.Component>
);

export default Typography;

Typography.defaultProps = {
  size: 'normal',
  appearence: 'light',
  font: 'normal',
};
