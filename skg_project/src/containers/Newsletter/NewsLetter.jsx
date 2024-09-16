import "./newsletter.css";
import people from "../../assets/people.png";

const NewsLetter = () => {
  return (
    <div className="app__header section__padding" id="newsletter">
      <div className="app__header-content">
        <h2 className="gradient__text">
          Stay Informed: Subscribe to Our Newsletter!
        </h2>
        <p>
          As you explore the captivating streets of Thessaloniki, don’t miss out
          on the exciting events happening around the city! From cultural
          festivals to gastronomic delights, there’s always something happening.
        </p>
        <div className="app__header-content__input">
          <input type="email" placeholder="Your Email Adress" />
          <button type="button">Get Started</button>
        </div>
        <div className="app__header-content__people">
          <img src={people} alt="people" />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
