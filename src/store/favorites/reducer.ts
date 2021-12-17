import { FavoritesTypes } from './types';
import { FavoritesState, Issue, Lookup } from './interfaces';
import { Action } from '../interfaces';
import initialState from './initialState';

export function favoritesReducer(state = initialState, action: Action): FavoritesState {
  switch (action.type) {
    case FavoritesTypes.ADD_FAVORITE:
      return {
        ...state,
        list: [...state.list, action.payload.data.issue],
        lookup: {
          ...state.lookup,
          [action.payload.data.issue.id]: true,
        },
      };
    case FavoritesTypes.REMOVE_REVORITE:
      const lookup: Lookup = state.lookup;
      delete lookup[action.payload.data.id];

      return {
        ...state,
        list: state.list.filter((issue: Issue) => issue.id !== action.payload.data.id),
        lookup,
      };
    default:
      return state;
  }
}
