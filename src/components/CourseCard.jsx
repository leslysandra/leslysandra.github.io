import React from "react";
import "../assets/styles/components/CourseCard.css";

const CourseCard = ({ CourseTitle, CourseSite }) => (
  <li className="course">
    <h1>{CourseTitle}</h1>
    <p>{CourseSite}</p>
  </li>
);

export default CourseCard;
