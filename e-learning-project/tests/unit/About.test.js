import { render, screen } from '@testing-library/react';
import About from '../../sections/about/About';

test('renders About section with team message', () => {
  render(<About />);
  
  expect(screen.getByText(/Our Team's Message/i)).toBeInTheDocument();
  expect(screen.getByAltText(/About Us/i)).toBeInTheDocument();
});
