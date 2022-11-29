import React from 'react'
import Cards from "../Cards/Card"
import "./product.css"

import tdrop from "../assets/images/teardrop.png"
import pop2 from "../assets/images/PopUpCurved.png"

import adver from "../assets/images/adver.png"
import tent from "../assets/images/tent.png"
import curve from "../assets/images/curved.png"

import info from "../assets/images/info.png"
import ab from "../assets/images/ECO-LITE-Folding-A-Frame-Sign-Board-A1-Track-Trace-Social-Distance-Signs.jpg-1.png"
import easel from "../assets/images/easel.png"
import prom from "../assets/images/promo.png"
import acb from "../assets/images/acrylicb.png";
import bh from "../assets/images/broh.png";
import arrow1 from "../assets/images/arrow1.png";
import chrome from "../assets/images/chrome.png";
import leds from "../assets/images/ledstr.png";
import trans from "../assets/images/trans.png";
import snap from "../assets/images/snap.png";
import ft from "../assets/images/ftoilet.png";
import dtape from "../assets/images/dtape.png";
import rdt from "../assets/images/rdtap.png";
import apt from "../assets/images/apt.png";
import pt from "../assets/images/pt.png";
import vel from "../assets/images/velcro.png";
import knit from "../assets/images/knit.png";
import sat from "../assets/images/sat.png";
import ttg from "../assets/images/ttg.png";
import tts from "../assets/images/tts.png";
import ttl from "../assets/images/ttl.png";
import ttv from "../assets/images/ttv.png";
import wbase from "../assets/images/wbase.png";
import sbase from "../assets/images/sbase.png";
import hwbase from "../assets/images/hwbase.png";
import ScrollTop from './scrollTop';
import bump from "../assets/images/bump.png";
import glue from "../assets/images/glue.png";
import bboard from "../assets/images/bboard.png";
import cb from "../assets/images/cb.png";
import cutterb from "../assets/images/cutterb.png";
import ecoi from "../assets/images/ecoink.png";
import eye from "../assets/images/eye.png";
import punch from "../assets/images/punch.png";
import eyelet from "../assets/images/eyelet.png";
import fish from "../assets/images/fish.png";
import jbond from "../assets/images/jbond.png";
import olfac from "../assets/images/olfac.png";
import olfac1 from "../assets/images/olfac1.png";
import olfac2 from "../assets/images/olfac2.png";
import olfac3 from "../assets/images/olfac3.png";
import popli from "../assets/images/popli.png";
import sb from "../assets/images/sb.png";
import pl from "../assets/images/pl.png";
import pl1 from "../assets/images/pl1.png";
import heavy from "../assets/images/heavyb.jpg";
import uumb from "../assets/images/umb.png";
import uumb1 from "../assets/images/umb4.png";
import uumb2 from "../assets/images/umb2.png";
import uumb3 from "../assets/images/umb5.jpg";
import uumb4 from "../assets/images/umb6.png";
import tent2 from "../assets/images/tent1.jpg";
import umb7 from "../assets/images/umb7.jpg";
import umb8 from "../assets/images/umb8.jpg";
import adverf from "../assets/images/adverf.png";

import img_pop from "../assets/img/popup.jpg"
import img_xban from "../assets/img/xban.jpg"
import img_rollup from "../assets/img/rollup.jpg"
import img_adjust from "../assets/img/adjust.jpg"
import img_ten from "../assets/img/tension.jpg"
import img_fab from "../assets/img/fabric.jpg"

import img_tdrop from "../assets/img/tear.jpg"
import img_curved from "../assets/img/curved.jpg"
import img_lshape from "../assets/img/lshape.jpg"
import img_tele from "../assets/img/tele.jpg"

const data1 = [
  {"title":"Brochure Stand",
    "img":acb,
    "desc":[" "]
  },

  
  {"title":"Arrow Sticker Flurecent Reflective ",
    "img":arrow1,
    "desc":["5x90 cm "]
  },
  {"title":"Chrome Pipe ",
    "img":chrome,
    "desc":[" 24mm X 3m "]
  },
 
 
  {"title":"Neotec Rainproof Transformer ",
    "img":trans,
    "desc":["12v-400w "]
  },
  {"title":"Snap Frame ",
    "img":snap,
    "desc":["32mm Round Corner A3"]
  },
  {"title":"Acrylic Brochure Holder L Type",
    "img":bh,
    "desc":[" "]
  },
  {"title":"Jade Light 5050 Led Strip White",
    "img":leds,
    "desc":[" "]
  },
  {"title":"Sign Boards and Signs ",
    "img":ft,
    "desc":["20x10 cm "]
  },
 
  {"title":"A-Board Stand",
    "img":ab,
    "desc":["Size : 100 x 70 cm , A2 , A1"]
  },
  {"title":"Info Board Stand",
    "img":info,
    "desc":["Size : A4 , A3"]
  },
  // {"title":"Easel Stand Table Top 40 cm",
  //   "img":easel,
  //   "desc":["Size : A2 , A1 , A0"]
  // }
  // ,
  // {"title":"Easel Stand Table Top 30 cm",
  //   "img":easel,
  //   "desc":["Size : A2 , A1 , A0"]
  // }
  // ,
  {"title":"Easel Stand",
    "img":easel,
    "desc":["Size : A2 , A1 , A0"]
  }
  ,
 
  // {"title":"3x3 Tent",
  //   "img":tent,
  //   "desc":["Small : 90 x 200 cm","Medium : 100 x 500 cm","Large : 100 x 600 cm"]
  // },
  {"title":"Promotional Table",
    "img":prom,
    "desc":["Size : 85 x 82 x 41 cm"]
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
  {"title":"Packing tape",
    "img":pt,
    "desc":[""]
  },
  {"title":"Velcro",  
    "img":vel,
    "desc":[""]
  },
]
const data_U = [
  {"title":"Umbrella 1 ",
    "img":uumb,
    "desc":["Custom Made"]
  },
  {"title":"Umbrella 2 ",
    "img":uumb1,
    "desc":["Custom Made"]
  },
  {"title":"Umbrella 3 ",
    "img":uumb2,
    "desc":["Custom Made"]
  },
  {"title":"Umbrella 4",
    "img":uumb4,
    "desc":["Custom Made"]
  },
  {"title":"Umbrella 5 ",
    "img":uumb3,
    "desc":["Custom Made"]
  },
  {"title":"Tent 1 ",
    "img":tent,
    "desc":["Custom Made"]
  },
  {"title":"Tent 2 ",
    "img":tent2,
    "desc":["Custom Made"]
  },
  {"title":"Umbrella 6 ",
    "img":umb7,
    "desc":["Custom Made"]
  },
  {"title":"Umbrella 7 ",
    "img":umb8,
    "desc":["Custom Made"]
  },
  
]

const data_b = [
  
  {"title":"Pop Up Stand",
    "img":img_pop,
    "desc":[["Curved : 240x240 cm,240x300cm"],["Straight :240x240 cm,240x300cm"]]
  },
  {"title":"Fabric Popup Stand",
    "img":img_fab,
    "desc":["85x200cm,100x200,120x200,150x200"]
  },
  {"title":" Rollup Stand",
    "img":img_rollup,
    "desc":["85x200cm,100x200,120x200,150x200"]
  },
  
  {"title":"Adjustable Backdrop Stand",
    "img":img_adjust,
    "desc":["85x200cm,100x200,120x200,150x200"]
  },
  {"title":"Tension Fabric Stand",
    "img":img_ten,
    "desc":[["Curved : 240x240 cm,240x300cm"],["Straight :240x240 cm,240x300cm"]]
  },
  {"title":"X-Banner Stand",
  "img":img_xban,
  "desc":["Size : 85 x 200 cm , 100 x 200 cm , 120 x 200 cm , 150 x 200 cm , 200 x 200 cm , 240 x 200 cm"]
  },
 
]

const data_f = [
  {"title":"Curved Top Flag / Feather Flag",
    "img":img_curved,
    "desc":["Small : 85 x 200 cm","Medium : 85 x 300 cm","Large : 85 x 400 cm"]
  },
  {"title":"TearDrop Flag / Flying Banner",
  "img":img_tdrop,
  "desc":["Small : 85 x 210 cm","Medium : 110 x 262 cm","Large : 100 x 333 cm"]
  },
  {"title":"L-Shape Flag / Square Flag",
    "img":img_lshape,
    "desc":["Small : 90 x 200 cm","Medium : 90 x 300 cm","Large : 90 x 400 cm"]
  },
  {"title":"Telescopic Flag Pole",
    "img":img_tele,
    "desc":["Small : 90 x 200 cm","Medium : 100 x 500 cm","Large : 100 x 600 cm"]
  },
  {"title":"Hoisting Flag Pole",
    "img":adverf,
    "desc":["Small : 90 x 200 cm","Medium : 100 x 500 cm","Large : 100 x 600 cm"]
  },
  {"title":"Advertising Flag Pole",
  "img":adverf,
  "desc":["Small : 90 x 200 cm","Medium : 100 x 500 cm","Large : 100 x 600 cm"]
  },
  // {"title":"Knitted Polyster Flag",
  //   "img":knit,
  //   "desc":[" "]
  // }
  // ,
  // {"title":"Satin Flag",
  //   "img":sat,
  //   "desc":[" "]
  // }
  // ,
  // {"title":"Table Top Flag Stand Gold ",
  //   "img":ttg,
  //   "desc":["Size : 30 cm"]
  // }
  // ,
  // {"title":"Table Top Flag Stand Silver",
  //   "img":tts,
  //   "desc":["Size : 30cm,35cm"]
  // }
  // ,
  // {"title":"Table Top Flag Stand Silver",
  //   "img":ttl,
  //   "desc":["Size : 30cm,35cm"]
  // }
  // ,
  // {"title":"Table Top Flag Stand Silver",
  //   "img":ttv,
  //   "desc":["Size : 30cm,35cm"]
  // }

]

const data_fb = [
  
  {"title":"Water Base",
    "img":wbase,
    "desc":[""]
  },
  {"title":"Heavy Duty Water Base Synthetic",
    "img":hwbase,
    "desc":[""]
  },
  {"title":"Spider Leg Base",
    "img":sbase,
    "desc":["Load Capacity : 30kg,40kg"]
  },
  {"title":"Heavy Duty Water Base",
    "img":heavy,
    "desc":[""]
  }

]

const data_adv = [
  {"title":"Top Hangers 70cm for Curved Pop Up",
    "img":pop2,
    "desc":[["Curved : 70cm"],["Straight : 75cm"]]
  },
  // {"title":"Top Hanger 75cm for Straight Pop Up",
  //   "img":pops,
  //   "desc":[" "]
  // },
  // {"title":"Top Hanger for Straight Pop Up",
  //   "img":pops3,
  //   "desc":["3x3 5pcs"]
  // },
  {"title":"Bumpon",
    "img":bump,
    "desc":["3m x 8mm"]
  },
  {"title":"Acrylic Special Glue ",
    "img":glue,
    "desc":["1 Ltr"]
  },
  {"title":"Blackboard Foil Sticker ",
    "img":bboard,
    "desc":["45cmx15m"]
  },
  {"title":"Chrome Ball",
    "img":cb,
    "desc":[""]
  },
  {"title":"Cutter Big",
    "img":cutterb,
    "desc":[""]
  },
  {"title":"Eco-Solvent Cleaning Liquid (Flush) ",
    "img":ecoi,
    "desc":["1 Ltr"]
  },
  {"title":"Eyelet HB-250 Gold ",
    "img":eye,
    "desc":["250pcs"]
  },
  {"title":"Eyelet Manual Puch",
    "img":punch,
    "desc":[""]
  },
  {"title":"Eyelet Silver ",
    "img":eyelet,
    "desc":["#24 500pcs/pkr"]
  },
  {"title":"Fish Rope ",
    "img":fish,
    "desc":["0.8mm x 100m"]
  },
  {"title":"J Bond Glue ",
    "img":jbond,
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
  {"title":"Pop Up Light ",
    "img":popli,
    "desc":[" "]
  },
  {"title":"Spray Bottle  ",
    "img":sb,
    "desc":[["2L "],["3L"]]
  },
  // {"title":"Spray Bottle Heavy 3L ",
  //   "img":sb1,
  //   "desc":[" "]
  // },
  {"title":"Squeegee One Side Flat and One Side Plastic ",
    "img":pl,
    "desc":[" "]
  },
  {"title":"Squeegee Felt",
    "img":pl1,
    "desc":[" "]
  }
  
]

// const data = [
//   {"title":"Eco Solvent Vinyl",
//     "img":Eco,
//     "desc":["0.92 x 50m","1.07 x 50m","1.27 x 50m","1.37 x 50m","1.52 x 50 m"]
//   },
//   {"title":"Lamination",
//   "img":plas,
//   "desc": ["0.92 x 50m","1.07 x 50m","1.27 x 50m","1.37 x 50m","1.52 x 50 m"]
// },
// {"title":"Floor Lamination",
// "img":floor,
// "desc":["1.07 x 50m","1.27 x 50m","1.52 x 50 m"]
// },
// {"title":"Mounting Film",
// "img":mount,
// "desc":["1.07 x 50m","1.27 x 50m","1.52 x 50 m"]
// },
// {"title":"Backlit Film",
// "img":back,
// "desc":["1.07 x 30m","1.27 x 30m","1.52 x 30 m"]
// },
// {"title":"Canvas",
// "img":canvas,
// "desc":["1.07 x 18m","1.27 x 18m","1.52 x18 m"]
// },
// {"title":"Eco Solvent PP Paper",
//   "img":ink,
//   "desc": ["0.92 x 50m","1.07 x 50m","1.27 x 50m","1.37 x 50m","1.52 x 50 m"]
// },
//   {"title":"One Way Vision",
//     "img":one,
//     "desc":["1.07 x 50m","1.27 x 50m","1.52 x 50 m"]
//   },
//   {"title":"Window Film",
//     "img":wind,
//     "desc":["1.52 x 30m"]
//   },
//   {"title":"Frosted Sticker",
//     "img":frost,
//     "desc":["1.22 x 50m"]
//   },
//   {"title":"Reflective Sticker",
//     "img":ref,
//     "desc":["1.24 x 50m"]
//   },    
// ]

// const data2 = [
  
//   {"title":"2 x 3 Pop-Up Curved",
//     "img":pop2,
//     "desc":["Front Visible Area:192 x 230 cm",
//     "Printable Area:274 x 230 cm"]
//   },
//   {"title":"3 x 3 Pop-Up Curved",
//     "img":pop3,
//     "desc":["Front Visible Area : 202 x 230 cm",
//     "Printable Area : 334 x 230 cm"]
//   }
//   ,
//   {"title":"2 x 3 Pop-Up Straight",
//     "img":pops,
//     "desc":["Front Visible Area : 192 x 230 cm",
//     "Printable Area : 274 x 230 cm"]
//   }
//   ,
//   {"title":"3 x 3 Pop-Up Straight",
//     "img":pops3,
//     "desc":["Front Visible Area : 277 x 230 cm",
//     "Printable Area : 344 x 230 cm"]
//   },
//   {"title":"FrontLit Banner",
//     "img":fl,
//     "desc":["Density:440 gsm","510 gsm",
//     "Size: 1.07 m ,1.10 m,1.27 m ,1.37 m ,1.52m, 1.60m, 1.83m ,2.02m, 2.22m ,2.25m, 3.22m",
//     "Length: 50 m"]
//   },
//   {"title":"4 x 3 Pop-Up Curved",
//     "img":pop4,
//     "desc":["Front Visible Area : 332 x 230 cm",
//     "Printable Area : 414 x 230 cm"]
//   },
//   {"title":"Backlit FLex",
//     "img":backl,
//     "desc":["Density : 560 Gsm,610 Gsm",
//     "Size : 1.65m2,2.02m,2.60m,3.20m",
//     "Length:50 m"]
//   },
//   {"title":"Coated Banner",
//     "img":coatb,
//     "desc":["Density:560 gsm,610 gsm",
//     "Size : 1.65m2,2.02m,2.60m,3.20m",
//     "Length : 50 m"]
//   },
//   {"title":"Black Back Banner",
//     "img":blackb,
//     "desc":["Density:440 gsm,510 gsm",
//     "Size: 1.07 m,1.10 m,1.22 m,1.27 m,1.37 m,1.52m,1.60m,1.83m,2.02m,2.22m,2.25m,3.22m",
//     "Length:50 m"]
//   },
//   {"title":"4 x 3 Pop-Up Straight",
//     "img":popu3,
//     "desc":["Front Visible Area : 362 x 230 cm",
//     "Printable Area : 434 x 230 cm"]
//   }
//   ,
//   {"title":"3 x 3 Fabric Pop Up Stand",
//     "img":popus,
//     "desc":["Front Visible Area:225 x 223 cm",
//     "Printable Area:295 x 223 cm"]
//   }
//   ,
//   {"title":"4 x 3 Fabric Pop Up Stand",
//     "img":popf3,
//     "desc":["Front Visible Area : 297 x 223 cm",
//     "Printable Area : 367 x 223 cm"]
//   }
//   ,
//   {"title":"Adjustable BackDrop Stand",
//     "img":backd,
//     "desc":["Size : 240 x 240 cm"]
//   }
//   ,
//   {"title":"Tension Fabric Stand",
//     "img":tf,
//     "desc":["Size : 220 x 220 cm ,220 x 300 cm"]
//   }
//   ,
//   {"title":"Fabric Pop Up Stand",
//     "img":fpop,
//     "desc":["Size : 240 x 240 cm"]
//   }
//   ,
//   {"title":"Roll Up Stand",
//     "img":rollup,
//     "desc":["Size : 85 x 200 cm , 100 x 200 cm , 120 x 200 cm , 150 x 200 cm , 200 x 200 cm , 240 x 200 cm"]
//   }  
//   ,
//   {"title":"BroadBase Roll Up Stand",
//     "img":broadb,
//     "desc":["Size : 85 x 200 cm , 100 x 200 cm , 120 x 200 cm , 150 x 200 cm , 200 x 200 cm , 240 x 200 cm"]
//   }

//   ,
//   {"title":"Photo Frame",
//     "img":photo,
//     "desc":["Size : A4 , A3 ,A2 , A1 , A0"]
//   }
//   ,
//   {"title":"Zig Zag Broucher Stand",
//     "img":zig,
//     "desc":["Size : A4 , A3 "]
//   }
  
//   ,
//   {"title":"White Board",
//     "img":wb,
//     "desc":["Size : 60 x 90 cm , 90 x 120 cm , 90 x 180 cm"]
//   }
  
//   ,
//   {"title":"Pop Up Table",
//     "img":popt,
//     "desc":["Size : 0.94 x 1.3 x  0.4 m"]
//   }
// ]

function Flags(){
  return(
    <div>
      <div className='uk'>
        <h2>Flags</h2>
      </div>
      <div className='wrapper1' >
      {data_f.map((data,index)=>{
        return(<Cards id={index} img={data.img} link = {"#"}title={data.title} desc={data.desc} />)
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
          return(<Cards id={index} img={data.img} title={data.title} desc={data.desc} />)
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
            return(<Cards id={index} img={data.img} link={"#"} title={data.title} desc={data.desc} />)
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



export {Product,Flags,Backdrop,Advsidplay,Umbrella}