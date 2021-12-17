export interface GithubUser {
  avatar_url: string;
  login: string;
}

export interface IssueLabels {
  name: string;
  id: number;
}

export interface Issue {
  title: string;
  id: number;
  comments: number;
  state: string;
  html_url: string;
  repository_url: string;
  user: GithubUser;
  labels: IssueLabels[];
}
