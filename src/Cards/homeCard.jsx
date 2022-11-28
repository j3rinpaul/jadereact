import React from 'react'
import './card.css'
import {Link} from 'react-router-dom'

function HomeCard(props) {
    
  return (
            <div className="hcard">
                <div >
                    <img src={props.img} onClick={()=>props.red} alt="" className="hcimg"/>
                </div>
                <div className="hcbody">
                <Link to={props.red} >
                    <h2 className="hctitle">{props.title}</h2>
                </Link>
               
                </div>
            </div>
        )
    }
    


export default HomeCard