/* eslint-disable react/prop-types */
import "./feature.css";

const Feature = ({ title, text }) => (
  <div className="app__feature-container__feature">
    <div className="app__feature-container__feature-title">
      <h4>{title}</h4>
    </div>
    <div className="app__feature-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
