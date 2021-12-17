import styled, { css } from 'styled-components/macro';
import { space, layout } from 'styled-system';
import { medias } from 'assets/styles';

export const Container = styled('div')`
  position: relative;
  margin-bottom: 35px;

  ${medias.greaterThan('lg')`
    margin-bottom: 45px;
    max-width: 465px;
  `};

  ${space};
  ${layout};
`;

export const ErrorMessage = styled('div')`
  position: absolute;
  top: 110%;
  display: flex;
  padding: 4px;
  font-size: 10px;
  align-items: center;
  color: ${({ theme }) => theme.colors.errorDarken};
  background-color: ${({ theme }) => theme.colors.inputError};
  font-family: ${({ theme }) => theme.typography.familyBook};

  ${medias.greaterThan('lg')`
    height: 95%;
    font-size: 16px;
    top: 1px;
    right: 15px;
  `};
`;

interface Props {
  hasError: boolean;
  [key: string]: any;
}

const placeholderStyles = css`
  font-size: 12px;
  font-family: ${({ theme }) => theme.typography.familyXLight};
  color: ${({ theme }) => theme.colors.gray};

  ${medias.greaterThan('lg')`
    font-size: 18px;
  `};
`;

export const Input = styled('input')<Props>`
  width: 100%;
  padding: 20px 15px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.bg1};
  border: none;
  font-family: ${({ theme }) => theme.typography.familyBook};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  border-radius: 20px;

  ::-webkit-input-placeholder {
    ${placeholderStyles};
  }
  :-ms-input-placeholder {
    ${placeholderStyles};
  }
  ::placeholder {
    ${placeholderStyles};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.white};
    border-bottom: none;
  }

  ${medias.greaterThan('lg')`
    height: 50px;
    font-size: 20px;
  `};

  ${({ hasError }) =>
    hasError &&
    css`
      background-color: ${({ theme }) => theme.colors.inputError};
      border-bottom: solid 1px ${({ theme }) => theme.colors.errorDarken};
    `};
`;
