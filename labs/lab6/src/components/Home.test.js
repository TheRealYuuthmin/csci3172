// src/components/Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders welcome message', () => {
  render(<Home />);
  const welcomeElement = screen.getByText(/Welcome to My Portfolio/i);
  expect(welcomeElement).toBeInTheDocument();
});