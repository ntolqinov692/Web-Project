import { render, screen } from '@testing-library/react';
import FeaturesCard from '../../components/FeaturesCard';

test('renders FeaturesCard with icon and title', () => {
  render(<FeaturesCard icon="test-icon.png" title="Fast Performance" />);
  
  expect(screen.getByText(/Fast Performance/i)).toBeInTheDocument();
  expect(screen.getByAltText(/Fast Performance/i)).toHaveAttribute('src', 'calendar.png');
});
