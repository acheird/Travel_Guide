import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";
// import love_skg from "../../assets/love_skg.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">{/* <img src={love_skg} /> */}</div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#intro">Why Thessaloniki?</a>
        </li>
        <li className="p__opensans">
          <a href="#what2do">What to Do?</a>
        </li>
        <li className="p__opensans">
          <a href="#blog">Explore</a>
        </li>
        <li className="p__opensans">
          <a href="#book">Show me</a>
        </li>
        <li className="p__opensans">
          <a href="#newsletter">Keep in Touch</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Login / Registration
        </a>
        <div />
        <a href="#book" className="p__opensans">
          Book A Ticket
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <GrFormClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#intro" onClick={() => setToggleMenu(false)}>
                  Why Thessaloniki?
                </a>
              </li>
              <li>
                <a href="#what2do" onClick={() => setToggleMenu(false)}>
                  What to Do?
                </a>
              </li>
              <li>
                <a href="#blog" onClick={() => setToggleMenu(false)}>
                  Explore
                </a>
              </li>
              <li>
                <a href="#book" onClick={() => setToggleMenu(false)}>
                  Show me
                </a>
              </li>
              <li>
                <a href="#newsletter" onClick={() => setToggleMenu(false)}>
                  Keep in Touch
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
