import React from 'react';
import {
  render,
  act,
  waitFor,
  fireEvent,
  RenderResult,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {
  withExternalDependencies,
  serviceMock,
  getIssuesSuccess,
} from '__mocks__';
import Home from './index';

describe('[PAGES] Home', () => {
  it('should render with the default search', async () => {
    let result: RenderResult;

    serviceMock
      .onGet('/search/issues?q=React+is:issue+is:open', {
        params: { order: 'desc', page: 1, per_page: 20, sort: 'created' },
      })
      .replyOnce(200, getIssuesSuccess);

    await act(async () => {
      result = render(withExternalDependencies(<Home />));
    });

    await waitFor(() => {
      expect(result).toMatchSnapshot();
    });
  });

  it('should handle network errors', async () => {
    let result: RenderResult;

    serviceMock
      .onGet('/search/issues?q=React+is:issue+is:open', {
        params: { order: 'desc', page: 1, per_page: 20, sort: 'created' },
      })
      .networkErrorOnce();

    await act(async () => {
      result = render(withExternalDependencies(<Home />));
    });

    await waitFor(() => {
      expect(result).toMatchSnapshot();
    });
  });

  it('should handle search', async () => {
    let result: RenderResult | any;

    serviceMock
      .onGet('/search/issues?q=React+is:issue+is:open', {
        params: { order: 'desc', page: 1, per_page: 20, sort: 'created' },
      })
      .replyOnce(200, getIssuesSuccess);

    await act(async () => {
      result = render(withExternalDependencies(<Home />));
    });

    serviceMock
      .onGet('/search/issues?q=js+is:issue+is:open', {
        params: { order: 'desc', page: 1, per_page: 20, sort: 'created' },
      })
      .replyOnce(200, getIssuesSuccess);

    const input = result.container.querySelector('#search-input');
    const submit = result.container.querySelector('button[type=submit]');
    fireEvent.change(input, {
      target: { value: 'js' },
    });

    fireEvent.click(submit);

    await waitFor(() => {
      expect(result).toMatchSnapshot();
    });
  });

  it('should handle sorting by state', async () => {
    let result: RenderResult | any;

    serviceMock
      .onGet('/search/issues?q=React+is:issue+is:open', {
        params: { order: 'desc', page: 1, per_page: 20, sort: 'created' },
      })
      .replyOnce(200, getIssuesSuccess);

    await act(async () => {
      result = render(withExternalDependencies(<Home />));
    });

    serviceMock
      .onGet('/search/issues?q=js+is:issue+is:closed', {
        params: { order: 'desc', page: 1, per_page: 20, sort: 'created' },
      })
      .replyOnce(200, getIssuesSuccess);

    const button = result.container.querySelector('#sort-state');
    fireEvent.click(button);

    await waitFor(() => {
      expect(result).toMatchSnapshot();
    });
  });

  it('should handle sorting by order', async () => {
    let result: RenderResult | any;

    serviceMock
      .onGet('/search/issues?q=React+is:issue+is:open', {
        params: { order: 'desc', page: 1, per_page: 20, sort: 'created' },
      })
      .replyOnce(200, getIssuesSuccess);

    await act(async () => {
      result = render(withExternalDependencies(<Home />));
    });

    serviceMock
      .onGet('/search/issues?q=js+is:issue+is:open', {
        params: { order: 'asc', page: 1, per_page: 20, sort: 'created' },
      })
      .replyOnce(200, getIssuesSuccess);

    const button = result.container.querySelector('#sort-order');
    fireEvent.click(button);

    await waitFor(() => {
      expect(result).toMatchSnapshot();
    });
  });

  it('should handle load more', async () => {
    let result: RenderResult | any;

    serviceMock
      .onGet('/search/issues?q=React+is:issue+is:open', {
        params: { order: 'desc', page: 1, per_page: 20, sort: 'created' },
      })
      .replyOnce(200, getIssuesSuccess);

    await act(async () => {
      result = render(withExternalDependencies(<Home />));
    });

    serviceMock
      .onGet('/search/issues?q=js+is:issue+is:open', {
        params: { order: 'desc', page: 2, per_page: 20, sort: 'created' },
      })
      .replyOnce(200, getIssuesSuccess);

    const button = result.container.querySelector('#load-more');
    fireEvent.click(button);

    await waitFor(() => {
      expect(result).toMatchSnapshot();
    });
  });
});
