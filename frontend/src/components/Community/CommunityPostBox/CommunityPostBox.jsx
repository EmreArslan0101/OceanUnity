import "./style.scss";
import { useState } from "react";

export default function CommunityPostBox(data){

    const [isLiked,changeLikedStatus] = useState(false);

    const postTypeSetter = type => {

        if(type == "blog")
            return " blog-post";

        if(type == "community")
            return " community-post";

        if(type == "event")
            return " event-post";

    }

    const postContentSizeSetter = content => {

        const pageWidth = window.screen.availWidth;

        if(pageWidth >= 900) {
            return content.length > 300 ? content.substring(0,301)+"..." : content;
        }
        else if(pageWidth >= 500) {
            return content.length > 150 ? content.substring(0,151)+"..." : content;
        }
        else if(pageWidth >= 300) {
            return content.length > 100 ? content.substring(0,101)+"..." : content;
        }
        
    }

    return (
        <a className="community-post-box" href={"/"+data.postType+"PostExample"}>
            <div className="upper">
                <img src="https://picsum.photos/1000" alt="post-img" className="post-img" />
                <div className="text-info">
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>{postContentSizeSetter("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id atque, voluptatum a totam reiciendis accusantium nisi illum commodi architecto cumque, sit quia officia laboriosam earum iste dolor vitae molestias, impedit ut molestiae laborum. Amet velit perferendis alias ut inventore harum!")}</p>
                    {
                        data.postType == "event" ?
                            <div className="date-box">
                                <i></i>
                                <span>29/09/1923 09.00 AM - 29/09/1923 5.00 PM</span>
                            </div>
                        :
                            <div className="comment-box">
                                <i></i>
                                <span>{NaN}</span>
                            </div>
                    }
                </div>
                <i className="post-type"></i>
            </div>
            <div className="lower">
                <div className="poster">
                    <img src="https://picsum.photos/200" alt="profile-photo-for-community-or-user"/>
                    <span>Lorem Ipsum</span>
                </div>
                <div className="likes">
                    <i onClick={e => changeLikedStatus(!isLiked)} class={isLiked ? "non-liked-post" : "liked-post"}></i>
                    <span>{NaN}</span>
                </div>
                <i className={"post-type"+postTypeSetter(data.postType)}></i>
            </div>
        </a>
    )
}