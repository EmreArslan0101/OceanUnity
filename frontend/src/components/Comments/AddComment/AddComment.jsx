import "./style.scss";

export default function AddComment() {

    return (
        <div id="add-comment-box">
            <span>Add your comment :</span>
            <form action="/">
                <label htmlFor="new-comment">
                    <textarea name="newComment" id="" cols="30" rows="5"></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}