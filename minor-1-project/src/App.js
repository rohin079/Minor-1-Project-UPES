import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/Events/Events'

function App() {
  return (
    <Router>
      <Navbar />
      <About />
    </Router>
  );
}

export default App;