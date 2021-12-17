import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  ColorProps,
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  BorderProps,
  TypographyProps,
} from 'styled-system';
import * as Styles from './styles';

interface CustomProps extends React.HTMLAttributes<HTMLButtonElement> {
  as?: 'button' | 'a';
  text: string;
  appearence?: 'primary' | 'success';
  disabled?: boolean;
  size?: 'x-small' | 'small' | 'normal' | 'medium' | 'large' | 'x-large';
  rounded?: boolean;
  onClick?: (params: any) => any;
  icon?: ReactNode;
  [key: string]: any;
}

type Props = CustomProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  BorderProps &
  TypographyProps &
  FlexboxProps;

const Button: React.FC<Props> = ({
  as = 'button',
  text,
  size,
  onClick,
  appearence,
  disabled = false,
  rounded = true,
  icon,
  ...props
}) => (
  <Styles.Component
    as={as === 'a' ? Link : as}
    appearence={appearence}
    size={size}
    disabled={disabled}
    rounded={rounded.toString()}
    tabIndex={disabled ? -1 : 0}
    aria-disabled={disabled ? 'true' : 'false'}
    onClick={disabled ? undefined : onClick}
    data-testid="button"
    {...props}
  >
    {text}
    {icon && <span>{icon}</span>}
  </Styles.Component>
);

Button.defaultProps = {
  appearence: 'primary',
  size: 'medium',
  disabled: false,
  rounded: true,
};

export default Button;
