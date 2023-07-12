import React,{useState} from 'react'
import './navbar.scss'
// import Header from "react-bootstrap"
import {MdOutlineTravelExplore} from 'react-icons/md'
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

export  const Navbare = () => {

  const [active, setActive] = useState('navBar')
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }
  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href='#' className='logo flex'>
            <h1>
              <MdOutlineTravelExplore className='icon' />
              Travel.
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href='#' className='navlink'>
                Home
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navlink'>
                Packages
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navlink'>
                Shop
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navlink'>
                About
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navlink'>
                Pages
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navlink'>
                News
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navlink'>
                Contact
              </a>
            </li>
            <button type='button' className='btn'>
              <a href='#'>BOOK NOW</a>
            </button>
          </ul>
          <div onClick={removeNavbar} className='closeNavbar'>
            <AiFillCloseCircle className='icon' />
          </div>
        </div>
        <div onClick={showNav} className='toggleNavbar'>
          <TbGridDots />
        </div>
      </header>
    </section>
  );
}

// ex
