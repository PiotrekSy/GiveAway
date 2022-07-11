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
        <div className="homepage">
            <ButtonToTop id="buttonToTop" className="buttonToTopWrapper"/>
            <HomeHeader id="home" className="homeHeader"/>
            <WhatsUp  className="whatsUp"/>
            <SimpleSteps id="simpleSteps" className="simpleSteps"/>
            <About  className="about"/>
            <Organizations  className="organizations"/>
            <Contact className="contact"/>
        </div>
    )
}

export default Home;