import React from "react";
import Navbar from "../components/navbar.jsx";

function App() {
  return (
    <>
      <Navbar />

      <div className="section">
        <section id="homepage">
          <h1>section1</h1>
        </section>

        <section id="contact">
          <h1>section2</h1>
        </section>

        <section id="aboutus">
          <h1>section3</h1>
        </section>
      </div>
    </>
  );
}

export default App;
