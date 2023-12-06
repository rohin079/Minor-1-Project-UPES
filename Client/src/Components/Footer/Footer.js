import React from 'react';
import "./Footer.css";
// import fb from "../images/insta-logo.png";
// import twitter from "../images/twitter-logo.png";
// import insta from "../images/facebook-logo.png";
// import linkedin from "../images/linkedin-logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer__section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>About Us</h4>
            <a href="/home">
              <p>Home</p>
            </a>
            <a href="/feedback">
              <p>Feedback</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Services</h4>
            <a href="/events">
              <p>Events</p>
            </a>
            <a href="/resources">
              <p>Resources</p>
            </a>
            <a href="/alumni">
              <p>Alumni Talk</p>
            </a>
            <a href="/achievements">
              <p>Achievements</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Partners</h4>
            <a href="/about">
              <a href="#"> <p>UPES</p></a>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Feedback</h4>
            <a href="/resources">
              <a href="#" ><p>Email</p></a>
            </a>
            <a href="/resources">
              <a href="#"><p>Contact Number</p></a> 
            </a>
            <a href="/resources">
              <a href='#'><p>Visit Us</p></a> 
            </a>
          </div>
          <div className="sb__footer-links_div">
          </div>
        </div>
        <hr></hr>

        <div className='sb__footer-below'>
          <div className='sb__footer-copyright'>
            <p>
              @{new Date().getFullYear()} Uni-Connect. All right reserved.
            </p>
          </div>
          <div className='sb__footer-below-links'>
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/terms"><div><p>Privacy</p></div></a>
            <a href="/terms"><div><p>Security</p></div></a>
            <a href="/terms"><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
