
import React, { useEffect } from "react";
import "./footer.scss";
import {FiSend}  from 'react-icons/fi'
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiChevronLeft } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

import video2 from "../../Assets/lamb_-_120739 (540p).mp4";

export const Foote = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>
      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div data-aos='fade-up' className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div data-aos='fade-up' className='inputDiv flex'>
            <input type='text' placeholder='Entre Email Address' />
            <button data-aos='fade-up' className='btn flex' type='submit'>
              SEND
              <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro  flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
                <MdTravelExplore className='icon' />
                Travel.
              </a>
            </div>
            <div data-aos='fade-up' className='footerParagraph'>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un imprimeur anonyme assembla ensemble des morceaux de texte
              pour réaliser un livre spécimen de polices de texte.
            </div>

            <div data-aos='fade-up' className='footerSocials flex'>
              <AiOutlineTwitter className='icon' />
              <AiOutlineYoutube className='icon' />
              <AiOutlineInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>
          <div className='footerLinks grid'>
            {/*jfddf*/}
            <div
              data-aos='fade-up'
              data-aos-duration='4000'
              className='linkGroup'
            >
              <span className='groupTitle'>OUR AGENCY</span>

              <li className='footerList flex'>
                <FiChevronLeft className='icon' />
                Services
              </li>
              <li className='footerList flex'>
                <FiChevronLeft className='icon' />
                Insurance
              </li>
              <li className='footerList flex'>
                <FiChevronLeft className='icon' />
                Agency
              </li>
              <li className='footerList flex'>
                <FiChevronLeft className='icon' />
                Tourism
              </li>
              <li className='footerList flex'>
                <FiChevronLeft className='icon' />
                Paynent
              </li>
            </div>
            {/*group two*/}
            <div
              data-aos='fade-up'
              data-aos-duration='4000'
              className='linkGroup'
            >
              <span className='groupTitle'>PARTNERS</span>

              <li className='footerList flex'>
                <FiChevronLeft className='icon' />
                Bookings
              </li>
              <li className='footerList flex'>
                <FiChevronLeft className='icon' />
                Rentcars
              </li>
              <li className='footerList flex'>
                <FiChevronLeft className='icon' />
                Hostelworld
              </li>
              <li className='footerList flex'>
                <FiChevronLeft className='icon' />
                Trivago
              </li>
              <li className='footerList flex'>
                <FiChevronLeft className='icon' />
                TripAdvisor
              </li>
            </div>

            {/*group tree*/}
            <div
              data-aos='fade-up'
              data-aos-duration='4000'
              className='linkGroup'
            >
              <span className='groupTitle'>LAST MINUTE</span>

              <li className='footerList flex'>
                <FiChevronLeft className='icon' />
                London
              </li>
              <li className='footerList flex'>
                <FiChevronLeft className='icon' />
                Californta
              </li>
              <li className='footerList flex'>
                <FiChevronLeft className='icon' />
                Indonesia
              </li>
              <li className='footerList flex'>
                <FiChevronLeft className='icon' />
                Europe
              </li>
              <li className='footerList flex'>
                <FiChevronLeft className='icon' />
                Oceania
              </li>
            </div>
          </div>
          <div className='footerDiv flex'>
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRTGHTS RESFRVED ISTRATECH 2022</small>
          </div>
        </div>
      </div>
    </section>
  );
};

