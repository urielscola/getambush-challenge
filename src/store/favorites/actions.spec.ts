import { FavoritesActions, FavoritesTypes } from './index';
import { getIssuesSuccess } from '__mocks__';

describe('[STORE] FAVORITES - ACTIONS', () => {
  it(`Should handle addFavorite action`, () => {
    const action = FavoritesActions.addFavorite(getIssuesSuccess.items[0]);
    expect(action.type).toBe(FavoritesTypes.ADD_FAVORITE);
  });

  it(`Should handle removeFavorite action`, () => {
    const action = FavoritesActions.removeFavorite(123);
    expect(action.type).toBe(FavoritesTypes.REMOVE_REVORITE);
    expect(action.payload?.id).toBe(123);
  });
});
