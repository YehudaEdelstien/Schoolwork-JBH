import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { useEffect, useState } from "react";

import './pico.css'
import './App.css'

import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main"

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) setUser(user);
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/login" replace={true}/>}/>
        <Route path='login' element={<Login user={user} setUser={setUser}/>} />
        <Route path='*' element={<Main user={user} setUser={setUser}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
