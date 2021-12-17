import { Dispatch } from 'redux';
import { FavoritesState, FavoritesActions } from 'store/favorites';

export type ActionTypes =
  | FavoritesActions
  | '';

export interface Action {
  type: ActionTypes;
  payload?: any;
}

export interface AppState {
  favorites: FavoritesState;
}

export type AsyncAction = (dispatch: Dispatch, getState: () => AppState) => void;
