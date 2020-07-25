import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/styles/Talks.css";

function Talks() {
  return (
    <>
      <Header />
      <section className="talks">
        <h1>Here are a few of my speaking pitches:</h1>
        <div className="cards-container">
          <div className="talk-card">
            <iframe
              width="460"
              height="215"
              src="https://www.youtube.com/embed/bs0rkmg6n3g"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h1>RIIAA presentación CITY.AI</h1>
            <p>August 2019</p>
          </div>
          <div className="talk-card">
            <iframe
              width="460"
              height="215"
              src="https://www.youtube.com/embed/iHZoj7eC5c4"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h1>TEDx USFX Sucre, Bolivia</h1>
            <p>August 2018</p>
          </div>
          <div className="talk-card">
            <iframe
              width="460"
              height="215"
              src="https://www.youtube.com/embed/OFZo7Ls51vI"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h1>TEDx UCB Cochabamba, Bolivia</h1>
            <p>August 2018</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Talks;
