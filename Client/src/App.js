import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import About from './Components/About/AboutUs'
import Events from './Components/Events/Events'
import { BrowserRouter as Router } from 'react-router-dom';
import Feedback from './Components/Feedback/FeedbackForm'


import Feedback from './Components/Feedback/FeedbackForm'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      
      <Route path="/home" element={<Home />} />
      <Route path="/about" elements={<About />} />
      <Route path="/events" elements={<Events />} />
      <Route path="/feedback" elements={<Feedback />} />
     </Routes>
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Navbar />
      <Events />
      <Footer /> */}
      <Feedback />
    </Router>
  );
};

export default App;