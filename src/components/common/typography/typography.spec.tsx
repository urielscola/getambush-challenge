import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Typography from './typography';

describe('Typography component', () => {
  it('should render', () => {
    const result = render(<Typography>Teste</Typography>);
    expect(result).toMatchSnapshot();
  });
  it('should render as h1 heading', () => {
    const result = render(<Typography as="h1">Heading h1</Typography>);
    expect(result).toMatchSnapshot();
  });
});
