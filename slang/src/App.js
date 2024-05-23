import LoadingPage from "./pages/LoadingPage";
import GoingPage from "./pages/GoingPage";
import MainPage from "./pages/MainPage";
import CameraPage from "./pages/CameraPage";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import React, { useState } from 'react';
import LoginPage from "./pages/LoginPage";
import Sports from "./pages/Sports";
import Animals from "./pages/Animals";// login 페이지 라우팅 추가하기 
import Food from "./pages/Food";
import Result from './pages/Result'
import ConvoPage from "./pages/Convo";

function App() {

  const [isSwitching, setIsSwitching] = useState('warp'); // default state

return (

  <BrowserRouter>
  <Routes>
    <Route path = "/landing" element = { <LoadingPage/>} />
  <Route path="/going" element={<GoingPage isSwitching={isSwitching} setIsSwitching={setIsSwitching} />} />
  <Route path="/main" element={<MainPage/>} />
  <Route path="/camera" element={<CameraPage />} />
  <Route path="/" element={<LoginPage />} />
  <Route path="/sports" element={<Sports />} />
  <Route path="/animals" element={<Animals />} />
  <Route path="/food" element={<Food />} />
  <Route path="/convo" element={<ConvoPage />} />
  <Route path="/result" element={<Result />} />

  </Routes>
  
  </BrowserRouter>
)
}

export default App;
