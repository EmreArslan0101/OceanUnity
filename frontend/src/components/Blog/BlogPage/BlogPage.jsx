import Navbar from "../../Navbar/Navbar";
import Comments from "../../Comments/Comments";
import "./style.scss";

export default function BlogPage(data) {

    const longTestText = `The vast expanse of our oceans, covering more than 70% of the Earth's surface, is not only awe-inspiring but also essential for life on our planet. Beyond their breathtaking beauty and recreational value, oceans play a crucial role in maintaining Earth's climate stability, regulating temperature, and producing oxygen. Moreover, they provide sustenance to billions of people around the world, serving as a primary source of protein and livelihoods for coastal communities.

    However, the oceans are under siege from a myriad of threats. Pollution, including plastic waste, chemical runoff, and oil spills, poses a grave danger to marine ecosystems, causing harm to marine life through ingestion, entanglement, and habitat destruction. Overfishing and destructive fishing practices deplete fish stocks, disrupt marine food webs, and threaten the livelihoods of coastal communities dependent on fisheries.
    
    Additionally, the degradation of coral reefs, mangroves, and other coastal habitats further exacerbates the decline in marine biodiversity. Climate change amplifies these challenges, leading to ocean acidification, rising sea levels, and extreme weather events that disrupt marine ecosystems and coastal communities.
    
    In response to these urgent challenges, a multitude of non-governmental organizations (NGOs) are dedicated to the preservation and restoration of our oceans. These organizations engage in a wide array of activities, including scientific research, policy advocacy, community outreach, and on-the-ground conservation efforts. They work tirelessly to raise awareness about the importance of ocean conservation, mobilize communities to take action, and advocate for policies that protect marine environments.
    
    Through initiatives such as marine protected areas, sustainable fisheries management, and coastal restoration projects, these NGOs strive to mitigate the impacts of human activities on our oceans. They empower local communities to become stewards of their marine resources, promote sustainable practices in industries such as fishing and tourism, and foster international cooperation to address transboundary issues.
    
    However, the task of ocean conservation requires collective action from individuals, governments, businesses, and civil society organizations alike. Each of us has a role to play in safeguarding our oceans for future generations. By reducing our plastic consumption, supporting sustainable seafood choices, participating in beach cleanups, and advocating for stronger environmental policies, we can all contribute to the health and resilience of our oceans.
    
    In the face of mounting challenges, the importance of ocean conservation cannot be overstated. Our oceans are not only a source of wonder and inspiration but also a vital lifeline for all life on Earth. By coming together to protect and restore these precious ecosystems, we can ensure a sustainable future for ourselves and for the countless species that call the ocean home.`


    return (
        <>
            <Navbar />
            <div id="blog-page">
                <div id="blog-content">
                    <h2>{data.header}</h2>
                    <img src={data.img} alt={data.header} />
                    <div id="post-info">
                        <div id="poster">
                            <img src="https://picsum.photos/200" alt="profile-photo-for-community-or-user"/>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div id="date-box">
                            <i></i>
                            <span>29/09/1923</span>
                        </div>
                    </div>
                    <p>{/* data.content */longTestText}</p>
                    <Comments/>
                </div>
            </div>
        </>
    )
}