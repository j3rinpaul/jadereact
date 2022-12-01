import React from 'react'
import Cards from "../Cards/Card"
import "./product.css"


import pop2 from "../assets/images/PopUpCurved.png"
// import tent from "../assets/images/tent.png"
// import info from "../assets/images/info.png"
import ab from "../assets/images/ECO-LITE-Folding-A-Frame-Sign-Board-A1-Track-Trace-Social-Distance-Signs.jpg-1.png"
import easel from "../assets/images/easel.png"
// import prom from "../assets/images/promo.png"
// import acb from "../assets/images/acrylicb.png";
// import bh from "../assets/images/broh.png";
// import arrow1 from "../assets/images/arrow1.png";
// import chrome from "../assets/images/chrome.png";
// import leds from "../assets/images/ledstr.png";
// import trans from "../assets/images/trans.png";
import snap from "../assets/images/snap.png";
// import ft from "../assets/images/ftoilet.png";
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
import img_bstand from "../assets/img/bstand.jpg"
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


//display 
const data1 = [
  {"title":"Self Stand Brochure Stand",
    "img":img_bstand,
    "desc":[" "]
  },
  {"title":"Table Top Brochure Stand",
    "img":img_tstand,
    "desc":[" "]
  },
  {"title":"Snap Frame ",
  "img":snap,
  "desc":["32mm Round Corner A3"]
},
{"title":"A-Board Stand",
  "img":ab,
  "desc":["Size : 100 x 70 cm , A2 , A1"]
},
{"title":"Information Stand",
  "img":img_info,
  "desc":["Size : A4 , A3"]
},
{"title":"Slim Light Box",
  "img":img_slim,
  "desc":["Size : A4 , A3"]
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
  // {"title":"Arrow Sticker Flurecent Reflective ",
  //   "img":arrow1,
  //   "desc":["5x90 cm "]
  // },
  // {"title":"Chrome Pipe ",
  //   "img":chrome,
  //   "desc":[" 24mm X 3m "]
  // },
 
 
  // {"title":"Neotec Rainproof Transformer ",
  //   "img":trans,
  //   "desc":["12v-400w "]
  // },
 
  // {"title":"Acrylic Brochure Holder L Type",
  //   "img":bh,
  //   "desc":[" "]
  // },
  // {"title":"Jade Light 5050 Led Strip White",
  //   "img":leds,
  //   "desc":[" "]
  // },
  // {"title":"Sign Boards and Signs ",
  //   "img":ft,
  //   "desc":["20x10 cm "]
  // },
 
  // {"title":"3x3 Tent",
  //   "img":tent,
  //   "desc":["Small : 90 x 200 cm","Medium : 100 x 500 cm","Large : 100 x 600 cm"]
  // },
  // {"title":"Promotional Table",
  //   "img":prom,
  //   "desc":["Size : 85 x 82 x 41 cm"]
  // }
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
  {"title":"Advertising Flag Pole",
  "img":adverf,
  "desc":["Small : 90 x 200 cm","Medium : 100 x 500 cm","Large : 100 x 600 cm"]
  },
  

]

// const indoor_flag = [
//   {"title":"Knitted Polyster Flag",
//     "img":knit,
//     "desc":[" "]
//   }
//   ,
//   {"title":"Satin Flag",
//     "img":sat,
//     "desc":[" "]
//   }
//   ,
//   {"title":"Table Top Flag Stand Gold ",
//     "img":ttg,
//     "desc":["Size : 30 cm"]
//   }
//   ,
//   {"title":"Table Top Flag Stand Silver",
//     "img":tts,
//     "desc":["Size : 30cm,35cm"]
//   }
//   ,
//   {"title":"Table Top Flag Stand Silver",
//     "img":ttl,
//     "desc":["Size : 30cm,35cm"]
//   }
//   ,
//   {"title":"Table Top Flag Stand Silver",
//     "img":ttv,
//     "desc":["Size : 30cm,35cm"]
//   }

// ]

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
    "desc":[""]
  },
  {"title":"Normal Q Stand",
    "img":img_norm,
    "desc":[""]
  },
  {"title":" Q Stand Rope",
    "img":img_rope,
    "desc":[""]
  },
  {"title":"Table Top Flag Stand",
    "img":img_tabt,
    "desc":[""]
  },
  {"title":"Conference Flag Pole",
    "img":img_conf,
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

function Qstand(){
  return(
    <div>
      <div className='uk'>
      <h2>Q-Stand & Indoor-Flag Poles</h2>
      </div>
       <div className='wrapper1' >
       {data_q.map((data,index)=>{
          return(<Cards id={index} img={data.img} title={data.title} desc={data.desc} />)
        })}
       </div>
    </div>
  )

}

function Counter(){
  return(
    <div>
      COunter
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
      COunter
    </div>
  )
}



export {Product,Flags,Backdrop,Advsidplay,Umbrella,Qstand,Counter,Printing,Promotional}