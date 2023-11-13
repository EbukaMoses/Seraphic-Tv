import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import "./Youtube.css";

const Youtube = ({ embedId }) => (
  <>
    <section className="youtube padding">
      <div className="container grid video-responsive">
        {/* <iframe
          width="453"
          height="380"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        /> */}

        <div>
          <ReactPlayer
            url="https://www.facebook.com/SeraphicFC/videos/978742843456964"
            controls={true}
            loop={true}
            playing={true}
            onReady={true}
            muted={true}
            width="90%"
            height="90%"
          />
        </div>
        <div>
          <ReactPlayer
            url="https://www.facebook.com/SeraphicFC/videos/1966477400378708"
            controls={true}
            loop={true}
            playing={true}
            onReady={true}
            muted={true}
            width="90%"
            height="90%"
          />
        </div>
      </div>
    </section>
  </>
);

Youtube.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default Youtube;
