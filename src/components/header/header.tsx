import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from 'assets/styles';
import { FlexDiv, Icon, Typography, Container, Button } from 'components';
import * as Styles from './styles';

const Header: React.FC = ({ children }) => {
  return (
    <Styles.Container>
      <Styles.Navigation>
        <Container>
          <FlexDiv justifyContent="flex-end">
            <ul>
              <li>
                <Button
                  as="a"
                  to="/favorites"
                  text="Favorites"
                  rounded={false}
                  size="small"
                />
              </li>
            </ul>
          </FlexDiv>
        </Container>
      </Styles.Navigation>
      <Styles.HeaderContent>
        <FlexDiv alignItems="center" flexDirection="column">
          <Link to="/">
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
          </Link>
          {children}
        </FlexDiv>
      </Styles.HeaderContent>
    </Styles.Container>
  );
};

export default Header;
