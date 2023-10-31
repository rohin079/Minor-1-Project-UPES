import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import About from './Components/About/AboutUs'
import Events from './Components/Events/Events'
import Feedback from './Components/Feedback/FeedbackForm'
import Alumni from './Components/AlumniTalk/alumni'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/feedbackform" element={<Feedback />} />
      <Route path='/alumnitalk' element={<Alumni />} />
     </Routes>
    </Router>
  );
};

export default App;