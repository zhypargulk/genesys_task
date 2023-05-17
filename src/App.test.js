import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';w

describe('general', () => {
  test('homepage', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Search by name');
    expect(searchInput).toBeInTheDocument();
  });
  
 
});