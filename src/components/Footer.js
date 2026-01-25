import React from "react";
import logo from "../images/Logo .svg";
import { useTheme } from "./ThemeContext";
// I deleted node_modules-> Please use: 'npm install' on your terminal 
const Footer = () => {
    const { isDarkMode, isGerman } = useTheme();
    return(
        <footer style={{backgroundColor: isDarkMode ? "black": "white"}}>
            <section>
                <div className="company-info" style={{backgroundColor: isDarkMode ? "black": "white"}}>
                    <img src={logo} alt=""/>
                    <p style={{color: isDarkMode ? "white" : "black"}}>{isGerman ? "Wir sind eine Familien Betrieb speziallen Meerfrüchten" : "We are a family owned Mediterranean restaurant, focused on seafood."}</p>
                </div>
                <div style={{backgroundColor: isDarkMode ? "black": "white"}}>
                    <h3 style={{color: isDarkMode ? "white" : "black"}}>
                        {isGerman ? "Wichtige Linken" : "Important Links"}
                    </h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div style={{color: isDarkMode ? "white" : "black"}}>  
                    <h3>{ isGerman ? "Kontakt Uns" : "Contacts"}</h3>
                    <ul>
                        <li>{ isGerman ? "Addresse: " : "Address: "}<br/> 123 Dublin, Ireland</li>
                        <li>{ isGerman ? "Nummer: " : "Phone: "}<br/> 123-345-6678</li>
                        <li>Email: <br/> o'brian@hotmail.com</li>
                    </ul>
                </div>
                <div>
                    <h3 style={{color: isDarkMode ? "white" : "black"}}>{isGerman ? "Social Medien Linken" : "Social Media Links"}</h3>
                    <ul>
                    <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">X</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};
export default Footer;