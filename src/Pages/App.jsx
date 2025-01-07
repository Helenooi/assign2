import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar.jsx";
import "../css/App.css";

import { Link } from 'react-router-dom';

import penanghill_1 from "./image_attraction/penanghill_1.jpg";
import penanghill_2 from "./image_attraction/penanghill_2.jpg";
import penanghill_3 from "./image_attraction/penanghill_3.jpg";

import escape1 from "./image_attraction/escape1.jpg";
import escape2 from "./image_attraction/escape2.jpg";
import escape3 from "./image_attraction/escape3.jpg";

import penangnaturalpark1 from "./image_attraction/penangnaturalpark1.jpg";
import penangnaturalpark2 from "./image_attraction/penangnaturalpark2.jpg";
import penangnaturalpark3 from "./image_attraction/penangnaturalpark3.jpg";

import entopia1 from "./image_attraction/entopia1.jpg";
import entopia2 from "./image_attraction/entopia2.jpg";
import entopia3 from "./image_attraction/entopia3.jpg";


import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

function App() {

  const penangHillImages = [penanghill_1, penanghill_2, penanghill_3];
  const escapeImages = [escape1, escape2, escape3];
  const penangNaturalParkImages = [penangnaturalpark1, penangnaturalpark2, penangnaturalpark3];
  const entopiaImages = [entopia1, entopia2, entopia3];

  const [penangHillIndex, setPenangHillIndex] = useState(0);
  const [escapeIndex, setEscapeIndex] = useState(0);
  const [penangNaturalParkIndex, setPenangNaturalParkIndex] = useState(0);
  const [entopiaIndex, setentopiaIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPenangHillIndex((prevIndex) => (prevIndex + 1) % penangHillImages.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [penangHillImages.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setEscapeIndex((prevIndex) => (prevIndex + 1) % escapeImages.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [escapeImages.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPenangNaturalParkIndex((prevIndex) => (prevIndex + 1) % penangNaturalParkImages.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [penangNaturalParkImages.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setentopiaIndex((prevIndex) => (prevIndex + 1) % entopiaImages.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [penangNaturalParkImages.length]);


  const foodData = [
    {
      id: 1,
      title: "Chinese Cuisine",
      description: "This is about Chinese Food.",
      image: "/homepage/chinese food preview in main page.jpg",
      link: "/ChineseFood",
    },
    {
      id: 2,
      title: "Malay Cuisine",
      description: "This is about Malay Food.",
      image: "/homepage/malay food preview in main page.jpg",
      link: "/MalayFood",
    },
    {
      id: 3,
      title: "Indian Cuisine",
      description: "This is about Indian Food.",
      image: "/homepage/indian food preview in main page.jpg",
      link: "/IndianFood",
    },
  ];

  return (
    <>
      <Navbar />
      <img class="hero" src="homepage/mainbg.jpg" />

      <div className="section">
        <section id="homepage">
          <h1>section1</h1>
        </section>

        <section id="contact">
          <h1>section2</h1>
        </section>

        <section id="Food">
          <h1>Food and Cuisine</h1>
          <br />
          <div className="MainPageFoodContainer">
            {foodData.map((food) => (
              <article className = "foodarticle" key={food.id}>
                <div className="article-wrapper">
                  <figure>
                    <img src={food.image} alt={food.title} />
                  </figure>
                  <div className="article-body">
                    <h2>{food.title}</h2>
                    <p>{food.description}</p>
                    <br />
                    <a href={food.link} className="read-more">
                      Read more
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
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

          <h1 className="title">Penang Attraction</h1>
          <div className="boxright">
            <div className="box">
            <img
                src={penangHillImages[penangHillIndex]}
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
                <FaPhone title="+604 828 8880"/>
                </a>

                <a href="mailto:inquiries@penanghill.gov.my" target="_blank">
                <MdOutlineMailOutline />
                </a>
              </div>
            </div>

            <div className="box">
            <img
                src={escapeImages[escapeIndex]}
                className="imgactive"
                alt="Escape Theme Park"
              />
              <div className="whiteboardtext">
                <p>Escape Theme Park</p>
              </div>

              <div className="iconbox">
                <a
                  href="https://www.google.com/maps/place/ESCAPE+Penang/@5.4497458,100.2114577,963m/data=!3m2!1e3!4b1!4m6!3m5!1s0x304ac3a45d25df75:0xe55b46784fbcb260!8m2!3d5.4497405!4d100.214038!16s%2Fg%2F1w3sx3lr?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  <FaMapMarkerAlt/>
                </a>
                <a>
                <FaPhone title="+017-797 7529"/>
                </a>
                <a href="mailto:sales@escape.my" target="_blank">
                <MdOutlineMailOutline />
                </a>
              </div>
            </div>


            <div className="box">
            <img
                src={penangNaturalParkImages[penangNaturalParkIndex]}
                className="imgactive"
                alt="Penang National Park"
              />
              <div className="whiteboardtext">
                <p>Penang National Park</p>
              </div>

              <div className="iconbox">
                <a
                  href="https://www.google.com/maps/dir//Pejabat+Taman+Negara+P.+Pinang+jalan+Hassan+Abbas,+11050+George+Town,+Penang/@5.4471367,100.1115903,30821m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x304aebcd109625ed:0xe48f33317fbd27c1!2m2!1d100.1939923!2d5.4471423?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  <FaMapMarkerAlt />
                </a>
                <a>
                <FaPhone title="+04-881 3530"/>
                </a>
                <a href="mailto:tnpp@wildlife.gov.my" target="_blank">
                <MdOutlineMailOutline />
                </a>
              </div>
            </div>


            <div className="box">
            <img
                src={entopiaImages[entopiaIndex]}
                className="imgactive"
                alt="Entopia Butterfly Farm"
              />
              <div className="whiteboardtext">
                <p>Entopia Butterfly Farm</p>
              </div>

              <div className="iconbox">
                <a
                  href="https://www.google.com/maps?rlz=1C1CHBF_enMY982MY982&um=1&ie=UTF-8&fb=1&gl=my&sa=X&geocode=KfN4HKVY6EowMR-L41XkY8x4&daddr=830,+Jalan+Teluk+Bahang,+Teluk+Bahang,+11050+Tanjung+Bungah,+Pulau+Pinang"
                  target="_blank"
                >
                  <FaMapMarkerAlt />
                </a>
                <a>
                <FaPhone title="+604-88 8888"/>
                </a>
                <a href="mailto:info@entopia.com" target="_blank">
                <MdOutlineMailOutline />
                </a>
              </div>
            </div>

          </div>

          <center>
           <div class="buttoncontainer">
      
           <Link to="/attraction">
    <button className="btnattraction">
      <span>View More</span>
    </button>
  </Link>
      </div>
           </center>
        </section>
        
      </div>
    </>
  );
}

export default App;
