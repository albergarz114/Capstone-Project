import React from "react";
import { Link } from "react-router-dom";
import bannerImg from '../images/restauranfood.jpg'
import { useTheme } from "./ThemeContext";
// I deleted node_modules-> Please use: 'npm install' on your terminal 
const Header = () => {
    const { isDarkMode } = useTheme();
    return (
        <header className="header" style={{backgroundColor: isDarkMode ? "black" : "white"}}>
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Dublin</h3>
                    <p>We are a family owned Mediterranen restaurant, focused on seafood, falafel, taboilie, and more</p>
                    <Link to="/booking"><button aria-label="On Click">Reserve Table</button></Link>
                </div>

                <div className="banner-img">
                    <img src={bannerImg} alt=""/>
                </div>
            </section>
        </header>
    );

};

export default Header;