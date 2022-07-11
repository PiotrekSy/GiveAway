import React from "react";
import ButtonToTop from "./ButtonToTop";
import FormHomeHeader from "./FormHomeHeader";
import Contact from "./Contact";
import Form from "./Form"

const GiveAwayForm = () => {

    return (
        <div className="homepage">
            <ButtonToTop id="buttonToTop" className="buttonToTopWrapper"/>
            <FormHomeHeader/>
            <Form id="home"/>
            <Contact className="contact"/>
        </div>
    )
}


export default GiveAwayForm;