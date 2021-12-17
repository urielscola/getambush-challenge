import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './input';
import { withExternalDependencies } from '__mocks__';

describe('Input component', () => {
  it('should render', () => {
    const result = render(
      withExternalDependencies(<Input name="search" value="" />)
    );
    expect(result).toMatchSnapshot();
  });
});
