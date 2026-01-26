import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { ThemeProvider } from "./components/ThemeContext";

// This mock will now ONLY apply to this file
jest.mock('./components/ThemeContext', () => ({
  ...jest.requireActual('./components/ThemeContext'),
  useTheme: () => ({ isDarkMode: false, isGerman: true })
}));

test('displays German text when isGerman is true', () => {
  const mockAvailableTimes = { availableTimes: ["17:00"] };
  const mockDispatch = jest.fn();

  render(
    <ThemeProvider>
      <BookingForm 
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch} 
      />
    </ThemeProvider>
  );

  // We use partial matches to avoid typos
  expect(screen.getByText(/Bestellen/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/Reservierung/i)).toBeInTheDocument();
});