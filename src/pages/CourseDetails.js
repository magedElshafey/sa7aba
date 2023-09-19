import React from "react";
import { useParams } from "react-router-dom";
import { coursesDetails } from "../fakers/data";
import HeroCourse from "../components/utils/heroCourse/HeroCourse";
import AboutCourse from "../components/courseDetails/aboutCourse/AboutCourse";

import MT4 from "../components/courseDetails/mt4/MT4";
import Advantages from "../components/courseDetails/advantages/Advantages";
import Reviews from "../components/courseDetails/reviews/Reviews";
import CourseOne from "../components/courseDetails/coursesDetails/courseone/CourseOne";
import CourseTwo from "../components/courseDetails/coursesDetails/courseTwo/CourseTwo";
import CourseThree from "../components/courseDetails/coursesDetails/courseThree/CourseThree";
import { courseOne, courseTwo, courseThree } from "../fakers/data";
import style from "../components/courseDetails/coursesDetails/coursesDetails.module.css";
const CourseDetails = ({ fixedContainer }) => {
  const { id } = useParams();
  const data = coursesDetails.filter((item) => item.id === parseInt(id));
  return (
    <div>
      <HeroCourse item={data[0]} fixedContainer={fixedContainer} />
      <div className="container my-4">
        <div className="row">
          <div
            className={`col-12 col-md-11 col-lg-9 ${
              parseInt(id) === 2 || parseInt(id) === 3 ? style.border : null
            }`}
          >
            <AboutCourse data={data[0].aboutCourse} />
            {data[0].mt4 ? <MT4 img={data[0].mt4} /> : null}
            {parseInt(id) === 1 && <CourseOne data={courseOne} />}
            {parseInt(id) === 2 && <CourseTwo data={courseTwo} />}
            {parseInt(id) === 3 && <CourseThree data={courseThree} />}
            <Advantages
              img={data[0].advantage}
              question={data[0].advantageQuestion}
              details={data[0].advantageDetails}
              why={data[0].why}
            />

            <Reviews data={data[0].reviews} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
/*
      <div
        className={`container my-4 me-0 me-md-5 `}
      >
        <div className="row">
          <div className="col-12 col-md-11 col-lg-9">
           
          
          
          </div>
        </div>
      </div>
*/
