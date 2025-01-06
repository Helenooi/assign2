import React from "react";
import Navbar from "../components/navbar.jsx";
import "../css/App.css";

function App() {

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

      <img class="hero" src="homepage/background.jpg" />

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
          <div className="articles">
            {foodData.map((food) => (
              <article key={food.id}>
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
      </div>
    </>
  );
}

export default App;
