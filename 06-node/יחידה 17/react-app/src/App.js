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
    user ? setUser(user) : setUser(null);
  }, [])

  if (user === undefined) return <progress></progress>

  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login user={user} setUser={setUser}/>} />
        <Route path='*' element={<Main user={user} setUser={setUser}/>}/>
        <Route index element={<Navigate to="/login" replace={true}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
