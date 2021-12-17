import http from './http';
import { SearchIssuesParams, SearchIssuesResponse } from './interfaces';

export const searchIssues = async ({
  search,
  state,
  order,
  page,
}: SearchIssuesParams): Promise<SearchIssuesResponse> => {
  const response: SearchIssuesResponse = await http.get(
    `/search/issues?q=${search}+is:issue${state ? `+is:${state}` : ''}`,
    {
      params: {
        order,
        page,
        per_page: 5,
        sort: 'created',
      },
    }
  );

  return response;
};
