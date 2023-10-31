import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
// import Home from './Components/Home/Home'
// import About from './Components/About/AboutUs'
// import Events from './Components/Events/Events'
// import Footer from './Components/Footer/Footer';
import Feedback from './Components/Feedback/FeedbackForm'

function App() {
  return (
    <Router>
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Navbar />
      <Events />
      <Footer /> */}
      <Feedback />
    </Router>
  );
}

export default App;