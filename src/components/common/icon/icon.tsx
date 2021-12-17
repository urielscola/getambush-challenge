import React from 'react';
import { SpaceProps, PositionProps } from 'styled-system';
import { theme } from 'assets/styles';
import variants, { OptionsKeys } from './variants';
import * as Styles from './styles';

const SIZE = 40;

interface CustomProps {
  variant: OptionsKeys;
  size?: number;
  onClick?: any;
  color?: string;
  width?: number;
  height?: number;
  [key: string]: any;
}

type VariantProps = Omit<CustomProps, 'variant'>;
type Props = CustomProps & SpaceProps & PositionProps;

const Icon: React.FC<Props> = ({
  variant,
  onClick,
  size = SIZE,
  color = theme.colors.white,
  ...props
}) => {
  const Variant = variants[variant] as React.FC<VariantProps>;

  if (onClick) {
    return (
      <Styles.ButtonContainer aria-hidden="true" onClick={onClick} {...props}>
        <Variant width={size} height={size} size={size} color={color} />
      </Styles.ButtonContainer>
    );
  }
  return (
    <Styles.Container aria-hidden="true" {...props}>
      <Variant width={size} height={size} size={size} color={color} />
    </Styles.Container>
  );
};

export default Icon;
