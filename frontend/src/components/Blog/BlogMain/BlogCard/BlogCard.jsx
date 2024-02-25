import { useState } from "react";
import "./style.scss";
import profilePhotoExample from "../../../Navbar/logo-base.png";

export default function BlogCard(data) {

    const linkConstructor = str => {

        const checkStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let output = "/";

        for(let i = 0;i<str.length;i++) {

            if(checkStr.includes(str[i])){
                output += str[i].toLowerCase();
            };

            if(str[i] == ' ') {
                output += '_';
            }
            
        }
        
        return output;

    }
    const blogSummaryFormatter = realContent => {

        const pageWidth = window.screen.availWidth;

        if(pageWidth >= 900) {
            return realContent.length > 200 ? realContent.substring(0,201)+"..." : realContent;
        }
        else if(pageWidth >= 500) {
            return realContent.length > 150 ? realContent.substring(0,151)+"..." : realContent;
        }
        else if(pageWidth >= 300) {
            return realContent.length > 100 ? realContent.substring(0,101)+"..." : realContent;
        }

    }

    const [isLiked,changeLikedStatus] = useState(false);

    return (
        <a className="blog-card" href="/blogPostExample">
            <div className="post-details">
                <img src={data.pic} alt={data.header} className="pic" />
                <div className="text-content">
                    <h3>{data.header}</h3>
                    <p>{blogSummaryFormatter(data.content)}</p>
                </div>
            </div>
            <div className="more-infos">
                <div className="poster">
                    <img src={profilePhotoExample} alt="profile-photo-for-community-or-user"/>
                    <span>{Math.random() > .5 ? "Lorem Organization" : "Charlie Chaplin"}</span>
                </div>
                <div className="likes">
                    <i onClick={e => changeLikedStatus(!isLiked)} class={isLiked ? "non-liked-post" : "liked-post"}></i>
                    <span>{NaN}</span>
                </div>
            </div>
        </a>
    )
}