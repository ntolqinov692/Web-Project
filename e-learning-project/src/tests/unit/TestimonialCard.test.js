import { render, screen } from '@testing-library/react';
import TestimonialCard from '../../components/TestimonialCard';

test('renders TestimonialCard with correct details', () => {
  render(
    <TestimonialCard
      imgURL="user.jpg"
      title="Jane Doe"
      about="Software Engineer"
      des="This course was amazing!"
    />
  );

  expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
  expect(screen.getByText(/This course was amazing!/i)).toBeInTheDocument();
  expect(screen.getByAltText(/Jane Doe/i)).toHaveAttribute('src', 'users.png');
});
