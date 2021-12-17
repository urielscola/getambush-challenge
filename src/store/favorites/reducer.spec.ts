import { initialState, favoritesReducer, FavoritesTypes } from './index';
import { getIssuesSuccess } from '__mocks__';

describe('[STORE] FAVORITES - REDUCER', () => {
  it(`Should handle ${FavoritesTypes.ADD_FAVORITE} action`, () => {
    const state = favoritesReducer(initialState, {
      type: FavoritesTypes.ADD_FAVORITE,
      payload: { issue: getIssuesSuccess.items[0] },
    });
    expect(state.list[0].id).toStrictEqual(getIssuesSuccess.items[0].id);
    expect(state.lookup[getIssuesSuccess.items[0].id]).toBe(true);
  });

  it(`Should handle ${FavoritesTypes.REMOVE_REVORITE} action`, () => {
    const state = favoritesReducer(initialState, {
      type: FavoritesTypes.REMOVE_REVORITE,
      payload: { id: 123 },
    });
    expect(state.list.length).toBe(0);
    expect(state.lookup[123]).toBe(undefined);
  });
});
