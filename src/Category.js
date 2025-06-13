import React from "react";
import Footer from "./Footer"
function Category()
{
    return(
        <>
        <p style={{textAlign:"center", fontSize:"40px", fontFamily:"sans-serif", color:"green"}}>Categories</p>
        <div>
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <div style={{height:"470px", width:"300px", border:"2px solid black", borderRadius:"10px"}}>
                <img src="https://th.bing.com/th/id/OIP.GrTfn1HGw_z9l0ph6XHU-AHaE8?w=276&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" height="200px" width="300px" style={{borderTopLeftRadius:"9px", borderTopRightRadius:"9px"}}></img>    
                <center><h2>CREEPERS</h2></center>
                <p style={{marginLeft:"10px", marginRight:"10px", textAlign:"justify"}}>Looking to add a touch of green to your space? Visit our nursery shop for a wide selection of healthy, vibrant creepers perfect for balconies, walls, or garden trellises. Whether you're after fast-growing varieties or decorative vines, we’ve got the perfect plant for your needs. Come explore our collection and let your garden flourish!
                </p>
                </div>
                <div style={{height:"470px", width:"300px", border:"2px solid black", borderRadius:"10px"}}>
                <img src="https://th.bing.com/th/id/OIP.9UWTJGS0eaVkK0BIdAF81AHaE7?w=282&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" height="200px" width="300px" style={{borderTopLeftRadius:"9px", borderTopRightRadius:"9px"}}></img>    
                <center><h2>CLIMBERS</h2></center>
                <p style={{marginLeft:"10px", marginRight:"10px", textAlign:"justify"}}>Transform your garden or outdoor space with our beautiful collection of climbers, available now at our nursery shop. From fragrant jasmine to bold bougainvillea, we offer a variety of climbers perfect for fences, arches, and pergolas. These fast-growing plants add natural charm and vertical interest to any setting. Visit us today to find the perfect climber for your space!
                </p>
                </div>
                <div style={{height:"470px", width:"300px", border:"2px solid black", borderRadius:"10px"}}>
                <img src="https://th.bing.com/th/id/OIP.bR-N2jUeGf_ktNF8BPCs3wHaE1?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" height="200px" width="300px" style={{borderTopLeftRadius:"9px", borderTopRightRadius:"9px"}}></img>    
                <center><h2>CACTUSES</h2></center>
                <p style={{marginLeft:"10px", marginRight:"10px", textAlign:"justify"}}>Add a touch of desert beauty to your home or garden with our unique collection of cactuses, available at our nursery shop. These low-maintenance, water-wise plants come in all shapes and sizes—perfect for pots, rock gardens, or sunny windowsills. Whether you're a seasoned collector or a first-time plant parent, we have the perfect cactus for you. Stop by and explore our hardy and eye-catching selection today!
                </p>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
             <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <div style={{height:"470px", width:"300px", border:"2px solid black", borderRadius:"10px"}}>
                <img src="https://th.bing.com/th/id/OIP.VbbynU_FT7lOuNPf-SXG7wHaJq?w=208&h=272&c=7&r=0&o=5&dpr=1.3&pid=1.7" height="200px" width="300px" style={{borderTopLeftRadius:"9px", borderTopRightRadius:"9px"}}></img>    
                <center><h2>SHRUBS</h2></center>
                <p style={{marginLeft:"10px", marginRight:"10px", textAlign:"justify"}}>Enhance your garden’s appeal with our wide variety of healthy, lush shrubs, available at our nursery shop. Ideal for borders, hedges, or standalone features, our shrubs add structure, color, and year-round beauty to any landscape. Choose from flowering, ornamental, or evergreen varieties to suit your style. Visit us today and let our greenery bring life to your outdoor space!
                </p>
                </div>
                <div style={{height:"470px", width:"300px", border:"2px solid black", borderRadius:"10px"}}>
                <img src="https://th.bing.com/th/id/OIP.pgVqfIR8u3N4prQITddhbQHaE8?w=279&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" height="200px" width="300px" style={{borderTopLeftRadius:"9px", borderTopRightRadius:"9px"}}></img>    
                <center><h2>HERBS</h2></center>
                <p style={{marginLeft:"10px", marginRight:"10px", textAlign:"justify"}}>Bring fresh flavor and natural fragrance to your home with our vibrant collection of herbs, available at our nursery shop. Perfect for kitchen gardens, balconies, or window sills, our herbs are easy to grow and full of health benefits. From basil and mint to rosemary and thyme, we have all your favorites ready to plant. Stop by today and start your own herb garden with us!
                </p>
                </div>
                <div style={{height:"470px", width:"300px", border:"2px solid black", borderRadius:"10px"}}>
                <img src="https://th.bing.com/th/id/OIP.HlH1kfjM90xq4UeD1daUjgHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" height="200px" width="300px" style={{borderTopLeftRadius:"9px", borderTopRightRadius:"9px"}}></img>    
                <center><h2>TREES</h2></center>
                <p style={{marginLeft:"10px", marginRight:"10px", textAlign:"justify"}}>Add timeless beauty and lasting greenery to your space with our selection of long-growing trees, including majestic Christmas trees, available at our nursery shop. Perfect for gardens, landscapes, or special seasonal decor, these trees grow stronger and more stunning year after year. Whether you're planting for shade, tradition, or celebration, we have the ideal tree for you.
                </p>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}
export default Category;