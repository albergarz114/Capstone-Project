import React from "react";
import logo from "../images/Logo .svg";
// I deleted node_modules-> Please use: 'npm install' on your terminal 
const Footer = () => {
    return(
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=""/>
                    <p>We are a family owned Mediterranean restaurant, focused on seafood.</p>
                </div>
                <div>
                    <h3>
                        Important Links
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
                <div>
                    <h3>Contacts</h3>
                    <ul>
                        <li>Address: <br/> 123 Dublin, Ireland</li>
                        <li>Phone: <br/> 123-345-6678</li>
                        <li>Email: <br/> o'brian@hotmail.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
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