import './Home.css';
import React, { } from 'react';
import image from './giphy.gif';
import { Button } from '@mui/material';
import { useMsal } from "@azure/msal-react";
import { NavLink } from 'react-router-dom';

const Home = (props) => {
  const { instance } = useMsal();

  const [text] = React.useState('Connect with you mates!!');

  // const iRef = useRef(0);

  const handleSignOut = () => {
    instance.logout();
  };

  return (
    <>
      <div style={{ height: "100vh" }}>
        <div className="container-fluid">
          <div className="row" style={{ color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}` }}>
            <div className="col-md-5 ps-5">
              <h1 className="display-3 pt-5 mt-5 ps-5"><span style={{ color: "#9C27B0" }}>hi, </span>Welcome!</h1>
              <p className="ps-5 respo changing-text" style={{ fontSize: "1.7rem", fontWeight: "bold", marginLeft: "80px" }}>{text} </p>
              <p className="ps-5 mt-3" style={{ fontSize: "1rem" }}>"Embark on a Journey of Connection: Your Gateway to All Things College, from Campus Buzz to Lifelong Bonds. Explore the vibrant happenings of your academic life today, and discover a bridge to connect with cherished alumni stories that shape your tomorrow." </p>
              <div className="d-flex justify-content-center">
                {/* Use the same className for both buttons */}
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
            <div className="col-md-7 pt-5 d-flex flex-column align-items-center">
              <img className="img-fluid" style={{ width: "25%" }} src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
