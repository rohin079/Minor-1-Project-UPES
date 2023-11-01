import React, { useEffect, useState } from 'react'
import "./Gallery.css";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import img from "./Images/hackathon.jpeg";
import img2 from "./Images/marathon.jpeg";
import img3 from "./Images/mark.jpeg";
import img4 from "./Images/nss.jpeg";
import img5 from './Images/runway.jpeg';
import img6 from "./Images/shakti.jpeg"

const Gallery = () => {
  return (
    <>
    <h1 className="text-center" >UPES Gallery</h1>
    <div className="d-flex flex-wrap justify-content-center my-3" style={{ paddingBottom: '150px'}}>
        <div className="card-container">
          <div className="cards-item">
            <img src={img6} alt="items" />
            <div className="intro">
              <Button
                className="button"
                size="small"
                style={{
                  textTransform: 'none',
                  fontFamily: "'Poppins', sans-serif",
                  marginLeft: '75px',
                  borderRadius: '10px',
                }}
                variant="contained"
                color="secondary">
                See Details
              </Button>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="cards-item">
            <img src={img} alt="items" />
            <div className="intro">
              <Button
                className="button"
                size="small"
                style={{
                  textTransform: 'none',
                  fontFamily: "'Poppins', sans-serif",
                  marginLeft: '75px',
                  borderRadius: '10px',
                }}
                variant="contained"
                color="secondary">
                See Details
              </Button>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="cards-item">
            <img src={img2} alt="items" />
            <div className="intro">
              <Button
                className="button"
                size="small"
                style={{
                  textTransform: 'none',
                  fontFamily: "'Poppins', sans-serif",
                  marginLeft: '75px',
                  borderRadius: '10px',
                }}
                variant="contained"
                color="secondary">
                See Details
              </Button>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="cards-item">
            <img src={img3} alt="items" />
            <div className="intro">
              <Button
                className="button"
                size="small"
                style={{
                  textTransform: 'none',
                  fontFamily: "'Poppins', sans-serif",
                  marginLeft: '75px',
                  borderRadius: '10px',
                }}
                variant="contained"
                color="secondary">
                See Details
              </Button>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="cards-item">
            <img src={img4} alt="items" />
            <div className="intro">
              <Button
                className="button"
                size="small"
                style={{
                  textTransform: 'none',
                  fontFamily: "'Poppins', sans-serif",
                  marginLeft: '75px',
                  borderRadius: '10px',
                }}
                variant="contained"
                color="secondary">
                See Details
              </Button>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="cards-item">
            <img src={img5} alt="items" />
            <div className="intro">
              <Button
                className="button"
                size="small"
                style={{
                  textTransform: 'none',
                  fontFamily: "'Poppins', sans-serif",
                  marginLeft: '75px',
                  borderRadius: '10px',
                }}
                variant="contained"
                color="secondary">
                See Details
              </Button>
            </div>
          </div>
        </div>
      
    </div>
  </>
  );
};

export default Gallery;