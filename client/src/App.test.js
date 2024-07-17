import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './components/Login';
import Home from './components/Home';

test('renders login heading', () => {
  render(<Login />);
  const loginHeading = screen.getByText(/LOGIN/i);
  expect(loginHeading).toBeInTheDocument();
});