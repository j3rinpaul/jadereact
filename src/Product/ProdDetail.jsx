import ProductPage from "./ProductPage"
import imgloc from "../assets/img/cbase2.png"
import popupst from "../assets/detail/popupSt.jpg"
import popupc from "../assets/detail/popupc.jpg"
import  popc1 from "../assets/detail/popc.jpg"
import  popc2 from "../assets/detail/popc2.jpg"
import  popc3 from "../assets/detail/popc1.jpg"
import  popc4 from "../assets/detail/popc4.jpg"
import  popc5 from "../assets/detail/popc5.jpg"
import  popst1 from "../assets/detail/popst1.jpg"
import  popst2 from "../assets/detail/popst2.jpg"
import  fpop1 from "../assets/detail/fpop1.jpg"
import  fpop2 from "../assets/detail/fpop2.jpg"
import  fpop3 from "../assets/detail/fpop3.jpg"
import  fpop4 from "../assets/detail/fpop4.jpg"
import  fpop5 from "../assets/detail/fpop5.jpg"

const outFlag = [
    {
        "title": "Product",
        "img1":imgloc,
        "img2":imgloc,
        "img3":imgloc,
        "desc":[["10x10x12303cm"],["samxsamopsxsampda"],['samxsamopsxsampda']]
    }
]
const d_Popup = [
    {
        "title": "PopUp Straight",
        "img1":popupst,
        "img2":popst1,
        "img3":popc2,
        "img4":popc4,
        "img5":popc5,
        "img6":popst2,
        "desc":[["2 x 3"],['3 x 3'],['4 x 3'],["5 x 3"],["6 x 3"]]
    },

    {
        "title": "PopUp Curved",
        "img1":popupc,
        "img2":popc1,
        "img3":popc3,
        "img4":popc2,
        "img5":popc4,
        "img6":popc5,
        "desc":[["Size : 2 x 3  "],['3 x 3'],['4 x 3'],["5 x 3"],["6 x 3"]]
        
    }
]
const f_Popup = [
    {
        "title": "Fabric PopUp",
        "img1":fpop1,
        "img2":fpop2,
        "img3":fpop3,
        "img4":fpop4,
        "img5":fpop5,
        "desc":[["2 x 3"],['3 x 3'],['4 x 3'],["5 x 3"],["6 x 3"]]
    },

]




function Outdoor(){
    return(
        <div>
           {outFlag.map((data,index)=>{
              return(<ProductPage title={data.title} img1={data.img1} img2={data.img2} img3={data.img3} desc={data.desc} />)
            })}
            <br/>
        </div>
      )
}

function Popup(){
    return(
        <div>
           {d_Popup.map((data,index)=>{
              return(<ProductPage title={data.title} img1={data.img1} img2={data.img2} img3={data.img3} img4={data.img4} img5={data.img5} img6={data.img6} desc={data.desc} />)
            })}
            <br/>
        </div>
      )
}
function FPopup(){
    return(
        <div>
           {f_Popup.map((data,index)=>{
              return(<ProductPage title={data.title} img1={data.img1} img2={data.img2} img3={data.img3} img4={data.img4} img5={data.img5} img6={data.img6} desc={data.desc} />)
            })}
            <br/>
        </div>
      )
}

export {Outdoor,Popup,FPopup}