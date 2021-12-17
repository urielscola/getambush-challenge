import styled from 'styled-components/macro';
import { medias } from 'assets/styles';

export const Container = styled.header`
  margin-bottom: 25px;
  border-radius: 0px 0px 25px 25px;
  overflow: hidden;
`;

export const HeaderContent = styled.div`
  padding: 25px;
  background-color: ${({ theme }) => theme.colors.bg2};

  ${medias.greaterThan('lg')`
    padding: 65px;
  `}
`;

export const Navigation = styled.nav`
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.blue};
`;
