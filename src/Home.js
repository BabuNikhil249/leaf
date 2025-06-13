import React from "react";
import Services from "./Services"
import Imagesmarquee from "./Imagesmarquee";
import MostBoughtPlants from "./MostBoughtPlants";
import Category from "./Category";
import About from "./About";
import Footer from "./Footer"
import Contactus from "./Contactus";

function Home()
{
    return(
        <>
   

    <Imagesmarquee></Imagesmarquee>
        <Services></Services>
        <MostBoughtPlants></MostBoughtPlants>
        <About></About>
        <Category></Category>
        <Contactus></Contactus>
        <Footer></Footer>
        </>
    )
}
export default Home;