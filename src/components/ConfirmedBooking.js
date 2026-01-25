import React from "react";
import { useTheme } from "./ThemeContext";

const ConfirmedBooking = () => {
    const { isDarkMode, isGerman } = useTheme();

    return (
        <div className="confirm" style={{backgroundColor: isDarkMode ? "white" : "black"}}>
            <div>
                <h1>{isGerman ? "Deine Buchung wurde" : "Your booking has been"} <span>{isGerman ? "Bestätigt!" : "confirmed!"}</span></h1>
            </div>
        </div>
    );
};

export default ConfirmedBooking;