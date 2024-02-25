import "./style.scss";
import Navbar from "../Navbar/Navbar";
import Organization from "./Organization/Organization";

export default function Organizations() {

    const orgList = Array.from({length:20},() => 0);
    
    return (
        <>
            <Navbar/>
            <div id="organizations">
                <h3>Organiztions we work with</h3>
                <div id="organizations-grid">
                    {orgList.map(() => {
                                return <Organization />;
                            }   
                        )
                    }
                </div>
            </div>
        </>
    )
}