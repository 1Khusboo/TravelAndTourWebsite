import React,{useEffect}from 'react'
import "./Main.css";
import {Data} from "./Data";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {BsClipboardCheck} from "react-icons/bs";
import Aos from "aos";
import 'aos/dist/aos.css';
export default function Main() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);
  return (
    <section className='main container section'>

      <div className='secTitle'>
        <h3 className='title' data-aos="fade-up">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map((i)=>{
          return(
            <div className="singleDestination" key={i.id} data-aos="fade-up">

              <div className='imageDiv'>
                <img src={i.imageSrc} alt="" />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{i.descTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{i.location}</span>
                  </span>
                </div>

                <div className="fees flex">
                  <div className="grade">
                    <span>{i.grade}<small>+1 </small></span>
                  </div>
                  <div className="price"><h5>{i.fees}</h5></div>
                </div>

                <div className="desc">
                  <p>{i.description}</p>
                </div>

                <button className='btn flex'>
                  DETAILS <BsClipboardCheck className='icon'/>
                </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
