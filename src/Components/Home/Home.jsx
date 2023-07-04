import React,{useEffect} from 'react';
import "./Home.css";
import video from "../Assets/video.mp4";
import {GrLocation} from "react-icons/gr";
import {HiFilter} from "react-icons/hi";
import {AiOutlineInstagram} from "react-icons/ai";
import {TbApps} from "react-icons/tb";
import {FiFacebook} from "react-icons/fi";
import {BsListTask} from 'react-icons/bs';
import {FaTripadvisor} from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css';
export default function Home() {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);
  return (
    <section className='home'>

      <div className="overlay"></div>

      <video src={video} typeof='video/mp4' muted autoPlay loop></video>

      <div className='homeContent container'>
        <div className='textDiv'>
          <span className='smallText' data-aos="fade-up">Our Packages</span>
          <h1 className='homeTitle' data-aos="fade-up">Search your Holiday</h1>
        </div>
        <div className="cardDiv" data-aos="fade-up">
          <div className="destinationInput">
            <label htmlFor="city">Search your Destination</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here...'/>
              <GrLocation className='icon'/>

            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select you date</label>
            <div className="input flex">
              <input type="date" placeholder='Enter name here...'/>
            </div>
          </div>

          <div className="priceInput">
           
            <div className="label_total flex">
              <label htmlFor="price">Max Price:</label>
              <h3 className='total'>$5000</h3>
              
            </div>
            <div className="input flex">
                <input type="range" max="5000" min="1000"/>
              </div>
          </div>
          <div className="searchOption flex">
            <HiFilter className="icon"/>
            <span>MORE FILTERS</span>
          </div>
        </div>
        <div className="homeFooterIcons flex" data-aos="fade-up">
          <div className="rightIcons">
          <FiFacebook className="icon"/>
          <AiOutlineInstagram className='icon'/>
          <FaTripadvisor className='icon'/>
          </div>
          <div className="leftIcons">
            <BsListTask className='icon'/>
            <TbApps className='icon'/>
          </div>

        </div>
      </div>
    </section>
  )
}
