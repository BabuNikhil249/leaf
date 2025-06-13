import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { LuCalendarDays } from "react-icons/lu";
function Contactus()
{
    return(
        <>
        <p style={{textAlign:"center", fontSize:"40px", fontFamily:"sans-serif", color:"green"}}>Contact Us</p>
    <div style={{display:"flex"}}>
          <div>
             <div style={{display:"flex"}}>
                <div>
                 <FaMapLocationDot style={{marginLeft:"150px", height:"30px", width:"30px", color:"green"}}></FaMapLocationDot>
                </div>
                <div>
                <p style={{marginLeft:"25px", color:"green", fontSize:"25px", display:"inline"}}>We are located at</p>
                <br></br>
                <br></br>
                <p style={{marginLeft:"25px", color:"green", fontSize:"20px", display:"inline"}}>Marenahalli main road, Vijayanagar, Bengaluru, 560040</p>
                </div>
             </div>
             <br></br>
             <br></br>
             <div style={{display:"flex"}}>
                <div>
                 <MdMail style={{marginLeft:"150px", height:"30px", width:"30px", color:"green"}}></MdMail>
                </div>
                <div>
                <p style={{marginLeft:"25px", color:"green", fontSize:"25px", display:"inline"}}>Drop us a mail at</p>
                <br></br>
                <br></br>
                <p style={{marginLeft:"25px", color:"green", fontSize:"20px", display:"inline"}}>leafnownursery@gmail.com</p>
                </div>
             </div>
             <br></br>
             <br></br>
             <div style={{display:"flex"}}>
                <div>
                 <FiPhoneCall style={{marginLeft:"150px", height:"30px", width:"30px", color:"green"}}></FiPhoneCall>
                </div>
                <div>
                <p style={{marginLeft:"25px", color:"green", fontSize:"25px", display:"inline"}}>Talk to us at</p>
                <br></br>
                <br></br>
                <p style={{marginLeft:"25px", color:"green", fontSize:"20px", display:"inline"}}>+916362186496</p>
                </div>
             </div>
             <br></br>
             <br></br>
             <div style={{display:"flex"}}>
                <div>
                 <LiaBusinessTimeSolid style={{marginLeft:"150px", height:"30px", width:"30px", color:"green"}}></LiaBusinessTimeSolid>
                </div>
                <div>
                <p style={{marginLeft:"25px", color:"green", fontSize:"25px", display:"inline"}}>Our Business Timings</p>
                <br></br>
                <br></br>
                <p style={{marginLeft:"25px", color:"green", fontSize:"20px", display:"inline"}}>09:00AM - 11:00PM</p>
                </div>
             </div>
             <br></br>
             <br></br>
             <div style={{display:"flex"}}>
                <div>
                 <LuCalendarDays style={{marginLeft:"150px", height:"30px", width:"30px", color:"green"}}></LuCalendarDays>
                </div>
                <div>
                <p style={{marginLeft:"25px", color:"green", fontSize:"25px", display:"inline"}}>Our Business Days</p>
                <br></br>
                <br></br>
                <p style={{marginLeft:"25px", color:"green", fontSize:"20px", display:"inline"}}>Mon - Sat</p>
                </div>
             </div>
         </div>
         <div>
          <p style={{marginLeft:"250px", fontSize:"30px", width:"auto", color:"green"}}>Any Query?</p>
          <input type="text" placeholder="NAME" style={{height:"30px", width:"300px", borderRadius:"10px", marginLeft:"150px"}}></input><br></br><br></br>
          <input type="email" placeholder="EMAIL" style={{height:"30px", width:"300px", borderRadius:"10px", marginLeft:"150px"}}></input><br></br><br></br>
          <input type="tel" placeholder="CONTACT NO" style={{height:"30px", width:"300px", borderRadius:"10px", marginLeft:"150px"}}></input><br></br><br></br>
          <textarea rows="5" cols="40" placeholder="MESSAGE" style={{height:"60px", width:"300px", borderRadius:"10px", marginLeft:"150px"}}></textarea><br></br><br></br>
          <input type="submit" value="Submit" style={{height:"30px", width:"305px", borderRadius:"10px", marginLeft:"150px", backgroundColor:"green", color:"white"}}></input>
         </div>
    </div>      
        </>
    )
}

export default Contactus;