import React from "react";
import InnerHero from "./../Common/InnerHero/InnerHero";
import img from "/images/hero.jpg";
import AboutDetail from "./AboutDetail/AboutDetail";
// import Mission from './Mission/Mission';

const About = () => {
  return (
    <>
      <InnerHero name="About us" title="About Us - Who We Are?" cover="public/images/hero3.jpg" />
      <AboutDetail />
      {/* <Mission /> */}
    </>
  );
};

export default About;
