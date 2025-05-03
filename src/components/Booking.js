// to fix the props issues

import React from "react";
import BookingForm from "./BookingForm";
// I deleted node_modules-> Please use: 'npm install' on your terminal 
const Booking = (props) => {
    return (
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    );
};

export default Booking;