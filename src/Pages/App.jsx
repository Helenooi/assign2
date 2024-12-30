import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar.jsx";
import "../css/App.css";
import penanghill_1 from "./image_attraction/penanghill_1.jpg";
import penanghill_2 from "./image_attraction/penanghill_2.jpg";
import penanghill_3 from "./image_attraction/penanghill_3.jpg";
import penanghill_4 from "./image_attraction/penanghill_4.jpg";
import penanghill_5 from "./image_attraction/penanghill_5.jpg";
import penanghill_6 from "./image_attraction/penanghill_6.jpg";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

function App() {

  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    penanghill_1,
    penanghill_2,
    penanghill_3,
    penanghill_4,
    penanghill_5,
    penanghill_6,
  ];

  // Set interval to change image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  
  return (
    <>
      <Navbar />

      <div className="header2">

</div>
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

        <section id="attraction">

          <h1>Penang Attraction</h1>
          <div className="boxright">
            <div className="box">
              <img
                src={images[imageIndex]}
                className="imgactive"
                alt="Penang Hill"
              />
              <div className="whiteboardtext">
                <p>Penang Hill</p>
              </div>

              <div className="iconbox">
                <a
                  href="https://www.google.com/maps/place/Penang+Hill"
                  target="_blank"
                >
                  <FaMapMarkerAlt />
                </a>
                <a>
                <FaPhone />
                </a>
                <a href="mailto:inquiries@penanghill.gov.my" target="_blank">
                <MdOutlineMailOutline />
                </a>
              </div>
            </div>

            <div className="box">
              <img
                src={images[imageIndex]}
                className="imgactive"
                alt="Penang Hill"
              />
              <div className="whiteboardtext">
                <p>Penang Hill</p>
              </div>

              <div className="iconbox">
                <a
                  href="https://www.google.com/maps/place/Penang+Hill"
                  target="_blank"
                >
                  <FaMapMarkerAlt />
                </a>
                <a>
                <FaPhone />
                </a>
                <a href="mailto:inquiries@penanghill.gov.my" target="_blank">
                <MdOutlineMailOutline />
                </a>
              </div>
            </div>


            <div className="box">
              <img
                src={images[imageIndex]}
                className="imgactive"
                alt="Penang Hill"
              />
              <div className="whiteboardtext">
                <p>Penang Hill</p>
              </div>

              <div className="iconbox">
                <a
                  href="https://www.google.com/maps/place/Penang+Hill"
                  target="_blank"
                >
                  <FaMapMarkerAlt />
                </a>
                <a>
                <FaPhone />
                </a>
                <a href="mailto:inquiries@penanghill.gov.my" target="_blank">
                <MdOutlineMailOutline />
                </a>
              </div>
            </div>

            
          </div>
        </section>
        
      </div>
    </>
  );
}

export default App;
