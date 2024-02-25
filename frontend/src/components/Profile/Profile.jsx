import "./style.scss";
import logoExample from "../Navbar/logo-base.png";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import ProfileContentCard from "./ProfileContentCard/ProfileContentCard";

export default function Profile() {

    const statsContructor = [
        ["Events",NaN],
        ["Blogs",NaN],
        ["Followers",NaN]
    ]

    const [followStatus,changeFollowStatus] = useState(false);
    const [activeContent,setActiveContent] = useState(0);

    return (
        <>
            <Navbar />
            <div id="profile-main-page">
                <div id="info-box">
                    <img src={logoExample} alt="profile-name" />
                    <div id="real-info">
                        <h3>ProfileName</h3>
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
                        <div id={activeContent == 0 ? "active-content" : ""} onClick={e => setActiveContent(0)}>Joined Events</div>
                        <div id={activeContent == 1 ? "active-content" : ""} onClick={e => setActiveContent(1)}>Blogs</div>
                        <div id={activeContent == 2 ? "active-content" : ""} onClick={e => setActiveContent(2)}>Community Posts</div>
                    </div>
                    <div id="chosen-content">
                        {
                            Array.from({length:5},() => {return {name:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, est!",likes:NaN}})
                            .map(({name,likes}) => 
                                <ProfileContentCard contentName={name} likeStatus={likes} />
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