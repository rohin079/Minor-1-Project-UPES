import React from "react";
import './AboutUs.css';
import Images from "./about1.png";



const AboutUs = (props) => {
    return (
      <div className={`about-us ${props.theme === 'dark' ? 'dark-mode' : ''}`} style={{height:"100vh"}}>
        <section className={`about-us ${props.theme === 'dark' ? 'dark-mode' : ''}`} style={{fontFamily:"'Poppins', sans-serif"}}>
        <div className="about" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <div className="text" style={{ textAlign: 'center', maxWidth: '800px', width: '100%', marginTop:"20px" }}>
    <h2 className="heading" style={{ color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}` }}>About Us</h2>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={Images} alt="About Us" className="pic" style={{ width:"300px"}} />
      <div>
        <h1>UNI-Connect</h1>
        <p className="paratext" style={{ color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}`, textAlign: 'justify', width:'500px' }}>
          "Hello, we are a group of enthusiastic third-year students currently pursuing our Bachelor of Technology in Computer Science and Engineering at UPES. With a shared passion for DevOps, we embarked on an exciting journey to create Uni-Connect, a platform designed to bridge the gap between students and faculty, making educational resources readily accessible. Our platform is more than just a repository; it's a hub for information on all college events, bringing the campus experience to your fingertips with a single click. We understand the value of mentorship, which is why we're dedicated to offering you the opportunity to hear from esteemed alumni, connecting the past with the present. At Uni-Connect, we're not just building a platform; we're shaping a community where learning, sharing, and networking thrive."
        </p>
      </div>
    </div>
    <div className="data">
      <a href="/home" className="hire">Try Us</a>
    </div>
  </div>
</div>

        </section>
      </div>
    );
  };
  export default AboutUs;