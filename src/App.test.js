import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './components/BookingForm';
import Header from './components/Header';
import '@testing-library/jest-dom';
import Footer from './components/Footer';
import Swal from 'sweetalert2';
import Menu from './components/Menu';
import recipes from './recipes';
import { MemoryRouter } from 'react-router-dom';
import Main from './components/Main';


test('Renders the BookingForm heading', () => {
  render(
    <BookingForm
      availableTimes={{ availableTimes: ["17:00", "18:00"] }}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});


test('Initialize/Update Times', async () => {
  render(
    <BookingForm
      availableTimes={{ availableTimes: ["17:00", "18:00"] }}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  // Find the time select dropdown
  const timeSelect = screen.getByLabelText("Choose Time:");
  
  // Select the 17:00 option
  await userEvent.selectOptions(timeSelect, "17:00");
  
  // Verify the option is selected
  const selectedOption = screen.getByRole('option', { name: "17:00" });
  expect(selectedOption.selected).toBe(true);
});


test('renders footer with company info and navigation links', () => {
  render(<Footer />);

  // Company info
  expect(screen.getByText(/We are a family owned Mediterranean/i)).toBeInTheDocument();

  // Important Links
  expect(screen.getByText('Important Links')).toBeInTheDocument();
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Menu')).toBeInTheDocument();

  // Contacts
  expect(screen.getByText('Contacts')).toBeInTheDocument();
  expect(screen.getByText(/123 Dublin, Ireland/i)).toBeInTheDocument();
  expect(screen.getByText(/123-345-6678/i)).toBeInTheDocument();
  expect(screen.getByText(/o'brian@hotmail.com/i)).toBeInTheDocument();

  // Social Media
  expect(screen.getByText('Social Media Links')).toBeInTheDocument();
  expect(screen.getByText('Facebook')).toBeInTheDocument();
  expect(screen.getByText('Instagram')).toBeInTheDocument();
  expect(screen.getByText('X')).toBeInTheDocument();
});

// Mock SweetAlert2
jest.mock('sweetalert2', () => ({
  fire: jest.fn(() => Promise.resolve({ isConfirmed: true })),
}));



