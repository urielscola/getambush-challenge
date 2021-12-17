import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Icon from './icon';

describe('Icon component', () => {
  it('should render', () => {
    const result = render(<Icon variant="github" size={35} />);
    expect(result).toMatchSnapshot();
  });
});
