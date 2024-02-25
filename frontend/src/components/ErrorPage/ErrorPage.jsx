import "./style.scss";
import Navbar from "../Navbar/Navbar";

export default function ErrorPage() {

    return(
        <>
            <Navbar />
            <div id="error-page">
                <h4>
                    Not Found
                </h4>
            </div>
        </>
    )
}