import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Navbar from "Navbar";
import RegistrationSection from "./RegistrationSection";


const Home = () => {
    return (
        <>
            <RegistrationSection/>
            <Navbar/>
        </>

    )
}

export default Home;