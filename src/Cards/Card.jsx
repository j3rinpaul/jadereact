import React from 'react'
import "./card.css"
import {Link } from "react-router-dom";
import { useState } from 'react';
import Popover from '@mui/material/Popover';





function Cards(props) {
    // const [cardState,setState] = useState(false)

    // const handleClick = () =>{
    //     setState(!cardState)
    //     console.log("clicked")
    // }
    const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    return(
        <div className="card">
            <div className='cing' >
                <img src={props.img} alt="" onClick={handleClick}  className="cimg"/>
                
            </div>
            <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
      >
        <img style={{"width":"90%"}} src={props.img} alt="" />
      </Popover>
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
            {/* {cardState && (
                    <dialog
                        className="dialog"
                        style={{ position: "absolute" }}
                        open
                        onClick={handleClick}
                    >
                        <img
                        className="cimg-zoom"
                        src={props.img}
                        onClick={handleClick}
                        alt=" "
                        />
                    </dialog>
                    )} */}
        </div>
    )
}



export default Cards