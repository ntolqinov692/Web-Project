import { render, screen } from '@testing-library/react';
import Courses from '../../sections/courses/Courses';
import { data } from '../../sections/courses/data';

test('renders all course cards', () => {
  render(<Courses />);
  
  data.forEach((item) => {
    expect(screen.getByText(new RegExp(item.title, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(item.prof, 'i'))).toBeInTheDocument();
  });
});
