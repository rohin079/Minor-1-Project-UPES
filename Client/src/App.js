import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import About from './Components/About/AboutUs'
import Events from './Components/Events/Events'
import Feedback from './Components/Feedback/FeedbackForm'
import Login from './Components/Login/Login'


function App() {
  return (
    <Router>
      <Login />
      {/* <Navbar />
      <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/feedback" element={<Feedback />} />
     </Routes>
      
      <Footer /> */}
    </Router>
  );
};

export default App;