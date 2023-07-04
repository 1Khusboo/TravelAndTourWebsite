import React,{useEffect}from 'react'
import video from "../Assets/video.mp4";
import {FiSend,FiChevronRight} from "react-icons/fi";
import "./Footer.css";
import {MdOutlineTravelExplore} from "react-icons/md";
import {AiFillYoutube,AiFillInstagram} from "react-icons/ai";
import {AiOutlineTwitter} from "react-icons/ai";
import {FaTripadvisor} from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css';
export default function Footer() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);
  return (
    <section className='footer'>

      <div className="videoDiv">
        <video src={video} muted autoPlay loop typeof='video/mp4'></video>
      </div>

      <div className="secContent container" data-aos="fade-up">
        <div className="contactDiv flex" data-aos="fade-up">

          <div className="text" data-aos="fade-up">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input type="text" placeholder='Enter Email Address' />
            <button className='btn flex' type='submit'>SEND
            <FiSend className='icon'/></button>

          </div>
        </div>

        <div className="footerCard flex" data-aos="fade-up">
          <div className="footerIntro flex">

            <div className="logoDiv" data-aos="fade-up">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon'/
                >Travel.
              </a>
            </div>

            <div className="footerParagaraph" data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perspiciatis ipsa eius saepe animi molestias omnis vel. Consectetur recusandae necessitatibus doloribus suscipit nam delectus facilis! Voluptatum, repellat laboriosam. Inventore, perspiciatis!
            </div>

            <div className="footerSocials" data-aos="fade-up">
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>

          </div>

          <div className="footerLinks grid" data-aos="fade-up">
            <div className="linkGroup">
              <span className='groupTitle'>OUR AGENCY</span>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>Services
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>Insurance
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>Agency
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>Tourism
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>Payment
              </li>
            </div>
            <div className="linkGroup">
              <span className='groupTitle'>PARTNERS</span>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>Bookings
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>Rentcars
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>HostelWorld
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>Trivago
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>TripAdvisor
              </li>
            </div>
            <div className="linkGroup">
              <span className='groupTitle'>LAST MINUTE</span>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>London
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>California
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>Indonesia
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>Europe
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex" >
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHT RESERVED -ISTRATECH 2022</small>
          </div>
        </div>
      </div>

    </section>
  )
}
