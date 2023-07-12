
import React, { useEffect } from "react";
import "./main.scss";
import {HiOutlineLocationMarker} from 'react-icons/hi'
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";
import img from '../../Assets/img1.jpeg'
import img2 from "../../Assets/img2.webp";
import img3 from "../../Assets/img3.jpeg";
import img4 from "../../Assets/img4.jpeg";
import img5 from "../../Assets/img5.jpeg";
import img6 from "../../Assets/img6.jpeg";
import img7 from "../../Assets/img7.jpeg";
import img8 from "../../Assets/img8.jpeg";
import img9 from "../../Assets/img9.jpeg";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destination in the world. this place is known for its luxurious stays and adventurous activitie",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destination in the world. this place is known for its luxurious stays and adventurous activitie",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destination in the world. this place is known for its luxurious stays and adventurous activitie",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destination in the world. this place is known for its luxurious stays and adventurous activitie",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destination in the world. this place is known for its luxurious stays and adventurous activitie",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destination in the world. this place is known for its luxurious stays and adventurous activitie",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destination in the world. this place is known for its luxurious stays and adventurous activitie",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destination in the world. this place is known for its luxurious stays and adventurous activitie",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destination in the world. this place is known for its luxurious stays and adventurous activitie",
  },
];
export const Maine = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 data-aos='fade-right' className='title'>
          Most visited destination
        </h3>
      </div>

      <div className='secContent grid'>
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos='fade-up' className='singleDestination'>
                <div className='imageDiv'>
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className='cardInfo'>
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon' />
                    <span className='name'>{location}</span>
                  </span>
                  <div className='fees flex'>
                    <div className='grade'>
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className='price'>
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className='desc'>
                    <p>{description}</p>
                  </div>
                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon' />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

