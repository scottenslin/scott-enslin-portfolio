import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import TrackVisibility from "react-on-screen";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";
import Testimonial from "../components/Testimonial";
import Progress from "../components/Progress";

function About() {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [skills, setSkills] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleToggler = (event) => {
    setToggler(!toggler);
  };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
    axios.get("/api/reviews").then((response) => {
      setRecommendations(response.data);
    });
    axios.get("/api/skills").then((response) => {
      setSkills(response.data);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>About - Scott Enslin Dev about page</title>
        <meta
          name="description"
          content="Scott Enslin Dev About Page"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-about-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title="About Me" />
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="mi-about-content">
                  <h3>
                    I am <span className="color-theme">{information.name}</span>
                  </h3>
                  <p>
                    I am a frontend web developer who is always looking for a new challenge. My strengths sit on the frontend but open to learning and working more with the backend.
                  </p>
                  <ul>
                    {!information.name ? null : (
                      <li>
                        <b>Full Name</b> {information.name}
                      </li>
                    )}
                    {!information.age ? null : (
                      <li>
                        <b>Age</b> {information.age} Years
                      </li>
                    )}
                    {!information.phone ? null : (
                      <li>
                        <b>Phone</b> {information.phone}
                      </li>
                    )}
                    {!information.language ? null : (
                      <li>
                        <b>Languages</b> {information.language}
                      </li>
                    )}
                    {!information.email ? null : (
                      <li>
                        <b>Email</b> {information.email}
                      </li>
                    )}
                    {!information.address ? null : (
                      <li>
                        <b>Address</b> {information.address}
                      </li>
                    )}
                    {!information.hobbies ? null : (
                      <li>
                        <b>Hobbies and Interests</b> {information.hobbies}
                      </li>
                    )}
                    {!information.favoriteQuote ? null : (
                      <li>
                        <b>Favorite Quote</b> {information.favoriteQuote}
                      </li>
                    )}
                  </ul>
                  <a href={information.cvfile} target="_blank" className="mi-button">
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="mi-skills-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title="My Skills" />
            <div className="mi-skills">
              <div className="row mt-30-reverse">
                {skills.map((skill) => (
                  <TrackVisibility
                    once
                    className="col-lg-6 mt-30"
                    key={skill.title}
                  >
                    <Progress title={skill.title} percentage={skill.value} />
                  </TrackVisibility>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Recommendations" />
            <div className="row justify-content-center">
              <div className="col-12">
                <Slider className="mi-testimonial-slider" {...sliderSettings}>
                  {recommendations.map((recommendation) => (
                    <Testimonial key={recommendation.id} content={recommendation} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </Layout>
  );
}

export default About;
