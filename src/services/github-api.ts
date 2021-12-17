import http from './http';

export const searchIssues = async (): Promise<any> => {
  const response = await http.get('/search/issues', {
    params: {
      state: 'open',
      q: 'React vs stencil',
      // sort: 'created',
      // order: 'asc',
      per_page: 5,
    },
  });

  return response;
};
