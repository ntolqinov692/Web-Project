import { render, screen, fireEvent } from '@testing-library/react';
import CoursesCard from '../../components/CoursesCard';

test('renders CoursesCard and close button interaction', () => {
  const alertMock = jest.spyOn(window, 'alert').mockImplementation();
  
  render(
    <CoursesCard
      imgURL="test.jpg"
      title="React Basics"
      prof="John Doe"
      students="1.5k"
      des="Learn React from scratch"
      showCloseButton={true}
    />
  );

  expect(screen.getByText(/React Basics/i)).toBeInTheDocument();
  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/Learn React from scratch/i)).toBeInTheDocument();
  
  const closeButton = screen.getByText(/×/i); // Target the close button
  fireEvent.click(closeButton);
  expect(alertMock).toHaveBeenCalledWith('Closed!');
  alertMock.mockRestore();
});
