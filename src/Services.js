import React from 'react'

function Services()
{
    return(
        <>
        <p style={{textAlign:"center", fontSize:"40px", fontFamily:"sans-serif", color:"green"}}>Services</p>
        <br></br>
        <br></br>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <div style={{height:"400px", width:"300px", border:"2px solid black", borderRadius:"10px"}}>
                <div style={{height:"150px", width:"250px", borderRadius:"50%"}}>
                <img src="https://th.bing.com/th/id/OIP.-3jf76yP_wmc0eZSdJTDOQHaE6?rs=1&pid=ImgDetMain" height="150px" width="250px" style={{borderRadius:"50%", padding:"30px"}}></img>    
                </div>
                <br></br>
                <br></br>
                <center><h2>GARDENING</h2></center>
                <p style={{marginLeft:"10px", marginRight:"10px", textAlign:"justify"}}>Custom garden planning services to create beautiful, functional outdoor spaces. We design everything from small balcony gardens to extensive backyard landscapes, tailored to your vision and local climate conditions.
                </p>
                </div>
                <div style={{height:"400px", width:"300px", border:"2px solid black", borderRadius:"10px"}}>
                <div style={{height:"150px", width:"250px", borderRadius:"50%"}}>
                <img src="https://th.bing.com/th/id/OIP.94EW4tPjfhXpyeWrkBjknwHaE8?w=275&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" height="150px" width="250px" style={{borderRadius:"50%", padding:"30px"}}></img>    
                </div>
                <br></br>
                <br></br>
                <center><h2>PLANT CONSULTATION</h2></center>
                <p style={{marginLeft:"10px", marginRight:"10px", textAlign:"justify"}}>Expert advice on selecting the perfect plants for your space, considering light conditions, maintenance level, and aesthetic preferences. Our horticulturists will help you choose plants that thrive in your specific environment.
                </p>
                </div>
                <div style={{height:"400px", width:"300px", border:"2px solid black", borderRadius:"10px"}}>
                <div style={{height:"150px", width:"250px", borderRadius:"50%"}}>
                <img src="https://th.bing.com/th/id/OIP.1yZFj1LCfCNpy5UhTRAMgQHaFj?rs=1&pid=ImgDetMain" height="150px" width="250px" style={{borderRadius:"50%", padding:"30px"}}></img>    
                </div>
                <br></br>
                <br></br>
                <center><h2>LANDSCAPING</h2></center>
                <p style={{marginLeft:"10px", marginRight:"10px", textAlign:"justify"}}>Complete landscape installation including hardscaping, planting, and irrigation systems. We transform empty spaces into lush gardens with proper drainage, soil preparation, and plant placement.
                </p>
                </div>
                
                
            </div>
        </>
    )
}

export default Services