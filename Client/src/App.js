import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import About from './Components/About/AboutUs'
import Events from './Components/Events/Events'
// import Footer from './Components/Footer/Footer';
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
    </Router>
  );
};

export default App;