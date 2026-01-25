import React, { useState } from "react";
import logo from "../images/Logo .svg";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { translations } from "./translations";
// I deleted node_modules-> Please use: 'npm install' on your terminal 
const Nav = () => {

    const { isDarkMode, toggleTheme, isGerman,  toggleLanguage} = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    const content = isGerman ? translations.de : translations.en;

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}
        style={{backgroundColor: isDarkMode ? "black" : "white", color: isDarkMode ? "white": "black", transition: "0.3s"}}>

            

            <Link to='/' className="logo">
            <img src={logo} alt="logo"/>
            </Link>

            <div className="theme-toggle" style={toggleContainerStyle}>
                <button onClick={toggleTheme} style={iconButtonStyle}>
                    {isDarkMode ? 
                        <FaSun color="#F4CE14" size="24px" /> : 
                        <FaMoon color="#495E57" size="24px" />
                    }
                </button>
            </div>

            <button onClick={toggleLanguage} style={langButtonStyle}>{isGerman ? "DE": "EN"}</button>

            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar" style={{backgroundColor: isDarkMode ? "white": "black"}}></div>
                <div className="bar" style={{backgroundColor: isDarkMode ? "white": "black"}}></div>
                <div className="bar" style={{backgroundColor: isDarkMode ? "white": "black"}}></div>
            </div>

            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <a href='/' style={{color: isDarkMode ? "white" : "black"}}>{content.home}</a>
                </li>
                <li>
                    <a href='/' style={{color: isDarkMode ? "white" : "black"}}>{content.about}</a>
                </li>
                <li>
                    <a href='/' style={{color: isDarkMode ? "white" : "black"}}>{content.menu}</a>
                </li>
                <li>
                    <a href='/' style={{color: isDarkMode ? "white" : "black"}}>{content.reservations}</a>
                </li>
                
                <li>
                    <a href='/' style={{color: isDarkMode ? "white" : "black"}}>Login</a>
                </li>
            </ul>
        </nav>
    );
};

const toggleContainerStyle = {
    marginLeft: "auto",
    marginRight: "20px",
    display: "flex",
    alignItems: "center",
};

const iconButtonStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
};

const langButtonStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    color: "inherit",
};

export default Nav;