import "./style.scss";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

export default function AddPost() {

    const [postType,setPostType] = useState("");

    const getMinDate = () => {
        
        const date = new Date();

        console.log(date);

        return date.toISOString().slice(0,16);
    }

    return (
        <>
            <Navbar />
            <div id="add-blog">
                <div id="blog-content">
                    <form action="/blog">
                        <label htmlFor="header">
                            <input type="text" name="header" id="header" placeholder="Post header here..."/>
                        </label>
                        <label htmlFor="img">
                            <input type="file" name="img" id="img" />
                        </label>
                        <label htmlFor="content">
                            <textarea name="content" id="content" cols="30" rows="10"></textarea>
                        </label>
                        <label htmlFor="post-type">
                            <select name="post-type" id="post-type" onChange={e => setPostType(e.target.value)}>
                                <option value="">Choose post type</option>
                                <option value="communtiy">Community</option>
                                <option value="event">Event</option>
                                <option value="blog">Blog</option>
                            </select>
                        </label>
                        {
                            postType == "event" ?
                            <div id="event-date">
                                <label htmlFor="start">
                                    <span>Start :</span>
                                    <input type="datetime-local" name="start" id="start" min={getMinDate()}/>
                                </label>
                                <label htmlFor="end">
                                    <span>End :</span>
                                    <input type="datetime-local" name="end" id="end"/>
                                </label>
                            </div>
                            :
                            null
                        }
                        <input type="submit" value="Post" id="submit-button"/>
                    </form>
                </div>
            </div>
        </>
    )
}