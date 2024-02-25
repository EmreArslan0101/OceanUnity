import "./style.scss";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import HomepageMain from "./HomepageMain/HomepageMain";

export default function Homepage() {

    

    return (
        <div id="home">
            <Navbar/>
            <HomepageMain/>
        </div>
    )
}