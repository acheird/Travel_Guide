import "./what2do.css";
import { Feature } from "../../components";

const What2do = () => {
  return (
    <div className="app__what2do section__margin" id="what2do">
      <div className="app__what2do-feature">
        <div>
          <h1>Why Thessaloniki</h1>
        </div>
        <div className="app__what2do-feature-p">
          <p>
            Whether you're a history enthusiast, a food lover, or seeking
            vibrant experiences, Thessaloniki won't disappoint!
          </p>
        </div>
      </div>
      <div className="app__what2do-heading">
        <h2 className="gradient__text">
          The possibilities are beyond your imagination
        </h2>

        <h2 className="gradient__text">Explore The City</h2>
      </div>
      <div className="app__what2do-container">
        <Feature
          title="Rich History and Ancient Sites"
          text="Explore the 7th-century Church of Agios Dimitrios and the 6th-century Agia Sofia. These archaeological gems provide glimpses into Thessaloniki's past."
        />
        <Feature
          title="Gastronomic Delights"
          text="Indulge in local cuisine! Try bougatsa pastries, a Thessaloniki specialty, and savor street food from bustling markets."
        />
        <Feature
          title="Lively Nightlife"
          text="Thessaloniki comes alive after dark. Discover lively bars, tavernas, and live music venues."
        />
        <Feature
          title="Stunning Coastlines"
          text="Enjoy the city's beautiful seafront. Walk along the promenade, take in Aegean Sea views, and relax by the water."
        />
        <Feature
          title="Day Trips"
          text="Use Thessaloniki as a base to explore nearby wineries and coastal towns. Pella and Vergina are excellent options."
        />
      </div>
    </div>
  );
};

export default What2do;
