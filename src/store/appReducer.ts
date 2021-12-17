import { combineReducers } from 'redux';
import { AppState } from 'store/interfaces';

import { favoritesReducer as favorites } from './favorites';

export default combineReducers<AppState>({
  favorites,
});
