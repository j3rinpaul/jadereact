import React from 'react'
import './Home.css'
import Typewriter from "typewriter-effect";
import HomeCard from '../Cards/homeCard'
import cardi from "../assets/PP_Paper.png"
import {Link} from "react-router-dom"
import card2 from "../assets/ECO-LITE-Folding-A-Frame-Sign-Board-A1-Track-Trace-Social-Distance-Signs.jpg-11.png"
import Slide from './Slide';
import card3 from "../assets/flag.png"
import mini from "../assets/minirollup.png"
import umb from "../assets/umb1.png"
import Wa from './wa';
import car from "../assets/cards.png"
import promt from "../assets/promt.png"

function Home() {
  return (
    <div className='home'>
      <div className='headin'>
        <h2>JADESIGN ADVERTISING</h2>
        <p>
          <Typewriter
            onInit={(typewriter)=> {
            typewriter
            .typeString("Future of Advertising ")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Display Products")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Digital Printing Media")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Flags")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Backdrops")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Tents and Umbrella's")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Printing and Promotional Gifts")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Future of Advertising")
            .start();
            }}
          />
        </p>

      </div>
      <div className='slides'>
            <Slide/>
        </div>
      <div className='link'>
        <Link className='link1' to='/'><h2>PRODUCTS</h2></Link>
        
        
        <div className='wrapper'>
          <HomeCard img = {cardi} title="Advertising Accessories" red="/Advd" />
          <HomeCard img = {card2} title="Display Products" red="/Product" />
          <HomeCard img = {card3} title="Flags & Bases" red="/Flags" />
          {/* <HomeCard img = {mini} title="" red="/Backdrop" /> */}
          <HomeCard img = {mini} title="Backdrops & Accessories" red="/Backdrop" />
          <HomeCard img = {car} title="Printing Services" red="/Umbrella" />
          <HomeCard img = {umb} title="Tent & Umbrella's" red="/Umbrella" />
          <HomeCard img = {promt} title="Promotional & Gifts Items " red="/Umbrella" />

        </div>
      </div>

      <Wa/>
      {/* <div className='more'>
        <Link to="/Product">{more}</Link>
      </div> */}
      
       

    </div>
  )
}

export default Home