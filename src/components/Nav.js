import React, { useState } from "react";
import logo from "../images/Logo .svg";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";
// I deleted node_modules-> Please use: 'npm install' on your terminal 
const Nav = () => {

    const { isDarkMode } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}
        style={{backgroundColor: isDarkMode ? "black" : "white"}}>
            <a href='/' className="logo">
            <img src={logo} alt="logo"/>
            </a>

            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <a href='/'>Menu</a>
                </li>
                <li>
                    <a href='/'>Reservations</a>
                </li>
                <li>
                    <a href='/'>Order Online</a>
                </li>
                <li>
                    <a href='/'>Login</a>
                </li>
            </ul>
        </nav>
    );
};
export default Nav;