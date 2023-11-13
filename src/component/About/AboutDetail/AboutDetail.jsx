import React from "react";
import "./AboutDetail.css";
// import image from "public/images/hero3.jpg";

const AboutDetail = () => {
  return (
    <>
      <section className="AboutDetail padding">
        <div className="container flex">
          <div className="img">
            <img src="public/images/hero3.jpg" alt="" />
          </div>
          <div className="details">
            <h2> --About Seraphic TV</h2>
            <p>
              We exist to bring people into the kingdom of God, awaken sleepers,
              and make them mature church members. To equip them for their life
              mission in the world in order to build and extend God's kingdom.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutDetail;
