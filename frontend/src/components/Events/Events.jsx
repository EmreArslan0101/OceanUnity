import Navbar from "../Navbar/Navbar";
import EventInfoCard from "./EventInfoCard/EventInfoCard";
import { useState } from "react";
import "./style.scss";

export default function Events() {

    const eventAmountOptions = [5,10,20,25];

    const [eventAmount,setEventAmount] = useState(5);

    return (
        <>
            <Navbar/>
            <div id="events">
                <div id="page-header">
                    <h3>Latest Events</h3>
                    <div id="event-amount-chooser">
                        <span>Events:</span>
                        <select id="event-amount-input">
                            {
                                eventAmountOptions.map(amount => 
                                    <option value={amount} onSelect={e => setEventAmount(e.target.value)}>{amount}</option>    
                                )
                            }
                        </select>
                    </div>  
                </div>
                <div id="events-box">
                    {
                        Array.from({length:eventAmount},() => 0).map(x => 
                            <EventInfoCard />
                        )
                    }
                    <div id="events-nav">
                        <i id="before"></i>
                        <span id="page">1</span>
                        <i id="after"></i>
                    </div>
                </div>
            </div>
        </>
    )
}