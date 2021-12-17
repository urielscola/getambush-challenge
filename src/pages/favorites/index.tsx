import React from 'react';
import {
  Head,
  Header,
  Footer,
  FlexDiv,
  Icon,
  Container,
  Typography,
  IssueCard,
} from 'components';
import { FavoritesState } from 'store/favorites';
import { useTypedSelector } from 'hooks';
import { theme } from 'assets/styles';

const Favorites: React.FC = () => {
  const { list }: FavoritesState = useTypedSelector((state) => state.favorites);

  return (
    <>
      <Head title="Favorites" />
      <Header>
        <FlexDiv alignItems="center">
          <Typography size="x-large" margin="25px 10px 25px 0">
            Your Favorites
          </Typography>
          <Icon variant="heart-fill" color={theme.colors.error} />
        </FlexDiv>
      </Header>
      <main>
        <Container>
          <FlexDiv flexWrap="wrap" margin="40px 0">
            {list.map((issue, index) => (
              <IssueCard issue={issue} key={issue.id} index={index} />
            ))}

            {list.length === 0 && (
              <FlexDiv flexWrap="wrap" margin="40px 0" minHeight="50vh">
                <Typography size="medium">No favorites.</Typography>
              </FlexDiv>
            )}
          </FlexDiv>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Favorites;
