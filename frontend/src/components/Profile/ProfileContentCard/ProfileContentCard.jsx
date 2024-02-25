import "./style.scss";

export default function ProfileContentCard(data) {

    return ( 
        <div className="org-content">
            <a href="/">{data.contentName}</a>
            <div className="date-box">
                <i></i>
                <span>29/09/1923</span>
            </div>
            <div className="like-status">
                <span>{data.likeStatus}</span>
                <i></i>
            </div>
        </div>
    )
}