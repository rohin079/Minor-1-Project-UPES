import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;