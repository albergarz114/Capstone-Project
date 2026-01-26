import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Use this for testing links
import Header from './components/Header'; // Assuming App.test.js and components/ are in src/
import { ThemeProvider } from './components/ThemeContext'; // Matches your Header.js import path
import BookingForm from './components/BookingForm';

test('renders the Little Lemon heading', () => {
  render(
    <MemoryRouter>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </MemoryRouter>
  );
  
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});

test('contains a link to the booking page', () => {
  render(
    <MemoryRouter>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </MemoryRouter>
  );

  // 1. Find the button by its text
  const reserveButton = screen.getByText(/Reserve Table/i);
  
  // 2. Assert it is in the document
  expect(reserveButton).toBeInTheDocument();
  
  // 3. Verify it's inside a Link (optional but good)
  const linkElement = screen.getByRole('link', { name: /Reserve Table/i });
  expect(linkElement).toHaveAttribute('href', '/booking');
});


test('header changes background color based on theme', () => {

  render(
    <MemoryRouter>
      <ThemeProvider>
        <Header/>
      </ThemeProvider>
    </MemoryRouter>
  );

  const headerElement = screen.getByRole('banner');

  expect(headerElement).toHaveStyle('background-color: white');

});



test('submit button is disabled until name is entered', () => {
  const mockAvailableTimes = {
    availableTimes: ["17:00", "18:00", "19:00"]
  };
  const mockDispatch = jest.fn();

  render(
    <ThemeProvider>
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch}
      />
    </ThemeProvider>
  );

  const nameInput = screen.getByLabelText(/First Name:/i);
  const submitButton = screen.getByDisplayValue(/Make Your Reservation/i);

  // This will pass now if you added disabled={!firstname} to BookingForm.js
  expect(submitButton).toBeDisabled();

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });

  expect(submitButton).toBeEnabled();
});



