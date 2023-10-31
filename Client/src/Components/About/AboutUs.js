import React from "react";
import './AboutUs.css';
import Images from "./about1.png";



const AboutUs = (props) => {
    return (
      <div className={`about-us ${props.theme === 'dark' ? 'dark-mode' : ''}`}>
        <section className={`about-us ${props.theme === 'dark' ? 'dark-mode' : ''}`} style={{fontFamily:"'Poppins', sans-serif"}}>
          <div className="about">
          <img src={Images} alt="About Us" className="pic" />
            <div className="text">
              <h2 className="heading" style={{color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}`}}>About Us</h2>
               <h5 style={{color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}`}}>At our <span>uni-Connect</span></h5>
              <p className="paratext" style={{color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}`}}>"Hello, we are a group of enthusiastic third-year students currently pursuing our Bachelor of Technology in Computer Science and Engineering at UPES. With a shared passion for DevOps, we embarked on an exciting journey to create Uni-Connect, a platform designed to bridge the gap between students and faculty, making educational resources readily accessible. Our platform is more than just a repository; it's a hub for information on all college events, bringing the campus experience to your fingertips with a single click. We understand the value of mentorship, which is why we're dedicated to offering you the opportunity to hear from esteemed alumni, connecting the past with the present. At Uni-Connect, we're not just building a platform; we're shaping a community where learning, sharing, and networking thrive."
              </p>
              <div className="data">
              <a href="/login" className="hire">Try Us</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  export default AboutUs;