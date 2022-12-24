import React from 'react'
import "./card.css"
import {Link } from "react-router-dom";
import { useState } from 'react';





function Cards(props) {
    const [cardState,setState] = useState(false)

    const handleClick = () =>{
        setState(!cardState)
        console.log("clicked")
    }
    return(
        <div className="card">
            <div className='cing' >
                <img src={props.img} alt="" onClick={handleClick} className="cimg"/>
                {/* {cardState && (
                    <dialog
                        className="dialog"
                        style={{ position: "absolute" }}
                        open
                        onClick={handleClick}
                    >
                        <img
                        className="cimg"
                        src={props.img}
                        onClick={handleClick}
                        
                        />
                    </dialog>
                    )} */}
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