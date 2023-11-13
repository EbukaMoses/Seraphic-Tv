import React from "react";
import "./Service.css";
import Heading from "../../Common/Heading";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <>
      <section className="home_service padding">
        <div className="container">
          <div className="topic">
            <Heading title="News we Broadcast" subtitle="Our Services" />
            <div className="topic_btn">
              <a href="#" className="btn_bg">
                Discover All &nbsp; <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="service_card flex">
            <ServiceCard
              icon={<i class="fa-solid fa-stethoscope"></i>}
              title="Eductional News"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod odit quo architecto iure perferendis reiciendis nemo, ipsam esse commodi sapiente maiores perspiciatis inventore. Nisi magni consequuntur aliquid? Fuga vitae nesciunt sapiente porro iste quaerat, neque veniam voluptates ipsum, expedita vel dolores impedit nemo in officiis ex ipsa! Eum, hic?"
            />
            <ServiceCard
              icon={<i class="fa-solid fa-bed-pulse"></i>}
              title="Sports News"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod odit quo architecto iure perferendis reiciendis nemo, ipsam esse commodi sapiente maiores perspiciatis inventore. Nisi magni consequuntur aliquid? Fuga vitae nesciunt sapiente porro iste quaerat, neque veniam voluptates ipsum, expedita vel dolores impedit nemo in officiis ex ipsa! Eum, hic?"
            />
            <ServiceCard
              icon={<i class="fa-solid fa-house-medical-circle-check"></i>}
              title="International News"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod odit quo architecto iure perferendis reiciendis nemo, ipsam esse commodi sapiente maiores perspiciatis inventore. Nisi magni consequuntur aliquid? Fuga vitae nesciunt sapiente porro iste quaerat, neque veniam voluptates ipsum, expedita vel dolores impedit nemo in officiis ex ipsa! Eum, hic?"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
