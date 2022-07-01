import React from "react";
import WhatsUp from "./WhatsUp";
import About from "./About"
import Organizations from "./Organizations"
import Contact from "./Contact"
import HomeHeader from "./HomeHeader";
import SimpleSteps from "./SimpleSteps";

const Home = () => {
    return (
        <div className="">
            <HomeHeader/>
            <WhatsUp/>
            <SimpleSteps/>
            <About/>
            <Organizations/>
            <Contact/>
        </div>
    )
}

export default Home;