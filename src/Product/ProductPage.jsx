import React from 'react'

function ProductPage(props) {
  return (
    <div className=''>
        <div>
          <h2>{props.title}</h2>
        </div>
        
        <div>
            <img src={props.img} alt="" />
        </div>
        
        <div>
            <p>{props.desc.map((id,d)=>{
                return(<li id={d}>{id}</li>)
                })}</p>
        </div>
    </div>
  )
}
// image is passed as props
//title is passed as props
//desc is passed as props

export default ProductPage