import React from "react";
import InnerHero from "../Common/InnerHero/InnerHero";
import img from "/images/hero.jpg";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <InnerHero name="Our Services" title="News we Broadcast" cover={img} />
      {/* <Founder /> */}
      <h1 className="text">Loading..</h1>
    </div>
  );
};

export default Services;
