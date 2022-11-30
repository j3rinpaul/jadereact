import React from 'react'
import "./productPage.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProductPage(props) {
  return (
    <div className='pro'>
        <div>
          <h2>{props.title}</h2>
        </div>
        <div className='page1'>
          <div className='show'>
          <Carousel>
                <div className = "sitem">
                    <img src={props.img1} />  
                </div>
                <div className = "sitem">
                    <img src={props.img2} />
                </div>
                <div className = "sitem">
                    <img src={props.img3} />
                </div>
                <div className = "sitem">
                    <img src={props.img4} />
                </div>
                <div className = "sitem">
                    <img src={props.img5} />
                </div>
                <div className = "sitem">
                    <img src={props.img6} />
                </div>
            </Carousel>

          </div>
          
          <div className='items1'>
            <h3>Available Sizes</h3>
              <p>{props.desc.map((id,d)=>{
                  return(
                    
                    <li id={d}>{id}</li>
                  )
                  })}</p>
              <div>

              </div>
              
          </div>
        </div>
    </div>
  )
}
// image is passed as props
//title is passed as props
//desc is passed as props

export default ProductPage