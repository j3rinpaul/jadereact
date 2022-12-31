import React from 'react'
import "./productPage.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from 'react-bootstrap/Card';
// import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";


// const View = ({image}) =>{
//     return(
//         <div>
//             <Lightbox image={image} />
//         </div>
//     )
// }

function ProductPage(props) {
  return (
    <div className='pro'>
        <div>
          <h2>{props.title}</h2>
        </div>
        <div className='page1'>
          <div className='show1'>
          <Carousel>
                <div className = "sitem">
                  
                    <img src={props.img1} alt=""  /> 
                    {/* <Lightbox image={props.img1} /> */}
                   
                </div>
                <div className = "sitem">
                    <img src={props.img2} alt="" />
                </div>
                <div className = "sitem">
                    <img src={props.img3}  alt=""/>
                </div>
                <div className = "sitem">
                    <img src={props.img4} alt="" />
                </div>
                <div className = "sitem">
                    <img src={props.img5} alt="" />
                </div>
                <div className = "sitem">
                    <img src={props.img6} alt="" />
                </div>
            </Carousel>

          </div>
          
          <div className='items1'>
            <h3>Available Sizes</h3>
            
            <div className='gf'>

              <div className='gfc'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{props.head1}</Card.Title>
                      <Card.Text>
                      <p>{props.text1.map((id,d)=>{
                        return(
                        <li key={d} id={d}>{id}</li>
                        )})}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
              </div>
                

              <div className='gfc' >
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{props.head2}</Card.Title>
                      <Card.Text>
                      <p>{props.text2.map((id,d)=>{
                        return(
                        <li key={d} id={d}>{id}</li>
                        )})}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
              </div>
                

              <div className='gfc'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{props.head3}</Card.Title>
                      <Card.Text>
                      <p>{props.text3.map((id,d)=>{
                        return(
                        <li key={d} id={d}>{id}</li>
                        )})}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
              </div>
                

              <div className='gfc'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{props.head4}</Card.Title>
                      <Card.Text>
                      <p>{props.text4.map((id,d)=>{
                        return(
                        <li key={d} id={d}>{id}</li>
                        )})}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
              </div>

              <div className='gfc'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{props.head5}</Card.Title>
                      <Card.Text>
                      <p>{props.text5.map((id,d)=>{
                        return(
                        <li key={d} id={d}>{id}</li>
                        )})}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
              </div>
                
                
             
                
              <div>
          </div>
          </div>
        </div>
       
          
        </div>
        <div className='deta1'>
          <h2>{props.desc}</h2>
          <p>{props.detail}</p>
        </div>
    </div>
  )
}

export default ProductPage