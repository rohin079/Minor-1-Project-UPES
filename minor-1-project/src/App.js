import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import About from './Components/About/AboutUs'
import Events from './Components/Events/Events'
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <Router>
      <Home />
      {/* <About /> */}
      {/* <Navbar />
      <Events />
      <Footer /> */}
    </Router>
  );
}

export default App;