import Comments from "../../Comments/Comments";
import Navbar from "../../Navbar/Navbar";
import "./style.scss";
import { useState } from "react";

export default function CommunityPost(data){

    const [isLiked,changeLikedStatus] = useState(false);

    return (
        <>
            <Navbar/>
            <div id="post">
                <div id="post-box">
                    <img src="https://picsum.photos/1000" alt="post-img" id="post-img" />
                    <div id="others">
                        <div className="poster">
                            <img src="https://picsum.photos/200" alt="profile-photo-for-community-or-user"/>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="likes">
                            <i onClick={e => changeLikedStatus(!isLiked)} class={isLiked ? "non-liked-post" : "liked-post"}></i>
                            <span>{NaN}</span>
                        </div>
                    </div>
                    <h4 id="post-header">Lorem ipsum dolor sit amet.</h4>
                    <p id="post-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id atque, voluptatum a totam reiciendis accusantium nisi illum commodi architecto cumque, sit quia officia laboriosam earum iste dolor vitae molestias, impedit ut molestiae laborum. Amet velit perferendis alias ut inventore harum!</p>
                    <Comments />
                </div>
            </div>
        </>
    )
}