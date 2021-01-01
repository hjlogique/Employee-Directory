
//::::::::::::::: Header.js ::::::::::::::::

import React from "react";
import logo from "../assets/images/logo.png";

function Header() {
    return (
        <div className="bg-white shadow text-white" id="headerStyle">
            <header className="container max-w-6xl px-10 py-3 mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img className="mr-3" src={logo} alt="UCF School Logo" />
                    <h1 className="font-bold">REACT EMPLOYEE DIRECTORY</h1>
                </div>
            </header>
        </div>
    )
}

export default Header;