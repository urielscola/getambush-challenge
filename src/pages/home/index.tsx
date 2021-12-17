import React, { useState, useCallback, useEffect, FormEvent } from 'react';
import {
  Head,
  Header,
  FlexDiv,
  Input,
  Icon,
  Container,
  Typography,
  IssueCard,
  Loader,
  Button,
} from 'components';
import {
  searchIssues,
  SearchIssuesResponse,
  IssueState,
  IssueOrder,
  SearchIssuesParams,
} from 'services';
import { theme } from 'assets/styles';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [issues, setIssues] = useState<SearchIssuesResponse | null>(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('React');
  const [state, setState] = useState<IssueState>('open');
  const [order, setOrder] = useState<IssueOrder>('desc');

  const handleSearch = useCallback(async (params: SearchIssuesParams) => {
    try {
      setLoading(true);
      const response = await searchIssues({ ...params });
      console.log(response);
      setIssues(response);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const onSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      handleSearch({ search, page: 1, state, order });
    },
    [handleSearch, search, state, order]
  );

  const handleStateClick = () => {
    const newState = state === 'open' ? 'closed' : 'open';
    setState(newState);
    setPage(1);
    handleSearch({ search, page: 1, state: newState, order });
  };

  const handleOrderClick = () => {
    const newOrder = order === 'asc' ? 'desc' : 'asc';
    setOrder(newOrder);
    setPage(1);
    handleSearch({ search, page: 1, state, order: newOrder });
  };

  const handleLoadMore = async () => {
    const response = await searchIssues({
      search,
      page: page + 1,
      state,
      order,
    });
    setIssues({
      total_count: response.total_count,
      items: [...(issues as SearchIssuesResponse).items, ...response.items],
    });
    setPage((p) => p + 1);
  };

  useEffect(() => {
    handleSearch({ search, page, state, order });
  }, []);

  return (
    <>
      <Head />
      <Header>
        <FlexDiv marginTop="30px">
          <form onSubmit={onSubmit}>
            <Input
              type="text"
              placeholder="Search issues"
              name="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </form>
        </FlexDiv>
      </Header>
      <main>
        <Container>
          <FlexDiv justifyContent="space-between" alignItems="center">
            {issues && (
              <Typography size="medium">
                {issues.items.length} matching{' '}
                {issues.items.length === 1 ? 'result' : 'results'}
              </Typography>
            )}
            <FlexDiv alignItems="center">
              <Icon
                variant={state === 'closed' ? 'lock-closed' : 'lock-open'}
                onClick={handleStateClick}
                color={
                  state === 'closed' ? theme.colors.error : theme.colors.success
                }
                margin="5px"
              />

              <Icon
                variant={order === 'asc' ? 'sort-up' : 'sort-down'}
                onClick={handleOrderClick}
                margin="5px"
              />
            </FlexDiv>
          </FlexDiv>

          {!loading && issues && issues.items.length === 0 && (
            <FlexDiv flexWrap="wrap" margin="40px 0">
              <Typography size="medium">No results</Typography>
            </FlexDiv>
          )}

          {issues && (
            <FlexDiv flexWrap="wrap" margin="40px 0">
              {issues.items.map((issue, index) => (
                <IssueCard issue={issue} key={issue.id} index={index} />
              ))}
            </FlexDiv>
          )}

          {loading && (
            <FlexDiv margin="30px" alignItems="center" justifyContent="center">
              <Loader size="x-large" />
            </FlexDiv>
          )}

          {issues && issues.items.length < issues?.total_count && (
            <FlexDiv justifyContent="center" margin="30px 0">
              <Button
                onClick={handleLoadMore}
                text="Next page"
                disabled={loading}
              />
            </FlexDiv>
          )}
        </Container>
      </main>
    </>
  );
};

export default Home;
