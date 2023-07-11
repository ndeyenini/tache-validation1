/** @format */

import React from "react";
import "./home.scss";
import video from "../../Assets/ocean_-_65560 (540p).mp4";
import  {GrLocation}  from "react-icons/gr";

export const Hom = () => {
  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type='video/mp4'></video>
      <div className='homeContent container'>
        <div className='textDiv'>
          <span className='smallText'>our Packages</span>
          <h1 className='homeTitle'>Search your Holiday</h1>
        </div>
        <div className='cardDiv grid'>
          <div className='destinationInput'>
            <label htmlFor='city'>Search your destination</label>
            <div className='input flex'>
              <input type='text' placeholder='entre name here...' />
              <GrLocation className='icon' />
            </div>
          </div>
          <div className='dateInput'>
            <label htmlFor='date'>Select your date:</label>
            <div className='input flex'>
              <input type='date' />
              <GrLocation className='icon' />
            </div>
          </div>
          <div className='priceInput'>
           <div className="label_total flex">
            <label htmlFor="price">Max price:</label>
            <h3 className="total">$5000</h3>
           </div>
           <div className="input flex">
            <input type="range" max="5000" min="1000" />
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};
