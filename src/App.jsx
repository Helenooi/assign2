
import React from 'react';
import Navbar from './components/navbar.jsx';
import Homepage from './components/homepage.jsx';
import Contactus from './components/contact.jsx';
import Aboutus from './components/aboutus.jsx';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
     <Navbar/>
     <section id="homepage">
                <h1>Test1</h1>
               
            </section>

            <section id="contact">
              
            <h1>Test2</h1>
               
            </section>

            <section id="aboutus">
                <h1>Test3</h1>
            </section>
    </>
  )
}

export default App
