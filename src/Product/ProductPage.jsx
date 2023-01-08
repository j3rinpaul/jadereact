import React from 'react'
import "./productPage.css"
// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card } from 'react-bootstrap';
import Image from './image';



// const View = ({image}) =>{
//     return(
//         <div>
//             <Lightbox image={image} />
//         </div>
//     )
// }

function ProductPage(props) {
  return (
    <div className='newsl'>
        <div className='img2' >
          <Image image={props.image} />
        </div>
        <div className='img3'>
          <h2>soon</h2>
        </div>

          <div className='details1'>
            <div className='details2'>
              <h2>{props.title}</h2>
            </div>
            <div className='detailcard'>
              {/* {
                //detail is an array containing head and text
                props.details.map((detail, it) => (
                  //{head:"",text:[]  }
                  <div className='gfc' key={it}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title>{detail.head}</Card.Title>
                        <Card.Text>
                        <p>{detail.text.map((id,d)=>{
                          return(
                            <li key={d} id={d}>{id}</li>
                          )})}</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </div>

                ))
              } */}
              

            </div>
          <div>

      </div>

          </div>
         
       
    </div>
  )
}

export default ProductPage



   {/* <div className='show1'>
          <Carousel>
                <div className = "sitem">
                  
                    <img src={props.img1} alt=""  /> 
          
                   
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

          </div> */}
{/*           
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
        <div className='deta1'>
          <h2>{props.desc}</h2>
          <p>{props.detail}</p>
        </div> */}