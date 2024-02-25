import "./style.scss";
import logoExample from "../../Navbar/logo-base.png";

export default function EventInfoCard() {

    const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta nesciunt amet quis, vitae repudiandae placeat atque at dolorum, totam quam tempore magni quae nihil provident fuga accusantium! Vero voluptas quisquam totam earum quo autem, eum repellat reiciendis iste omnis error nulla quas debitis blanditiis, dolores cupiditate illum laudantium animi distinctio?";

    return (
        <a className="event-info-card" href="/eventPostExample">
            <h3>EventName</h3>
            <p>{lorem.length > 100 ? lorem.substring(0,101)+"..." : lorem}</p>
            <div id="date-box">
                <i></i>
                <span>29/09/1923 09.00 AM - 29/09/1923 5.00 PM</span>
            </div>
            <div className="more-info">
                <img src={logoExample} alt="organization-logo"/>
                <span className="org-name">Organization</span>
                <i></i>
                <span className="join-amount">{NaN}</span>
            </div>
        </a>

    )
}