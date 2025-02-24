import { render, screen } from '@testing-library/react';
import Blog from '../../sections/blog/Blog';
import { data } from '../../sections/blog/data';

test('renders all blog cards', () => {
  render(<Blog />);
  
  data.forEach((item) => {
    expect(screen.getByText(new RegExp(item.title, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(item.ctg, 'i'))).toBeInTheDocument();
  });
});
