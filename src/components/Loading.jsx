// components/LoadingScreen.js
import React from 'react';

const LoadingScreen = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', zIndex: '999'}}>
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingScreen;
