import "./style.scss";
import Navbar from "../Navbar/Navbar";
import BlogMain from "./BlogMain/BlogMain";

export default function Blog() {

    const blogAmountOptions = [5,10,20,25];

    return (
        <div id="blog">
            <Navbar/>
            <div id="blog-header">
                <h3>Latest Blogs</h3>
                <div id="blog-amount-chooser">
                    <span>Blogs:</span>
                    <select id="blog-amount-input">
                        {
                            blogAmountOptions.map(amount => 
                                <option value={amount}>{amount}</option>    
                            )
                        }
                    </select>
                </div>  
            </div>
            <BlogMain />
        </div>
    )
}