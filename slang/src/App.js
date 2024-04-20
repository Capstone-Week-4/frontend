import LoadingPage from "./pages/LoadingPage";
import GoingPage from "./pages/GoingPage";
import { Routes, Route, BrowserRouter} from "react-router-dom";


function App() {


return (

  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {
      
    <LoadingPage/>
    } />
    <Route path = "/going" element = {<GoingPage/>} />
  </Routes>
  
  </BrowserRouter>
)


}


export default App;
