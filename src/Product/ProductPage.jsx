import React from 'react'
import "./productPage.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card } from 'react-bootstrap';
import Image from './image';
import "react-responsive-carousel/lib/styles/carousel.min.css";




// const View = ({image}) =>{
//     return(
//         <div>
//             <Lightbox image={image} />
//         </div>
//     )
// }

function ProductPage(props) {
  const details  = props.details;
  console.log(details);
  return (
    <div>
      <div className='details2'>
              <h2>{props.title}</h2>
        </div>
    <div className='newsl'>
      <div className='felxin'>
        <div className='img2' >
          <Image image={props.image} />
        </div>
        <div class="carousel-wrapper" id="img3">
          <Carousel>
                    {props.image.map((image, i) => {
                        return(
                              <div key={i} className = "sitem">
                                <img src={image} alt="image1" />
                              </div>
                          )
                        })}
                    </Carousel>
          
        </div>
      </div>

          <div className='felxin'>
            
            <div className='detailcard'>
            <div>
            <h3>Available Sizes</h3>
            <div className='idcard'>

            {props.details.map(desc=>{
              console.log(props.details)
              return(
                  <div className='gfc'>
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>{desc.head}</Card.Title>
                          <Card.Text>
                          <p>{desc.text.map((id,d)=>{
                            return(
                            <li key={d} id={d}>{id}</li>
                            )})}</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                  </div>)
          })}
            </div>
      </div>

            </div>
          <div>

      </div>

          </div>
         
       
    </div>
    <div className='descr'>
          <h2>{props.desc}</h2>
          <p>{props.detail}</p>
         </div>
    </div>
  )
}

export default ProductPage


