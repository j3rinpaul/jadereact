import React from 'react'
import './card.css'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import Popover from '@mui/material/Popover';

function HomeCard(props) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  return (
            <div className="hcard">
                <div >
                    <img src={props.img} onClick={handleClick} alt="" className="hcimg"/>
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
                <div className="hcbody">
                <Link to={props.red} >
                    <h2 className="hctitle">{props.title}</h2>
                </Link>
               
                </div>
            </div>
        )
    }
    


export default HomeCard