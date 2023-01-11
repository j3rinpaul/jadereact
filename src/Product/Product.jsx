import React from 'react'
import Cards from "../Cards/Card"
import "./product.css"


import ab from "../assets/A Board/Main picture .PNG"
import easel from "../assets/images/easel.png"
import snap from "../assets/images/snap.png";
import dtape from "../assets/images/dtape.png";
import rdt from "../assets/images/rdtap.png";
import apt from "../assets/images/apt.png";
import vel from "../assets/images/velcro.png";
import wbase from "../assets/images/wbase.png";
import sbase from "../assets/images/sbase.png";
import hwbase from "../assets/images/hwbase.png";
import ScrollTop from './scrollTop';
import bump from "../assets/images/bump.png";
import bboard from "../assets/images/bboard.png";
import cb from "../assets/images/cb.png";
import cutterb from "../assets/images/cutterb.png";
import eye from "../assets/images/eye.png";
import punch from "../assets/images/punch.png";
import eyelet from "../assets/images/eyelet.png";
import jbond from "../assets/images/jbond.png";
import olfac from "../assets/images/olfac.png";
import olfac1 from "../assets/images/olfac1.png";
import olfac2 from "../assets/images/olfac2.png";
import olfac3 from "../assets/images/olfac3.png";
import sb from "../assets/images/sb.png";
import pl1 from "../assets/images/pl1.png";


import adverf from "../assets/images/adverf.png";

//backdrops
import img_pop from "../assets/img/popup.jpg"
import img_xban from "../assets/img/xban.jpg"
import img_rollup from "../assets/img/rollup.jpg"
import img_adjust from "../assets/img/adjust.jpg"
import img_ten from "../assets/img/tension.jpg"
import img_fab from "../assets/img/fabric.jpg"

//outdoor flags
import img_tdrop from "../assets/img/tear.jpg"
import img_curved from "../assets/img/curved.jpg"
import img_lshape from "../assets/img/lshape.jpg"
import img_tele from "../assets/img/tele.jpg"
import img_host from "../assets/img/host.jpg"


//bases
import img_cb from "../assets/img/cbase.png"
import img_cb1 from "../assets/img/cbase2.png"
import img_cb2 from "../assets/img/cbase3.png"

//display 
import img_bstand from "../assets/BroStand/Main picture .JPG"
import img_tstand from "../assets/img/tstand.jpg"
import img_info from "../assets/img/info.jpg"
import img_slim from "../assets/img/slim.jpg"
import img_ruf from "../assets/img/ruf.jpg"
import img_spin from "../assets/img/spin.jpg"
import img_led from "../assets/img/led.jpg"

//umbrella
import img_umb from "../assets/img/umb.jpg"
import img_tent from "../assets/img/tent.jpg"

//qstand
import img_ret  from "../assets/img/ret.jpg"
import img_norm from "../assets/img/norm.jpg"
import img_rope from "../assets/img/rope.jpg"
import img_conf from "../assets/img/conf.jpg"
import img_tabt from "../assets/img/tabt.jpg"

//adv new
import acrysp from "../assets/Advertising accessories_/Acrylic spacer .JPG"
import acrygl from "../assets/Advertising accessories_/Acrylic special glue .jpg"
import arrow from "../assets/Advertising accessories_/Arrow sticker .jpg"
import bubble from "../assets/Advertising accessories_/Bubble wrap .jpg"
import caut from "../assets/Advertising accessories_/Caution board.jpg"
import chp from "../assets/Advertising accessories_/Chrome pipe .JPG"
import eyes from "../assets/Advertising accessories_/Eyelit punching machine small.jpg"
import fish from "../assets/Advertising accessories_/Fish rope.jpg"
import flag from "../assets/Advertising accessories_/Flag weight .jpg"
import magnet from "../assets/Advertising accessories_/Magnetic button.JPG"
import pack from "../assets/Advertising accessories_/Packing tape Papper .jpg"
import ptape from "../assets/Advertising accessories_/Packing tape clear .JPG"
import rgb from "../assets/Advertising accessories_/RGB light .jpg"
import shrin from "../assets/Advertising accessories_/Shring wrap.JPG"
import felt from "../assets/Advertising accessories_/Squeegee felt.jpg"


//digital printing media
import digi1 from "../assets/Digital printing media_/ACP sheet .jpg"
import digi2 from "../assets/Digital printing media_/Acrylic sheet .JPG"
import digi3 from "../assets/Digital printing media_/Art canvas .JPG"
import digi4 from "../assets/Digital printing media_/Backlit flex .jpg"
import digi5 from "../assets/Digital printing media_/Eco solvent Clear vinyl .jpg"
import digi6 from "../assets/Digital printing media_/Foam Board .JPG"
import digi7 from "../assets/Digital printing media_/Forex sheet .JPG"
import digi8 from "../assets/Digital printing media_/Frontlite Banner.JPG"
import digi9 from "../assets/Digital printing media_/Frosted sticker .jpg"
import digi10 from "../assets/Digital printing media_/Greyback vinyl sticker .JPG"
import digi11 from "../assets/Digital printing media_/Lamination sticker .JPG"
import digi12 from "../assets/Digital printing media_/Mounting film .jpg"
import digi13 from "../assets/Digital printing media_/One way vision sticker .jpg"
import digi14 from "../assets/Digital printing media_/PP Papper .JPG"
import digi15 from "../assets/Digital printing media_/White back vinyl sticker .JPG"
import digi16 from "../assets/Digital printing media_/Window film .JPG"

//promotional
import promo from "../assets/Prompt gift items_/3D sign board .JPG"
import promo1 from "../assets/Prompt gift items_/Flex sign board .JPG"
import promo2 from "../assets/Prompt gift items_/Mug printing .jpg"
import promo3 from "../assets/Prompt gift items_/Non woven bag .jpg"
import promo4 from "../assets/Prompt gift items_/T shirt printing .jpg"

//digital printing media
const data_digi = [
  {"title":"ACP sheet ",
    "img":digi1,
    "desc":["3m x 8mm"]
  },
  {"title":"Acrylic sheet",
    "img":digi2,
    "desc":["3m x 8mm"]
  },
  {"title":"Art canvas",
    "img":digi3,
    "desc":["3m x 8mm"]
  },
  {"title":"Backlit flex",
    "img":digi4,
    "desc":["3m x 8mm"]
  },
  {"title":"Eco solvent Clear vinyl",
    "img":digi5,
    "desc":["3m x 8mm"]
  },
  {"title":"Foam Board",
    "img":digi6,
    "desc":["3m x 8mm"]
  },
  {"title":"Forex sheet",
    "img":digi7,
    "desc":["3m x 8mm"]
  },
  {"title":"Frontlite Banner",
    "img":digi8,
    "desc":["3m x 8mm"]
  },
  {"title":"Frosted sticker",
    "img":digi9,
    "desc":["3m x 8mm"]
  },
  {"title":"Lamination sticker",
    "img":digi11,
    "desc":["3m x 8mm"]
  },
  {"title":"Greyback vinyl sticker",
    "img":digi10,
    "desc":["3m x 8mm"]
  },
  {"title":"PP Papper",
    "img":digi14,
    "desc":["3m x 8mm"]
  },
  {"title":"Mounting film",
    "img":digi13,
    "desc":["3m x 8mm"]
  },
  {"title":"Mounting film",
    "img":digi12,
    "desc":["3m x 8mm"]
  },
  {"title":"White back vinyl sticker",
    "img":digi15,
    "desc":["3m x 8mm"]
  },
  {"title":"Window film",
    "img":digi16,
    "desc":["3m x 8mm"]
  },
]


const data_adv = [
  
  
  {"title":"Magnetic Button",
    "img":magnet,
    "desc":["3m x 8mm"]
  },
  {"title":"Flag Weight",
    "img":flag,
    "desc":["3m x 8mm"]
  },
  {"title":"Fish Rope",
    "img":fish,
    "desc":["3m x 8mm"]
  },
  {"title":"Eyelit punching machine small",
    "img":eyes,
    "desc":["3m x 8mm"]
  },
  {"title":"Chrome Pipe",
    "img":chp,
    "desc":["3m x 8mm"]
  },
  {"title":"Caution Board",
    "img":caut,
    "desc":["3m x 8mm"]
  },
  {"title":"Bubble Wrap",
    "img":bubble,
    "desc":["3m x 8mm"]
  },

  {"title":"Bumpon",
    "img":bump,
    "desc":["3m x 8mm"]
  },
 
  {"title":"Blackboard Foil Sticker ",
    "img":bboard,
    "desc":["45cmx15m"]
  },
  {"title":"Chrome Ball",
    "img":cb,
    "desc":[""]
  },
  {"title":"Arrow Sticker",
    "img":arrow,
    "desc":["3m x 8mm"]
  },
  {"title":"Squeegee Felt",
    "img":felt,
    "desc":["3m x 8mm"]
  },
  {"title":"Shring Wrap",
    "img":shrin,
    "desc":["3m x 8mm"]
  },
  {"title":"RGB Light",
    "img":rgb,
    "desc":["3m x 8mm"]
  },
  {"title":"Packing Tape Clear",
    "img":ptape,
    "desc":["3m x 8mm"]
  },
  {"title":"Packing tape Papper",
    "img":pack,
    "desc":["3m x 8mm"]
  },
  {"title":"Cutter Big",
    "img":cutterb,
    "desc":[""]
  },
  
  {"title":"Eyelet HB-250 Gold ",
    "img":eye,
    "desc":["250pcs"]
  },
  {"title":"Eyelet Manual Punch",
    "img":punch,
    "desc":[""]
  },
  {"title":"Eyelet Silver ",
    "img":eyelet,
    "desc":["#24 500pcs/pkr"]
  },
  // {"title":"Fish Rope ",
  //   "img":fish,
  //   "desc":["0.8mm x 100m"]
  // },
  {"title":"J Bond Glue ",
    "img":jbond,
    "desc":["20 g"]
  },
  {"title":"Acrylic Spacer  ",
    "img":acrysp,
  },
  {"title":"Acrylic Spacer Glue ",
    "img":acrygl,
    "desc":["20 g"]
  },
  
  {"title":"Olfa Cutter Black Small ",
    "img":olfac,
    "desc":[" "]
  },
  {"title":"Olfa Cutter Blade ASB-10 Small ",
    "img":olfac1,
    "desc":[" "]
  },
  {"title":"Olfa Cutter Blade LB-10 Big ",
    "img":olfac2,
    "desc":[" "]
  },
  {"title":"Olfa Cutter Stainless Steel Small AB-S ",
    "img":olfac3,
    "desc":[" "]
  },
 
  {"title":"Spray Bottle  ",
    "img":sb,
    "desc":[["2L "],["3L"]]
  },
  
  
  {"title":"Squeegee Felt One Sided",
    "img":pl1,
    "desc":[" "]
  }
  
]

//digital printing media


//display 
const data1 = [
  {"title":"Self Stand Brochure Stand",
    "img":img_bstand,
    "link":"/Broc"
  },
  {"title":"Table Top Brochure Stand",
    "img":img_tstand,
    "link":"/AcryP"
  },
  {"title":"Snap Frame ",
  "img":snap,
  "link":"/SnapF"
},
{"title":"A-Board Stand",
  "img":ab,
  "link":"/Aboard"
},
{"title":"Information Stand",
  "img":img_info,
  "link":"/Info"
},
{"title":"Slim Light Box",
  "img":img_slim,
  "link":"/SlimL"
},
{"title":"Ruffle Box",
  "img":img_ruf,
  "desc":["Size : A4 , A3"]
},
{"title":"Spin Wheel",
  "img":img_spin,
  "desc":["Size : A4 , A3"]
},
{"title":"Running LED",
  "img":img_led,
  "desc":["Size : A4 , A3"]
},
{"title":"Easel Stand",
  "img":easel,
  "desc":["Size : A2 , A1 , A0"]
}
 
]

const data_t = [
  {"title":"Double sided Foam tape",
    "img":dtape,
    "desc":["24x30m,25x50m"]
  },
  {"title":"Double Sided Red Tape",
    "img":rdt,
    "desc":["9mmx50m,12mmX50m,18mmX50m,25mmX50m,50mmX50m"]
  },
  {"title":"Application tape",
    "img":apt,
    "desc":[""]
  },
  {"title":"Velcro",  
    "img":vel,
    "desc":[""]
  },
]

//umbrella
const data_U = [
  {"title":"Umbrella  ",
    "img":img_umb,
    "desc":["Custom Made"]
  },
  
  {"title":"Tent  ",
    "img":img_tent,
    "desc":["Custom Made"]
  }
  
]

//backdrops
const data_b = [
  
  {"title":"Pop Up Stand",
    "img":img_pop,
    "link":"/Popup"
  },
  {"title":"Fabric Popup Stand",
    "img":img_fab,
    "link":"/FPopup"
  },
  {"title":" Rollup Stand",
    "img":img_rollup,
    "link":"/RPopup"
  },
  
  {"title":"Adjustable Backdrop Stand",
    "img":img_adjust,
    "link":"/aPopup"
  },
  {"title":"Tension Fabric Stand",
    "img":img_ten,
    "link":"/TPopup"
  },
  {"title":"X-Banner Stand",
  "img":img_xban,
  "link":"/XPopup"
  },
 
]

//flags
const data_f = [
  {"title":"Curved Top Flag / Feather Flag",
    "img":img_curved,
    "link":"/Cflag"
    //link to detailed page 
  },
  {"title":"TearDrop Flag / Flying Banner",
  "img":img_tdrop,
  "link":"/TearDflag"
  },
  {"title":"L-Shape Flag / Square Flag",
    "img":img_lshape,
    "link":"/Lflag"
  },
  {"title":"Telescopic Flag Pole",
    "img":img_tele,
    "link":"/Teleflag"
  },
  {"title":"Hoisting Flag Pole",
    "img":img_host,
    "desc":["Small : 90 x 200 cm","Medium : 100 x 500 cm","Large : 100 x 600 cm"]
  },
  {"title":"Advertising Flag Pole ",
  "img":adverf,
  },
  

]

//bases
const data_fb = [
  
  {"title":"Water Base 20L (43x43x12cm)",
    "img":wbase,
    "desc":[""]
  },
  {"title":"Heavy Water Base 32 L (50diax12cm)",
    "img":hwbase,
    "desc":[""]
  },
  {"title":"Spider Leg Base",
    "img":sbase,
  },
  {"title":"Cement Base 30Kg (40x40x10cm)",
    "img":img_cb,
    "desc":[""]
  }
  ,
  {"title":"Cement Base 45Kg (50diax10cm)",
    "img":img_cb2,
    "desc":[""]
  },
  {"title":"Cement Base 80Kg",
    "img":img_cb1,
    "desc":[""]
  }
]

//qstand

const data_q = [
  {"title":"Retractable Q Stand",
    "img":img_ret,
    "link":"/QRect"
  },
  {"title":"Normal Q Stand",
    "img":img_norm,
    "link":"/Nqu"
  },
  {"title":" Q Stand Rope",
    "img":img_rope,
    "link":"/QRope"
  },
  {"title":"Table Top Flag Stand",
    "img":img_tabt,
    "link":"/Qtt"
  },
  {"title":"Conference Flag Pole",
    "img":img_conf,
    "link":"/QStan"
  }
]

//promotion

const data_p = [
  {"title":"3D Sign Board",
    "img":promo,

  },
  {"title":"Flex Sign Board",
    "img":promo1,
    
  },
  {"title":" Mug Printing",
    "img":promo2,
    
  },
  {"title":"Non Woven Bag",
    "img":promo3,
    
  },
  {"title":"T Shirt Printing",
    "img":promo4,
    
  }
]




function Flags(){
  return(
    <div>
      <div className='uk'>
        <h2>Flags</h2>
      </div>
      <div className='wrapper1' >
      {data_f.map((data,index)=>{
        return(<Cards id={index} img={data.img} link = {data.link}title={data.title}  />)
      })}
      </div>

      <div className='uk'>
      <h2>Flag Base</h2>
      </div>
       <div className='wrapper1' >
       {data_fb.map((data,index)=>{
          return(<Cards id={index} img={data.img} title={data.title} desc={data.desc} />)
        })}
       </div>
        <ScrollTop/>
    </div>
  )
}

function Backdrop(){
  return(
    <div>
      <div className='uk'>
      <h2>Backdrops</h2>
      </div>
       <div className='wrapper1' >
       {data_b.map((data,index)=>{
          return(<Cards id={index} img={data.img} title={data.title} link={data.link} />)
        })}
       </div>
      
        <ScrollTop/>

    </div>
  )
}

function Product() {

  return (
    <div  >
      

      <div className='uk'>
        <h2>Display Products</h2>
        </div>
        <div className='wrapper1' >
        {data1.map((data,index)=>{
            return(<Cards id={index} img={data.img} link={data.link} title={data.title} desc={data.desc} />)
          })}
       </div>
        <ScrollTop/>
    </div>
  )
}


function Advsidplay(){
  return(
    <div>
      

       <div className='uk'>
      <h2>Adversting Accessiories</h2>
      </div>
       <div className='wrapper1' >
       {data_adv.map((data,index)=>{
          return(<Cards id={index} img={data.img} title={data.title} desc={data.desc} />)
        })}
       </div>


       <div className='uk'>
      <h2>Application Tapes</h2>
      </div>
       <div className='wrapper1' >
       {data_t.map((data,index)=>{
          return(<Cards id={index} img={data.img} title={data.title} desc={data.desc} />)
        })}

       </div>
        <ScrollTop/>

        
    </div>
  )
}

function Umbrella(){
  return(
    <div>
      <div className='uk'>
      <h2>Tent & Umbrella's</h2>
      </div>
       <div className='wrapper1' >
       {data_U.map((data,index)=>{
          return(<Cards id={index} img={data.img} title={data.title} desc={data.desc} />)
        })}
       </div>
    </div>
  )
}

function Qstand(){
  return(
    <div>
      <div className='uk'>
      <h2>Q-Stand & Indoor-Flag Poles</h2>
      </div>
       <div className='wrapper1' >
       {data_q.map((data,index)=>{
          return(<Cards id={index} img={data.img} title={data.title} link={data.link} />)
        })}
       </div>
    </div>
  )

}

function DigitalPrint(){
  return(
    <div>
      <div className='uk'>
      <h2>Digital printing Media</h2>
      </div>
       <div className='wrapper1' >
       {data_digi.map((data,index)=>{
          return(<Cards id={index} img={data.img} title={data.title} link={data.link} />)
        })}
       </div>
    </div>
  )
}

function Printing(){
  return(
    <div>
      COunter
    </div>
  )
}
function Promotional(){
  return(
    <div>
      <div className='uk'>
      <h2>Digital printing Media</h2>
      </div>
       <div className='wrapper1' >
       {data_p.map((data,index)=>{
          return(<Cards id={index} img={data.img} title={data.title} link={data.link} />)
        })}
       </div>
    </div>
  )
}



export {Product,Flags,Backdrop,Advsidplay,Umbrella,Qstand,DigitalPrint,Printing,Promotional}