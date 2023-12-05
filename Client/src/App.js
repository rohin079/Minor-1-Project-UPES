import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom';


//------------------------Importing Components --------------------------

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/AboutUs';
import Events from './Components/Events/Events';
import Feedback from './Components/Feedback/FeedbackForm';
import Login from './Components/Login/Login';
import Alumni from "./Components/AlumniTalk/alumni";
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Gallery from './Components/Gallery/Gallery'
import Resources from "./Components/Resources/Resources";
import Achievements from "./Components/Achievements/Achievements";
//------------------------Importing Msal config----------------------------------

import { MsalProvider, useMsal } from "@azure/msal-react";
import { PublicClientApplication, LogLevel } from "@azure/msal-browser";

//--------------------------------------------------------------------------------

const msalConfig = {
  auth: {
    clientId: "afebdae5-b211-4db7-895a-5dbc3e21b206",
    authority: "https://login.microsoftonline.com/91cc1fb6-1275-4acf-b3ea-c213ec16257b",
    redirectUri: "http://localhost:3000/", // Update this with your redirect URI
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

//-----------------------------------------------------------------------

function App() {
  return (
    <MsalProvider instance={new PublicClientApplication(msalConfig)}>
    <Router>
      <Navbar />
      <Routes>
      
      <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/events" element={<ProtectedRoute><Events /></ProtectedRoute>} />
        <Route path="/gallery" element={<ProtectedRoute><Gallery /></ProtectedRoute>} />
        <Route path="/resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
        <Route path="/feedback" element={<ProtectedRoute><Feedback /></ProtectedRoute>} />
        <Route path="/alumni" element={<ProtectedRoute><Alumni /></ProtectedRoute>} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </Router>
        </MsalProvider>
  );
};

// ---------------------Sign-out component to handle sign-out process-----------------

const SignOut = () => {
  const { instance } = useMsal();

  useEffect(() => {
    instance.logout();
  }, [instance]);

  return (
    <div>
      <h1>Signing Out...</h1>
      <p>Please wait while we sign you out.</p>
      {/* Optionally, you can add a link to redirect users back to the homepage */}
      <Link to="/home">Go to Homepage</Link>
    </div>
  );
};

//----------------------------------------------------------------------------------

export default App;