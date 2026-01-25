import React from 'react';
import './App.css';
import Nav from './components/Nav';
// import Header from './components/Header';
// import BookingForm from './components/BookingForm';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { useTheme } from './components/ThemeContext';


// I deleted node_modules-> Please use: 'npm install' on your terminal 
function App() {
  const { isDarkMode } = useTheme();
  return (
    <div className={isDarkMode ? "dark-theme": "light-theme"}>
    <Nav/>
    {/* <Header/>
    <BookingForm/> */}
    <Main/>
    <Menu/>
    <Footer/>
    </div>
   
  );
}

export default App;
