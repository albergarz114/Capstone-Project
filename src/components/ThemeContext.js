import React, { createContext, useState, useContext} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isGerman, setIsGerman] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    const toggleLanguage = () => {
        setIsGerman(prev => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, isGerman, toggleLanguage}}>
            { children }
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);