import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Background from './components/Background';
import NavBar from './components/NavBar';
import LandingPage from './containers/LandingPage';
import HomePage from './containers/HomePage'
import Listen from './containers/Listen'
import Shows from './containers/Shows'
import Gallary from './containers/Gallary'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Background />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/home' element={<HomePage/>}/>
        <Route path="/Listen" element={<Listen/>}/>
        <Route path ="/Shows" element={<Shows/>}/>
        <Route path = "/Gallery" element = {<Gallary/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

