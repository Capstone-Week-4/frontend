import LoadingPage from "./pages/LoadingPage";
import GoingPage from "./pages/GoingPage";
import CameraPage from "./pages/CameraPage";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import React, { useState } from 'react';
import LoginPage from "./pages/LoginPage";


function App() {

  const [isSwitching, setIsSwitching] = useState('warp'); // default state

return (

  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {
      
    <LoadingPage/>
    } />
  <Route path="/going" element={<GoingPage isSwitching={isSwitching} setIsSwitching={setIsSwitching} />} />
  <Route path="/camera" element={<CameraPage isSwitching={isSwitching} setIsSwitching={setIsSwitching} />} />
  <Route path="/login" element={<LoginPage isSwitching={isSwitching} setIsSwitching={setIsSwitching} />} />

  </Routes>
  
  </BrowserRouter>
)


}


export default App;
