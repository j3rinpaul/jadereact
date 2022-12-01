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
              {/* <p>{props.desc.map((id,d)=>{
                  return(
                    
                    <li id={d}>{id}</li>
                  )
                  })}</p> */}

              {/* <h4>{props.head1}</h4>
              <p>{props.text1}</p>
              <h4>{props.head2}</h4>
              <p>{props.text2}</p>
              <h4>{props.head3}</h4>
              <p>{props.text3}</p>
              <h4>{props.head4}</h4>
              <p>{props.text4}</p> */}
              <div>

              </div>
              
          </div>
          <p>{props.detail}</p>
        </div>
    </div>
  )
}

export default ProductPage