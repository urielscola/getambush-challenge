import { FavoritesTypes } from './types';
import { FavoritesState, Lookup } from './interfaces';
import { Issue } from 'utils';
import { Action } from '../interfaces';
import initialState from './initialState';

export function favoritesReducer(
  state = initialState,
  action: Action
): FavoritesState {
  switch (action.type) {
    case FavoritesTypes.ADD_FAVORITE:
      return {
        ...state,
        list: [...state.list, action.payload.issue],
        lookup: {
          ...state.lookup,
          [action.payload.issue.id]: true,
        },
      };
    case FavoritesTypes.REMOVE_REVORITE:
      const lookup: Lookup = state.lookup;
      delete lookup[action.payload.id];

      return {
        ...state,
        list: state.list.filter(
          (issue: Issue) => issue.id !== action.payload.id
        ),
        lookup,
      };
    default:
      return state;
  }
}
