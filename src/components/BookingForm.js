import React, { useState } from "react";
import { useTheme } from "./ThemeContext";

// NOTE: PLEASE USE BOTH SEPERATE TERMINALS FOR FRONTEND AND BACKEND. IF ONE IS OPEN & THE OTHER IS NOT, THE BOOKING PROCESS WILL FAIL!!!
// I deleted node_modules-> Please use: 'npm install' on your terminal 
const BookingForm = (props) => { 
    const [firstname, setName] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const { isGerman } = useTheme();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     props.submitForm(e);
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // props.submitForm(e);

        if (!date) {
        alert(isGerman ? "Bitte wählen Sie ein Datum." : "Please select a date.");
        return;
    }
    
    const booking_time = times.split(' ')[0];
    
    // Prepare data to match backend
    const bookingData = {
        first_name: firstname || "Guest",
        booking_date: date,
        booking_time: booking_time,
        number_of_guests: parseInt(guests) || 1,
        occasion: occasion === "Select an option" ? "birthday" : occasion
    };

    

    try {
        const response = await fetch('http://localhost:8000/api/bookings/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData)
        });
        
        // if (!response.ok) {
        //     throw new Error('Booking failed');
        // }
        if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Booking failed');
            }
        
        // Call your existing submit handler if needed
         props.submitForm(e);
         // Reset form after successful submission
            setName("");
            setDate("");
            setTimes("");
            setGuests("");
            setOccasion("");
        
        // Optional: Show success message
        alert('Booking successful!');
        
    } catch (error) {
        console.error('Error:', error);
        alert('Booking failed. Please try again.');
    }
};

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return(
        <header>
            <h1>{isGerman ? "Jetzt Bestellen" : "Book Now"}</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div> 
                            <label htmlFor="book-firstname">{isGerman ? "Vorname:" : "First Name:"}</label>
                            <input id="book-firstname" min="1" value={firstname} onChange={(e) =>setName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="book-date">{isGerman ? "Auswählen Daten:" : "Choose Date:"}</label>
                            <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                        </div>

                        <div>
                        <label htmlFor="book-time">{isGerman ? "Auswählen Uhrzeit:" : "Choose Time:"}</label>
                        <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                            <option value="">Select a Time</option>
                            {
                                props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                            }
                        </select>
                        </div>

                        <div>
                            <label htmlFor="book-guests">{isGerman ? "Gästen:" : "Number of Guests:"}</label>
                            <input id="book-guests" min="1" value={guests} onChange={(e) =>setGuests(e.target.value)}/>
                        </div>
                        <div>
                        <label htmlFor="book-occasion">{isGerman ? "Anlass:" : "Occasion:"}</label>
                        <select id="book-occasion" key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                            <option value="Select an option">{isGerman ? "Wählen Sie Möglichkeiten" : "Select an Option"}</option>
                            <option value="birthday">{isGerman ? "Geburstag" : "Birthday"}</option>
                            <option value="anniversary">{isGerman ? "Jubiläum" : "Anniversary"}</option>
                        </select>
                        </div>

                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value={isGerman ? "Reservierung vornehmen" : "Make Your Reservation"} disabled={!firstname}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;

