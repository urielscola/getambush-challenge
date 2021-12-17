import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Button from './button';

describe('Button component', () => {
  it('should render', () => {
    const result = render(
      <Button
        appearence="primary"
        text="Clique"
        onClick={() => null}
        size="normal"
      />
    );
    expect(result).toMatchSnapshot();
  });

  it('should call onclick function', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button
        appearence="primary"
        text="Clique"
        onClick={onClick}
        size="normal"
      />
    );
    fireEvent.click(getByTestId('button'));
    expect(onClick).toBeCalledTimes(1);
  });

  it('should render disabled', () => {
    const onClick = jest.fn();

    const { getByTestId } = render(
      <Button
        appearence="primary"
        text="Clique"
        onClick={onClick}
        disabled
        size="normal"
      />
    );
    const element = getByTestId('button');
    fireEvent.click(element);
    expect(onClick).toBeCalledTimes(0);
    expect(element.getAttribute('disabled')).toBe('');
  });

  it('should render as a link', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Button
          appearence="primary"
          text="Clique"
          as="a"
          to="/opa"
          size="normal"
        />
      </BrowserRouter>
    );
    const element = getByTestId('button');
    expect(element.getAttribute('href')).toBe('/opa');
    expect(element.tagName).toBe('A');
  });
});
