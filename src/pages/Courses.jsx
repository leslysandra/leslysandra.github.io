import React from "react";
import Header from "../components/Header";
import Course from "../components/CourseCard";
import Campamento from "../assets/imgs/CampamentoTuCiencia.svg";
import Intro from "../assets/imgs/Intro.svg";
import Weekend from "../assets/imgs/suweekend.svg";
import "../assets/styles/Courses.css";
import Footer from "../components/Footer";

function Courses() {
  return (
    <section>
      <Header />
      <h1 className="crs-title">Teaching is my passion</h1>

      <div className="dashboard">
        <div className="crs courses-left">
          <h1 className="indc">Courses</h1>
          <ul className="courses-content">
            <div>
              <Course
                CourseTitle="Módulo MACHINE LEARNING en Diplomado de Ciencias de Datos."
                CourseSite="Universidad Técnica de Oruro, Bolivia - 2020"
              />
              <Course
                CourseTitle="Módulo TENDENCIAS Y RETOS EN ECOMMERCE en Diplomado Marketing Digital para E-commerce."
                CourseSite="Universidad Católica Boliviana “San Pablo” - 2019"
              />
              <Course
                CourseTitle="Módulo MACHINE LEARNING en Diplomado de Ciencias de Datos."
                CourseSite="Universidad Mayor de San Simón, Bolivia - 2019"
              />
              <Course
                CourseTitle="Curso CIENCIAS DE DATOS Y MATEMÁTICAS."
                CourseSite="Clubes de Ciencias Colombia. Neiva, Colombia
                  - 2019"
              />
            </div>
            <div>
              <Course
                CourseTitle="Curso INTRODUCCIÓN A MACHINE LEARNING"
                CourseSite="Plataforma online Platzi, Colombia
                    - 2018"
              />
              <Course
                CourseTitle="Módulo ANÁLISIS FORENSE EN DISPOSITIVOS MÓVILES en Diplomado Ciberseguridad e Informática."
                CourseSite="Escuela Militar de Ingeniería. Cochabamba, Bolivi
                  - 2018"
              />
              <Course
                CourseTitle="Módulo SEGURIDAD EN APLICACIONES MÓVILES en Maestría Ciberseguridad. "
                CourseSite="Universidad Católica Boliviana “San Pablo” - unidad de postgrado, regional Cochabamba, Bolivia"
              />
            </div>
          </ul>
        </div>

        <div className="crs workshops-right">
          <h1 className="indc">WorkShops</h1>
          <ul className="workshops-content">
            <div>
              <img src={Campamento} alt="" />
              <Course
                CourseTitle="Introducción a Ciencia de Datos"
                CourseSite="Campamento Tu Ciencia Joven Santa Cruz, Bolivia - 2019"
              />
            </div>
            <div>
              <img src={Intro} alt="" />
              <Course
                CourseTitle="Intro Tensor Flow"
                CourseSite="Google DevFest Sucre, Bolivia - 2019"
              />
            </div>
            <div>
              <img src={Weekend} alt="" />
              <Course
                CourseTitle="Mentoría en Global Startup Weekend Women"
                CourseSite="Santa Cruz, Bolivia - 2019"
              />
            </div>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Courses;
