import styled from 'styled-components/macro';
import { medias } from 'assets/styles';

export const Container = styled.div`
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  width: calc(100% - 20px);
  margin: 10px;

  a {
    color: ${({ theme }) => theme.colors.bg1};
  }

  ${medias.greaterThan('sm')`
    width: calc(50% - 20px);
  `}

  ${medias.greaterThan('md')`
    width: calc(33% - 20px);
  `}

  ${medias.greaterThan('lg')`
    width: calc(25% - 20px);
  `}

  ${medias.greaterThan('xlg')`
    width: calc(20% - 20px);
  `}
`;

export const Author = styled.picture`
  img {
    width: 75px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const Label = styled.div`
  padding: 2px 15px;
  border-radius: 5px;
  margin: 3px;
  background: ${({ theme }) => theme.colors.bg1};
`;
