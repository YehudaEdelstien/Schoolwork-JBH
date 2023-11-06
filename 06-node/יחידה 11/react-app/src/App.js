import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'

import './pico.css'

function App() {
  return (
    <BrowserRouter>
    <header>
        <NavBar />
    </header>
      <Routes>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
