import { FavoritesTypes } from './types';
import { Issue } from './interfaces';
import { Action } from '../interfaces';

export class FavoritesActions {
  static addFavorite(issue: Issue): Action {
    return {
      type: FavoritesTypes.ADD_FAVORITE,
      payload: { issue },
    };
  }

  static removeFavorite(id: number): Action {
    return {
      type: FavoritesTypes.REMOVE_REVORITE,
      payload: { id },
    };
  }
}
