import React from "react";
// import {Link} from "react-router-dom";
import {Link} from "react-scroll";

const Navbar = () => {

    return (
        <div className="navbarContainer">
            <Link className="navbarElement"
                  to="Home" smooth={true} duration={1000}>Home</Link>
            <Link className="navbarElement"
                  to="WhatsUp"
                  smooth={true}
                  duration={1000}>O co chodzi?</Link>
            <Link className="navbarElement"
                  to="About"
                  smooth={true}
                  duration={1000}> O nas</Link>
            <Link className="navbarElement"
                  to="Organizations"
                  smooth={true}
                  duration={1000}>Fundacja i
                organizacje</Link>
            <Link className="navbarElement"
                  to="Contact"
                  smooth={true}
                  duration={1000}>Kontakt</Link>
        </div>
    )
}

export default Navbar