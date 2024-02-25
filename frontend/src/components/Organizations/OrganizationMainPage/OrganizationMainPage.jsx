import "./style.scss";
import logoExample from "../../Navbar/logo-base.png";
import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import OrganizationContentCard from "./OrganizationContentCard/OrganizationContentCard";

export default function OrganizationMainPage() {

    const statsContructor = [
        ["Events",NaN],
        ["Blogs",NaN],
        ["Followers",NaN]
    ]

    const [followStatus,changeFollowStatus] = useState(false);
    const [activeContent,setActiveContent] = useState(false);

    return (
        <>
            <Navbar />
            <div id="organization-main-page">
                <div id="info-box">
                    <img src={logoExample} alt="organization-name" />
                    <div id="real-info">
                        <h3>Organization</h3>
                        <div id="stats">
                            {
                                statsContructor.map(([statFor,amount]) => 
                                    <div className="org-stat">
                                        <span className="stat-for">{statFor+" : "}</span>
                                        <span className="stat-amount">{amount}</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <button id={followStatus ? "unf-btn" : "flw-btn"} onClick={e => changeFollowStatus(!followStatus)}>{followStatus ? "Unfollow" : "Follow"}</button>
                </div>
                <div id="posts">
                    <div id="content-mode">
                        <div id={!activeContent ? "active-content" : ""} onClick={e => setActiveContent(false)}>Events</div>
                        <div id={activeContent ? "active-content" : ""} onClick={e => setActiveContent(true)}>Blogs</div>
                    </div>
                    <div id="chosen-content">
                        {
                            Array.from({length:5},() => {return {name:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, est!",likes:NaN}})
                            .map(({name,likes}) => 
                                <OrganizationContentCard contentName={name} likeStatus={likes} />
                            )
                        }
                    </div>
                    <div id="content-nav">
                        <i id="before"></i>
                        <span id="page">1</span>
                        <i id="after"></i>
                    </div>
                </div>
            </div>
        </>
    )
}