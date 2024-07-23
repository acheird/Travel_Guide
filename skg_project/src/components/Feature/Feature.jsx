/* eslint-disable react/prop-types */
import "./feature.css";

const Feature = ({ title, text }) => (
  <div className="app__feature-container__feature">
    <div className="app__feature-container__feature-title">
      <h3>{title}</h3>
    </div>
    <div className="app__feature-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
