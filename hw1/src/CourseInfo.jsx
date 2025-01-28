import React from "react";
import "./CourseInfo.css";

const CourseInfo = () => {
  return (
    <div className="course-info">
      <h1 className="course-title">Course Title</h1>
      <p className="course-description">
        This course will help you learn React in a practical and efficient way.
      </p>
      <button className="enroll-button">Enroll Now</button>
    </div>
  );
};

export default CourseInfo;