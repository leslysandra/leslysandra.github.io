import React from "react";
import linkedin from "../assets/imgs/linkedin.svg";
import twitter from "../assets/imgs/twitter.svg";
import instagram from "../assets/imgs/instagram.svg";
import youtube from "../assets/imgs/youtube.svg";
import "../assets/styles/components/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h2>Stay in touch.</h2>
      <ul className="media">
        <a
          target="blank"
          href="https://www.linkedin.com/in/lesly-zerna-78540957/"
        >
          <img src={linkedin} alt="Linkedin Lesly" />
        </a>
        <a target="blank" href="https://www.instagram.com/leslysandra/">
          <img src={instagram} alt="" />
        </a>
        <a target="blank" href="https://twitter.com/leslysandra">
          <img src={twitter} alt="" />
        </a>
        <a
          target="blank"
          href="https://www.youtube.com/channel/UCDerUQBMKAAGj55PtuBYZoA"
        >
          <img src={youtube} alt="" />
        </a>
      </ul>
    </div>
  );
}
export default Footer;
