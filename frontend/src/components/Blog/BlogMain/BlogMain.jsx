import BlogCard from "./BlogCard/BlogCard";
import "./style.scss";

export default function BlogMain() {

    const blogSliderExamples = [
        {
          "header": "Exploring Marine Biodiversity: A Dive into the Wonders of Ocean Life",
          "content": "This blog post could showcase the incredible diversity of marine life, highlighting various species and ecosystems found in our oceans. It could also discuss the importance of preserving biodiversity for the health of marine ecosystems and human well-being.",
          "pic": "https://images.pexels.com/photos/3716928/pexels-photo-3716928.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          "header": "The Threat of Plastic Pollution: How Plastic Waste Impacts Our Oceans",
          "content": "This post could delve into the environmental consequences of plastic pollution on marine life, ecosystems, and human health. It could also offer practical tips for reducing plastic consumption and waste to mitigate its impact on marine environments.",
          "pic": "https://images.pexels.com/photos/247487/pexels-photo-247487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          "header": "Sustainable Seafood 101: Making Responsible Choices for Our Oceans",
          "content": "This blog post could educate readers about sustainable seafood practices, including the importance of choosing seafood from well-managed fisheries and aquaculture operations. It could also provide guidance on how to identify and purchase sustainably sourced seafood products.",
          "pic": "https://images.pexels.com/photos/3301910/pexels-photo-3301910.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          "header": "Protecting Coral Reefs: Guardians of Marine Biodiversity",
          "content": "Coral reefs are crucial marine ecosystems that support a diverse array of marine life. This post could explore the threats facing coral reefs, such as climate change and ocean acidification, and discuss conservation efforts aimed at protecting these vital habitats.",
          "pic": "https://images.pexels.com/photos/3573103/pexels-photo-3573103.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          "header": "Ocean Acidification: Understanding the Silent Threat to Marine Life",
          "content": "Ocean acidification is a consequence of increased carbon dioxide absorption by the ocean, with significant implications for marine ecosystems. This post could explain the causes and impacts of ocean acidification and highlight the urgent need for global action to address this issue.",
          "pic": "https://images.pexels.com/photos/2889494/pexels-photo-2889494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          "header": "The Role of Marine Protected Areas in Ocean Conservation",
          "content": "Marine Protected Areas (MPAs) play a crucial role in safeguarding marine biodiversity and ecosystems. This post could discuss the benefits of MPAs, showcase successful examples from around the world, and advocate for the expansion of protected areas to achieve SDG 14 targets.",
          "pic": "https://images.pexels.com/photos/162079/dolphin-sea-marine-mammals-wise-162079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          "header": "Plastic-Free Living: Tips for Reducing Plastic Waste and Pollution",
          "content": "This blog post could offer practical advice and strategies for adopting a plastic-free lifestyle, including reducing single-use plastics, choosing eco-friendly alternatives, and advocating for policy changes to combat plastic pollution.",
          "pic": "https://images.pexels.com/photos/3699434/pexels-photo-3699434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          "header": "Empowering Coastal Communities: Sustainable Livelihoods and Ocean Conservation",
          "content": "Coastal communities often depend on marine resources for their livelihoods, making them vulnerable to the impacts of overfishing and environmental degradation. This post could explore sustainable livelihood options for coastal communities and highlight initiatives that promote economic development while conserving marine ecosystems.",
          "pic": "https://images.pexels.com/photos/4552982/pexels-photo-4552982.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          "header": "Youth Action for the Ocean: Inspiring Stories of Young Environmental Activists",
          "content": "Young people around the world are taking action to protect our oceans and address environmental challenges. This post could feature inspiring stories of youth activists and organizations leading efforts to raise awareness, advocate for policy change, and implement community-based conservation projects.",
          "pic": "https://images.pexels.com/photos/306908/pexels-photo-306908.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          "header": "The Blue Economy: Balancing Economic Growth with Ocean Conservation",
          "content": "The concept of the blue economy emphasizes sustainable development that benefits both people and the planet. This post could explore innovative approaches to ocean-based industries, such as sustainable fisheries, renewable energy, and marine tourism, that promote economic growth while ensuring the long-term health of marine ecosystems.",
          "pic": "https://images.pexels.com/photos/3482724/pexels-photo-3482724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
      ]
      
    

    return (
        <div id="blog-main">
            <div id="blogs">
                {   
                    blogSliderExamples.map(({header,content,pic}) => 
                        <BlogCard header={header} content={content} pic={pic}/>
                    )
                }
            </div>
            <div id="blog-nav">
                <i id="before"></i>
                <span id="page">1</span>
                <i id="after"></i>
            </div>
        </div>
    )
}