import React, { useState } from 'react';
import { LayoutProps, SpaceProps } from 'styled-system';
import Typography from '../typography';
import * as Styles from './styles';

interface CustomProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'tel' | 'text' | 'date' | 'number' | 'search' | 'password' | 'email';
  label?: string;
  hintMessage?: React.ReactNode;
  error?: React.ReactNode;
  schema?: any;
}

export type Props = CustomProps & LayoutProps & SpaceProps;

const Input: React.FC<Props> = ({
  name,
  value,
  disabled,
  required,
  readOnly,
  type,
  label,
  onBlur,
  onChange,
  maxLength,
  hintMessage,
  error,
  schema,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState('');
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    if (onBlur) onBlur(event);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInternalValue(event.target.value);
    if (onChange) onChange(event);
  };

  return (
    <>
      {label && (
        <Typography
          as="label"
          htmlFor={`${name}-input`}
          marginBottom={{ default: '10px' }}
          font="x-light"
          appearence="light"
          textAlign={{ default: 'center', md: 'left' }}
          fontSize={{ default: '16px', md: '20px', lg: '22px', xlg: '28px' }}
          display={{ default: 'block' }}
        >
          {label}
        </Typography>
      )}
      {hintMessage && hintMessage}
      <Styles.Container {...props}>
        <Styles.Input
          id={`${name}-input`}
          name={name}
          type={type}
          value={value !== undefined ? value : internalValue}
          onBlur={handleBlur}
          onChange={handleChange}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          minLength={maxLength ? 0 : undefined}
          maxLength={maxLength}
          tabIndex={disabled || readOnly ? -1 : 0}
          data-input=""
          autoComplete="off"
          hasError={!!error}
          aria-invalid={error && !disabled && !readOnly ? 'true' : 'false'}
          aria-readonly={readOnly ? 'true' : 'false'}
          aria-disabled={disabled ? 'true' : 'false'}
          aria-required={required ? 'true' : 'false'}
          aria-labelledby={`${name}-input-label`}
          aria-errormessage={`${name}-input-error`}
          {...props}
        />
        {error && <Styles.ErrorMessage>{error}</Styles.ErrorMessage>}
      </Styles.Container>
    </>
  );
};

export default Input;
