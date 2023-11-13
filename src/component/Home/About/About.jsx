import React from "react";
import "./About.css";
import Heading from "./../../Common/Heading";

const About = () => {
  return (
    <>
      <section className="Habout padding">
        <div className="container">
          <div className="left">
            <img src="/images/1.jpg" alt="" />
            <img src="/images/2.jpg" alt="" />
          </div>

          <div className="Hright">
            <Heading title="Seraphic Hospital" subtitle="Welcome to" />
            <p>
              We exist to bring people into the kingdom of God, awaken sleepers,
              and make them mature church members. To equip them for their life
              mission in the world in order to build and extend God's kingdom.
            </p>
            <a href="/services" className="btn_bg">
              Our Services
            </a>
          </div>
        </div>
        <br />
        <br />
      </section>
    </>
  );
};

export default About;
