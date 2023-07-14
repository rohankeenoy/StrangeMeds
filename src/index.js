import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Background from './components/Background';
import NavBar from './components/NavBar';
import LandingPage from './containers/LandingPage';
import HomePage from './containers/HomePage'
import Listen from './containers/Listen'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Background />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/home' element={<HomePage/>}/>
        <Route path="/Listen" element={<Listen/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

