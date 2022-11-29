const outFlag = [
    {
        "title": "Product",
        "img1":imgloc,
        "img2":imgloc,
        "img3":imgloc,
        "desc":[[desc1],[desc1],[desc1],[desc1]]
    }
]


function Outdoor(){
    return(
        <div>
           {outFlag.map((data,index)=>{
              return(<Cards id={index} img={data.img} title={data.title} desc={data.desc} />)
            })}
            <br/>
        </div>
      )
}