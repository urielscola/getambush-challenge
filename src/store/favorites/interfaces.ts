import { Issue } from 'utils';
export interface FavoritesState {
  list: Issue[];
  lookup: Lookup;
}

export interface Lookup {
  [key: number]: boolean;
}
