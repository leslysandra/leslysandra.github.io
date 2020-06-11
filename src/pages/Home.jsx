import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../assets/imgs/lesly.svg";
import "../assets/styles/Home.css";

function Home() {
  return (
    <>
      <Header />
      <section className="home">
        <div className="main-text">
          <h1 className="main-title">Hello People from internet</h1>
          <p className="main-desc">
            I am a software engineer, speaker, and volunteer from Bolivia,
            currently lockdown working for my country.
          </p>
          <button className="main-button">
            <a target="_blank" href="https://tinyletter.com/leslysandra7">
              My NewsLetter
            </a>
          </button>
        </div>
        <img className="main-img" src={Profile} alt="It's me!" />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
