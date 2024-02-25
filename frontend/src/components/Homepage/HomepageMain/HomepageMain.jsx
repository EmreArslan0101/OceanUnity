import './style.scss'
import logoWLetters from './icons/logo_w_letters.png'

export default function HomepageMain() {
  const infoCards = [
    [30, 'BEACHES CLEANUP', 'map'],
    [40, 'ENVIRONMENTAL PROJECTS', 'projects'],
    [550, 'MEMBERS FROM ALL OVER THE WORLD', 'getinvolved'],
  ]

  const aboutUsParts = [
    [
      'About Us',
      'OceanUnity is a team of four members who have entered Google\'s Sustainable Development Goals (SDG) competition, focusing on "SDG 14: Life Below Water". This group is dedicated to developing innovative technologies and solutions for the preservation and sustainable management of our oceans.',
    ],
    [
      'Mission',
      "OceanUnity's mission is to utilize the power of technology to protect ocean ecosystems and manage marine resources for a sustainable future. The team aims to reduce ocean pollution, preserve marine biodiversity, and explore the ocean floor sustainably. To achieve this, they intend to develop solutions that integrate technologies such as data analysis, artificial intelligence, and remote sensing to monitor and protect ocean health.",
    ],
    [
      'Vision',
      'OceanUnity envisions shaping the future of our planet through the conservation of healthy ocean ecosystems and the sustainable use of marine resources. The team believes that protecting the oceans is vital not only for marine life but also for human communities, economies, and the global climate. In line with this vision, OceanUnity hopes to initiate a global movement to support ocean conservation efforts and raise awareness in this field.',
    ],
    [
      'Projects and Approaches',
      'OceanUnity develops a range of projects and initiatives aimed at informing, educating, and mobilizing the community on ocean conservation. These include innovative waste management solutions to reduce pollution, artificial intelligence-based species recognition systems to protect marine biodiversity, and the use of satellite technology for ocean health monitoring. They also aim to collaborate with governments, businesses, and civil society organizations to support these efforts and increase awareness of ocean conservation. OceanUnity views technology and innovation as catalysts for developing sustainable solutions to protect our oceans and their treasures. The team is committed to making a significant impact in ocean conservation efforts and leaving a healthier, more sustainable world for future generations.',
    ],
  ]

  const contactLinksConstructorInfos = [
    ['https://www.instagram.com/', 'Instagram'],
    ['https://www.facebook.com/', 'Facebook'],
    ['https://www.linkedin.com/', 'Linkedin'],
    ['https://twitter.com/', 'Twitter / X'],
    ['https://www.youtube.com/', 'Youtube'],
  ]

  const cityList = ["Adana",
  "Adıyaman",
  "Afyonkarahisar",
  "Ağrı",
  "Aksaray",
  "Amasya",
  "Ankara",
  "Antalya",
  "Ardahan",
  "Artvin",
  "Aydın",
  "Balıkesir",
  "Bartın",
  "Batman",
  "Bayburt",
  "Bilecik",
  "Bingöl",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Çanakkale",
  "Çankırı",
  "Çorum",
  "Denizli",
  "Diyarbakır",
  "Düzce",
  "Edirne",
  "Elazığ",
  "Erzincan",
  "Erzurum",
  "Eskişehir",
  "Gaziantep",
  "Giresun",
  "Gümüşhane",
  "Hakkâri",
  "Hatay",
  "Iğdır",
  "Isparta",
  "İstanbul",
  "İzmir",
  "Kahramanmaraş",
  "Karabük",
  "Karaman",
  "Kars",
  "Kastamonu",
  "Kayseri",
  "Kilis",
  "Kırıkkale",
  "Kırklareli",
  "Kırşehir",
  "Kocaeli",
  "Konya",
  "Kütahya",
  "Malatya",
  "Manisa",
  "Mardin",
  "Mersin",
  "Muğla",
  "Muş",
  "Nevşehir",
  "Niğde",
  "Ordu",
  "Osmaniye",
  "Rize",
  "Sakarya",
  "Samsun",
  "Şanlıurfa",
  "Siirt",
  "Sinop",
  "Sivas",
  "Şırnak",
  "Tekirdağ",
  "Tokat",
  "Trabzon",
  "Tunceli",
  "Uşak",
  "Van",
  "Yalova",
  "Yozgat",
  "Zonguldak"];

  return (
    <div id="homepage-main">
      <h2>BE THE CHANGE, HEAL THE PLANET</h2>
      <p>
        Calling all nature enthusiasts and ocean lovers! Our community is
        seeking dedicated volunteers to join us in our future projects focused
        on ocean trash and sustainability. Together, we will organize beach
        cleanups, engage in recycling initiatives, and collaborate with local to
        communites raise awareness about the importance of reducing waste.
      </p>
      <div id="about-us-button-box">
        <a href='#about-us'>About Us</a>
      </div>
      <div id="info-cards-box">
        {infoCards.map(([num, text, href], i) => (
          <div className="info-card" id={'#' + href}>
            <i id={'icon' + (i + 1)}></i>
            <span className="number">{num}</span>
            <span className="text">{text}</span>
            <a
              className="see-details-button"
              href={'/' + text.toLowerCase().split(' ').join('')}
            >
              See Details
            </a>
          </div>
        ))}
        <div id="fast-signup-card">
          <h3>JOIN AS A VOLUNTEER</h3>
          <form
            method="GET"
            action="/signup"
            target="_blank"
            rel="noreferrer"
            id="fast-signup-form"
          > 
            <label htmlFor="name">
              <input type="text" placeholder="Full Name"></input>
            </label>
            <label htmlFor="city">
              <select>
                <option>Choose your city</option>
                {
                  cityList.map(cityName => 
                    <option value={cityName}>{cityName}</option>
                  )
                }
              </select>
            </label>
            <label htmlFor="birthDate">
              <span>Birth Date</span>
              <div id="bd-info-box">
                <input type="number" placeholder="DD" name="bDD"></input>
                <input type="number" placeholder="MM" name="bMM"></input>
                <input type="number" placeholder="YY" name="bYY"></input>
              </div>
            </label>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
      <div id="about-us">
        {aboutUsParts.map(([header, text]) => (
          <>
            {header === 'About Us' ? <h2>About Us</h2> : <h3>{header}</h3>}
            <p>{text}</p>
          </>
        ))}
        <img src={logoWLetters} alt="logo" id="logo-pic"></img>
        <div id="contributed-sdgs-box">
          <h3>SDGs OceanUnity contribute on</h3>
          <div id="sdg-card-box">
            {[4, 13, 14, 15, 17].map((sdg) => (
              <a
                href={'https://sdgs.un.org/goals/goal' + sdg}
                className="sdg-card"
                target="_blank"
                rel="noreferrer"
                title={"SDG "+sdg}
              >
                {'SDG' + sdg}
              </a>
            ))}
          </div>
        </div>
        <div id="contributed-others-box">
          <a
            href="https://sdgs.un.org/"
            target="_blank"
            rel="noreferrer"
            id="sdg-logo"
          >
            SDG Logo with link
          </a>
          <a
            href="https://developers.google.com/"
            target="_blank"
            rel="noreferrer"
            id="google-for-devs-logo"
          >
            Google for Developers Logo with Link
          </a>
        </div>
        <footer id="about-us-footer">
          <div id="logo-w-text">
            <img src={logoWLetters} alt="logo"></img>
            <p>Protecting Our Oceans for a Sustainable Future</p>
          </div>
          <div id="other-links">
            <div className="link-box">
              <a href="#">Homepage</a>
              <a href="#about-us">About Us</a>
              <a href="/signup">Join Our Community</a>
              <a href="/blog">Write on the blog</a>
            </div>
            <div className="link-box">
              <a href="#other-links">
                <b>Help</b>
              </a>
              <a href="/faq">Frequently Asked Questions</a>
              <a href="#contact-info-box">Contact</a>
            </div>
          </div>
          <div id="contact-info-box">
            <pre>
              {
                "Let's Stay in Touch!\nYou can contact us via our social\nmedia accounts!"
              }
            </pre>
            <div id="contact-links">
              {contactLinksConstructorInfos.map(([link, content]) => (
                <a href={link} target="_blank" rel="noreferrer">
                  {content}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
