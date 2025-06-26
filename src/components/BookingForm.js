import React, { useState } from "react";
// I deleted node_modules-> Please use: 'npm install' on your terminal 
const BookingForm = (props) => { 
    const [firstname, setName] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     props.submitForm(e);
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // props.submitForm(e);
    
    // Prepare data to match backend
    const bookingData = {
        first_name: firstname,
        booking_date: date,
        booking_time: times.includes(':') ? times + ':00' : times,
        number_of_guests: parseInt(guests),
        occasion: occasion// Convert to lowercase to match backend
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
            <h1>Book Now</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-firstname">First Name:</label>
                            <input id="book-firstname" min="1" value={firstname} onChange={(e) =>setName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                        </div>

                        <div>
                        <label htmlFor="book-time">Choose Time:</label>
                        <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                            <option value="">Select a Time</option>
                            {
                                props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                            }
                        </select>
                        </div>

                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input id="book-guests" min="1" value={guests} onChange={(e) =>setGuests(e.target.value)}/>
                        </div>
                        <div>
                        <label htmlFor="book-occasion">Occasion:</label>
                        <select id="book-occasion" key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                            <option value="Select an option">Select an Option</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                        </div>

                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value={"Make Your Reservation"}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;

