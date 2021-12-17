import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  fireEvent,
  act,
  waitFor,
  RenderResult,
} from '@testing-library/react';
import { getIssuesSuccess, withExternalDependencies } from '__mocks__';

import IssueCard from './issue-card';

describe('IssueCard component', () => {
  it('should render', async () => {
    let result: RenderResult;

    await act(async () => {
      result = render(
        withExternalDependencies(
          <IssueCard issue={getIssuesSuccess.items[0]} index={1} />
        )
      );
    });

    await waitFor(() => {
      expect(result).toMatchSnapshot();
    });
  });

  it('should handle favorite click action', async () => {
    let result: RenderResult | any;

    await act(async () => {
      result = render(
        withExternalDependencies(
          <IssueCard issue={getIssuesSuccess.items[0]} index={1} />
        )
      );
    });

    const button = result.container.querySelector('#card-top svg');
    fireEvent.click(button);

    await waitFor(() => {
      expect(result).toMatchSnapshot();
    });
  });
});
