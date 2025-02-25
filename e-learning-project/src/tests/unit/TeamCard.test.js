import { render, screen } from '@testing-library/react';
import TeamCard from '../../components/TeamCard';

test('renders TeamCard with correct props', () => {
  const socialMedia = {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  };

  render(<TeamCard imgURL="team.jpg" prof="John Doe" des="Team Leader" socialMedia={socialMedia} />);
  
  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/Team Leader/i)).toBeInTheDocument();
  expect(screen.getByAltText(/John Doe/i)).toHaveAttribute('src', 'team.jpg');
  expect(screen.getByRole('link', { name: /facebook/i })).toHaveAttribute('href', socialMedia.facebook);
});
