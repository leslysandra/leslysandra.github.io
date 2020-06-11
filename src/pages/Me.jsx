import React from "react";
import Header from "../components/Header";
import "../assets/styles/Me.css";
import Footer from "../components/Footer";
import OneLesly from "../assets/imgs/lesly-design.svg";
import SecondLesly from "../assets/imgs/lesly-design-2.svg";
import Semana from "../assets/imgs/Semana.svg";
import Bolivision from "../assets/imgs/BolivisionLogo.svg";
import Correo from "../assets/imgs/CorreoDelSurLogo.svg";
import Parlamento from "../assets/imgs/ParlamentoAndinoLogo.svg";
import EmprendedoresBo from "../assets/imgs/EmprendedoresBoLogo.svg";

function Me() {
  return (
    <>
      <Header />
      <section className="me">
        <h1 className="me-title-one">A little more about me:</h1>
        <div className="facts desc-one">
          <img src={OneLesly} alt="Lesly" />
          <p>
            <b>Google Developer Expert</b> en Machine Learning. Co fundadora
            Mentor Her, la iniciativa para fomentar pasión por tecnología con
            más chicas. <b>Mentor</b> de estudiantes en <b>Udacity</b> en
            nanodegree de análisis de datos.
          </p>
        </div>
        <hr />
        <div className="facts desc-two">
          <p>
            Escribe en medium.com/@leslysandra sobre viajes y tecnología.
            <b>Speaker</b> internacional: motivacional y temas de inteligencia
            artificial. <b>TEDx speaker 2018.</b>
          </p>
          <img src={SecondLesly} alt="Lesly" />
        </div>

        <div className="press">
          <h1>Media recognizing my experience</h1>
          <div className="press-box">
            <a
              target="blank"
              href="https://www.semana.com/tecnologia/articulo/que-es-machine-learning-como-funciona-la-inteligencia-artificial-porque-las-redes-sociales-saben-que-me-gusta/599733?fbclid=iwar2n4v4gmtmsyqxrj9qcreutopj863hknfqqxnumbjqryvoipwv9fc4hiak"
            >
              <img src={Semana} alt="Revista Semana" />
            </a>
            <a
              target="blank"
              href="https://www.youtube.com/watch?v=dqcvME38sPg"
            >
              <img src={Bolivision} alt="Bolivision" />
            </a>
            <a
              target="blank"
              href="https://correodelsur.com/ecos/20190317_lesly-zerna-la-unica-profesora-boliviana-en-platzi.html"
            >
              <img src={Correo} alt="CorreoDelSur" />
            </a>
            <a
              target="blank"
              href="https://www.youtube.com/watch?v=ZKOUN1pwLjY"
            >
              <img src={Parlamento} alt="Parlamento Andino" />
            </a>
            <a
              target="blank"
              href="https://emprendedores.bo/lesly-zerna-y-su-conquista-por-ensenar-a-miles-de-personas-sobre-inteligencia-artificial/"
            >
              <img src={EmprendedoresBo} alt="Emprendedores Bolivia" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Me;
