import './Home.css';
import React, { } from 'react';
import image from './giphy.gif';
import { Button } from '@mui/material';
import { useMsal } from "@azure/msal-react";
import { NavLink } from 'react-router-dom';

const Home = (props) => {
  const { instance } = useMsal();

  const [text] = React.useState('Connect with your mates!!');

  // const iRef = useRef(0);

  const handleSignOut = () => {
    instance.logout();
  };

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "rgb(23, 23, 65)", height: "90vh", paddingTop:"8%" }}>
        <div className="row" style={{ color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}`, width: "100%" }}>
          <div className="col-md-6">
            {/* Align the image to the left */}
            <img src="http://4.bp.blogspot.com/-v4Bzaj5eoAI/UXipBY1J10I/AAAAAAAAAL0/DtwOAG6V4YQ/s1600/BzB_Animated_WELCOME1_.gif" style={{ width: "500px" }} alt="" />
          </div>
          <div className="col-md-6">
            {/* Align the rest of the elements to the right */}
            <p className="respo changing-text" style={{ fontSize: "1.7rem", fontWeight: "bold", textAlign: "center", justifyContent: "center", marginLeft: "30px", color: "white" }}>{text} </p>
            <p style={{ fontSize: "1rem", marginLeft: "10px", color: "white" }}>"Embark on a Journey of Connection: Your Gateway to All Things College, from Campus Buzz to Lifelong Bonds. Explore the vibrant happenings of your academic life today, and discover a bridge to connect with cherished alumni stories that shape your tomorrow." </p>
            <div className="d-flex justify-content-center">
              <NavLink to="/about" style={{ textDecoration: 'none' }}>
                <Button
                  className="sign-out-button" // Use the same class name as the "Sign Out" button
                  variant="contained"
                  color="secondary"
                  style={{
                    textTransform: "none",
                    borderRadius: "20px",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1.1rem"
                  }}
                >
                  About Us
                </Button>
              </NavLink>
              <NavLink to="" style={{ textDecoration: 'none' }}>
                <Button
                  className="sign-out-button" // Use the same class name as the "Sign Out" button
                  onClick={handleSignOut}
                  variant="contained"
                  color="secondary"
                  style={{
                    marginLeft: "20px",
                    textTransform: "none",
                    borderRadius: "20px",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1.1rem"
                  }}
                >
                  Sign Out
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );  
};

export default Home;
