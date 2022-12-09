import React from 'react'
import "./productPage.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from 'react-bootstrap/Card';




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
            
            <div className='gf'>

              <div className='gfc'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{props.head1}</Card.Title>
                      <Card.Text>
                      <p>{props.text1.map((id,d)=>{
                        return(
                        <li id={d}>{id}</li>
                        )})}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
              </div>
                

              <div className='gfc'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{props.head2}</Card.Title>
                      <Card.Text>
                      <p>{props.text2.map((id,d)=>{
                        return(
                        <li id={d}>{id}</li>
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
                        <li id={d}>{id}</li>
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
                        <li id={d}>{id}</li>
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
                        <li id={d}>{id}</li>
                        )})}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
              </div>
                
                
             
                
              <div>
          </div>
          </div>
        </div>
          <p>{props.detail}</p>
        </div>
    </div>
  )
}

export default ProductPage