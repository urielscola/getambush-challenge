import React from 'react';
import { Container, Typography } from 'components';
import * as Styles from './styles';

const Footer: React.FC = () => {
  return (
    <Styles.Container>
      <Container>
        <Typography>CC 2021</Typography>
      </Container>
    </Styles.Container>
  );
};

export default Footer;
