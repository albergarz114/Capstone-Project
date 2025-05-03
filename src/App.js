import React from 'react';
import './App.css';
import Nav from './components/Nav';
// import Header from './components/Header';
// import BookingForm from './components/BookingForm';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';

// I deleted node_modules-> Please use: 'npm install' on your terminal 
function App() {
  return (
    <>
    <Nav/>
    {/* <Header/>
    <BookingForm/> */}
    <Main/>
    <Menu/>
    <Footer/>
    </>
   
  );
}

export default App;
