import React from 'react';
import { render, act, waitFor, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { withExternalDependencies } from '__mocks__';
import Favorites from './index';

describe('[PAGES] Favorites', () => {
  it('should render', async () => {
    let result: RenderResult;

    await act(async () => {
      result = render(withExternalDependencies(<Favorites />));
    });

    await waitFor(() => {
      expect(result).toMatchSnapshot();
    });
  });
});
