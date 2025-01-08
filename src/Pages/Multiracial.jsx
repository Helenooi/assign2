import React, { useState, useEffect, useRef } from "react";
import NavbarLanding from "../components/navbarLanding.jsx";
import "../css/arts.css";
import Papa from "papaparse"; // Ensure Papa is imported if you are parsing CSV
import { useNavigate } from 'react-router-dom';

function Multiracial() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [artData, setArtData] = useState([]); // Moved to Arts2
  const [selectedPlace, setSelectedPlace] = useState(null); // Added state for selected place
  const dialogRef = useRef(null);
  const imgRef = useRef(null);
  const navigate = useNavigate();

  const openDialog = (place) => {
    setSelectedPlace(place); // Set the selected place when clicked
    dialogRef.current.showModal(); // Opens the dialog
    setIsDialogOpen(true); // Optional: Set state if you want to track it
  };

  const closeDialog = () => {
    dialogRef.current.close(); // Closes the dialog
    setIsDialogOpen(false); // Optional: Update state
  };

  useEffect(() => {
    fetch("Culture/Multiracial.csv")
      .then((response) => response.text())
      .then((text) => {
        const data = Papa.parse(text, { header: true }).data;
        setArtData(data); // Set the data correctly
      })
      .catch((error) => {
        console.error("Error fetching the CSV file:", error);
      });
  }, []);

  useEffect(() => {
    if (imgRef.current) {
      const imgSrc = imgRef.current.src;
      const figure = imgRef.current.closest('.first-box-figure');
      if (figure) {
        figure.style.setProperty('--bg-image', `url(${imgSrc})`);
      }
    }
  }, []);

  const handleImageClick = (event) => {
    const targetPage = event.target.getAttribute("data-page");
    if (targetPage) {
      navigate(targetPage); // Navigate to the target page
    }
  };

  return (
    <>
      <NavbarLanding />
      <div className="first-box">
        <div className="left-content">
          <h1 className="grays">Multiracial</h1>
          <figure className="first-box-figure">
            <img
              className="first-box-img"
              src="homepage/multiracial.jpg"
              alt=""
              ref={imgRef}
            />
          </figure>
        </div>
        <div className="right-content">
          <div className="gallery" onClick={handleImageClick}>
            <input type="checkbox" />
            <img
              src="homepage/sacredSpace.webp"
              alt="a forest after an apocalypse"
              data-page="/SacredSpace"
            />
            <img
              src="homepage/HeritageConservation3.jpg"
              alt="a waterfall and many rocks"
              data-page="/HeritageConservation"
            />
            <img
              src="homepage/HeritageSites.avif"
              alt="a house on a mountain"
              data-page="/HeritageSites"
            />
            <img
              src="homepage/art1.avif"
              alt="sime pink flowers"
              data-page="/Arts"
            />
            <img
              src="homepage/multiracial.jpg"
              alt="big rocks with some trees"
            />
          </div>
        </div>
      </div>

      <div className="carousel">
        <h2 className="categories__title">Colors of the same soul</h2>
        <div className="carousel__container">
          {artData.length > 0 ? (
            artData.map((place, index) => {
              console.log("Rendering place:", place); // Log each item being rendered
              return (
                <div
                  className="carousel-item"
                  onClick={() => openDialog(place)}
                  key={index}
                >
                  <img
                    className="carousel-item__img"
                    src={place.Images}
                    alt={place.Race}
                  />
                  <div className="carousel-item__details">
                    <div className="controls">
                      <button class="carousel-item__label">
                        {place.Trait}
                      </button>
                      <button class="carousel-item__label1">
                        {place.Trait2}
                      </button>
                    </div>
                    <h5 className="carousel-item__details--title">
                      {place.Race}
                    </h5>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>

      <div class="scroll-box">
        <strong></strong>
        The multi-racial statue of Malaysia stands as a powerful and enduring
        symbol of the country's diverse cultural tapestry, a testament to the
        harmonious coexistence of multiple ethnic groups that have shaped
        Malaysia's identity over the centuries. This statue celebrates the
        contributions and significance of the Malay, Chinese, Indian, and
        indigenous communities, each playing an integral role in Malaysia’s
        development and national character. The origins of Malaysia's
        multicultural society trace back to its earliest history, where the
        region was a crossroads for trade routes connecting Asia with the rest
        of the world. This gave rise to a rich cultural exchange, with the early
        Malay Sultanates laying the foundation of the nation. The Malay people,
        with their distinct customs, language, and traditions, formed the
        bedrock of Malaysian society. Islam, which arrived through traders from
        the Middle East, became a core part of the Malay identity, influencing
        cultural practices, art, and architecture. As trade flourished in the
        region, especially between the 15th and 19th centuries, the arrival of
        immigrants from China and India introduced new cultural, religious, and
        economic influences. Chinese traders, merchants, and miners came to
        Malaysia, bringing with them the rich traditions of Confucianism,
        Buddhism, and Taoism. Indian immigrants, many of whom were brought over
        by the British to work on plantations, added to the cultural mix with
        their own diverse religious and cultural traditions, including Hinduism,
        Sikhism, and Islam. The influence of these two groups was particularly
        notable in Malaysia's economy, as Chinese merchants dominated trade and
        the Indian community contributed to the development of industries such
        as rubber and tin mining. The colonial era, marked by British rule,
        further intensified Malaysia's racial diversity. The British brought in
        labor from India and China, while local Malays were integrated into the
        agricultural and military sectors. Over time, the different ethnic
        groups began to settle into specific occupations and regions, creating
        distinct cultural communities within the larger society. However,
        despite their differences, these groups began to establish strong
        connections, creating the foundation for Malaysia's unique multicultural
        identity. When Malaysia achieved independence in 1957, it was a moment
        of great significance for all Malaysians, as they sought to build a new,
        united nation. The country's leaders, aware of the racial and ethnic
        diversity, worked to create a system of governance that would recognize
        and protect the interests of all communities. The Federal Constitution
        enshrined the rights of each race while promoting unity, peace, and
        respect for one another. This vision of unity amid diversity became
        central to Malaysia's national ethos, with the motto “Unity in
        Diversity” encapsulating the spirit of the nation. The multi-racial
        statue is not merely an artistic creation but a reflection of the ideals
        that underpin Malaysia's development. It represents the shared values of
        tolerance, respect, and cooperation, highlighting how the nation's
        different ethnic groups live side by side, each contributing their
        unique traditions, arts, cuisines, languages, and customs. These diverse
        cultural expressions are celebrated through festivals, cultural
        exchanges, and public celebrations, where Malaysians come together to
        appreciate and learn from each other's heritage. As a country, Malaysia
        has encountered challenges in managing its multi-ethnic society, from
        tensions between the races to political and economic inequalities.
        However, the nation's commitment to maintaining social cohesion and
        harmony has been a guiding principle in overcoming these challenges. The
        multi-racial statue stands as a visual reminder of the strength that
        comes from diversity and the importance of fostering an environment
        where people from all backgrounds can thrive together. Over the decades,
        Malaysia has evolved into a thriving nation that proudly celebrates its
        multicultural heritage. The multi-racial statue has become an iconic
        landmark, not only representing the past but also looking toward the
        future. It symbolizes the collective hope of a country that continues to
        build bridges between its diverse communities, focusing on what unites
        them rather than what divides them. Today, the multi-racial statue
        remains an enduring tribute to the vision of Malaysia's founders and the
        generations of Malaysians who have worked to make the dream of a united,
        harmonious society a reality. It stands as a beacon of hope for future
        generations, reminding them that the strength of Malaysia lies in its
        diversity, and that by embracing each other's differences, the nation
        will continue to prosper and grow in peace and unity.
      </div>

      <div class="space-box"></div>

      <dialog id="dialog" className="custom-dialog" ref={dialogRef}>
        <div className="places-container">
          {selectedPlace ? (
            <div className="place-card">
              <h2 className="place-card__name">{selectedPlace.Race}</h2>
              <div className="place-card__details">
                <img
                  src={selectedPlace.Images}
                  alt={selectedPlace.Race}
                  className="place-image"
                />
                <div>
                  <div className="try-cards">
                    <div className="try-card1">
                      <strong className="card-label location-label">
                        <i class="fa-solid fa-person"></i>Trait:{" "}
                      </strong>
                      {selectedPlace.Trait}, {selectedPlace.Trait2}
                    </div>

                    <div className="try-card1">
                      <strong className="card-label location-label1">
                        <i class="fa-solid fa-language"></i>Language:{" "}
                      </strong>
                      {selectedPlace.Language}
                    </div>

                    <div className="try-card1">
                      <strong className="card-label location-label2">
                        <i class="fa-solid fa-earth-americas"></i>Origin:{" "}
                      </strong>
                      {selectedPlace.Origin}
                    </div>

                    <div className="try-card1">
                      <strong className="card-label location-label3">
                        <i class="fa-solid fa-map-pin"></i>Part:{" "}
                      </strong>
                      {selectedPlace.Part}
                    </div>

                    <div className="try-card">
                      <strong className="card-label operating-hour-label">
                        <i class="fa-solid fa-shirt"></i>Costume:{" "}
                      </strong>
                      <div className="operate-hour-container">
                        <div className="operate-hour-item">
                          <p className="operate-hour">Men →</p>
                          <span>{selectedPlace.CostumeM}</span>
                        </div>
                        <div className="operate-hour-item">
                          <p className="operate-hour">Women →</p>
                          <span>{selectedPlace.CostumeF}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                <strong>
                  <u>Description:</u>
                </strong>
              </p>
              <p>{selectedPlace.Description}</p>
            </div>
          ) : (
            <p>No data available</p>
          )}
        </div>
        <button onClick={closeDialog} aria-label="close" className="close-btn">
          ❌
        </button>
      </dialog>
    </>
  );
}

export default Multiracial;