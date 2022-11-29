import React from 'react'
import "./card.css"

import {Link } from "react-router-dom";





function Cards(props) {

    return(
        <div className="card">
            <div  >
                <img src={props.img} alt="" className="cimg"/>
            </div>
            <div className="cbody">
              <Link to={props.link}>
                <h2 className="ctitle">{props.title}</h2>
              </Link>
                
                
                {/* <ul>
                {/* <ReadMore>

                    {props.desc.map((id,d)=>{
                        return(<li id={d}>{id}</li>)
                    })}
                </ReadMore> */}
                {/* </ul> */} 

                
            </div>
        </div>
    )
}

export default Cards