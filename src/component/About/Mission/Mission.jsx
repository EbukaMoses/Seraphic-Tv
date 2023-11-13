import React from "react";
import "./Mission.css";
import MissionTable from "./MissionTable";

const Mission = () => {
  return (
    <>
      <div className="AboutMission padding">
        <div className="container flex2">
          <div className="left">
            <h1>Our Mission</h1>
            <p>
              The mission of Kelina Hospital is to promote, preserve, and
              restore individual and family health by providing expert medical
              and surgical care within a cordial and dignified environment.
            </p>

            <h1>Our Objectives</h1>
            {/* <div className="obj"> */}
            <div className="details">
              <span>➤</span>&nbsp;&nbsp;
              <p>
                To create and provide the highest quality of medical and
                surgical care available in Nigeria.
              </p>
            </div>
            <div className="details">
              <span>➤</span>&nbsp;&nbsp;
              <p>
                To innovate, achieve optimal surgical success, fastest recovery
                times.
              </p>
            </div>
            <div className="details">
              <span>➤</span>&nbsp;&nbsp;
              <p>
                To train and retrain a workforce with the highest level of
                expertise, motivation, job satisfaction, and patient service
              </p>
            </div>
            <div className="details">
              <span>➤</span>&nbsp;&nbsp;
              <p>
                To cultivate a practice environment that enhances professional
                care-giving and patient healing, and also explore technology to
                optimize operational efficiency.
              </p>
            </div>
            {/* </div> */}
          </div>
          <div className="right">
            <h1>Workings</h1>
            <MissionTable title="Monday - Sunday" subtitle="24 hours" />
            <MissionTable title="News" subtitle="24 hours" />
            <MissionTable title="Politics" subtitle="24 hours" />
            <MissionTable title="International" subtitle="24 hours" />
            <h6>
              Staff taking taking care of patients in the main service areas are
              available within the hospital round the clock.
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
