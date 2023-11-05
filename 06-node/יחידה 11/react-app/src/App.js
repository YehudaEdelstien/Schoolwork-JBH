import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'

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
