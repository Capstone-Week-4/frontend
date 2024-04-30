import LoadingPage from "./pages/LoadingPage";
import GoingPage from "./pages/GoingPage";
import MainPage from "./pages/MainPage";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import React, { useState } from 'react';

// login 페이지 라우팅 추가하기 

function App() {

  const [isSwitching, setIsSwitching] = useState('warp'); // default state

return (

  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {
      
    <LoadingPage/>
    } />
  <Route path="/going" element={<GoingPage isSwitching={isSwitching} setIsSwitching={setIsSwitching} />} />

  <Route path="/main" element={<MainPage/>} />

  
  </Routes>
  
  </BrowserRouter>
)


}


export default App;
