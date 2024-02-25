import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import "./style.scss";

export default function EventsInfoPage() {

    const [isJoined,changeJoinStatus] = useState(false);

    return (
        <>
            <Navbar/>
            <div id="event-info">
                <div id="info-box">
                    <img src="https://picsum.photos/1000" alt="event-pic" />
                    <h3>EventName</h3>
                    <div id="date-box">
                        <i></i>
                        <span>29/09/1923 09.00 AM - 29/09/1923 5.00 PM</span>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nihil aliquid. Dolorum, placeat aspernatur ipsa, sit ipsum ex soluta iure tempora quaerat unde deleniti ab aut veniam? Nisi et aspernatur laudantium debitis, odio a labore non animi quod adipisci odit expedita consequuntur, molestias consequatur ipsa magnam! Vitae illo veritatis ipsum impedit neque ducimus in. Harum fugiat quae in non aut? Commodi alias, eum dignissimos pariatur aliquam magni velit consequatur mollitia blanditiis possimus quis sed voluptate asperiores. Rerum repellendus, officiis modi ipsam quod ea aspernatur earum, tempora molestiae dolorum, deserunt incidunt nulla nemo! Delectus sapiente non ut autem deleniti, doloribus necessitatibus ad obcaecati consectetur veritatis, sit quis. Dicta dolorem voluptatibus sunt iusto hic perferendis necessitatibus assumenda aliquid ad. Nisi debitis quam ratione pariatur reprehenderit aspernatur dolorum, expedita dolore dolorem molestias blanditiis amet cum dignissimos repudiandae corrupti, odio consequatur culpa enim quis magnam dicta ipsam, adipisci odit. Neque enim quo laboriosam doloribus illo provident magni molestiae magnam eius aspernatur possimus hic cupiditate architecto excepturi error, cumque sint corrupti reiciendis perferendis quibusdam! Delectus iusto minus eveniet nesciunt, quo minima quisquam repellat eius dolore itaque. Sapiente sint iste, perspiciatis aperiam incidunt sunt ut alias necessitatibus recusandae? Laborum vitae libero aut neque deserunt. Optio incidunt quos, sequi amet, nulla vel quae veritatis accusamus repellat perferendis, ea accusantium? Culpa veniam, cum rem ducimus voluptas ab dicta nihil porro alias consequuntur natus. Exercitationem reiciendis ea laborum minima porro? Laudantium magnam eveniet sint tenetur nihil, eum ipsam commodi quibusdam enim fugit officiis id molestiae hic harum ducimus pariatur nemo reprehenderit est minus! Odio rem saepe quisquam dolores unde quis minus animi cupiditate omnis dicta, debitis tempore impedit consectetur repellat distinctio autem voluptate. Reprehenderit veritatis modi at ex atque, quisquam ab quam vero itaque velit consequatur ullam maiores unde. Omnis sequi nemo quae porro sapiente incidunt quidem ratione perspiciatis ipsum earum eos fuga at minima, deserunt neque dolor commodi suscipit mollitia recusandae ad deleniti, sit adipisci quas! Odit placeat doloribus rerum officia illo aperiam atque voluptatibus voluptas repellat in non culpa aut quo totam excepturi explicabo fugit beatae, quasi perspiciatis corporis dolorum qui magnam neque? Animi totam qui modi quisquam officia numquam quas doloremque nam quo! Perferendis libero quam tenetur facere animi, recusandae corporis reiciendis cupiditate, repellendus aut ea maxime pariatur at nisi maiores deserunt neque molestiae quo labore accusantium. Cumque excepturi earum animi provident voluptates aspernatur architecto. Natus, temporibus cumque! Quo debitis dolorem dolor aliquid dolores officia, laboriosam, similique at tempore numquam rem! Non, excepturi dolor quo facilis rerum quae. Fugiat dolor vitae est sunt sapiente enim amet? Maxime sint eum, non voluptatem commodi ea consequuntur officiis, a quidem nisi aliquid corporis repudiandae perspiciatis consequatur. Repellat repudiandae iste id, sunt cum dolor natus modi laboriosam necessitatibus dolorum doloribus at aliquid dolore beatae velit nesciunt sint earum commodi odio voluptas? In, facilis sapiente nulla earum rem quaerat! Atque, est eveniet! Inventore cum ratione nihil in obcaecati nam doloribus voluptate omnis quae. Eveniet nesciunt rerum ipsa quasi sapiente odio impedit, deserunt voluptatem neque id recusandae repudiandae, a, incidunt praesentium eligendi.</p>
                    <div id="bottom">
                        <div id="already-joined">
                            <i></i>
                            <span>{NaN}</span>
                        </div>
                        <button id={isJoined ?  "unjoin-btn" : "join-btn"} onClick={e => changeJoinStatus(!isJoined)}>{isJoined ? "Unjoin" : "Join"}</button>
                    </div>
                </div>
            </div>
        </>
    )
}