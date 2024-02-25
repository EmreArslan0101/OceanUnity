import "./style.scss";
import Navbar from "../Navbar/Navbar";
import CommunityPostBox from "./CommunityPostBox/CommunityPostBox";

export default function CommunityPage() {

    const postAmountOptions = [5,10,20,25], postTypes = ["event","community","blog"];

    return (
        <>
            <Navbar/>
            <div id="community">
                <div id="community-header">
                    <h3>Latest Posts from Community</h3>
                    <div id="community-post-amount-chooser">
                        <span>Blogs:</span>
                        <select id="community-post-amount-input">
                            {
                                postAmountOptions.map(amount => 
                                    <option value={amount}>{amount}</option>    
                                )
                            }
                        </select>
                    </div>  
                </div>
                <div id="posts-box">
                    {Array.from({length:10},() => postTypes[parseInt(Math.random()*3)]).map(x => {console.log(x);return <CommunityPostBox postType={x} />})}
                </div>
                <div id="community-nav">
                    <i id="before"></i>
                    <span id="page">1</span>
                    <i id="after"></i>
                </div>
            </div>
        </>
    )
}