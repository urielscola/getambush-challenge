import React from 'react';
import { theme } from 'assets/styles';
import { FlexDiv, Icon, Typography } from 'components';
import * as Styles from './styles';

const Header: React.FC = ({ children }) => {
  return (
    <Styles.Container>
      <FlexDiv alignItems="center" flexDirection="column">
        <FlexDiv alignItems="center">
          <Typography
            as="h1"
            size="x-large"
            color={theme.colors.white}
            marginRight={10}
          >
            GitHub Search
          </Typography>
          <Icon variant="github" color={theme.colors.blue} />
        </FlexDiv>
        {children}
      </FlexDiv>
    </Styles.Container>
  );
};

export default Header;
