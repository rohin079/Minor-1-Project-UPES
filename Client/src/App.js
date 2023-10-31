import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import About from './Components/About/AboutUs'
import Events from './Components/Events/Events'
import Feedback from './Components/Feedback/FeedbackForm'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/feedback" element={<Feedback />} />
     </Routes>
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Navbar />
      <Events />
      <Footer /> */}
      {/* <Feedback /> */}
    </Router>
  );
};

export default App;