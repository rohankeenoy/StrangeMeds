import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Background from './components/Background';
import NavBar from './components/NavBar';
import LandingPage from './containers/LandingPage';
import HomePage from './containers/HomePage';
import Listen from './containers/Listen';
import Shows from './containers/Shows';
import Gallary from './containers/Gallary';
import LoadingScreen from './components/Loading'; // Import the LoadingScreen component
import './components/logos'
import Contact from './containers/Contact'

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Listen for the 'load' event on the window object
    window.addEventListener('load', () => {
      setIsLoading(false); // Update the loading state to false when the full page is loaded
    });
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Background />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Listen" element={<Listen />} />
        <Route path="/Shows" element={<Shows />} />
        <Route path="/Gallery" element={<Gallary />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
