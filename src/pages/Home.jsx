import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../assets/imgs/lesly.svg";
import CityAI from "../assets/imgs/CITYAI.svg";
import GDE from "../assets/imgs/gde.svg";
import platziLogo from "../assets/imgs/platziLogo.svg";
import udacity from "../assets/imgs/udacity.svg";
import "../assets/styles/Home.css";
import WOW from "wowjs";

class Home extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <>
        <Header />
        <section className="home">
          <div className="main-text wow fadeIn" data-wow-delay="5s">
            <h1 className="main-title">Hello People from internet</h1>
            <p className="main-desc">
              I am a software engineer, speaker, and volunteer from Bolivia,
              currently lockdown working for my country.
            </p>
            <div className="companies">
              <img src={CityAI} alt="City AI" />
              <img src={platziLogo} alt="Platzi" />
              <img src={GDE} alt="GDE" />
              <img src={udacity} alt="Udacity" />
            </div>
            <button className="main-button wow fadeIn">
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
}

export default Home;
