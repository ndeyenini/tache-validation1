
import React from "react";
import "./home.css";
import video from '../../Assets/ocean_-_65560 (540p).mp4'

export const Hom = () => {
  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type='video/mp4'></video>
      <div className="homeContent container">
      <div className="textDiv" >
        <span className="smallText">
          our Packages
        </span>
        <h1 className="homeTitle">
          Search your Holiday
        </h1>
      </div>
      </div>
    </section>
  );
};


