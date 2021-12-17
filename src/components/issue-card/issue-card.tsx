import React from 'react';
import { Issue, truncateString, getColorVariation } from 'utils';
import { FlexDiv, Icon, Typography } from 'components';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'hooks';
import { FavoritesActions } from 'store/favorites';
import { theme } from 'assets/styles';
import * as Styles from './styles';

interface Props {
  issue: Issue;
  index: number;
}

const IssueCard = ({ issue, index }: Props) => {
  const { lookup } = useTypedSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const repository = issue.repository_url.split('/');

  const handleFavoriteClick = () => {
    if (lookup[issue.id]) {
      dispatch(FavoritesActions.removeFavorite(issue.id));
    } else {
      dispatch(FavoritesActions.addFavorite(issue));
    }
  };

  return (
    <Styles.Container>
      <FlexDiv
        backgroundColor={getColorVariation(theme, index + 1)}
        padding="25px"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Styles.Author>
          <img src={issue.user.avatar_url} />
        </Styles.Author>
        <Typography as="h4" color={theme.colors.white}>
          {issue.user.login}
        </Typography>

        <Icon
          onClick={handleFavoriteClick}
          size={25}
          color={lookup[issue.id] ? theme.colors.error : theme.colors.white}
          position="absolute"
          right="15px"
          top="15px"
          variant={lookup[issue.id] ? 'heart-fill' : 'heart'}
        />
      </FlexDiv>
      <FlexDiv flexDirection="column" padding="25px">
        <Typography
          as="h3"
          size="medium"
          font="bold"
          appearence="dark"
          marginBottom="5px"
        >
          <a href={issue.html_url} target="_blank" title={issue.title}>
            {issue.title}
          </a>
        </Typography>

        <Typography color={theme.colors.bg1} size="normal" marginBottom="25px">
          repo: {repository[repository.length - 1]}
        </Typography>

        <FlexDiv marginBottom="15px" alignItems="center">
          <Icon
            variant="issue-state"
            size={30}
            marginRight="10px"
            color={
              issue.state === 'open' ? theme.colors.success : theme.colors.error
            }
          />
          <Typography color={theme.colors.bg2} size="normal">
            State: {issue.state}
          </Typography>
        </FlexDiv>

        <FlexDiv marginBottom="15px" alignItems="center">
          <Icon
            variant="comment"
            size={30}
            marginRight="10px"
            color={theme.colors.offWhite}
          />
          <Typography color={theme.colors.bg2} size="normal">
            Comments: {issue.comments}
          </Typography>
        </FlexDiv>

        {issue.labels.length > 0 && (
          <>
            <Typography color={theme.colors.bg2} size="normal">
              Labels
            </Typography>
            <FlexDiv alignItems="center" flexWrap="wrap">
              {issue.labels.map((label) => (
                <Styles.Label key={label.id}>
                  <Typography
                    as="span"
                    color={theme.colors.white}
                    size="x-small"
                  >
                    {truncateString(label.name, 10)}
                  </Typography>
                </Styles.Label>
              ))}
            </FlexDiv>
          </>
        )}
      </FlexDiv>
    </Styles.Container>
  );
};

export default IssueCard;
