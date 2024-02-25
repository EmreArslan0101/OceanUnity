import "./style.scss";
import { useState } from "react";

export default function CommentBox(){

    const [isLiked,changeLikedStatus] = useState(false);

    const commentFormatter = realContent => {

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

    const commentExample = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iusto maxime dolorum iste corrupti, sapiente possimus beatae aliquid quae cumque veniam amet. Vitae sed esse dolorum maxime eius quos modi, nemo similique, earum nostrum perferendis quam est error magni aliquam illum eveniet voluptates laudantium sequi a deserunt, vel fuga ea. Praesentium labore debitis fugit mollitia cum officia laudantium, alias placeat natus iusto nemo quia blanditiis, excepturi aspernatur eos incidunt! Aliquid esse ea sapiente assumenda reiciendis? Voluptas quibusdam accusantium nesciunt tempora dolores quidem aperiam? Delectus vero illo illum! Officiis voluptatibus nesciunt aut sed sit nulla necessitatibus ab autem quod! Quos, autem.";

    return (
        <div className="comment">
            <p className="content">{commentFormatter(commentExample)}</p>
            <div className="more-info">
                <div className="poster">
                    <img src="https://picsum.photos/200" alt="profile-photo-for-community-or-user"/>
                    <span>Lorem Ipsum</span>
                </div>
                <div className="likes">
                    <i onClick={e => changeLikedStatus(!isLiked)} class={isLiked ? "non-liked-post" : "liked-post"}></i>
                    <span>{NaN}</span>
                </div>
            </div>
        </div>
    )

}