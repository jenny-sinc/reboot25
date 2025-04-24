import React from "react";
import { useNavigate } from "react-router-dom";
import Jumbotron from "./Jumbotron";
import CreditCardJumbotron from "./CreditCardJumbotron";
import { OtherJumbo1, OtherJumbo2 } from "./otherJumbos";
import "../../styles/Jumbotron.css";
import "../../styles/OtherJumbos.css";
import "../../styles/CreditCardJumbotron.css";

function Homepage() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/form-feature");
    };

    return (
        <div>
            <CreditCardJumbotron />
            <Jumbotron />
            <OtherJumbo1 />
            <OtherJumbo2 />
            <button className="jumbotron-button" onClick={handleButtonClick}>
                Start
            </button>
        </div>
    );
}

export default Homepage;