import React from 'react'
import './Home.css'
import About from "../About/About"
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
import qu from "../assets/q.png"
import tb from "../assets/table.jpg"

function Home() {
  return (
    <div className='home'>
      <div className='headin'>
        <h2>JADESIGN ADVERTISING</h2>
        <p>
          <Typewriter
            onInit={(typewriter)=> {
            typewriter
            
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
          <HomeCard img = {card2} title="Display Products" red="/Product" />
          <HomeCard img = {mini} title="Backdrop Stand" red="/Backdrop" />
          <HomeCard img = {card3} title="Outdoor Flags & Bases" red="/Flags" />
          <HomeCard img = {umb} title="Tent & Umbrella's" red="/Umbrella" />
          <HomeCard img = {cardi} title="Advertising Accessories" red="/Advd" />
          <HomeCard img = {qu} title="Q-Stands & Indoor-Flag Poles " red="/Qs" />
          <HomeCard img = {tb} title="Counter & Tables " red="/Counter" />
          <HomeCard img = {car} title="Signage & Printing Services" red="/Printing" />
          <HomeCard img = {promt} title="Promotional & Gifts Items " red="/Promotional" />

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