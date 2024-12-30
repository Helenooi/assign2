import React from "react";
import Navbar from "../components/navbar.jsx";
import "../css/App.css";

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

        <section id="cultureHeritage">
          <h1>Culture & Heritage</h1>
          <br></br>
          <div class="container-culture">
            <div class="card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg"></img>
              <div class="card__head">Plotting Cat</div>
            </div>
            <div class="card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/False_alarm_-a.jpg/1280px-False_alarm_-a.jpg"></img>
              <div class="card__head">Angry Cat</div>
            </div>
            <div class="card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG"></img>
              <div class="card__head">Curious Cat</div>
            </div>
            <div class="card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Al_acecho_%289272124788%29.jpg/1280px-Al_acecho_%289272124788%29.jpg"></img>
              <div class="card__head">Prowling Cat</div>
            </div>
            
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
