import React from "react";
import WhatsUp from "./WhatsUp";
import About from "./About"
import Organizations from "./Organizations"
import Contact from "./Contact"
import HomeHeader from "./HomeHeader";
import SimpleSteps from "./SimpleSteps";
import ButtonToTop from "./ButtonToTop";

const Home = () => {
    return (
        <div className="wholeApp">
            <ButtonToTop id="buttonToTop" className="buttonToTopWrapper"/>
            <HomeHeader id="home" className="homeHeader"/>
            <WhatsUp id="whatsUp" className="whatsUp"/>
            <SimpleSteps id="simpleSteps" className="simpleSteps"/>
            <About id="about" className="about"/>
            <Organizations id="organizations" className="organizations"/>
            <Contact id="contact" className="contact"/>
        </div>
    )
}

export default Home;