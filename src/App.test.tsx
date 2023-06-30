import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from './calculator/Calculator';

test('renders learn react link', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
