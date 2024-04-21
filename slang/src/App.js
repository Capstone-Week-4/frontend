import LoadingPage from "./pages/LoadingPage";
import GoingPage from "./pages/GoingPage";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import React, { useState } from 'react';


function App() {

  const [isSwitching, setIsSwitching] = useState('warp'); // default state

return (

  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {
      
    <LoadingPage/>
    } />
  <Route path="/going" element={<GoingPage isSwitching={isSwitching} setIsSwitching={setIsSwitching} />} />
  </Routes>
  
  </BrowserRouter>
)


}


export default App;
