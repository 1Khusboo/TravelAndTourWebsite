import React, { useState } from 'react';
import "./Navbar.css";
import {MdOutlineTravelExplore} from "react-icons/md";
import {AiFillCloseCircle} from "react-icons/ai";
import {PiDotsNineBold} from "react-icons/pi";
export default function Navbar() {
  const[active,setActive]= useState('navBar');

  const showNav=()=>{
    setActive('navBar activeNavbar');
  }
  const removeNav=()=>{
    setActive('navBar');
  }
  return (
    <section className='NavbarSection'>

      <header className='header flex'>

        <div className='logoDiv'>
          <a href="#" className="logo flex">
            <h1><MdOutlineTravelExplore className='icon'/>Travel.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'><a href="#">Home</a></li>
            <li className='navItem'><a href="#">Packages</a></li>
            <li className='navItem'><a href="#">Shop</a></li>
            <li className='navItem'><a href="#">About</a></li>
            <li className='navItem'><a href="#">Pages</a></li>
            <li className='navItem'><a href="#">News</a></li>
            <li className='navItem'><a href="#">Contact</a></li>
            
            <button className='btn'>
              <a href='#'>BOOK NOW</a>
            </button>
          </ul>
          <div className="closeNavbar" onClick={removeNav}>
            <AiFillCloseCircle className='icon'/>
            
          </div>
        </div>

        <div className="toggleNavbar" onClick={showNav}>
        <PiDotsNineBold className='icon'/>
        </div>

      </header>

    </section>
  )
}
