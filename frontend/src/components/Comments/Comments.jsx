import { useState } from "react";
import avatar from "./avatar_test.png";
import AddComment from "./AddComment/AddComment";
import CommentBox from "./CommentBox/CommentBox";
import "./style.scss";

export default function Comments() { 

    return (
        <div id="comments-box">
            <div id="comments-header">
                <h4>Comments</h4>
                <i></i>
            </div>
            <AddComment/>
            {
                Array.from({length:20},() => 0).map(x => 
                    <CommentBox/>
                )
            }
        </div>
    )
}
