import { Issue } from 'utils';

export type IssueState = 'open' | 'closed';
export type IssueOrder = 'asc' | 'desc';

export interface SearchIssuesParams {
  search: string;
  state?: IssueState;
  order?: IssueOrder;
  page: number;
}

export interface SearchIssuesResponse {
  items: Issue[];
  total_count: number;
}
