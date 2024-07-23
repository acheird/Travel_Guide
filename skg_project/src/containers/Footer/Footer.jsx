import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./footer.css";

const Footer = () => {
  return (
    <div className="app__footer">
      <p className="p__opensans">
        &quot;You don't need magic to disappear, all you need is a
        destination!&quot;
      </p>
      <div className="app__footer-links_icons">
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">2024 lala. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
