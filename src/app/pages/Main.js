import React from "react";
import icons from "@/../public/assets/icons";
import './Main.css';
import Image from 'next/image';
import Link from 'next/link';

function Main(){
    return(
        <div className="container mt-5" id = "mainPage">
            <div className="mb-4">
                <Image src='assets/icons/zhea.svg' alt="Anthony Alor" id = "main-logo-img" width={400} height={400} />
            </div>
            <h1>Welcome to ZHEA Tech</h1>
            <Link href="/joinTeam" className="btn btn-secondary mb-4">
                Join The Team
            </Link>        
        </div>
    )
}

export default Main;