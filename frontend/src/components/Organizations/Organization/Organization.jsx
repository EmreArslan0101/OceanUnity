import "./style.scss";
import examplePic from "./logo-base.png";

export default function Organization(data) {

    return (
      <a className="organization-card" href="/organizationMainPageExample">
        <img src={examplePic} alt="organization-name"/>
        <h4>Organization</h4>
      </a>  
    )
}