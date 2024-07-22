import skg from "../assets/skg.png";
import "./about.css";

const About = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={skg} alt="skg" />
    </div>
    <div className="app__wrapper_info app__about-content">
      <h1 className="headtext__cormorant">About Thessaloniki</h1>

      <div className="app__about-content">
        <p>
          Greece’s second-largest city, nestled on the northern shores of the
          Aegean Sea, is a captivating blend of ancient history and modern
          vibrancy. Its rich past unfolds through archaeological treasures like
          the 7th-century Church of Agios Dimitrios and the 6th-century Agia
          Sofia. These ancient sites whisper tales of empires, saints, and
          Byzantine splendor.{" "}
        </p>

        <p>But Thessaloniki isn’t just a living museum.</p>
        <p>It pulses with life.</p>
        <p>
          Wander its labyrinthine streets, where colorful buildings house
          bustling markets, charming cafés, and hidden courtyards. Gastronomic
          delights await at every corner—try “bougatsa” pastries or savor street
          food while soaking in the lively atmosphere. As the sun sets,
          Thessaloniki transforms. Its vibrant nightlife spills onto waterfront
          promenades, where locals and visitors alike gather to enjoy seafront
          views. Lively bars, tavernas, and live music venues beckon, creating
          an electric energy that lingers long into the night.{" "}
        </p>

        <p>
          Use Thessaloniki as your base for exploration. Day trips lead to
          nearby gems like Pella and Vergina, where ancient Macedonian history
          comes alive. Whether you’re a history enthusiast, a food lover, or
          simply seeking vibrant experiences, Thessaloniki won’t disappoint.
          It’s a city where past and present intertwine, inviting you to
          explore, indulge, and create memories.
        </p>
      </div>
    </div>
  </div>
);

export default About;
