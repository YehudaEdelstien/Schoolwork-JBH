import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import './pico.css'
import './App.css'

import './Components/Login/Login'
import Login from "./Components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/login" replace={true}/>}/>
        <Route path='login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
