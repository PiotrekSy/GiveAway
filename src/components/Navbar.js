import React from "react";
// import {Link} from "react-router-dom";
import {Link} from "react-scroll";

const Navbar = () => {

    return (
        <div className="navigation">
            <div className="navButtons">
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <Link
                            to="Home"
                            smooth={true}
                            duration={1000}>Start
                        </Link>
                    </button>
                </div>
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <Link
                            to="WhatsUp"
                            smooth={true}
                            duration={1000}>O co chodzi?
                        </Link>
                    </button>
                </div>
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <Link
                            to="About"
                            smooth={true}
                            duration={1000}> O nas
                        </Link>
                    </button>
                </div>
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <Link
                            to="Organizations"
                            smooth={true}
                            duration={1000}>Fundacja i organizacje
                        </Link>
                    </button>
                </div>
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <Link
                            to="Contact"
                            smooth={true}
                            duration={1000}>Kontakt
                        </Link>
                    </button>
                </div>
            </div>
        </div>)
}

export default Navbar