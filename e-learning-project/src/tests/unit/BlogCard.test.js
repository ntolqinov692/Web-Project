import { render, screen } from '@testing-library/react';
import BlogCard from '../../components/BlogCard';

test('renders BlogCard with correct props', () => {
  render(<BlogCard imgURL="test.jpg" ctg="Technology" title="Top 10 Technologies" info="By Admin - Feb 07, 2025" />);
  
  expect(screen.getByText(/Technology/i)).toBeInTheDocument();
  expect(screen.getByText(/Top 10 Technologies/i)).toBeInTheDocument();
  expect(screen.getByText(/By Admin - Feb 07, 2025/i)).toBeInTheDocument();
  expect(screen.getByAltText(/Top 10 Technologies/i)).toHaveAttribute('src', 'blog1.jpg');
});
