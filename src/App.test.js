import { render, screen } from '@testing-library/react';
import App from './App';

test('renders student management app', () => {
  render(<App />);
  const heading = screen.getByText(/Student List/i);
  expect(heading).toBeInTheDocument();
});
