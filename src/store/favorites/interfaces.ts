export interface FavoritesState {
  list: Issue[];
  lookup: Lookup;
}

export interface GithubUser {
  avatar_url: string;
  login: string;
}

export interface Lookup {
  [key: number]: boolean;
}

export interface Issue {
  title: string;
  id: number;
  comments: number;
  state: string;
  url: string;
  user: GithubUser;
}
