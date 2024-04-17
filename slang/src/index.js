import React, { Suspense, useRef, useEffect, useState }from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './flower_logo4.png'
import { Canvas } from '@react-three/fiber'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PositionalAudio } from '@react-three/drei'





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header className = "App-header">
      <img src={logo} alt="alt here" style = {{ width: '150px', height: '150px' }} />

    </header>
    
    <Canvas>
    <App />
    </Canvas>
  </React.StrictMode>





);


reportWebVitals();
