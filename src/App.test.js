import { render, screen  } from '@testing-library/react';
import App from './App';

describe('general', () => {
  test('homepage', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Search by name');
    expect(searchInput).toBeInTheDocument();
  });
 
});