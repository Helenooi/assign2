import React, { useState } from 'react';
import '../css/attraction.css';
import Navbar from "../components/navbar.jsx";

//import 'animate.css';

import entopia1 from "./image_attraction/entopia1.jpg";
import entopia2 from "./image_attraction/entopia2.jpg";
import entopia3 from "./image_attraction/entopia3.jpg";

import escape1 from "./image_attraction/escape1.jpg";
import escape2 from "./image_attraction/escape2.jpg";
import escape3 from "./image_attraction/escape3.jpg";

import penanghill1 from "./image_attraction/penanghill_1.jpg";
import penanghill2 from "./image_attraction/penanghill_2.jpg";
import penanghill3 from "./image_attraction/penanghill_3.jpg";


import penangnaturalpark1 from "./image_attraction/penangnaturalpark1.jpg";
import penangnaturalpark2 from "./image_attraction/penangnaturalpark2.jpg";
import penangnaturalpark3 from "./image_attraction/penangnaturalpark3.jpg";

import gurneyplaza1 from "./image_attraction/gurneyplaza1.jpg";
import gurneyplaza2 from "./image_attraction/gurneyplaza2.jpg";
import gurneyplaza3 from "./image_attraction/gurneyplaza3.jpg";

import GurneyParagonMall2 from "./image_attraction/GurneyParagonMall1.jpg";
import GurneyParagonMall1 from "./image_attraction/GurneyParagonMall2.jpg";
import GurneyParagonMall3 from "./image_attraction/GurneyParagonMall3.jpg";

import RainbowSkywalk1 from "./image_attraction/RainbowSkywalk3.jpg";
import RainbowSkywalk2 from "./image_attraction/RainbowSkywalk2.jpg";
import RainbowSkywalk3 from "./image_attraction/RainbowSkywalk4.jpg";


import PenangBotanicalGardens1 from "./image_attraction/PenangBotanicalGardens1.jpg";
import PenangBotanicalGardens2 from "./image_attraction/PenangBotanicalGardens2.jpg";
import PenangBotanicalGardens3 from "./image_attraction/PenangBotanicalGardens3.jpg";

import TelukBahangBeach1 from "./image_attraction/TelukBahangBeach1.jpg";
import TelukBahangBeach2 from "./image_attraction/TelukBahangBeach2.jpg";
import TelukBahangBeach3 from "./image_attraction/TelukBahangBeach3.jpg";

import PenangStreetArt1 from "./image_attraction/PenangStreetArt1.jpg";
import PenangStreetArt2 from "./image_attraction/PenangStreetArt2.jpg";
import PenangStreetArt3 from "./image_attraction/PenangStreetArt3.jpg";

import BatuFerringhiBeach1 from "./image_attraction/BatuFerringhiBeach1.jpg";
import BatuFerringhiBeach2 from "./image_attraction/BatuFerringhiBeach2.jpg";
import BatuFerringhiBeach3 from "./image_attraction/BatuFerringhiBeach3.jpg";


export const Attraction = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [attractions, setAttractions] = useState([
    {
      name: "Entopia Butterfly Farm",
      address: "830 Jalan Teluk Bahang, Teluk Bahang, 11050 Penang, Pulau Pinang, Malaysia",
      email: "info@entopia.my",
      tel: "+604-88 8888",
      slides: [entopia1, entopia2, entopia3],
      currentSlide: 0, 
      description: "Entopia is a butterfly sanctuary and nature park where the beauty of nature meets education and conservation.",
      
    },
    {
      name: "Escape Theme Park",
      address: "828, Jalan Teluk Bahang, Teluk Bahang, 11050 Tanjung Bungah, Pulau Pinang, Malaysia",
      email: "sales@escape.my",
      tel: "+017-797 7529",
      slides: [escape1, escape2, escape3],
      currentSlide: 0, 
      description:"Escape Theme Park offers thrilling outdoor adventure and eco-friendly attractions for visitors of all ages.",
    },
    {
        name: "Penang Hill",
        address: "Penang Hill, Bukit Bendera, 11300 Bukit Bendera, Penang, Malaysia",
        email: "inquiries@penanghill.gov.my",
        tel: "+604 828 8880",
        slides: [penangnaturalpark1, penangnaturalpark2, penangnaturalpark3],
        currentSlide: 0, 
        description: "Penang Hill is a serene retreat offering breathtaking panoramic views of George Town, lush greenery, and cool mountain air. It's a perfect destination for nature lovers and those seeking a peaceful getaway from the bustling city.",
      },
    {
        name: "Penang National Park",
        address: "Penang Hill, Bukit Bendera, 11300 Bukit Bendera, Penang, Malaysia",
        email: "tnpp@wildlife.gov.my",
        tel: "+04-881 3530",
        slides: [penanghill1, penanghill2, penanghill3],
        currentSlide: 0, 
        description: "Penang National Park is a haven for nature enthusiasts, boasting diverse ecosystems, beautiful hiking trails, pristine beaches, and unique wildlife. It’s an ideal spot for eco-adventures and exploring Malaysia's natural beauty.",

      },
      {
        name: "Gurney Plaza",
        address: "170, Gurney Dr, Pulau Tikus, 10250 George Town, Penang",
        email: "gurneyplaza@capitaland.com",
        tel: "+04-222 8222",
        slides: [gurneyplaza1, gurneyplaza2, gurneyplaza3],
        currentSlide: 0, 
        description: "Gurney Plaza is a premier shopping destination in Penang, featuring a wide range of international brands, local boutiques, and a vibrant dining scene. It's the perfect place for shopping, entertainment, and leisure.",

      },
      {
        name: "Gurney Paragon Mall",
        address: "163-D, Persiaran Gurney, 10250 Penang, Malaysia.",
        email: "gp_feedback@hunzagroup.com",
        tel: "+04-228 8266",
        slides: [GurneyParagonMall1, GurneyParagonMall2, GurneyParagonMall3],
        currentSlide: 0, 
        description: "Gurney Paragon Mall combines luxury shopping, fine dining, and cultural heritage. Nestled along Gurney Drive, it boasts modern architecture alongside the preserved St. Joseph's Novitiate, offering a unique blend of the old and new.",

      },
      {
        name: "The Rainbow Skywalk and Observatory Deck",
        address: "1, Jln Penang, George Town, 10000 George Town, Pulau Pinang",
        email: "sales@thetop.com.my",
        tel: "+04-375 9800",
        slides: [RainbowSkywalk1, RainbowSkywalk2, RainbowSkywalk3],
        currentSlide: 0,
        description: "The Rainbow Skywalk and Observatory Deck offer breathtaking panoramic views of George Town and beyond. Suspended 68 floors above ground, this glass walkway is perfect for thrill-seekers and photography enthusiasts alike.",


      },
      {
        name: "Penang Botanical Gardens",
        address: "Kompleks Pentadbiran,Bangunan Pavilion, Jalan Kebun Bunga, 10350 George Town, Pulau Pinang",
        email: "botani@penang.gov.my",
        tel: "+04-226 4401",
        slides: [PenangBotanicalGardens1, PenangBotanicalGardens2, PenangBotanicalGardens3],
        currentSlide: 0,
        description: "Penang Botanical Gardens, also known as the Waterfall Gardens, is a serene retreat featuring lush greenery, beautiful flora, and iconic landmarks. It's a haven for nature lovers and a perfect spot for a peaceful stroll.",
      }
      ,
      {
        name: "Teluk Bahang Beach",
        address: "SBLH 3592 Persisiran Pantai Hujung Batu, Jalan Teluk Bahang, Teluk Bahang, 11050, Penang",
        email: "-",
        tel: "+016-396 8863",
        slides: [TelukBahangBeach1, TelukBahangBeach2, TelukBahangBeach3],
        currentSlide: 0,
        description: "Teluk Bahang Beach nestled in the northwest corner of Penang Island, Teluk Bahang Beach offers a serene escape with its golden sands and tranquil waters. Surrounded by lush greenery, it's a favorite spot for picnics, swimming, and watching breathtaking sunsets.",
      }
      ,
      {
        name: "Penang Street Art",
        address: "316, Beach St, Georgetown, 10300 George Town, Penang",
        email: "mail@streetartpenang.com",
        tel: "+604-261 6663",
        slides: [PenangStreetArt1, PenangStreetArt2, PenangStreetArt3],
        currentSlide: 0,
        description: "Penang Street Art is a vibrant testament to Penang's cultural heritage, the Penang Street Art scene is a must-visit for art lovers and photographers. Located in George Town, this open-air gallery showcases interactive 3D paintings that tell stories of Penang's history, lifestyle, and traditions."
      }
      ,
      {
        name: "Batu Ferringhi Beach",
        address: "Jalan Batu Ferringhi Batu Ferringhi, 11100 George Town, Pulau Pinang",
        email: "-",
        tel: "+604-881 2140",
        slides: [BatuFerringhiBeach1, BatuFerringhiBeach2, BatuFerringhiBeach3],
        currentSlide: 0,
        description: "Batu Ferringhi Beach is one of Penang's most famous destinations, known for its long stretch of golden sand and crystal-clear waters. This vibrant coastal area offers a perfect mix of relaxation and excitement, with activities like sunbathing, parasailing, and jet skiing"
      }
  ]);

  const changeSlide = (index, direction) => {
    setAttractions((prevAttractions) => {
      const updatedAttractions = [...prevAttractions];
      const attraction = updatedAttractions[index];
      attraction.currentSlide =
        (attraction.currentSlide + direction + attraction.slides.length) %
        attraction.slides.length;
      return updatedAttractions;
    });
  };

  const [animate, setAnimate] = useState(false);

  const handleSearch = (e) => {
    setAnimate(false); // Reset animation
    setSearchTerm(e.target.value);
  
    setTimeout(() => {
      setAnimate(true); // Apply animation after search
    }, 100);
  };

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "100px" }}>
        <input
          type="text"
          id="myInput"
          placeholder="Search for names..."
          title="Type in a name"
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>
      <ul id="myUL" className={animate ? 'fade-in' : ''}>
      {attractions.filter((attraction) =>
  attraction.name.toLowerCase().includes(searchTerm.toLowerCase())
).length === 0 ? (
  <div className="sectionresultnofound">
    <div className="no-results-message">
      <a
        style={{
          color: "red",
          fontWeight: "bold",
          fontSize: "18px",
          textAlign: "center",
          display: "block",
          padding: "12px",
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        No Results Found
      </a>
    </div>
    <div className="available-attractions">
      <span style={{ fontWeight: "bold", color: "black", fontSize: "16px" }}>
        Available Attractions:
      </span>
      <ul style={{ padding: "0px", listStyleType: "none" }}>
        {attractions.map((attraction, index) => (
          <li key={index} className="attraction-item">
            <a
              style={{
                color: "blue",
                cursor: "pointer",
              }}
              onClick={() => setSearchTerm(attraction.name)}
            >
              {attraction.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
  ) : (
    attractions
      .filter((attraction) =>
        attraction.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((attraction, index) => (
        <li key={index}>
          <a>{attraction.name}</a>
          <section className="attraction-banners">
            <div className="attraction-banner-manage slide-in">
              <div className="attraction-container16 fade-in">
                <div className="home-left2">
                  <span className="attraction-text">
                    <br />
                    <strong>Address: </strong>
                    {attraction.address}
                    <br />
                    <strong>Email: </strong>
                    {attraction.email}
                    <br />
                    <strong>Tel: </strong>
                    {attraction.tel}
                    <br />
                    <strong>Description: </strong>
                    {attraction.description}
                  
                  </span>
                </div>
                <div className="attraction-image-container1">
                  <div className="slideshow-container">
                    <img
                      src={attraction.slides[attraction.currentSlide]}
                      alt={`Slide ${attraction.currentSlide + 1}`}
                      style={{ width: "100%" }}
                    />
                    <button
                      className="prev"
                      onClick={() => changeSlide(index, -1)}
                    >
                      &#10094;
                    </button>
                    <button
                      className="next"
                      onClick={() => changeSlide(index, 1)}
                    >
                      &#10095;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </li>
      ))
  )}
</ul>


    </div>
  );
};

export default Attraction;
