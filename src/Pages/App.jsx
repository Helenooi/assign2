import React from "react";
import Navbar from "../components/navbar.jsx";
import "../css/App.css";

function App() {
  return (
    <>
      <Navbar />

      <img class="hero" src="homepage/background.jpg" />

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

        <section id="cultureHeritage">
          <h1>Culture & Heritage</h1>
          <br></br>
          <div class="container-culture">
            <div class="card" href="">
              <a href="/Multiracial">
                <img src="homepage/multiracial.jpg"></img>
              </a>
              <div class="card__head">Multi-Racial</div>
            </div>
            <div class="card">
              <a href="/Arts">
                <img src="homepage/art1.avif" alt="Description of image" />
              </a>
              <div class="card__head">Traditional Arts</div>
            </div>
            <div class="card">
              <a href="/HeritageSites">
                <img src="homepage/HeritageSites.avif"></img>
              </a>
              <div class="card__head">Heritage Sites</div>
            </div>
            <div class="card">
              <a href="/HeritageConservation">
                <img src="homepage/HeritageConservation3.jpg"></img>
              </a>
              <div class="card__head">Heritage Conservation</div>
            </div>
            <div class="card">
              <a href="/SacredSpace">
                <img src="homepage/sacredSpace.webp"></img>
              </a>
              <div class="card__head">Sacred Spaces</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
