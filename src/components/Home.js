import React from "react";
import WhatsUp from "./WhatsUp";
import About from "./About"
import Organizations from "./Organizations"
import Contact from "./Contact"
import HomeHeader from "./HomeHeader";
import SimpleSteps from "./SimpleSteps";

const Home = () => {
    return (
        <div className="wholeApp">
            <HomeHeader className="homeHeader"/>
            <WhatsUp className="whatsUp"/>
            <SimpleSteps className="simpleSteps"/>
            <About className="about"/>
            <Organizations className="organizations"/>
            <Contact className="contact"/>
        </div>
    )
}

export default Home;