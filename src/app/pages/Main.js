import React from "react";
import icons from "@/../public/assets/icons";
import './Main.css';

function Main(){
    return(
        <div className="container mt-5" id = "mainPage">
            <div className="mb-4">
                <img src='assets/icons/zhea.svg' alt="Anthony Alor" id = "main-logo-img" />
            </div>
            <h1>Welcome to ZHEA Tech</h1>
            <a href="/joinTeam" className="btn btn-secondary mb-4">
                Join The Team
            </a>        
        </div>
    )
}

export default Main;